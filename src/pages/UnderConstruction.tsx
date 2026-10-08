import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '@/i18n';
import { CuttingMat, RailFooter } from '@/components/home';
import { SoonStamp, RailConstructionScene } from '@/components/desk/illustrations';

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
 * Visual layout matches docs/design/under-construction.png and user design reference:
 * - Full-screen edge-to-edge cutting mat
 * - Header: Tactile branding slip on the left, slim ticket-shaped badge on the right
 * - Main: Folded cream paper map with rich railway construction illustration
 * - Large headline message and ticket-stub back button
 * - Precise railway footer at the bottom
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
        {/* Top bar with branding slip on left and slim ticket on right */}
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

          {/* Slim destination ticket (shaped like home ticket, compact & thin) */}
          <div className="relative bg-paper-ticket shadow-paper rounded-sm flex items-center h-12 overflow-hidden select-none pl-4 pr-1">
            {/* Semicircular punch cutout on left edge */}
            <span
              className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-mat z-20"
              aria-hidden="true"
            />

            {/* Category color strip */}
            <div className="w-1.5 h-7 bg-rail-coral rounded-xs shrink-0 mr-3" />

            {/* Ticket metadata & algorithm name */}
            <div className="flex flex-col justify-center min-w-0 pr-4">
              <span className="block text-[9px] font-mono tracking-wider text-ink/50 uppercase font-bold truncate">
                {ticketLabel}
              </span>
              <span className="block text-[13px] font-bold text-ink leading-tight truncate">
                {t(nameKey)}
              </span>
            </div>

            {/* Perforation line with top & bottom notches */}
            <div className="relative flex flex-col items-center justify-between h-full shrink-0" aria-hidden="true">
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-mat z-20" />
              <span className="h-full border-r border-dashed border-ink/20" />
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-mat z-20" />
            </div>

            {/* Stub with back-to-yard link */}
            <Link
              to="/"
              className="flex items-center px-3 py-1 text-xs font-semibold text-ink/70 hover:text-rail-coral transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal rounded-sm"
            >
              {t('nav.backToYard')}
            </Link>
          </div>
        </header>

        {/* Main content: folded map with rich rail construction illustration */}
        <main className="flex-1 flex flex-col items-center justify-center my-4">
          {/* Folded map paper card */}
          <div className="bg-paper-map shadow-paper rounded-sm w-full max-w-4xl relative overflow-hidden border border-ink/10">
            {/* Center paper fold line */}
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-r from-ink/10 via-white/30 to-ink/5 pointer-events-none z-20"
              aria-hidden="true"
            />
            {/* Lifted corner */}
            <div
              className="absolute top-0 left-0 w-8 h-8 bg-paper-map-light"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
              aria-hidden="true"
            />

            {/* Map Header: Compass & scale on left, SOON rubber stamp on right */}
            <div className="relative z-10 flex items-start justify-between px-6 pt-5">
              {/* Compass & scale */}
              <div className="flex items-center gap-3" aria-hidden="true">
                <div className="w-6 h-6 rounded-full border border-ink/25 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-ink/40 font-bold">N</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-12 h-[1.5px] bg-ink/25" />
                  <span className="text-[9px] font-mono text-ink/40">0 - 200m</span>
                </div>
              </div>

              {/* Rubber stamp */}
              <div className="pointer-events-none">
                <SoonStamp />
              </div>
            </div>

            {/* The complete rail construction scene illustration */}
            <div className="px-4 sm:px-8 py-2 relative z-10">
              <RailConstructionScene />
            </div>

            {/* Bottom metadata line */}
            <div
              className="flex justify-between items-center px-6 py-2.5 border-t border-ink/10 text-[9px] sm:text-[10px] font-mono tracking-widest text-ink/40 uppercase relative z-10"
              aria-hidden="true"
            >
              <span>GRID: 48°12&apos;N 16°22&apos;E</span>
              <span className="hidden sm:inline">ALGO-SECTOR // SORTING-YARD</span>
              <span>PLATE: NO. IV</span>
            </div>
          </div>

          {/* One sentence message */}
          <h1 className="text-white text-xl sm:text-2xl font-bold text-center mt-6 mb-5 drop-shadow-sm">
            {t('pages.underConstruction.message')}
          </h1>

          {/* Back to yard button (ticket stub style with notch cutouts) */}
          <Link
            to="/"
            className="group relative inline-flex items-center bg-paper-ticket shadow-paper hover:shadow-paper-lifted transition-shadow rounded-sm overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal"
          >
            {/* Semicircular notches on the divider */}
            <span
              className="absolute -top-1.5 right-[125px] -translate-x-1/2 w-3 h-3 rounded-full bg-mat z-20"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1.5 right-[125px] -translate-x-1/2 w-3 h-3 rounded-full bg-mat z-20"
              aria-hidden="true"
            />

            <span className="px-5 py-2.5 text-sm font-bold text-ink">
              {t('pages.underConstruction.backButton')}
            </span>
            <span className="px-3.5 py-2.5 border-l border-dashed border-ink/15 text-[10px] font-mono tracking-wider text-ink/50 uppercase">
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
