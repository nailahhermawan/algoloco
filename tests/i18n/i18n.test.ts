import { beforeEach, describe, expect, it } from 'vitest';
import { getLocale, setLocale, t } from '@/i18n';
import { DEFAULT_LANGUAGE } from '@/lib/config';

describe('i18n helper', () => {
  beforeEach(() => {
    setLocale(DEFAULT_LANGUAGE);
  });

  it('translates nested keys in default locale (id)', () => {
    expect(t('pages.home.title')).toBe('Meja Kerja Algoritma');
    expect(t('pages.notFound.title')).toBe('Stasiun Tidak Ditemukan');
  });

  it('interpolates parameters correctly', () => {
    expect(t('pages.lesson.title', { id: 'big-o' })).toBe('Pelajaran: big-o');
    expect(t('pages.algorithm.title', { id: 'bfs' })).toBe('Algoritma: bfs');
  });

  it('switches locales and translates accordingly', () => {
    setLocale('en');
    expect(getLocale()).toBe('en');
    expect(t('pages.home.title')).toBe('Algorithm Desk');
    expect(t('pages.lesson.title', { id: 'big-o' })).toBe('Lesson: big-o');
  });

  it('falls back to key if translation is missing', () => {
    expect(t('non.existent.key')).toBe('non.existent.key');
  });
});
