import { useState, useCallback } from "react";
import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, Lightbulb } from "lucide-react";
import {
  questions,
  getQuestionsByChapter,
  getComprehensiveQuestions,
  checkFillBlankAnswer,
  type Question,
} from "@/data/content";
import { useProgress, type QuizSession } from "@/hooks/useProgress";
import { chapters } from "@/data/content";

function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getQuizQuestions(chapterId: string): Question[] {
  if (chapterId === "comprehensive") {
    return getComprehensiveQuestions(30);
  }
  const id = parseInt(chapterId);
  const all = getQuestionsByChapter(id);
  return shuffleArray(all);
}

type AnswerState = {
  selected: number | boolean | string | null;
  submitted: boolean;
  correct: boolean;
};

function MultipleChoiceQuestion({
  question,
  state,
  onSelect,
}: {
  question: Question;
  state: AnswerState;
  onSelect: (idx: number) => void;
}) {
  const options = question.options ?? [];
  return (
    <div className="space-y-3">
      {options.map((opt, idx) => {
        const isSelected = state.selected === idx;
        const isCorrect = question.answer === idx;
        let bg = "bg-card border-card-border";
        let textColor = "text-foreground";

        if (state.submitted) {
          if (isCorrect) {
            bg = "border-green-400 bg-green-50";
            textColor = "text-green-800";
          } else if (isSelected && !isCorrect) {
            bg = "border-red-300 bg-red-50";
            textColor = "text-red-700";
          } else {
            bg = "bg-muted/50 border-border";
            textColor = "text-muted-foreground";
          }
        } else if (isSelected) {
          bg = "border-primary bg-primary/5";
        }

        return (
          <button
            key={idx}
            onClick={() => !state.submitted && onSelect(idx)}
            disabled={state.submitted}
            className={`w-full text-left rounded-2xl border px-4 py-3.5 flex items-center gap-3 transition-all ${bg} ${
              state.submitted ? "cursor-default" : "cursor-pointer active:scale-[0.98]"
            }`}
            data-testid={`option-${idx}`}
          >
            <span
              className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center text-xs font-bold ${
                state.submitted && isCorrect
                  ? "border-green-500 bg-green-500 text-white"
                  : state.submitted && isSelected && !isCorrect
                  ? "border-red-400 bg-red-400 text-white"
                  : isSelected
                  ? "border-primary bg-primary text-white"
                  : "border-border"
              }`}
            >
              {["A", "B", "C", "D"][idx]}
            </span>
            <span className={`text-sm leading-snug ${textColor}`}>{opt}</span>
            {state.submitted && isCorrect && (
              <CheckCircle className="w-4 h-4 text-green-500 ml-auto shrink-0" />
            )}
            {state.submitted && isSelected && !isCorrect && (
              <XCircle className="w-4 h-4 text-red-400 ml-auto shrink-0" />
            )}
          </button>
        );
      })}
    </div>
  );
}

function TrueFalseQuestion({
  question,
  state,
  onSelect,
}: {
  question: Question;
  state: AnswerState;
  onSelect: (val: boolean) => void;
}) {
  const options: { label: string; value: boolean }[] = [
    { label: "正确", value: true },
    { label: "错误", value: false },
  ];

  return (
    <div className="flex gap-3">
      {options.map(({ label, value }) => {
        const isSelected = state.selected === value;
        const isCorrect = question.answer === value;
        let bg = "bg-card border-card-border";
        let textColor = "text-foreground";

        if (state.submitted) {
          if (isCorrect) {
            bg = "border-green-400 bg-green-50";
            textColor = "text-green-800";
          } else if (isSelected) {
            bg = "border-red-300 bg-red-50";
            textColor = "text-red-700";
          } else {
            bg = "bg-muted/50 border-border";
            textColor = "text-muted-foreground";
          }
        } else if (isSelected) {
          bg = "border-primary bg-primary/5";
        }

        return (
          <button
            key={label}
            onClick={() => !state.submitted && onSelect(value)}
            disabled={state.submitted}
            className={`flex-1 rounded-2xl border py-5 flex flex-col items-center gap-2 transition-all ${bg} ${
              state.submitted ? "cursor-default" : "cursor-pointer active:scale-[0.97]"
            }`}
            data-testid={`button-${value ? "true" : "false"}`}
          >
            {state.submitted && isCorrect && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
            {state.submitted && isSelected && !isCorrect && (
              <XCircle className="w-5 h-5 text-red-400" />
            )}
            {!state.submitted && (
              <span className={`text-2xl ${value ? "text-green-500" : "text-red-400"}`}>
                {value ? "✓" : "✗"}
              </span>
            )}
            <span className={`text-sm font-semibold ${textColor}`}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

function FillBlankQuestion({
  question,
  state,
  onInput,
}: {
  question: Question;
  state: AnswerState;
  onInput: (val: string) => void;
}) {
  const isCorrect = state.submitted && state.correct;
  const isWrong = state.submitted && !state.correct;

  return (
    <div>
      <div className="mb-4 text-xs text-muted-foreground flex items-center gap-1.5">
        <Lightbulb className="w-3.5 h-3.5" />
        <span>提示：{question.hint}</span>
      </div>
      <input
        type="text"
        value={(state.selected as string) ?? ""}
        onChange={(e) => !state.submitted && onInput(e.target.value)}
        disabled={state.submitted}
        placeholder="请填写答案..."
        className={`w-full rounded-2xl border px-4 py-4 text-sm outline-none transition-all ${
          isCorrect
            ? "border-green-400 bg-green-50 text-green-800"
            : isWrong
            ? "border-red-300 bg-red-50 text-red-700"
            : "border-border bg-card text-foreground focus:border-primary"
        }`}
        data-testid="input-fill-blank"
      />
      {state.submitted && (
        <div className={`mt-2 flex items-center gap-2 text-sm ${isCorrect ? "text-green-600" : "text-red-500"}`}>
          {isCorrect ? (
            <><CheckCircle className="w-4 h-4" /><span>正确！</span></>
          ) : (
            <><XCircle className="w-4 h-4" /><span>正确答案：{question.answer as string}</span></>
          )}
        </div>
      )}
    </div>
  );
}

export default function Quiz() {
  const params = useParams<{ chapterId: string }>();
  const [, setLocation] = useLocation();
  const { addSession } = useProgress();
  const chapterId = params.chapterId ?? "comprehensive";

  const [quizQuestions] = useState<Question[]>(() => getQuizQuestions(chapterId));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>(() =>
    Array(quizQuestions.length).fill({ selected: null, submitted: false, correct: false })
  );
  const [sessionId] = useState(() => Math.random().toString(36).slice(2));
  const [direction, setDirection] = useState(1);

  const current = quizQuestions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const isLast = currentIndex === quizQuestions.length - 1;
  const completedCount = answers.filter((a) => a.submitted).length;

  const chapterLabel =
    chapterId === "comprehensive"
      ? "综合测验"
      : `${chapters.find((c) => c.id === parseInt(chapterId))?.title ?? `第${chapterId}章`} 测验`;

  const typeLabel =
    current?.type === "multiple-choice"
      ? "多项选择"
      : current?.type === "true-false"
      ? "判断题"
      : "填空题";

  const updateAnswer = useCallback((update: Partial<AnswerState>) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = { ...next[currentIndex], ...update };
      return next;
    });
  }, [currentIndex]);

  const handleSelect = (val: number | boolean | string) => {
    updateAnswer({ selected: val });
  };

  const handleSubmit = () => {
    if (currentAnswer.selected === null && current.type !== "fill-blank") return;
    if (current.type === "fill-blank" && !(currentAnswer.selected as string)?.trim()) return;

    let correct = false;
    if (current.type === "multiple-choice") {
      correct = currentAnswer.selected === current.answer;
    } else if (current.type === "true-false") {
      correct = currentAnswer.selected === current.answer;
    } else {
      correct = checkFillBlankAnswer(currentAnswer.selected as string, current.answer as string);
    }
    updateAnswer({ submitted: true, correct });
  };

  const handleNext = () => {
    if (isLast) {
      const finalAnswers = [...answers];
      const idx = currentIndex;
      const score = finalAnswers.filter((a) => a.submitted && a.correct).length;
      const total = quizQuestions.length;

      const session: QuizSession = {
        id: sessionId,
        chapterId: chapterId === "comprehensive" ? null : parseInt(chapterId),
        score,
        total,
        timestamp: Date.now(),
        type: chapterId === "comprehensive" ? "comprehensive" : "chapter",
      };
      addSession(session);

      localStorage.setItem(
        `quiz_result_${sessionId}`,
        JSON.stringify({
          session,
          questions: quizQuestions,
          answers: finalAnswers,
        })
      );
      setLocation(`/results/${sessionId}`);
    } else {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
    }
  };

  const canSubmit =
    !currentAnswer.submitted &&
    (current.type === "fill-blank"
      ? !!(currentAnswer.selected as string)?.trim()
      : currentAnswer.selected !== null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div
        className="px-4 pt-12 pb-5"
        style={{ background: "hsl(224 55% 28%)" }}
      >
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => setLocation(chapterId === "comprehensive" ? "/" : `/chapter/${chapterId}`)}
            className="flex items-center gap-1 text-white/60 text-sm mb-5"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>退出测验</span>
          </button>
          <div className="flex items-center justify-between text-white mb-1">
            <p className="text-sm font-medium">{chapterLabel}</p>
            <p className="text-sm text-white/60">
              {currentIndex + 1} / {quizQuestions.length}
            </p>
          </div>
          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden mt-2">
            <motion.div
              animate={{ width: `${((currentIndex + (currentAnswer.submitted ? 1 : 0)) / quizQuestions.length) * 100}%` }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="h-full rounded-full"
              style={{ background: "hsl(38 80% 60%)" }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-white/50">{typeLabel}</span>
            <span className="text-xs text-white/50">
              {completedCount > 0 && `已答 ${completedCount} 题`}
            </span>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-lg mx-auto px-4 pb-36 pt-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.22 }}
            >
              {/* Question text */}
              <div className="mb-5">
                <p className="text-base font-semibold text-foreground leading-relaxed">
                  {current.question}
                </p>
              </div>

              {/* Answer area */}
              {current.type === "multiple-choice" && (
                <MultipleChoiceQuestion
                  question={current}
                  state={currentAnswer}
                  onSelect={handleSelect}
                />
              )}
              {current.type === "true-false" && (
                <TrueFalseQuestion
                  question={current}
                  state={currentAnswer}
                  onSelect={handleSelect}
                />
              )}
              {current.type === "fill-blank" && (
                <FillBlankQuestion
                  question={current}
                  state={currentAnswer}
                  onInput={handleSelect}
                />
              )}

              {/* Explanation */}
              <AnimatePresence>
                {currentAnswer.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 rounded-2xl p-4 border ${
                      currentAnswer.correct
                        ? "bg-green-50 border-green-200"
                        : "bg-amber-50 border-amber-200"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold mb-1 ${
                        currentAnswer.correct ? "text-green-700" : "text-amber-700"
                      }`}
                    >
                      {currentAnswer.correct ? "答得很好！" : "解析"}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        currentAnswer.correct ? "text-green-700" : "text-amber-800"
                      }`}
                    >
                      {current.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-sm border-t border-border">
        <div className="max-w-lg mx-auto">
          {!currentAnswer.submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full py-4 rounded-2xl font-semibold text-base transition-all text-white disabled:opacity-40"
              style={{ background: "linear-gradient(135deg, hsl(224 55% 30%) 0%, hsl(224 55% 42%) 100%)" }}
              data-testid="button-submit"
            >
              确认答案
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-2xl font-semibold text-base text-white transition-all active:scale-[0.98]"
              style={{
                background: isLast
                  ? "linear-gradient(135deg, hsl(38 80% 45%) 0%, hsl(38 80% 58%) 100%)"
                  : "linear-gradient(135deg, hsl(224 55% 30%) 0%, hsl(224 55% 42%) 100%)",
              }}
              data-testid="button-next"
            >
              {isLast ? "查看结果" : "下一题"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
