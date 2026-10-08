# Algoloco

> _Note: "Algoloco" is a working title defined centrally via `APP_NAME` in `src/lib/config.ts`._

Algoloco is an interactive, railway-themed web application designed for learning algorithms and complexity analysis. By representing algorithmic execution as trains operating across paper-craft transit networks, it combines deterministic step-by-step visual exploration, highlighted pseudocode, plain-language narrations, custom user inputs, and bite-sized interactive lessons on theoretical time and space complexity.

For detailed architecture, design rules, and project specifications, see [docs/BLUEPRINT.md](docs/BLUEPRINT.md).

## Getting Started

### Prerequisites

- Node.js (v20+ or v22 LTS recommended, see `.nvmrc`)
- npm (v10+)

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The application will start locally (typically at `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Start the Vite local development server.
- `npm run build`: Build the production-ready static bundle into `dist/`.
- `npm run lint`: Run ESLint to verify code quality.
- `npm run format`: Check and format files with Prettier.
- `npm run typecheck`: Run TypeScript compiler type checking without emitting files.
- `npm run test`: Run the test suite using Vitest.
