import { useState, useEffect, useCallback } from "react";

export interface QuizSession {
  id: string;
  chapterId: number | null;
  score: number;
  total: number;
  timestamp: number;
  type: "chapter" | "comprehensive";
}

export interface Progress {
  sessions: QuizSession[];
  studiedChapters: Set<number>;
}

const SESSIONS_KEY = "hebrews_quiz_sessions";
const STUDIED_KEY = "hebrews_studied_chapters";
const STREAK_KEY = "hebrews_streak";

function loadSessions(): QuizSession[] {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function loadStudiedChapters(): number[] {
  try {
    const raw = localStorage.getItem(STUDIED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function loadStreak(): { count: number; lastDate: string } {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    return raw ? JSON.parse(raw) : { count: 0, lastDate: "" };
  } catch {
    return { count: 0, lastDate: "" };
  }
}

function updateStreak(): number {
  const today = new Date().toDateString();
  const streak = loadStreak();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  let newCount = streak.count;
  if (streak.lastDate === today) {
    newCount = streak.count;
  } else if (streak.lastDate === yesterday) {
    newCount = streak.count + 1;
  } else {
    newCount = 1;
  }

  localStorage.setItem(STREAK_KEY, JSON.stringify({ count: newCount, lastDate: today }));
  return newCount;
}

export function useProgress() {
  const [sessions, setSessions] = useState<QuizSession[]>(loadSessions);
  const [studiedChapters, setStudiedChapters] = useState<number[]>(loadStudiedChapters);
  const [streak, setStreak] = useState<number>(loadStreak().count);

  useEffect(() => {
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    localStorage.setItem(STUDIED_KEY, JSON.stringify(studiedChapters));
  }, [studiedChapters]);

  const addSession = useCallback((session: QuizSession) => {
    setSessions((prev) => [...prev, session]);
    const newStreak = updateStreak();
    setStreak(newStreak);
  }, []);

  const markChapterStudied = useCallback((chapterId: number) => {
    setStudiedChapters((prev) => {
      if (prev.includes(chapterId)) return prev;
      return [...prev, chapterId];
    });
  }, []);

  const getChapterBestScore = useCallback(
    (chapterId: number): QuizSession | null => {
      const chapterSessions = sessions.filter((s) => s.chapterId === chapterId);
      if (chapterSessions.length === 0) return null;
      return chapterSessions.reduce((best, s) =>
        s.score / s.total > best.score / best.total ? s : best
      );
    },
    [sessions]
  );

  const getChapterSessionCount = useCallback(
    (chapterId: number): number => {
      return sessions.filter((s) => s.chapterId === chapterId).length;
    },
    [sessions]
  );

  const overallStats = {
    totalSessions: sessions.length,
    averageScore:
      sessions.length > 0
        ? Math.round(
            (sessions.reduce((sum, s) => sum + s.score / s.total, 0) / sessions.length) * 100
          )
        : 0,
    bestScore:
      sessions.length > 0
        ? Math.round(Math.max(...sessions.map((s) => s.score / s.total)) * 100)
        : 0,
    studiedCount: studiedChapters.length,
    streak,
  };

  const clearAllProgress = useCallback(() => {
    localStorage.removeItem(SESSIONS_KEY);
    localStorage.removeItem(STUDIED_KEY);
    localStorage.removeItem(STREAK_KEY);
    setSessions([]);
    setStudiedChapters([]);
    setStreak(0);
  }, []);

  return {
    sessions,
    studiedChapters,
    streak,
    addSession,
    markChapterStudied,
    getChapterBestScore,
    getChapterSessionCount,
    overallStats,
    clearAllProgress,
  };
}
