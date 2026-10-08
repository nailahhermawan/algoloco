import React from 'react';
import { t } from '@/i18n';
import type { Category } from '@/engine/types';

export type FilterValue = Category | 'all';

interface CategoryFilterProps {
  active: FilterValue;
  onFilter: (value: FilterValue) => void;
  count: number;
}

const categories: { value: FilterValue; labelKey: string; colorClass: string }[] = [
  { value: 'all', labelKey: 'filters.all', colorClass: '' },
  { value: 'sorting', labelKey: 'filters.sorting', colorClass: 'text-rail-coral' },
  { value: 'searching', labelKey: 'filters.searching', colorClass: 'text-rail-mustard' },
  { value: 'graph', labelKey: 'filters.graph', colorClass: 'text-rail-blue' },
  { value: 'analysis', labelKey: 'filters.analysis', colorClass: 'text-rail-teal' },
];

/** Subtle random-ish rotation angles for sticker feel */
const rotations = ['-rotate-[0.75deg]', 'rotate-[1.2deg]', '-rotate-[1deg]', 'rotate-[0.8deg]', '-rotate-[0.5deg]'];

/**
 * Category filter sticker tabs with yard count.
 */
export const CategoryFilter: React.FC<CategoryFilterProps> = ({ active, onFilter, count }) => {
  return (
    <div
      className="flex flex-wrap items-center gap-3 mb-4 select-none"
      id="tickets-yard"
      role="tablist"
      aria-label={t('nav.algorithms')}
    >
      {categories.map((cat, i) => {
        const isActive = active === cat.value;
        const rotation = rotations[i] ?? '';

        return (
          <button
            key={cat.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilter(cat.value)}
            className={`
              px-3.5 py-1 text-[13px] rounded-sm transition-all motion-reduce:transition-none
              focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-1
              ${rotation} motion-reduce:rotate-0
              ${
                isActive
                  ? 'bg-rail-coral text-paper-ticket font-bold shadow-paper-lifted'
                  : `bg-paper-ticket ${cat.colorClass || 'text-ink'} font-semibold shadow-paper hover:-translate-y-px motion-reduce:hover:translate-y-0`
              }
            `}
          >
            {isActive && cat.value !== 'all' && (
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-paper-ticket mr-1.5" aria-hidden="true" />
            )}
            {t(cat.labelKey)}
          </button>
        );
      })}

      {/* Yard counter */}
      <span className="ml-auto text-[11px] font-mono font-bold tracking-wider text-[#c0edd4]/80" aria-live="polite">
        {t('filters.yardCount', { count: String(count).padStart(2, '0') })}
      </span>
    </div>
  );
};

export default CategoryFilter;
