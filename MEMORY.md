# Project Memory: portfolio

## Project Status
Next.js portfolio app development workspace. The repository has been registered and npm dependencies have been installed.

## Current State
- **Build Status**: Success (`npm run build` exits with code 0).
- **Development Server**: Active (`npm run dev` running on http://localhost:3001).
- **Dependencies**: Fully installed.

## Tech Stack
- **Framework**: Next.js 16.2.6 (using Webpack builder), React 19.2.4
- **Styling**: TailwindCSS v4
- **Database/Backend**: Supabase
- **Icons/Animations**: Framer Motion, Lucide React, React Icons

## Active Tasks
- [x] Install packages (`npm install`) to fix `'next' is not recognized` error.
- [x] Run dev server and confirm it starts successfully.
- [x] Add 6 real projects: BellyBeats, AttendX, PromptMatrix, KafeKiro, E-Masjid, Rembayung.
- [x] Make orbital positions dynamically computed based on project count.
- [x] Sync supabase_schema.sql seed statements.

## Notes & Rules
- The `CLAUDE.md` in this directory points to `@AGENTS.md`.
- Next.js version is 16.2.6 (which has potential breaking changes, check `node_modules/next/dist/docs/` if modifying APIs).
- The projects orbital calculation is dynamic, meaning any number of projects can be added to the database and will distribute evenly.
- The project links in the modal check if `live` or `github` exist before rendering them, preventing empty/invalid links.
