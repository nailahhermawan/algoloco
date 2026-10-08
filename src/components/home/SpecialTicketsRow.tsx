import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '@/i18n';
import { getCatalogEntry } from '@/lib/catalog';
import { getLastAlgorithm } from '@/lib/storage';

/** Semicircular notch overlays */
const Notches: React.FC = () => (
  <>
    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-mat z-20" aria-hidden="true" />
    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-mat z-20" aria-hidden="true" />
  </>
);

/**
 * Row of three special tickets: Duel, Random, Continue.
 * Continue only shown when a last-opened algorithm exists in localStorage.
 */
export const SpecialTicketsRow: React.FC = () => {
  const lastAlgoId = getLastAlgorithm();
  const lastEntry = lastAlgoId ? getCatalogEntry(lastAlgoId) : undefined;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6">
      {/* DUEL */}
      <Link
        to="/duel"
        className="group relative bg-paper-ticket border border-rail-mustard/40 rounded-sm shadow-paper hover:shadow-paper-lifted transition-shadow motion-reduce:transition-none flex items-stretch h-36 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-2 focus-visible:ring-offset-mat"
      >
        <div className="w-2 bg-rail-mustard shrink-0" />
        <div className="relative flex-1 p-3.5 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[9px] font-bold tracking-widest uppercase text-rail-mustard">
                {t('special.duelLabel')}
              </span>
              <h3 className="text-lg font-bold leading-tight text-ink mt-0.5">{t('special.duel')}</h3>
              <p className="text-[12px] text-ink/50 mt-0.5">{t('special.duelSubtitle')}</p>
            </div>
            <div className="w-9 h-9 flex items-center justify-center opacity-85 shrink-0" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M5 23 L23 5 M19 5 L23 5 L23 9" className="stroke-rail-mustard" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 23 L5 5 M9 5 L5 5 L5 9" className="stroke-ink" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14" cy="14" r="3.5" className="fill-paper-ticket stroke-ink" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-ink/50">HEAD-TO-HEAD</span>
            <span className="w-1 h-1 rounded-full bg-ink/30" aria-hidden="true" />
            <span className="text-[10px] font-mono text-ink/50">2× LANES</span>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-between w-0 shrink-0" aria-hidden="true">
          <Notches />
          <span className="h-full border-r border-dashed border-ink/15" />
        </div>
        <div className="w-24 bg-paper-map-light shrink-0 p-2 flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[12px] text-rail-mustard font-extrabold px-2 py-0.5 border border-rail-mustard/50 rounded-sm bg-paper-ticket">
            {t('special.duelBadge')}
          </span>
          <span className="font-mono text-[13px] text-ink font-bold mt-2" aria-hidden="true">→</span>
        </div>
      </Link>

      {/* RANDOM */}
      <Link
        to="/random"
        className="group relative bg-paper-ticket border border-rail-mustard/40 rounded-sm shadow-paper hover:shadow-paper-lifted transition-shadow motion-reduce:transition-none flex items-stretch h-36 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-2 focus-visible:ring-offset-mat"
      >
        <div className="w-2 bg-rail-teal shrink-0" />
        <div className="relative flex-1 p-3.5 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[9px] font-bold tracking-widest uppercase text-rail-teal">DISPATCH</span>
              <h3 className="text-lg font-bold leading-tight text-ink mt-0.5">{t('special.random')}</h3>
              <p className="text-[12px] text-ink/50 mt-0.5">{t('special.randomSubtitle')}</p>
            </div>
            <div className="w-9 h-9 flex items-center justify-center opacity-85 shrink-0" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <rect x="3" y="3" width="20" height="20" rx="2" className="fill-paper-ticket stroke-ink" strokeWidth="2" />
                <circle cx="8" cy="8" r="1.8" className="fill-rail-teal" />
                <circle cx="18" cy="8" r="1.8" className="fill-ink" />
                <circle cx="13" cy="13" r="1.8" className="fill-rail-coral" />
                <circle cx="8" cy="18" r="1.8" className="fill-ink" />
                <circle cx="18" cy="18" r="1.8" className="fill-rail-teal" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-ink/50">{t('special.randomLabel')}</span>
            <span className="w-1 h-1 rounded-full bg-ink/30" aria-hidden="true" />
            <span className="text-[10px] font-mono text-ink/50">ROLL</span>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-between w-0 shrink-0" aria-hidden="true">
          <Notches />
          <span className="h-full border-r border-dashed border-ink/15" />
        </div>
        <div className="w-24 bg-paper-map-light shrink-0 p-2 flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[11px] text-ink/50 font-bold uppercase tracking-wider">
            {t('special.randomBadge')}
          </span>
          <span className="font-mono text-[13px] text-ink font-bold mt-2" aria-hidden="true">→</span>
        </div>
      </Link>

      {/* CONTINUE — only shown when there is a saved algorithm */}
      {lastEntry && (
        <Link
          to={`/algo/${lastEntry.id}`}
          className="group relative bg-paper-ticket border border-rail-mustard/40 rounded-sm shadow-paper hover:shadow-paper-lifted transition-shadow motion-reduce:transition-none flex items-stretch h-36 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-2 focus-visible:ring-offset-mat"
        >
          <div className="w-2 bg-rail-coral shrink-0" />
          <div className="relative flex-1 p-3.5 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9px] font-bold tracking-widest uppercase text-rail-coral">
                  {t('special.continueLabel')}
                </span>
                <h3 className="text-lg font-bold leading-tight text-ink mt-0.5">{t('special.continue')}</h3>
                <p className="text-[12px] text-ink/50 mt-0.5">
                  {t('special.continueResume', {
                    name: t(lastEntry.nameKey),
                    number: String(lastEntry.ticketNumber).padStart(2, '0'),
                  })}
                </p>
              </div>
              <div className="w-9 h-9 flex items-center justify-center opacity-85 shrink-0" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <circle cx="13" cy="13" r="10" className="fill-rail-coral" />
                  <polygon points="11,9 18,13 11,17" className="fill-paper-ticket" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-ink/50">
                {t('special.continueLabel')}
              </span>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-between w-0 shrink-0" aria-hidden="true">
            <Notches />
            <span className="h-full border-r border-dashed border-ink/15" />
          </div>
          <div className="w-24 bg-paper-map-light shrink-0 p-2 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-[11px] text-rail-coral font-bold uppercase tracking-wider">
              {t('special.continueBadge')}
            </span>
            <span className="font-mono text-[13px] text-rail-coral font-bold mt-2" aria-hidden="true">→</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SpecialTicketsRow;
