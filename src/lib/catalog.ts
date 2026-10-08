import type { Category } from '@/engine/types';

/**
 * Static catalog of all planned algorithms.
 * This is the complete list of algorithms the project intends to build.
 * An algorithm appears in the engine registry only once its module is implemented;
 * the catalog is used for UI display (tickets, routing guards) regardless.
 */
export interface CatalogEntry {
  id: string;
  nameKey: string;
  category: Category;
  ticketNumber: number;
  subtitleKey: string;
  complexityValue: string;
  /** 'avg' only when the displayed value is an average case; 'time' for general bounds */
  complexityKind: 'avg' | 'time';
  /** 'ready' = planned/buildable ticket; 'soon' = faded with SOON stamp */
  status: 'ready' | 'soon';
}

/**
 * Full catalog verified against BLUEPRINT.md section 8.
 *
 * Complexity label rule (section 4.2 stub label):
 *   "avg" — only when the value shown IS the average case (bubble sort, quick sort).
 *   "time" — general bound or worst case for everything else.
 *
 * NOTE: Master Theorem (#11) is present but still [Open] in the blueprint
 * (see section 11). Kept as category 'analysis', status 'ready' for now.
 */
export const algorithmCatalog: CatalogEntry[] = [
  // ── Sorting ──────────────────────────────────────────
  {
    id: 'bubble-sort',
    nameKey: 'algorithms.bubbleSort',
    category: 'sorting',
    ticketNumber: 1,
    subtitleKey: 'catalog.bubbleSort.subtitle',
    complexityValue: 'O(n²)',
    complexityKind: 'avg', // avg & worst are both O(n²); value shown is avg
    status: 'ready',
  },
  {
    id: 'merge-sort',
    nameKey: 'algorithms.mergeSort',
    category: 'sorting',
    ticketNumber: 2,
    subtitleKey: 'catalog.mergeSort.subtitle',
    complexityValue: 'O(n log n)',
    complexityKind: 'time', // all cases O(n log n)
    status: 'ready',
  },
  {
    id: 'quick-sort',
    nameKey: 'algorithms.quickSort',
    category: 'sorting',
    ticketNumber: 3,
    subtitleKey: 'catalog.quickSort.subtitle',
    complexityValue: 'O(n log n)',
    complexityKind: 'avg', // avg O(n log n), worst O(n²); shown value is avg
    status: 'ready',
  },
  {
    id: 'binary-search',
    nameKey: 'algorithms.binarySearch',
    category: 'searching',
    ticketNumber: 4,
    subtitleKey: 'catalog.binarySearch.subtitle',
    complexityValue: 'O(log n)',
    complexityKind: 'time',
    status: 'ready',
  },

  // ── Graph ────────────────────────────────────────────
  {
    id: 'bfs',
    nameKey: 'algorithms.bfs',
    category: 'graph',
    ticketNumber: 5,
    subtitleKey: 'catalog.bfs.subtitle',
    complexityValue: 'O(V + E)',
    complexityKind: 'time',
    status: 'ready',
  },
  {
    id: 'dfs',
    nameKey: 'algorithms.dfs',
    category: 'graph',
    ticketNumber: 6,
    subtitleKey: 'catalog.dfs.subtitle',
    complexityValue: 'O(V + E)',
    complexityKind: 'time',
    status: 'ready',
  },
  {
    id: 'dijkstra',
    nameKey: 'algorithms.dijkstra',
    category: 'graph',
    ticketNumber: 7,
    subtitleKey: 'catalog.dijkstra.subtitle',
    complexityValue: 'O((V+E)log V)',
    complexityKind: 'time',
    status: 'ready',
  },
  {
    id: 'a-star',
    nameKey: 'algorithms.aStar',
    category: 'graph',
    ticketNumber: 8,
    subtitleKey: 'catalog.aStar.subtitle',
    complexityValue: 'O(b^d)',
    complexityKind: 'time',
    status: 'soon',
  },
  {
    id: 'graph-coloring',
    nameKey: 'algorithms.graphColoring',
    category: 'graph',
    ticketNumber: 9,
    subtitleKey: 'catalog.graphColoring.subtitle',
    complexityValue: 'O(m^V)',
    complexityKind: 'time',
    status: 'ready',
  },
  {
    id: 'flow-network',
    nameKey: 'algorithms.flowNetwork',
    category: 'graph',
    ticketNumber: 10,
    subtitleKey: 'catalog.flowNetwork.subtitle',
    complexityValue: 'O(V E²)',
    complexityKind: 'time',
    status: 'soon',
  },

  // ── Analysis ─────────────────────────────────────────
  {
    id: 'master-theorem',
    nameKey: 'algorithms.masterTheorem',
    category: 'analysis',
    ticketNumber: 11,
    subtitleKey: 'catalog.masterTheorem.subtitle',
    complexityValue: 'Θ(n^log_b a)',
    complexityKind: 'time',
    status: 'ready',
  },

  // ── More Sorting ─────────────────────────────────────
  {
    id: 'heap-sort',
    nameKey: 'algorithms.heapSort',
    category: 'sorting',
    ticketNumber: 12,
    subtitleKey: 'catalog.heapSort.subtitle',
    complexityValue: 'O(n log n)',
    complexityKind: 'time', // all cases O(n log n)
    status: 'ready',
  },
];

/**
 * Look up a catalog entry by algorithm id.
 */
export function getCatalogEntry(id: string): CatalogEntry | undefined {
  return algorithmCatalog.find((entry) => entry.id === id);
}

/**
 * Check whether an algorithm id is known in the catalog.
 */
export function isKnownAlgorithm(id: string): boolean {
  return algorithmCatalog.some((entry) => entry.id === id);
}

/**
 * Filter catalog by category. Pass undefined/'all' to get everything.
 */
export function getCatalogByCategory(category?: Category | 'all'): CatalogEntry[] {
  if (!category || category === 'all') return algorithmCatalog;
  return algorithmCatalog.filter((entry) => entry.category === category);
}
