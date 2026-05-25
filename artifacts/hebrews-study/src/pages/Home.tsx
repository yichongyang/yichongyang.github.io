import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight, Trophy, Flame, Target } from "lucide-react";
import { chapters } from "@/data/content";
import { useProgress } from "@/hooks/useProgress";

export default function Home() {
  const [, setLocation] = useLocation();
  const { studiedChapters, getChapterBestScore, overallStats } = useProgress();

  const totalChapters = chapters.length;
  const completedChapters = studiedChapters.length;
  const overallProgress = Math.round((completedChapters / totalChapters) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(224 55% 28%) 0%, hsl(224 55% 38%) 60%, hsl(38 70% 50%) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative px-5 pt-14 pb-10 text-white max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 opacity-80" />
              <span className="text-sm font-medium opacity-80 tracking-wide">查经学习</span>
            </div>
            <h1 className="text-3xl font-serif font-bold leading-tight mb-2">希伯来书</h1>
            <p className="text-base opacity-80 mb-1">第一章 至 第六章</p>
            <p className="text-sm opacity-60 italic font-serif leading-relaxed mt-3">
              「神的道是活泼的，是有功效的」
            </p>
            <p className="text-xs opacity-50 mt-1">— 希伯来书 4:12</p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <div className="flex justify-between text-xs opacity-75 mb-2">
              <span>学习进度</span>
              <span>{overallProgress}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: "hsl(38 80% 60%)" }}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <div className="text-center">
                <p className="text-lg font-bold">{completedChapters}</p>
                <p className="text-xs opacity-60">已学章节</p>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <p className="text-lg font-bold">{overallStats.totalSessions}</p>
                <p className="text-xs opacity-60">测验次数</p>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <p className="text-lg font-bold">{overallStats.averageScore}%</p>
                <p className="text-xs opacity-60">平均分数</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pb-24">
        {/* Stats row */}
        {overallStats.totalSessions > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3 mt-5 mb-2"
          >
            {overallStats.streak > 0 && (
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 flex-1">
                <Flame className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <p className="text-xs text-amber-700 font-medium">{overallStats.streak} 天连续</p>
                  <p className="text-xs text-amber-500">学习连续记录</p>
                </div>
              </div>
            )}
            {overallStats.bestScore > 0 && (
              <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-2 flex-1">
                <Trophy className="w-4 h-4 text-indigo-500 shrink-0" />
                <div>
                  <p className="text-xs text-indigo-700 font-medium">{overallStats.bestScore}%</p>
                  <p className="text-xs text-indigo-400">最高分数</p>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Chapter List */}
        <div className="mt-5">
          <h2 className="text-base font-semibold text-foreground mb-3">章节学习</h2>
          <div className="space-y-3">
            {chapters.map((chapter, index) => {
              const isStudied = studiedChapters.includes(chapter.id);
              const bestSession = getChapterBestScore(chapter.id);
              const bestPct = bestSession
                ? Math.round((bestSession.score / bestSession.total) * 100)
                : null;

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.07 }}
                  onClick={() => setLocation(`/chapter/${chapter.id}`)}
                  className="bg-card rounded-2xl border border-card-border shadow-sm p-4 flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform"
                  data-testid={`chapter-card-${chapter.id}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-serif font-bold text-lg"
                    style={{
                      background: isStudied
                        ? "hsl(224 55% 32%)"
                        : "hsl(222 20% 93%)",
                      color: isStudied ? "white" : "hsl(222 45% 35%)",
                    }}
                  >
                    {chapter.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm text-foreground">{chapter.title}</p>
                      {isStudied && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          已学
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{chapter.theme}</p>
                    {bestPct !== null && (
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${bestPct}%`,
                              background:
                                bestPct >= 90
                                  ? "hsl(158 55% 40%)"
                                  : bestPct >= 70
                                  ? "hsl(224 55% 45%)"
                                  : bestPct >= 50
                                  ? "hsl(38 80% 55%)"
                                  : "hsl(0 68% 55%)",
                            }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{bestPct}%</span>
                      </div>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Comprehensive Quiz */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-5"
        >
          <h2 className="text-base font-semibold text-foreground mb-3">综合测验</h2>
          <div
            onClick={() => setLocation("/quiz/comprehensive")}
            className="relative overflow-hidden rounded-2xl p-5 cursor-pointer active:scale-[0.98] transition-transform"
            style={{
              background: "linear-gradient(135deg, hsl(224 55% 30%) 0%, hsl(224 55% 42%) 100%)",
            }}
            data-testid="button-comprehensive-quiz"
          >
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10">
              <Target className="w-20 h-20 text-white" />
            </div>
            <p className="text-white font-semibold text-base">综合测验</p>
            <p className="text-white/70 text-xs mt-1">涵盖第1-6章 · 30道混合题</p>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 text-white text-xs px-3 py-1.5 rounded-full">
              <span>开始测验</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </motion.div>

        {/* Progress Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4"
        >
          <div
            onClick={() => setLocation("/progress")}
            className="flex items-center justify-between bg-card rounded-2xl border border-card-border px-4 py-3 cursor-pointer"
            data-testid="link-progress"
          >
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">查看学习进度</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
