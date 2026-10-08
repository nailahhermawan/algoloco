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
  sceneLine: string; // short subtitle for the ticket
}

export const algorithmCatalog: CatalogEntry[] = [
  // Sorting
  {
    id: 'bubble-sort',
    nameKey: 'algorithms.bubbleSort',
    category: 'sorting',
    ticketNumber: 1,
    sceneLine: 'LINE · SORT',
  },
  {
    id: 'merge-sort',
    nameKey: 'algorithms.mergeSort',
    category: 'sorting',
    ticketNumber: 2,
    sceneLine: 'DIVIDE & CONQUER',
  },
  {
    id: 'quick-sort',
    nameKey: 'algorithms.quickSort',
    category: 'sorting',
    ticketNumber: 3,
    sceneLine: 'PIVOT HOP',
  },
  {
    id: 'insertion-sort',
    nameKey: 'algorithms.insertionSort',
    category: 'sorting',
    ticketNumber: 4,
    sceneLine: 'ORDERED ARRAY',
  },
  {
    id: 'selection-sort',
    nameKey: 'algorithms.selectionSort',
    category: 'sorting',
    ticketNumber: 5,
    sceneLine: 'MIN PICK',
  },

  // Graph
  {
    id: 'bfs',
    nameKey: 'algorithms.bfs',
    category: 'graph',
    ticketNumber: 6,
    sceneLine: 'LEVEL RINGS',
  },
  {
    id: 'dfs',
    nameKey: 'algorithms.dfs',
    category: 'graph',
    ticketNumber: 7,
    sceneLine: 'TRACK BRANCH',
  },
  {
    id: 'dijkstra',
    nameKey: 'algorithms.dijkstra',
    category: 'graph',
    ticketNumber: 8,
    sceneLine: 'MIN DISTANCE',
  },
  {
    id: 'a-star',
    nameKey: 'algorithms.aStar',
    category: 'graph',
    ticketNumber: 9,
    sceneLine: 'HEURISTIC',
  },
  {
    id: 'graph-coloring',
    nameKey: 'algorithms.graphColoring',
    category: 'graph',
    ticketNumber: 10,
    sceneLine: 'CHROMATIC',
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
