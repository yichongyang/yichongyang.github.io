import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Flame, BookOpen, Target, Trash2 } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { chapters } from "@/data/content";
import { useState } from "react";

export default function Progress() {
  const [, setLocation] = useLocation();
  const {
    sessions,
    studiedChapters,
    streak,
    getChapterBestScore,
    getChapterSessionCount,
    overallStats,
    clearAllProgress,
  } = useProgress();
  const [confirmClear, setConfirmClear] = useState(false);

  const handleClear = () => {
    if (confirmClear) {
      clearAllProgress();
      setConfirmClear(false);
    } else {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Header */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(224 55% 28%) 0%, hsl(224 55% 40%) 100%)" }}
      >
        <div className="max-w-lg mx-auto px-4 pt-12 pb-8 text-white">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-1 text-white/60 text-sm mb-6"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回</span>
          </button>
          <h1 className="text-2xl font-serif font-bold">学习进度</h1>
          <p className="text-sm text-white/60 mt-1">查看你的查经历程</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 mt-5">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-card rounded-2xl border border-card-border p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">测验次数</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{overallStats.totalSessions}</p>
            <p className="text-xs text-muted-foreground mt-0.5">共完成测验</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-card-border p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-muted-foreground">连续学习</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{streak}</p>
            <p className="text-xs text-muted-foreground mt-0.5">天</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-2xl border border-card-border p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-green-500" />
              <span className="text-xs text-muted-foreground">平均分数</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{overallStats.averageScore}%</p>
            <p className="text-xs text-muted-foreground mt-0.5">所有测验平均</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-card-border p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <span className="text-xs text-muted-foreground">已学章节</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{overallStats.studiedCount}</p>
            <p className="text-xs text-muted-foreground mt-0.5">共6章</p>
          </motion.div>
        </div>

        {/* Chapter Progress */}
        <h2 className="text-sm font-semibold text-foreground mb-3">各章进度</h2>
        <div className="space-y-3 mb-6">
          {chapters.map((chapter, index) => {
            const bestSession = getChapterBestScore(chapter.id);
            const sessionCount = getChapterSessionCount(chapter.id);
            const isStudied = studiedChapters.includes(chapter.id);
            const bestPct = bestSession
              ? Math.round((bestSession.score / bestSession.total) * 100)
              : null;

            const barColor =
              bestPct !== null
                ? bestPct >= 90
                  ? "hsl(158 55% 42%)"
                  : bestPct >= 70
                  ? "hsl(224 55% 45%)"
                  : bestPct >= 50
                  ? "hsl(38 80% 55%)"
                  : "hsl(0 68% 51%)"
                : "hsl(222 20% 80%)";

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="bg-card rounded-2xl border border-card-border p-4 shadow-sm"
                data-testid={`progress-chapter-${chapter.id}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: isStudied ? "hsl(224 55% 35%)" : "hsl(222 20% 80%)" }}
                    >
                      {chapter.id}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{chapter.theme}</p>
                      <p className="text-xs text-muted-foreground">
                        {isStudied ? "已学习" : "未学习"}
                        {sessionCount > 0 && ` · 测验${sessionCount}次`}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold" style={{ color: bestPct !== null ? barColor : "hsl(222 20% 70%)" }}>
                    {bestPct !== null ? `${bestPct}%` : "—"}
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: bestPct !== null ? `${bestPct}%` : "0%" }}
                    transition={{ delay: 0.3 + 0.05 * index, duration: 0.6, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: barColor }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Sessions */}
        {sessions.length > 0 && (
          <>
            <h2 className="text-sm font-semibold text-foreground mb-3">最近测验记录</h2>
            <div className="space-y-2 mb-6">
              {[...sessions]
                .sort((a, b) => b.timestamp - a.timestamp)
                .slice(0, 10)
                .map((s, idx) => {
                  const pct = Math.round((s.score / s.total) * 100);
                  const label =
                    s.chapterId === null
                      ? "综合测验"
                      : `第${s.chapterId}章测验`;
                  const date = new Date(s.timestamp).toLocaleDateString("zh-CN", {
                    month: "short",
                    day: "numeric",
                  });
                  return (
                    <div
                      key={s.id + idx}
                      className="flex items-center justify-between bg-card rounded-xl border border-card-border px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground">{date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">{pct}%</p>
                        <p className="text-xs text-muted-foreground">
                          {s.score}/{s.total}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}

        {/* No data state */}
        {sessions.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">还没有测验记录</p>
            <p className="text-xs text-muted-foreground mt-1">完成一次测验后，记录将显示在这里</p>
            <button
              onClick={() => setLocation("/")}
              className="mt-4 text-sm text-primary font-medium"
            >
              开始学习
            </button>
          </div>
        )}

        {/* Clear Data */}
        {sessions.length > 0 && (
          <button
            onClick={handleClear}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm transition-all ${
              confirmClear
                ? "bg-red-500 text-white"
                : "bg-card border border-card-border text-muted-foreground"
            }`}
            data-testid="button-clear-progress"
          >
            <Trash2 className="w-4 h-4" />
            <span>{confirmClear ? "确认清除所有进度" : "清除学习记录"}</span>
          </button>
        )}
      </div>
    </div>
  );
}
