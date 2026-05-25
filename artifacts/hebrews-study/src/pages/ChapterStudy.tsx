import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, BookMarked, CheckCircle, ChevronRight } from "lucide-react";
import { chapters } from "@/data/content";
import { useProgress } from "@/hooks/useProgress";
import { useEffect } from "react";

export default function ChapterStudy() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const chapterId = parseInt(params.id ?? "1");
  const chapter = chapters.find((c) => c.id === chapterId);
  const { markChapterStudied, studiedChapters } = useProgress();

  useEffect(() => {
    if (chapter) {
      markChapterStudied(chapter.id);
    }
  }, [chapter, markChapterStudied]);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground">章节不存在</p>
          <button
            onClick={() => setLocation("/")}
            className="mt-4 text-primary text-sm underline"
          >
            返回主页
          </button>
        </div>
      </div>
    );
  }

  const isStudied = studiedChapters.includes(chapter.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(224 55% 28%) 0%, hsl(224 55% 40%) 100%)",
        }}
      >
        <div className="max-w-lg mx-auto px-4 pt-12 pb-8 text-white">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-1 text-white/70 text-sm mb-6 hover:text-white transition-colors"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回</span>
          </button>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm opacity-70 mb-1 font-medium">{chapter.title}</p>
            <h1 className="text-2xl font-serif font-bold leading-tight">{chapter.theme}</h1>
            {isStudied && (
              <div className="flex items-center gap-1.5 mt-3 text-xs text-white/70">
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                <span>已完成阅读</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pb-32">
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 bg-card rounded-2xl border border-card-border p-5 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            <BookMarked className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">章节概述</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{chapter.summary}</p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 bg-card rounded-2xl border border-card-border p-5 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-foreground mb-4">核心要点</h2>
          <div className="space-y-3">
            {chapter.keyPoints.map((point, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div
                  className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "hsl(224 55% 35%)" }}
                >
                  {index + 1}
                </div>
                <p className="text-sm text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Verses */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4"
        >
          <h2 className="text-sm font-semibold text-foreground mb-3">关键经文</h2>
          <div className="space-y-3">
            {chapter.keyVerses.map((verse, index) => (
              <div
                key={index}
                className="rounded-2xl border p-4 shadow-sm"
                style={{
                  background: "hsl(224 55% 32% / 0.04)",
                  borderColor: "hsl(224 55% 32% / 0.15)",
                }}
              >
                <p className="text-xs font-medium text-primary mb-2">{verse.reference}</p>
                <p className="verse-text text-sm text-foreground leading-loose">{verse.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation between chapters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 mt-6"
        >
          {chapterId > 1 && (
            <button
              onClick={() => setLocation(`/chapter/${chapterId - 1}`)}
              className="flex-1 flex items-center gap-2 bg-card border border-card-border rounded-xl px-4 py-3 text-sm text-muted-foreground"
              data-testid="button-prev-chapter"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>上一章</span>
            </button>
          )}
          {chapterId < 6 && (
            <button
              onClick={() => setLocation(`/chapter/${chapterId + 1}`)}
              className="flex-1 flex items-center justify-end gap-2 bg-card border border-card-border rounded-xl px-4 py-3 text-sm text-muted-foreground"
              data-testid="button-next-chapter"
            >
              <span>下一章</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      </div>

      {/* Fixed Quiz Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-sm border-t border-border">
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => setLocation(`/quiz/${chapter.id}`)}
            className="w-full py-4 rounded-2xl text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform"
            style={{ background: "linear-gradient(135deg, hsl(224 55% 30%) 0%, hsl(224 55% 42%) 100%)" }}
            data-testid="button-start-quiz"
          >
            开始测验
          </button>
        </div>
      </div>
    </div>
  );
}
