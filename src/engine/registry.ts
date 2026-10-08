import type { AlgorithmModule, Category } from './types';

// Registry stores heterogeneous algorithm modules whose inputs and states vary by algorithm.
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Heterogeneous algorithm modules container
export type AnyAlgorithmModule = AlgorithmModule<any, any>;

class AlgorithmRegistry {
  private modules = new Map<string, AnyAlgorithmModule>();

  public register(module: AnyAlgorithmModule): void {
    this.modules.set(module.id, module);
  }

  public getById(id: string): AnyAlgorithmModule | undefined {
    return this.modules.get(id);
  }

  public listByCategory(category: Category): AnyAlgorithmModule[] {
    return Array.from(this.modules.values()).filter((mod) => mod.category === category);
  }

  public listAll(): AnyAlgorithmModule[] {
    return Array.from(this.modules.values());
  }

  public clear(): void {
    this.modules.clear();
  }
}

export const registry = new AlgorithmRegistry();

export function getAlgorithmById(id: string): AnyAlgorithmModule | undefined {
  return registry.getById(id);
}

export function listAlgorithmsByCategory(category: Category): AnyAlgorithmModule[] {
  return registry.listByCategory(category);
}

export function registerAlgorithm(module: AnyAlgorithmModule): void {
  registry.register(module);
}

export function clearRegistry(): void {
  registry.clear();
}
