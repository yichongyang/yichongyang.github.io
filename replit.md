# 希伯来书学习应用 (Hebrews Bible Study App)

A mobile-friendly Chinese-language Bible study app for a church congregation studying the Book of Hebrews chapters 1–6.

## Run & Operate

- `pnpm --filter @workspace/hebrews-study run dev` — run the study app (port auto-assigned)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + shadcn/ui + framer-motion
- Routing: wouter (uses `import.meta.env.BASE_URL` as base)
- State: localStorage (no backend needed)

## Where things live

- `artifacts/hebrews-study/src/data/content.ts` — all chapter content and quiz questions (source of truth)
- `artifacts/hebrews-study/src/pages/` — Home, ChapterStudy, Quiz, Results, Progress
- `artifacts/hebrews-study/src/hooks/useProgress.ts` — localStorage progress/streak tracking
- `artifacts/hebrews-study/src/index.css` — theme (deep navy/gold/cream palette, Noto fonts)
- `artifacts/hebrews-study/vite.config.github.ts` — Vite config for GitHub Pages builds
- `.github/workflows/deploy.yml` — GitHub Actions auto-deploy workflow

## Product

- 6 chapters of Hebrews (chapters 1–6) with key verses, summaries, and bullet points
- 3 quiz types per chapter: multiple choice, true/false, fill-in-the-blank (60+ questions total)
- Score evaluation with encouraging Chinese messages
- Progress tracking with streaks (localStorage)
- Fully mobile-friendly, Chinese-language UI

## Deployment (GitHub Pages)

- **Live URL:** `https://yichongyang.github.io/bible-studies/Hebrews/`
- **Repo:** `https://github.com/yichongyang/yichongyang.github.io`
- **Push command (run in Shell):**
  ```
  git push https://github.com/yichongyang/yichongyang.github.io.git main
  ```
- GitHub CLI is authenticated (`gh auth login` already done) — no token needed
- After pushing, GitHub Actions auto-builds and deploys in ~2 minutes
- Base path is `/bible-studies/Hebrews/` in `vite.config.github.ts`
- Workflow places built files in `_site/bible-studies/Hebrews/` before uploading to Pages

## User preferences

- Chinese-language UI throughout
- Mobile-first design
- No backend — pure frontend with localStorage persistence

## Gotchas

- Never use ASCII double-quote characters `"` inside double-quoted JS strings in `content.ts` — use corner brackets `「」` for inner Chinese quotes instead
- The Replit vite.config.ts requires `PORT` and `BASE_PATH` env vars (Replit-only). The GitHub Pages build uses `vite.config.github.ts` instead
- `@workspace/api-client-react` is listed as a devDependency but not actually used in source
- wouter's `base` prop is set to `import.meta.env.BASE_URL` (trailing slash stripped) — works automatically for both Replit and GitHub Pages
