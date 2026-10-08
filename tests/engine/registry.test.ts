import { beforeEach, describe, expect, it } from 'vitest';
import {
  clearRegistry,
  getAlgorithmById,
  listAlgorithmsByCategory,
  registerAlgorithm,
  type AnyAlgorithmModule,
} from '@/engine/registry';

describe('AlgorithmRegistry', () => {
  const dummyModule: AnyAlgorithmModule = {
    id: 'dummy-sort',
    category: 'sorting',
    nameKey: 'algorithms.dummySort.name',
    pseudocode: ['line 1', 'line 2'],
    complexity: {
      best: 'O(n)',
      average: 'O(n^2)',
      worst: 'O(n^2)',
      space: 'O(1)',
    },
    stable: true,
    sceneId: 'yard',
    defaultInput: { values: [3, 1, 2] },
    validateInput: () => ({ ok: true }),
    generateSteps: () => [],
    Renderer: () => null,
  };

  const dummyGraphModule: AnyAlgorithmModule = {
    id: 'dummy-bfs',
    category: 'graph',
    nameKey: 'algorithms.dummyBfs.name',
    pseudocode: ['enqueue start', 'while queue'],
    complexity: {
      worst: 'O(V + E)',
      space: 'O(V)',
    },
    sceneId: 'city',
    defaultInput: { nodes: [], edges: [], start: 'A', directed: false },
    validateInput: () => ({ ok: true }),
    generateSteps: () => [],
    Renderer: () => null,
  };

  beforeEach(() => {
    clearRegistry();
  });

  it('should register and retrieve an algorithm module by ID', () => {
    expect(getAlgorithmById('dummy-sort')).toBeUndefined();
    registerAlgorithm(dummyModule);
    expect(getAlgorithmById('dummy-sort')).toBe(dummyModule);
  });

  it('should list algorithm modules filtered by category', () => {
    registerAlgorithm(dummyModule);
    registerAlgorithm(dummyGraphModule);

    const sortingMods = listAlgorithmsByCategory('sorting');
    const graphMods = listAlgorithmsByCategory('graph');
    const searchingMods = listAlgorithmsByCategory('searching');

    expect(sortingMods).toEqual([dummyModule]);
    expect(graphMods).toEqual([dummyGraphModule]);
    expect(searchingMods).toEqual([]);
  });

  it('should clear all registered modules', () => {
    registerAlgorithm(dummyModule);
    expect(getAlgorithmById('dummy-sort')).toBeDefined();
    clearRegistry();
    expect(getAlgorithmById('dummy-sort')).toBeUndefined();
  });
});
