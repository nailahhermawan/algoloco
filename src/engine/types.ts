import type { ComponentType } from 'react';

export type Category = 'sorting' | 'searching' | 'graph' | 'analysis';

export interface Step<S> {
  index: number;
  codeLine: number; // pseudocode line to highlight (0-based)
  narration: { key: string; params?: Record<string, string | number> };
  state: S; // snapshot for the renderer
}

export interface Complexity {
  best?: string;
  average?: string;
  worst: string;
  space: string;
}

export interface AlgorithmModule<I, S> {
  id: string; // e.g. 'bfs', 'merge-sort'
  category: Category;
  nameKey: string; // i18n key
  pseudocode: string[]; // 6-8 short lines
  complexity: Complexity;
  stable?: boolean; // sorting only
  sceneId: string; // which scenery to render
  defaultInput: I;
  validateInput(input: I): { ok: true } | { ok: false; errorKey: string };
  generateSteps(input: I): Step<S>[];
  Renderer: ComponentType<{ step: Step<S>; input: I }>;
}

// Graph input
export interface GraphInput {
  nodes: { id: string; label: string; x: number; y: number }[];
  edges: { from: string; to: string; weight?: number }[];
  start: string;
  goal?: string;
  directed: boolean;
}

// Array input
export interface ArrayInput {
  values: number[];
}

// Traversal state (BFS / DFS)
export interface TraversalState {
  current: string | null;
  frontier: string[]; // queue (BFS) or stack (DFS), front first
  visited: string[];
  levels: Record<string, number>;
  examinedEdge: [string, string] | null;
  vars: Record<string, string>; // for the "now" block, e.g. node, neighbors
}

// Sorting state
export interface SortState {
  values: number[];
  compare: [number, number] | null;
  swapped: [number, number] | null;
  sortedFrom?: number;
  sortedTo?: number;
  pivot?: number;
  counters: { comparisons: number; swaps: number };
}
