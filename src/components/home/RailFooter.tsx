import React from 'react';
import { t } from '@/i18n';

export interface RailFooterProps {
  className?: string;
}

/**
 * RailFooter renders the railway track, origami locomotive, and author nameplate
 * at the bottom of the Home page.
 */
export const RailFooter: React.FC<RailFooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`relative w-full pt-8 pb-6 select-none ${className}`}
      role="contentinfo"
    >
      {/* Horizontal rail track container */}
      <div className="relative w-full h-8 flex items-center">
        {/* Wood crossties across the full width (~20 ties) */}
        <div
          className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none"
          aria-hidden="true"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="w-[2px] h-3 bg-paper-map/20"
              data-testid="crosstie"
            />
          ))}
        </div>

        {/* Two thin parallel rails */}
        <div
          className="absolute inset-x-0 top-2 h-[1px] bg-paper-map/30"
          aria-hidden="true"
          data-testid="top-rail"
        />
        <div
          className="absolute inset-x-0 bottom-2 h-[1px] bg-paper-map/30"
          aria-hidden="true"
          data-testid="bottom-rail"
        />

        {/* Decorative origami train on the left */}
        <div
          className="absolute left-4 sm:left-12 -top-2 z-10 flex items-center gap-3"
          aria-hidden="true"
        >
          <svg
            width="34"
            height="20"
            viewBox="0 0 34 20"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            {/* Cab in paper-ticket color with ink stroke */}
            <polygon
              points="2,14 10,2 26,2 32,8 32,14"
              fill="currentColor"
              className="text-paper-ticket stroke-ink"
              strokeWidth="1"
            />
            {/* Fold crease */}
            <polygon
              points="10,2 26,2 20,14 10,14"
              fill="currentColor"
              className="text-paper-map"
            />
            {/* Cab window */}
            <rect
              x="22"
              y="5"
              width="6"
              height="4"
              fill="currentColor"
              className="text-ink"
            />
            {/* Chimney */}
            <polygon
              points="6,4 10,4 9,8 7,8"
              fill="currentColor"
              className="text-ink/60"
            />
            {/* Three wheels */}
            <circle cx="8" cy="15" r="2.5" fill="currentColor" className="text-ink" />
            <circle cx="18" cy="15" r="2.5" fill="currentColor" className="text-ink" />
            <circle cx="28" cy="15" r="2.5" fill="currentColor" className="text-ink" />
          </svg>

          {/* Shunter label */}
          <span className="text-[10px] font-mono uppercase tracking-widest text-paper-map/40 hidden sm:inline-block">
            {t('footer.shunter')}
          </span>
        </div>

        {/* Station nameplate on the right */}
        <div className="absolute right-4 sm:right-8 -top-1.5 z-10">
          <a
            href="https://github.com/nailahhermawan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub: @nailahhermawan"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-paper-ticket text-ink shadow-paper border border-ink/10 rotate-[0.8deg] motion-reduce:rotate-0 hover:border-ink/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal transition-transform duration-150 motion-reduce:transition-none hover:-translate-y-0.5"
          >
            {/* Small teal dot */}
            <span
              className="w-1.5 h-1.5 rounded-full bg-rail-teal shrink-0"
              aria-hidden="true"
            />

            {/* GitHub SVG icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="shrink-0 text-ink"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>

            {/* Author handle */}
            <span className="text-[11px] font-mono font-semibold text-ink tracking-tight">
              @nailahhermawan
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default RailFooter;
