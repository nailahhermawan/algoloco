import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '@/i18n';
import { CuttingMat, RailFooter } from '@/components/home';
import {
  BufferStop,
  RailBarrier,
  RedSignal,
  MutedTrain,
  SoonStamp,
} from '@/components/desk/illustrations';

export interface UnderConstructionProps {
  /** i18n key for the destination name (e.g. 'algorithms.bfs') */
  nameKey: string;
  /** Ticket number shown on the destination ticket */
  ticketNumber: number;
  /** Category label for the ticket (e.g. 'SORTING', 'GRAPH') */
  category: string;
}

/**
 * Reusable "under construction" page shown for destinations that are
 * known in the catalog but not yet implemented in the engine registry.
 *
 * Layout matches the accepted design reference (docs/design/under-construction.png):
 * cutting mat → destination ticket (top-right) → folded map with unfinished rail →
 * one sentence → back button → rail footer.
 */
export const UnderConstruction: React.FC<UnderConstructionProps> = ({
  nameKey,
  ticketNumber,
  category,
}) => {
  const ticketLabel = t('pages.underConstruction.ticketLabel', {
    number: ticketNumber,
    category: category.toUpperCase(),
  });

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
    <CuttingMat>
      <div className="flex flex-col min-h-screen p-4 sm:p-8 justify-between">
        {/* Top bar with branding slip on left and destination ticket on right */}
        <header className="flex flex-wrap items-center justify-between gap-4 w-full mb-4">
          {/* Top Left Branding slip */}
          <Link
            to="/"
            className="relative bg-paper-ticket shadow-paper px-4 py-2 rounded-sm -rotate-[0.5deg] motion-reduce:rotate-0 flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
          >
            <div className="flex items-baseline text-xl font-extrabold tracking-tight text-ink select-none">
              <span>alg</span>
              <Wheel />
              <span>l</span>
              <Wheel />
              <span>c</span>
              <Wheel />
            </div>
            <div className="h-4 w-px bg-ink/15" aria-hidden="true" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink/60">
              DEPOT · 01
            </span>
          </Link>

          {/* Destination ticket */}
          <div className="bg-paper-ticket shadow-paper rounded-sm overflow-hidden flex items-stretch">
            {/* Category color strip */}
            <div className="w-1.5 bg-rail-coral flex-shrink-0" />
            <div className="px-3 py-1.5">
              <span className="block text-[10px] font-mono tracking-wider text-ink/50 uppercase">
                {ticketLabel}
              </span>
              <span className="block text-sm font-bold text-ink leading-tight mt-0.5">
                {t(nameKey)}
              </span>
            </div>
            {/* Back-to-yard link (stub side) */}
            <Link
              to="/"
              className="flex items-center px-3 border-l border-dashed border-ink/15 text-xs text-ink/60 hover:text-rail-coral transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal rounded-r-sm font-medium"
            >
              {t('nav.backToYard')}
            </Link>
          </div>
        </header>

        {/* Main content: folded map with unfinished rail scene */}
        <main className="flex-1 flex flex-col items-center justify-center my-4">
          {/* Folded map paper */}
          <div className="bg-paper-map shadow-paper rounded-sm w-full max-w-3xl relative overflow-hidden border border-ink/10">
            {/* Soft Cartographic Underlay Wash */}
            <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden" aria-hidden="true">
              <svg className="absolute top-1/4 -left-10 w-[120%] h-36" fill="none" preserveAspectRatio="none" viewBox="0 0 800 120">
                <path d="M 0 60 Q 200 100, 400 50 T 800 65" fill="none" stroke="#d8e8dc" strokeWidth="50" strokeLinecap="round" />
              </svg>
            </div>

            {/* Center fold line */}
            <div
              className="absolute top-0 bottom-0 left-1/2 w-px bg-ink/10 pointer-events-none z-10"
              aria-hidden="true"
            />
            {/* Lifted corner */}
            <div
              className="absolute top-0 left-0 w-8 h-8 bg-paper-map-light"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
              aria-hidden="true"
            />

            {/* SOON stamp — upper-right area of the map */}
            <div className="absolute top-6 right-6 z-20 pointer-events-none">
              <SoonStamp />
            </div>

            {/* Rail scene */}
            <div className="px-6 sm:px-10 pt-8 pb-4 relative z-10">
              {/* Compass and scale — decorative */}
              <div className="flex justify-between items-start mb-6" aria-hidden="true">
                <div className="w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-ink/40 font-bold">N</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-12 h-px bg-ink/20" />
                  <span className="text-[8px] font-mono text-ink/40">0 - 200m</span>
                </div>
              </div>

              {/* The scene: rail line with illustrations */}
              <div className="relative my-8">
                {/* Rail track */}
                <div className="relative h-16 flex items-center" aria-hidden="true">
                  {/* HUB 01 box tag on track start */}
                  <div className="absolute left-0 z-20 px-2 py-0.5 border border-ink/40 bg-paper-ticket font-mono text-[9px] text-ink font-bold tracking-wider rounded-xs shadow-sm">
                    HUB 01
                  </div>

                  {/* Rail lines */}
                  <div className="absolute left-16 right-24 top-1/2 -translate-y-[3px] h-[2px] bg-ink/40" />
                  <div className="absolute left-16 right-24 top-1/2 translate-y-[3px] h-[2px] bg-ink/40" />
                  {/* Crossties */}
                  <div className="absolute left-16 right-24 top-1/2 -translate-y-[5px] flex justify-between h-[10px]">
                    {Array.from({ length: 22 }).map((_, i) => (
                      <div key={i} className="w-[2px] h-[10px] bg-ink/25" />
                    ))}
                  </div>
                  {/* Dashed unfinished section at end */}
                  <div
                    className="absolute right-4 w-20 top-1/2 -translate-y-px h-[2px]"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(to right, var(--color-ink) 0, var(--color-ink) 4px, transparent 4px, transparent 8px)',
                      opacity: 0.25,
                    }}
                  />
                </div>

                {/* Illustrations positioned along the track */}
                <div className="absolute left-28 top-1/2 -translate-y-1/2 flex items-end">
                  <MutedTrain />
                </div>
                <div className="absolute right-36 sm:right-44 top-1/2 -translate-y-1/2">
                  <RedSignal />
                </div>
                <div className="absolute right-24 sm:right-32 top-1/2 -translate-y-[60%]">
                  <RailBarrier />
                </div>
                <div className="absolute right-12 sm:right-16 top-1/2 -translate-y-1/2">
                  <BufferStop />
                </div>
              </div>

              {/* Bottom metadata line */}
              <div className="flex justify-between items-center pt-4 border-t border-ink/10 text-[9px] sm:text-[10px] font-mono tracking-widest text-ink/40 uppercase" aria-hidden="true">
                <span>GRID: 48°12&apos;N 16°22&apos;E</span>
                <span className="hidden sm:inline">ALGO-SECTOR // SORTING-YARD</span>
                <span>PLATE: NO. IV</span>
              </div>
            </div>
          </div>

          {/* One sentence message */}
          <h1 className="text-white text-xl sm:text-2xl font-bold text-center mt-6 mb-5 drop-shadow-sm">
            {t('pages.underConstruction.message')}
          </h1>

          {/* Back to yard button (ticket stub style) */}
          <Link
            to="/"
            className="group relative inline-flex items-center bg-paper-ticket shadow-paper hover:shadow-paper-lifted transition-shadow rounded-sm overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal"
          >
            {/* Notch cutouts */}
            <span className="absolute -top-1.5 left-[138px] -translate-x-1/2 w-3 h-3 rounded-full bg-mat z-20" aria-hidden="true" />
            <span className="absolute -bottom-1.5 left-[138px] -translate-x-1/2 w-3 h-3 rounded-full bg-mat z-20" aria-hidden="true" />

            <span className="px-4 py-2.5 text-sm font-bold text-ink">
              {t('pages.underConstruction.backButton')}
            </span>
            <span className="px-3 py-2.5 border-l border-dashed border-ink/15 text-[10px] font-mono tracking-wider text-ink/50 uppercase">
              {t('pages.underConstruction.platform', { number: '00' })}
            </span>
          </Link>
        </main>

        <RailFooter />
      </div>
    </CuttingMat>
  );
};

export default UnderConstruction;
