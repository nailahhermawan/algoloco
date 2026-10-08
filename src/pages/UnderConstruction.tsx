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

  return (
    <CuttingMat>
      <div className="flex flex-col min-h-screen">
        {/* Top bar with destination ticket */}
        <header className="flex justify-end p-4 sm:p-6">
          {/* Destination ticket */}
          <div className="bg-paper-ticket shadow-paper rounded-sm overflow-hidden max-w-xs">
            <div className="flex items-stretch">
              {/* Category color strip */}
              <div className="w-1.5 bg-rail-coral flex-shrink-0" />
              <div className="px-3 py-2">
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
                className="flex items-center px-3 border-l border-dashed border-ink/15 text-xs text-ink/60 hover:text-rail-coral transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-1 rounded-r-sm"
              >
                {t('nav.backToYard')}
              </Link>
            </div>
          </div>
        </header>

        {/* Main content: folded map with unfinished rail scene */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 -mt-8">
          {/* Folded map paper */}
          <div className="bg-paper-map shadow-paper rounded-sm w-full max-w-2xl relative overflow-hidden">
            {/* Center fold line */}
            <div
              className="absolute top-0 bottom-0 left-1/2 w-px bg-ink/5"
              aria-hidden="true"
            />
            {/* Lifted corner */}
            <div
              className="absolute top-0 left-0 w-8 h-8 bg-paper-map-light"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
              aria-hidden="true"
            />

            {/* Rail scene */}
            <div className="px-6 sm:px-10 py-10 sm:py-14">
              {/* Compass and scale — decorative */}
              <div className="flex justify-between items-start mb-8" aria-hidden="true">
                <span className="text-[10px] font-mono text-ink/20 tracking-wider">N</span>
                <div className="flex items-center gap-1">
                  <div className="w-12 h-px bg-ink/15" />
                  <span className="text-[8px] font-mono text-ink/20">200m</span>
                </div>
              </div>

              {/* The scene: rail line with illustrations */}
              <div className="relative">
                {/* Rail track */}
                <div className="relative h-16 flex items-center" aria-hidden="true">
                  {/* Rail lines */}
                  <div className="absolute left-0 right-24 top-1/2 -translate-y-[3px] h-[2px] bg-ink/30" />
                  <div className="absolute left-0 right-24 top-1/2 translate-y-[3px] h-[2px] bg-ink/30" />
                  {/* Crossties */}
                  <div className="absolute left-0 right-24 top-1/2 -translate-y-[5px] flex justify-between h-[10px]">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="w-[2px] h-[10px] bg-ink/15" />
                    ))}
                  </div>
                  {/* Dashed unfinished section at end */}
                  <div
                    className="absolute right-4 w-20 top-1/2 -translate-y-px h-[2px]"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(to right, var(--color-ink) 0, var(--color-ink) 4px, transparent 4px, transparent 8px)',
                      opacity: 0.15,
                    }}
                  />
                </div>

                {/* Illustrations positioned along the track */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-end gap-1">
                  <MutedTrain />
                </div>
                <div className="absolute right-32 sm:right-40 top-1/2 -translate-y-1/2">
                  <RedSignal />
                </div>
                <div className="absolute right-20 sm:right-28 top-1/2 -translate-y-[60%]">
                  <RailBarrier />
                </div>
                <div className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2">
                  <BufferStop />
                </div>
              </div>

              {/* SOON stamp — positioned in the upper-right area of the map */}
              <div className="flex justify-end -mt-4 mr-2">
                <SoonStamp />
              </div>
            </div>
          </div>

          {/* One sentence message */}
          <p className="text-paper-map text-lg sm:text-xl font-bold text-center mt-8 mb-6">
            {t('pages.underConstruction.message')}
          </p>

          {/* Back to yard button (ticket stub style) */}
          <Link
            to="/"
            className="inline-flex items-center bg-paper-ticket shadow-paper hover:shadow-paper-lifted transition-shadow rounded-sm overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-2 focus-visible:ring-offset-mat"
          >
            <span className="px-4 py-2.5 text-sm font-medium text-ink">
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
