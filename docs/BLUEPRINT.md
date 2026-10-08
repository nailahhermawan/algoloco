# Algoloco — Project Blueprint

> **Working title:** Algoloco (algo + *loco*, short for locomotive; also "a bit crazy" in Spanish). The name is not final. Keep it in one config constant so it is easy to change.
> **Document version:** 0.2 · **Last updated:** 2026-10-08
> **Living document.** Update it whenever a decision changes, and record the change in section 11.

Status tags used throughout: **[Decided]** the author confirmed it. **[Proposed]** a recommended default that is not confirmed. **[Open]** still needs a decision.

---

## 0. How to use this document

This file is the single source of truth for what the project is, who it is for, how it should look, and how it is built. It is written for the author and for any AI assistant that joins the project.

If you are an AI assistant: read sections 1, 3, 6, 7 and 12 before writing any code or design. Do not silently change anything tagged **[Decided]**. If a request conflicts with this document, say so and ask.

---

## 1. Overview

### 1.1 One-liner
An interactive, railway-themed website for learning algorithms: step-by-step visualizations, custom inputs, and short interactive lessons on complexity analysis.

### 1.2 The problem
- Most algorithm visualizers are generic (colored bars, gray graphs) and look alike.
- They show *what* happens but rarely explain *what you are looking at*: what the queue is, why a step happened, what the pseudocode line means.
- Many assume prior knowledge of Big O and of how to read the visualization.
- Many "creative" student projects look like generic AI-generated dashboards or heavy brutalist UIs that are tiring to read.

### 1.3 Vision
A calm, memorable, learnable place where the algorithm runs like a train network. A first-time visitor can follow every step, and an experienced visitor can skip the lessons and go straight to the visualizer.

### 1.4 Goals
1. Teach by showing: each algorithm is animated step by step, in sync with highlighted pseudocode and one plain-language sentence.
2. Teach by doing: users enter their own numbers or build their own graph.
3. Teach the "why": short interactive lessons (Big O, best/average/worst case, comparing algorithms) that explain every element on the visualizer screen.
4. Respect the user's time: lessons are skippable at any point.
5. Have a distinctive, consistent identity (railway + paper-craft + cartography) that does not look like a template.
6. Work as a strong portfolio piece: live demo, clean code, tests, good README.

### 1.5 Non-goals
- No accounts, backend, database, or server-side code in the first versions.
- Not a full algorithms course or a replacement for textbooks.
- Not a coding playground: users do not write or run their own code. [Decided for now]
- Not a competitive-programming or interview-practice platform.
- No gamification systems (points, streaks, leaderboards).

### 1.6 Success criteria (portfolio)
- A public live demo (target host: Vercel) and a README with GIFs.
- At least one complete algorithm module end to end before adding more.
- Algorithm logic covered by automated tests; CI runs lint, tests and build.
- A reviewer understands what the project is within 30 seconds of opening the repo.

---

## 2. Users

| User | Who | What they need | Likely path |
|---|---|---|---|
| **Learner** | Undergraduate CS student taking Algorithm Analysis or AI | See each step, understand Big O, connect theory to behavior | Lokal (lessons) then algorithm pages |
| **Self-learner** | Bootcamp or self-taught developer | Fundamentals explained gently, no jargon walls | Lokal |
| **Reviser** | Someone who already knows the basics, preparing for an exam or interview | Fast access, custom inputs, quick comparisons | Ekspres (skip lessons) |
| **Educator** (secondary) | Lecturer or teaching assistant | Projector-friendly, readable from a distance, custom inputs for live examples | Ekspres |
| **Reviewer** | Recruiter or engineer viewing the author's portfolio | A fast "wow", polished UX, clean repo | Home page, one algorithm page, then the code |

Design implications:
- Readable at a glance: big, clear visuals and very little text on screen.
- Never block experienced users: every lesson has a visible skip.
- Desktop first (the visualizer needs space) but usable on tablet and phone.
- Language: Indonesian and English. **[Open]** which is the default and whether both ship in v1. All user-facing strings must go through a translation layer from the start.

---

## 3. Concept and metaphor

**Core idea [Decided]:** the algorithm is a train running through a small railway world drawn as paper craft on a desk.

| Algorithm concept | Railway metaphor |
|---|---|
| Graph node | Station |
| Graph edge | Rail line (weight = travel time) |
| Traversal (BFS/DFS) | A train exploring the network |
| Queue / stack | Paper tickets waiting in a tray |
| Visited set | Stations stamped as visited |
| Array | A row of numbered wagons |
| Swap / compare | Wagons exchanging places / two wagons lifted for comparison |
| Merge step | Two rows of wagons joining at a Y-junction |
| Partitioning (quick sort) | Wagons routed to two tracks by a switch, pivot as marker |
| Graph coloring | Coloring lines or stations so neighbors differ, like a metro map |
| Complexity comparison | A race: each complexity class is a train, input size n is the distance |
| Pseudocode | The text printed on a long train ticket |

Rules of the metaphor:
- The metaphor must clarify the algorithm, never obscure it. Where it becomes forced (for example heap sort, binary search, dynamic programming), drop the illustration and show the plain structure.
- Station labels and wagon numbers are always readable. The real data (numbers, node names) is never replaced by decoration.

---

## 4. Information architecture

### 4.1 Routes **[Proposed]**
| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Dashboard: learning-path strip plus algorithm tickets (see 4.2) |
| `/learn` | Lesson index | The "Lokal" journey: ordered lessons with progress |
| `/learn/:lessonId` | Lesson | One interactive lesson |
| `/algo/:algorithmId` | Algorithm page | The desk visualizer for one algorithm |
| `*` | Not found | Friendly 404 in the same style |

### 4.2 Home page (dashboard) **[Decided]**
A desk on a cutting mat with two zones. No top navigation bar, no hero section, no full-screen map.

1. **Learning path (top, about 35% of the height):** a narrow strip of folded paper map with faint decoration and no coordinate labels. One teal rail line carries the lesson stations in order. Completed stations carry a round stamp; a small train marks the current progress. At the right end: a ticket-stub button ("Start" or "Continue") and a small link "Skip to algorithms".
2. **Algorithm tickets (main area):** category filter stickers (All, Sorting, Searching, Graph, Analysis) followed by a grid of landscape train-ticket cards.
   - Ticket shape: semicircular notches on the top and bottom edges and a vertical perforation line separating the **body** from a **stub**.
   - Body: algorithm name in large type, a strip in the category color on the left edge, a small illustration of its scene, and a short subtitle with a ticket number.
   - Stub: the time complexity on **one line** (never wrapped) plus an arrow. Label rule: show "avg" when the value is an average case (sorting), and "time" when it is the general bound (for example BFS/DFS); never label a non-average value "avg".
   - Hover: the ticket lifts and the stub is slightly torn. Click: a "depart" stamp, then the page opens.
   - Not yet built: faded ticket with a "SOON" rubber stamp (no padlock).
3. **Special tickets row (below the grid):** wider tickets in a distinct color: **Duel** (compare two algorithms), **Random** (surprise me), and **Continue** (resume the last opened algorithm; shown only when there is one).
4. **Footer:** a thin rail line across the page with a muted decorative train, and a station-name plate with the GitHub icon and the author's username, linking to the author's GitHub profile (new tab, `rel="noopener noreferrer"`).

Entrances: the learning-path strip is **Lokal** (lessons first); the ticket grid is **Ekspres** (straight to an algorithm).
Scaling: adding an algorithm adds one ticket; the grid is grouped and filterable by category.
The full network map is no longer used on the home page; the map appears only as the learning path.

### 4.3 Navigation inside an algorithm page **[Decided]**
Because there will be many algorithms, a tab bar is not used. A **destination ticket** in the top-left shows the current algorithm; clicking it opens a compact switcher to jump to any other algorithm or to Home (switcher form is **[Open]**: mini network map or a list of ticket-shaped entries).

### 4.4 Skipping lessons **[Decided]**
- A visible "Skip to algorithms" control on every lesson.
- Optional 3-question quick check at the start of `/learn`; if all correct, suggest skipping (the user decides).
- Lesson progress is stored in the browser and shown as stamps on the lesson stations.

---

## 5. Feature specification

### 5.1 Algorithm page ("the desk") **[Decided layout]**
Top-down view of a desk. Zones:

1. **Cutting mat** (background): green, self-healing-mat look, fine white grid, ruler numbers on the edges, faint 45-degree and circle guides.
2. **Folded route map** (main stage, about 55-65% of the area): cream paper with a vertical fold and a slightly lifted corner. Low-contrast cartographic details (blocks, parks, river, coordinate grid, compass, scale bar). On top: stations and rails for graph algorithms, or wagons and tracks for sorting.
3. **Train ticket** (right side): long ticket with a perforation line holding the **pseudocode** (about 6-8 lines). The currently executing line is highlighted by a mustard strip with a small arrow. **Lines are never struck out, punched or dimmed after running**, because loops repeat lines.
4. **"Now" block** on the ticket: current variables (for example `node = Gamma`, `neighbors = Zeta, Kappa`) and a one-line complexity note.
5. **Narration strip** above the controls: exactly one plain sentence describing the current step and why it happens.
6. **Queue / state tray** under the map: pending items as small perforated tickets, front-to-back, with the front labeled "next out"; visited items as small teal stamp discs.
7. **Control strip** at the bottom: step back, play/pause, step forward, reset, speed slider, step counter ("Step 4 / 18"), and a scrubber.
8. **Destination ticket** (top-left): navigation, see 4.3.
9. **Info (i) and Tour (?)**: small stickers. Info opens a slide-in card with the explanation and complexity details; Tour replays the "how to read this screen" walkthrough.
10. **Legend** (small, permanent, on the map): unvisited, in queue, current, visited.

Graph visualizer details:
- Discovered stations show a small level number (BFS) or discovery order (DFS).
- The rail currently being examined is drawn with an animated dashed highlight.
- Stations in the frontier can show a tiny waiting wagon.
- Exactly **one** bright coral train represents the algorithm. Decorative trains are muted, never stop at stations, and must never be confused with the active one.

Sorting visualizer details:
- A straight track with numbered wagons; wagons compared are lifted slightly; swaps animate along the track; sorted wagons get a stamp or color change.
- Counters for comparisons and swaps.
- Siding tracks are available where an algorithm needs temporary storage (insertion, merge).

### 5.2 Playback **[Decided behavior, Proposed details]**
- Play, pause, step forward, step back, reset, scrub to any step, speed from 0.25x to 4x.
- Step back and scrubbing must be exact and instant (see precomputed steps in 7.3).
- Keyboard: Space = play/pause, Left/Right = step, R = reset.
- Respect `prefers-reduced-motion`: replace travel animations with instant state changes and highlights.

### 5.3 Custom input **[Decided]**
- **Graph algorithms:** an edit mode with a small toolbox on the mat: place station (click map), connect with rail (ruler tool), delete (eraser), random graph (dice), reset to default. Station names are auto-assigned and editable. Weights are editable where the algorithm uses them.
- **Sorting:** edit the numbers directly on the wagons, or type a comma-separated list on an empty ticket; random array button; reset to default.
- Every algorithm has a **default input** so the page works instantly.
- Limits **[Proposed]**: graphs up to 12 stations; arrays up to 16 values for the animated view. Validate input and explain errors in one short sentence.
- Editing input regenerates the step list and resets playback to step 0.

### 5.4 Lessons **[Decided concept, Proposed content]**
Principles: interactive first, text second; each lesson takes a few minutes; ends with one understanding-check question; skippable.

First set (MVP):
1. **Big O race:** each complexity class (O(1), O(log n), O(n), O(n log n), O(n²)) is a train on its own track; a slider for n shows which one pulls ahead.
2. **How to read this screen:** a guided tour highlighting the ticket, narration strip, tray, stations, and colors. Also reachable from the "?" sticker on algorithm pages.
3. **Duel:** two sorting algorithms on the same input side by side; the user guesses the winner first, then sees comparisons and swaps.

Later: best / average / worst case with input presets (sorted, reversed, random); stable vs unstable sorting with same-value wagons in different colors; recursion and backtracking basics.

### 5.5 Complexity comparison module **[Proposed]**
- Run two or more algorithms on generated inputs of growing size and plot **operation counts** (comparisons and swaps, or node visits) against n. Operation counts are deterministic; wall-clock time is noisy and is optional.
- Present it as the "race" visual from lesson 1, using real data.

### 5.6 Persistence **[Proposed]**
- `localStorage` only: lesson progress, last custom input per algorithm, language, reduced-motion override. Wrap every access in try/catch; the app must work with storage unavailable.
- No accounts. Optional later: share a custom input through a URL query string.

### 5.7 Internationalization **[Open]**
- All strings (UI, narration, lessons) live in translation files keyed by id. Narration steps carry a `key` plus `params`, never a hard-coded sentence.
- Decide the default language and which languages ship first.

### 5.8 Accessibility **[Proposed]**
- Color is never the only signal: states also differ by shape, stamp, label or pattern.
- Narration is exposed in an `aria-live` region.
- All controls are keyboard reachable with visible focus.
- Minimum contrast for text and state colors; test with a color-blindness simulator.

---

## 6. Visual design system

### 6.1 Style principles **[Decided]**
- Calm, warm, tactile. Layered paper-craft on a cutting mat, drawn like a transit/cartographic map.
- **One sentence of text, not paragraphs.** Information is carried by large visuals, labels, stamps and tickets.
- Distinctive over generic. Explicitly avoid: brutalism, dense dashboards, monospace everywhere, neon, purple/blue AI-gradient looks, glassmorphism, glow, emoji as icons, centered hero sections, stock-template cards.
- The visualization is the star. Decorative map details stay low-contrast.

### 6.2 Palette **[Proposed hex values, confirm during implementation]**
| Role | Color |
|---|---|
| Map paper | cream `#F4ECD8` / `#F6F0E4` |
| Ticket paper | `#FBF7EC` |
| Ink / text | `#2B2B2B` |
| Cutting mat | green, around `#2E6B55` (tune visually) |
| Line coral (current / primary accent) | `#E8604C` |
| Line mustard (frontier, highlight) | `#E9B44C` |
| Line teal (visited) | `#2A9D8F` |
| Line blue | `#3D5A98` |

State meaning, consistently everywhere: **white = unvisited, mustard = in queue/frontier, coral = current, teal = visited.**

### 6.3 Typography **[Proposed]**
- One rounded geometric sans for all UI and narration (for example DM Sans or Nunito).
- A monospace font only inside the ticket code and numeric counters (for example JetBrains Mono).
- Generous sizes: station names, code and narration must be comfortably readable on a laptop and on a projector.

### 6.4 Paper-craft rules **[Decided]**
- Visible layering: mat, map sheet, rails, stations/trains. Each layer casts a short soft shadow (about 2-6px).
- Paper thickness shown with a thin darker edge; subtle paper-fiber texture.
- Flat colors only. No gradients, no realistic 3D, no glow.
- Rails: two parallel rails with small crossties, signal lights at junctions, optional level crossings, bridges over the river, tunnel portals, tiny roofed platforms, utility poles.
- The folded map has a center fold, a lifted corner, a title cartouche, coordinates, compass and scale.
- Queue items are paper tickets with perforated edges and a notch.

### 6.5 Scenes (per-algorithm scenery) **[Decided concept, Proposed content]**
Same style kit and same layout for every algorithm; only the scenery layer on the map and a few signature props change.

| Algorithm | Scenery | Signature motion |
|---|---|---|
| BFS | Flat city around a lake | Spreads in rings like ripples |
| DFS | Mountains with tunnels | Goes deep, backs out of tunnels on backtrack |
| Merge sort | Two rivers joining, bridge at the confluence | Two wagon rows meet at a Y-junction and merge |
| Quick sort | Switching yard with points (switches) | Pivot marker, wagons routed to two tracks |
| Bubble sort | Coastal line with paper waves | Neighbors swap back and forth |
| Insertion sort | Depot with a siding | Wagon pulled out, then slotted into place |
| Dijkstra | Dense city with highways | Train picks the cheapest route |
| Graph coloring | Metro-style multi-line map | Lines/stations recolored with backtracking |

### 6.6 Illustration and tooling **[Decided]**
- Layout and screen exploration use **Google Stitch**; screenshots and the prompts used are stored in `docs/design/`.
- Signature illustrations (trains, stations, logo) are best drawn by the author in Figma or Illustrator, or built as simple SVGs, then reused as components. Stitch output is a reference, not production code.
- Logo direction **[Proposed]**: wordmark `algoloco` where the letter "o"s are train wheels on a thin rail line; favicon is a single wheel or a small locomotive face.

### 6.7 Screen references
Store design screenshots in `docs/design/` with a short note on what each shows. The accepted direction is the "desk" composition: folded route map plus long ticket on a cutting mat. Rejected directions: dense brutalist dashboard; flat transit map inside a conventional web-app shell (header, tabs, cards); full-screen network map as the home page.
Accepted home direction: ticket-based dashboard (learning-path strip plus grid of train-ticket cards, special tickets row, rail footer).

---

## 7. Technical architecture

### 7.1 Stack **[Proposed]**
| Concern | Choice | Notes |
|---|---|---|
| Language | TypeScript (strict) | Shared types between engine and UI |
| Framework | React + Vite | Single-page app, no SSR |
| Styling | Tailwind CSS + CSS variables for design tokens | Tokens mirror section 6 |
| Rendering | SVG for stations, rails, wagons, scenery | Canvas only if SVG proves too slow |
| Animation | CSS transitions plus a small animation helper (a library such as Framer Motion is optional) | Respect reduced motion |
| Routing | React Router | Routes in 4.1 |
| State | React context + `useReducer` for the player; no global store unless needed | Keep dependencies low |
| Tests | Vitest for engine; React Testing Library for key components; Playwright optional for smoke tests | |
| Lint/format | ESLint + Prettier | |
| CI/CD | GitHub Actions (lint, test, build); deploy on Vercel | |
| Backend | None | Static site |

### 7.2 Folder structure **[Proposed]**
```
/
├─ docs/
│  ├─ BLUEPRINT.md          # this file
│  └─ design/               # Stitch screenshots, prompts, palette notes
├─ src/
│  ├─ app/                  # router, providers, layout shell
│  ├─ engine/
│  │  ├─ types.ts           # Step, AlgorithmModule, input types
│  │  ├─ player.ts          # playback reducer (index, playing, speed)
│  │  ├─ registry.ts        # list of all algorithm modules
│  │  └─ algorithms/
│  │     ├─ sorting/        # bubble.ts, insertion.ts, merge.ts, quick.ts ...
│  │     └─ graph/          # bfs.ts, dfs.ts, coloring.ts, dijkstra.ts ...
│  ├─ components/
│  │  ├─ desk/              # CuttingMat, FoldedMap, Ticket, ControlStrip,
│  │  │                     # NarrationStrip, QueueTray, DestinationTicket
│  │  ├─ graph/             # Station, Rail, Train, GraphEditor
│  │  └─ sort/              # Wagon, Track, ArrayEditor
│  ├─ scenes/               # per-algorithm scenery layers (SVG)
│  ├─ lessons/              # lesson content + interactive widgets
│  ├─ pages/                # Home, LessonIndex, Lesson, Algorithm, NotFound
│  ├─ i18n/                 # translation files and helper
│  ├─ styles/               # tokens, global CSS
│  └─ lib/                  # storage, validation, utilities
└─ tests/ (or colocated *.test.ts)
```

### 7.3 Core architecture: algorithms produce steps, the UI plays them **[Decided]**
Every algorithm is a **pure function** that takes an input and returns an array of **steps**. The UI never runs the algorithm live; it only plays back the precomputed steps. This gives exact step-back, scrubbing, deterministic tests, and makes new algorithms cheap to add.

Rules for algorithm functions:
- Pure and deterministic: no DOM, no timers, no randomness inside (random inputs are generated outside and passed in).
- Return a step list with a hard cap (for example 5,000 steps) and fail gracefully above it.
- Each step is a complete snapshot of the visual state, not a diff. Inputs are small, so snapshots are cheap and make rewinding trivial.

### 7.4 Core types **[Proposed]**
```ts
type Category = 'sorting' | 'searching' | 'graph' | 'analysis';

interface Step<S> {
  index: number;
  codeLine: number;                       // pseudocode line to highlight (0-based)
  narration: { key: string; params?: Record<string, string | number> };
  state: S;                               // snapshot for the renderer
}

interface Complexity {
  best?: string; average?: string; worst: string; space: string;
}

interface AlgorithmModule<I, S> {
  id: string;                             // 'bfs', 'merge-sort'
  category: Category;
  nameKey: string;                        // i18n key
  pseudocode: string[];                   // 6-8 short lines
  complexity: Complexity;
  stable?: boolean;                       // sorting only
  sceneId: string;                        // which scenery to render
  defaultInput: I;
  validateInput(input: I): { ok: true } | { ok: false; errorKey: string };
  generateSteps(input: I): Step<S>[];
  Renderer: React.ComponentType<{ step: Step<S>; input: I }>;
}

// Graph input
interface GraphInput {
  nodes: { id: string; label: string; x: number; y: number }[];
  edges: { from: string; to: string; weight?: number }[];
  start: string;
  goal?: string;
  directed: boolean;
}

// Array input
interface ArrayInput { values: number[] }
```

Example state shapes:
```ts
// BFS / DFS
interface TraversalState {
  current: string | null;
  frontier: string[];            // queue (BFS) or stack (DFS), front first
  visited: string[];
  levels: Record<string, number>;
  examinedEdge: [string, string] | null;
  vars: Record<string, string>;  // for the "now" block, e.g. node, neighbors
}

// Sorting
interface SortState {
  values: number[];
  compare: [number, number] | null;
  swapped: [number, number] | null;
  sortedFrom?: number; sortedTo?: number;
  pivot?: number;
  counters: { comparisons: number; swaps: number };
}
```

### 7.5 Playback engine **[Proposed]**
- State: `{ stepIndex, playing, speed }` in a reducer; actions: play, pause, next, prev, seek(i), reset, setSpeed.
- Autoplay uses a timer or `requestAnimationFrame` loop; interval = base interval / speed.
- The renderer is a pure function of `steps[stepIndex]`; transitions between consecutive steps are animated by the renderer.
- Changing input recomputes steps and resets playback.

### 7.6 Rendering notes
- Graph layout uses the user-provided or default `x, y` coordinates; auto-layout is not required in v1.
- Keep the SVG scene in layers: mat, map paper, scenery, rails, stations, wagons, trains, stamps, annotations. Scenery layers are static and non-interactive (`pointer-events: none`).
- Fixed logical coordinate system with a `viewBox`; scale responsively.

### 7.7 Testing strategy
- **Algorithms:** property tests (output is sorted, same multiset of values; traversal visits each reachable node exactly once), fixed expected-order tests on small graphs, and an invariant that the final step's state matches the expected result.
- **Player reducer:** step bounds, seek, reset, speed.
- **Input validation:** limits, duplicate edges, unknown nodes, empty input.
- **UI smoke:** each algorithm page renders its default input and steps through without errors.

### 7.8 Performance and limits
- Small visual inputs by design (section 5.3). Complexity comparison uses counted operations on larger n without rendering them.
- Lazy-load heavy scenes and lesson widgets by route.

### 7.9 Deployment
- Static build deployed to Vercel from `main`; preview deployments for pull requests.
- No environment secrets are needed in the first versions.

---

## 8. Algorithm reference

Planned catalog. Complexities are standard textbook values for the usual implementations; verify against course material before publishing in-app text.

| Algorithm | Category | Time (best / avg / worst) | Space | Stable | Status |
|---|---|---|---|---|---|
| Bubble sort (with early exit) | sorting | O(n) / O(n²) / O(n²) | O(1) | yes | planned |
| Selection sort | sorting | O(n²) / O(n²) / O(n²) | O(1) | no | planned |
| Insertion sort | sorting | O(n) / O(n²) / O(n²) | O(1) | yes | planned |
| Merge sort | sorting | O(n log n) all cases | O(n) | yes | planned |
| Quick sort | sorting | O(n log n) / O(n log n) / O(n²) | O(log n) average stack | no | planned |
| BFS | graph | O(V + E) | O(V) | n/a | first module |
| DFS | graph | O(V + E) | O(V) | n/a | planned |
| Graph coloring (backtracking CSP) | graph | exponential worst case | O(V) | n/a | planned |
| Dijkstra (binary heap) | graph | O((V + E) log V) | O(V) | n/a | later |
| Kruskal / Prim (MST) | graph | O(E log E) / O(E log V) with heap | O(V + E) | n/a | later |
| A* | graph | depends on heuristic | O(V) | n/a | later |

This table is the working plan, not a promise: public-facing descriptions must not enumerate it, because the catalog will keep growing.

---

## 9. Adding a new algorithm (checklist)

1. Create the module in `src/engine/algorithms/<category>/<id>.ts` implementing `AlgorithmModule`.
2. Write the pseudocode (6-8 short lines) and map every step to a `codeLine`.
3. Write narration keys for each kind of step, in all supported languages.
4. Add tests (section 7.7).
5. Build or reuse a renderer; add a scene if it needs a new signature look (section 6.5).
6. Register it in `registry.ts`; it appears automatically as a station on the home map.
7. Add the entry to the README module list and, if useful, a lesson.
8. Verify complexity values and the explanation text.

---

## 10. Roadmap **[Proposed]**

| Milestone | Scope |
|---|---|
| M0 Setup | Repo, Vite + TS, lint/format, CI, design tokens, `docs/` |
| M1 Engine + first algorithm | Types, player, BFS module with tests; static desk layout |
| M2 Playable desk | Narration, ticket highlight, queue tray, controls; deploy first demo |
| M3 Custom graph input | Graph editor, validation, DFS |
| M4 Sorting | Wagon track, array input, bubble / insertion / selection |
| M5 More sorting + scenes | Merge, quick, scenery layers |
| M6 Home map | Network map, destination ticket navigation, Lokal/Ekspres entry |
| M7 Lessons | Big O race, "how to read this screen" tour, duel; progress stamps |
| M8 Comparison + polish | Complexity comparison, a11y pass, README with GIFs, final deploy |
| Later | Graph coloring, Dijkstra, MST, A*, share-by-URL, more lessons |

Build one module completely (including deploy) before starting the next.

---

## 11. Decisions log and open questions

### Decided
- Concept: railway world as paper craft; algorithm = train. (Replaces earlier ideas: flat dark dev-tool UI, riso/brutalist look, transit map in a normal app shell.)
- Layout: "desk" composition with folded route map, long pseudocode ticket, cutting-mat background.
- Pseudocode: active line is highlighted only (no punching or strike-through).
- Minimal on-screen text; one narration sentence per step.
- Algorithms run as precomputed steps; the UI only plays them.
- Custom user input (graph and numbers) with defaults.
- Home page is a dashboard: a learning-path map strip plus a grid of ticket-shaped algorithm cards grouped by category; the map is used only for the learning path; many algorithms are expected, so no tab bar.
- Footer shows the author's GitHub username as a link to the GitHub profile.
- Lessons exist and are always skippable (Lokal vs Ekspres).
- Per-algorithm scenery with one shared style kit.
- Repo description must be informative and must not list specific algorithms.

### Open
- Final project name (working title: Algoloco). Check domain, GitHub handle and social handles.
- Default language and which languages ship in v1.
- Exact palette values and the cutting-mat green.
- Whether to use an animation library.
- Whether the "quick check" at the start of `/learn` is worth the complexity.
- Mobile layout details (proposed: stage on top, ticket and tray as tabs).
- Form of the switcher opened by the destination ticket (mini map vs ticket list).
- Whether non-algorithm topics (for example Master Theorem) get a ticket or live only in lessons.

### Changelog
- 0.1 (2026-10-08): initial blueprint.
- 0.2 (2026-10-08): home page redefined as a ticket-based dashboard; map reserved for the learning path.

---

## 12. Working agreement for AI assistants

1. Read this document first. Treat **[Decided]** items as fixed unless the author says otherwise.
2. Keep algorithms pure and separate from UI (section 7.3). Never put timers or DOM access in an algorithm.
3. Match the style kit (section 6). Do not introduce gradients, neon, purple AI-style palettes, glassmorphism, emoji icons, or dense text panels.
4. Keep on-screen text minimal. Prefer a visual solution over a paragraph.
5. Do not invent algorithm facts. If unsure about a complexity or behavior, flag it for verification.
6. All user-facing strings go through i18n; no hard-coded sentences in components or algorithms.
7. Make small, focused changes with clear commit messages (Conventional Commits, for example `feat(bfs): add step generator`). Commit before large refactors.
8. TypeScript strict mode; no `any` without a comment explaining why.
9. Do not add a dependency without stating why and what it replaces.
10. When a request conflicts with this document, say so and propose an update to the document rather than quietly diverging.
11. After any significant decision, update sections 11 and the relevant section above.

---

## 13. Glossary

- **Step:** one snapshot of the visual and code state produced by an algorithm.
- **Desk:** the full-screen top-down composition of an algorithm page.
- **Ticket:** the long paper ticket showing pseudocode and the "now" block.
- **Tray:** the area under the map showing queue/stack and visited items.
- **Lokal / Ekspres:** the two ways to enter the site (lessons first, or straight to algorithms).
- **Line:** a colored category on the home map; also a rail line in a graph.
- **Scene:** the per-algorithm scenery layer on the map.
- **Frontier:** discovered but not yet processed nodes (the queue in BFS, the stack in DFS).
- **Style kit:** the shared palette, paper rules, typography and components used by every page.
