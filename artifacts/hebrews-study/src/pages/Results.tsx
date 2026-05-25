import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Home, RotateCcw, Trophy } from "lucide-react";
import { type Question } from "@/data/content";
import { type QuizSession } from "@/hooks/useProgress";
import { chapters } from "@/data/content";

interface StoredResult {
  session: QuizSession;
  questions: Question[];
  answers: { selected: number | boolean | string | null; submitted: boolean; correct: boolean }[];
}

function getRating(pct: number): { label: string; color: string; message: string } {
  if (pct >= 90) {
    return {
      label: "优秀",
      color: "hsl(158 55% 40%)",
      message: "你对希伯来书掌握得非常出色！愿神的话语继续在你心中生根！",
    };
  } else if (pct >= 70) {
    return {
      label: "良好",
      color: "hsl(224 55% 40%)",
      message: "你对希伯来书有很好的理解！继续保持，越学越深！",
    };
  } else if (pct >= 50) {
    return {
      label: "一般",
      color: "hsl(38 80% 50%)",
      message: "继续努力，温习经文会有帮助！神的道必不徒然返回！",
    };
  } else {
    return {
      label: "需要复习",
      color: "hsl(0 68% 51%)",
      message: "建议回顾相关章节，加强学习！每次学习都是成长的机会！",
    };
  }
}

function getTypeLabel(type: string) {
  if (type === "multiple-choice") return "多选";
  if (type === "true-false") return "判断";
  return "填空";
}

export default function Results() {
  const params = useParams<{ sessionId: string }>();
  const [, setLocation] = useLocation();

  let stored: StoredResult | null = null;
  try {
    const raw = localStorage.getItem(`quiz_result_${params.sessionId}`);
    if (raw) stored = JSON.parse(raw);
  } catch {
    stored = null;
  }

  if (!stored) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <p className="text-muted-foreground mb-4">结果未找到</p>
          <button
            onClick={() => setLocation("/")}
            className="text-primary text-sm underline"
          >
            返回主页
          </button>
        </div>
      </div>
    );
  }

  const { session, questions, answers } = stored;
  const pct = Math.round((session.score / session.total) * 100);
  const rating = getRating(pct);

  const chapterLabel =
    session.chapterId === null
      ? "综合测验"
      : `${chapters.find((c) => c.id === session.chapterId)?.title ?? `第${session.chapterId}章`} 测验`;

  const retryPath =
    session.chapterId === null ? "/quiz/comprehensive" : `/quiz/${session.chapterId}`;

  return (
    <div className="min-h-screen bg-background pb-10">
      {/* Score Card */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(224 55% 26%) 0%, hsl(224 55% 38%) 100%)",
        }}
      >
        <div className="max-w-lg mx-auto px-5 pt-14 pb-10 text-white text-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div
              className="w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg"
              style={{ background: rating.color }}
            >
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm opacity-70 mb-1">{chapterLabel}</p>
            <h1 className="text-5xl font-bold font-serif mb-1">{pct}%</h1>
            <p className="text-sm opacity-70">
              {session.score} / {session.total} 题答对
            </p>
            <div
              className="inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-semibold text-white"
              style={{ background: rating.color }}
            >
              {rating.label}
            </div>
            <p className="text-sm text-white/70 mt-4 leading-relaxed italic font-serif">
              {rating.message}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 mt-6">
        {/* Action buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setLocation("/")}
            className="flex-1 flex items-center justify-center gap-2 bg-card border border-card-border rounded-2xl py-3.5 text-sm font-medium text-foreground"
            data-testid="button-home"
          >
            <Home className="w-4 h-4" />
            <span>回到主页</span>
          </button>
          <button
            onClick={() => setLocation(retryPath)}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white"
            style={{ background: "hsl(224 55% 35%)" }}
            data-testid="button-retry"
          >
            <RotateCcw className="w-4 h-4" />
            <span>再次测验</span>
          </button>
        </div>

        {/* Question Review */}
        <h2 className="text-sm font-semibold text-foreground mb-3">题目回顾</h2>
        <div className="space-y-3">
          {questions.map((q, idx) => {
            const ans = answers[idx];
            const isCorrect = ans?.correct;

            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                className="bg-card rounded-2xl border border-card-border p-4 shadow-sm"
                data-testid={`review-item-${idx}`}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: "hsl(224 55% 32% / 0.08)",
                          color: "hsl(224 55% 32%)",
                        }}
                      >
                        {getTypeLabel(q.type)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        第{q.chapter}章
                      </span>
                    </div>
                    <p className="text-sm text-foreground leading-snug">{q.question}</p>
                    {!isCorrect && (
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed border-t border-border pt-2">
                        <span className="font-medium text-primary">解析：</span>
                        {q.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
