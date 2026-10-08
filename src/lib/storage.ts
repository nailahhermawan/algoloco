/**
 * Thin localStorage wrapper per BLUEPRINT.md Section 5.6.
 * All access wrapped in try/catch; the app works with storage unavailable.
 */

const STORAGE_KEYS = {
  lastAlgorithm: 'algoloco:lastAlgorithm',
  language: 'algoloco:language',
} as const;

function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage unavailable — silently ignore
  }
}

function safeRemove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // Storage unavailable — silently ignore
  }
}

export function getLastAlgorithm(): string | null {
  return safeGet(STORAGE_KEYS.lastAlgorithm);
}

export function setLastAlgorithm(algorithmId: string): void {
  safeSet(STORAGE_KEYS.lastAlgorithm, algorithmId);
}

export function clearLastAlgorithm(): void {
  safeRemove(STORAGE_KEYS.lastAlgorithm);
}

export function getSavedLanguage(): string | null {
  return safeGet(STORAGE_KEYS.language);
}

export function setSavedLanguage(locale: string): void {
  safeSet(STORAGE_KEYS.language, locale);
}
