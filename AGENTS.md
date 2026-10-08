# Algoloco — quick rules
- React + Vite + TypeScript + Tailwind. No backend.
- UI source of truth: docs/design/*.html (exported from Stitch). Copy markup and styles as-is; only convert to JSX and split into components. Do NOT redesign or "improve" the look.
- Do not read docs/BLUEPRINT*.md unless the task explicitly says so. For small tasks, do not write a plan; edit directly.
- Algorithms are pure functions in src/engine returning Step[] (see src/engine/types.ts).
- Touch only the files named in the task. Keep changes small.
- User-facing strings go through src/i18n.