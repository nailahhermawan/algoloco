import React from 'react';
import { t } from '@/i18n';

/**
 * Algoloco wordmark with train-wheel "o" SVG glyphs and "Drafting Yard" label.
 * Tactile cardstock slip style, slightly rotated.
 */
export const HeaderSlip: React.FC = () => {
  const Wheel: React.FC = () => (
    <span className="inline-flex items-center justify-center mx-[1px] -translate-y-px">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="text-ink"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
        <line x1="2" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" />
        <line x1="17" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );

  return (
    <header className="flex items-center justify-between w-full mb-4">
      <div className="relative bg-paper-ticket shadow-paper px-4 py-2 rounded-sm -rotate-[0.5deg] motion-reduce:rotate-0 flex items-center gap-3">
        <div className="flex items-baseline text-xl font-extrabold tracking-tight text-ink select-none">
          <span>alg</span>
          <Wheel />
          <span>l</span>
          <Wheel />
          <span>c</span>
          <Wheel />
        </div>
        <div className="h-4 w-px bg-ink/15" aria-hidden="true" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/60">
          {t('app.draftingYard')}
        </span>
      </div>
      <div className="flex items-center gap-2 text-[#c0edd4]/60 font-mono text-[11px] select-none" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-[#c0edd4]/40 inline-block" />
        <span>MAT: 820×440mm</span>
      </div>
    </header>
  );
};

export default HeaderSlip;
