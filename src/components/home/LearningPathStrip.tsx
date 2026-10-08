import React from 'react';
import { t } from '@/i18n';

interface LessonStation {
  nameKey: string;
  status: 'passed' | 'current' | 'unvisited';
}

const stations: LessonStation[] = [
  { nameKey: 'lessons.bigO', status: 'passed' },
  { nameKey: 'lessons.readTheScreen', status: 'passed' },
  { nameKey: 'lessons.duel', status: 'current' },
  { nameKey: 'lessons.treeClimb', status: 'unvisited' },
  { nameKey: 'lessons.theJunction', status: 'unvisited' },
];

/** Small origami paper train SVG for the current station */
const PaperTrain: React.FC = () => (
  <svg
    width="28"
    height="16"
    viewBox="0 0 34 20"
    fill="none"
    className="absolute -top-5 left-1/2 -translate-x-1/2 -rotate-[4deg] motion-reduce:rotate-0"
    aria-hidden="true"
  >
    <polygon
      points="2,14 10,2 26,2 32,8 32,14"
      className="fill-paper-ticket stroke-ink"
      strokeWidth="1"
    />
    <polygon points="10,2 26,2 20,14 10,14" className="fill-paper-map" />
    <rect x="22" y="5" width="6" height="4" className="fill-ink" />
    <polygon points="6,4 10,4 9,8 7,8" className="fill-rail-coral" />
    <circle cx="8" cy="15" r="2.5" className="fill-ink" />
    <circle cx="18" cy="15" r="2.5" className="fill-ink" />
    <circle cx="28" cy="15" r="2.5" className="fill-ink" />
  </svg>
);

/**
 * Learning path strip: folded cream paper map with teal rail line,
 * lesson stations, progress stamps, and Continue button.
 */
export const LearningPathStrip: React.FC = () => {
  return (
    <section className="relative w-full mb-6">
      <div className="relative w-full bg-paper-map/90 rounded-sm shadow-paper overflow-hidden px-4 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Soft Cartographic Underlay: river wash + park wash */}
        <div className="absolute inset-0 pointer-events-none opacity-50 overflow-hidden" aria-hidden="true">
          {/* Park watercolor wash patches */}
          <svg className="absolute -top-10 left-12 w-96 h-48" fill="none" viewBox="0 0 300 150">
            <path d="M10 60 C 60 10, 140 20, 200 60 C 260 100, 280 140, 220 145 C 160 150, 40 130, 10 60 Z" fill="#d8e8dc" />
          </svg>
          <svg className="absolute -bottom-10 right-48 w-80 h-44" fill="none" viewBox="0 0 300 150">
            <path d="M30 40 C 90 20, 180 30, 250 80 C 230 130, 120 140, 50 110 Z" fill="#d8e8dc" />
          </svg>
          {/* Pale blue meandering river */}
          <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 120">
            <path d="M -20 70 Q 250 110, 480 50 T 1020 75" fill="none" stroke="#bcdbe8" strokeLinecap="round" strokeWidth="26" />
          </svg>
        </div>

        {/* Center fold line */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] pointer-events-none bg-gradient-to-r from-ink/10 via-white/20 to-ink/5"
          aria-hidden="true"
        />

        {/* Rail track with stations */}
        <div className="relative z-10 w-full max-w-4xl flex-1 pr-4">
          <div className="relative flex items-center justify-between w-full py-4">
            {/* Track rails */}
            <div
              className="absolute left-6 right-8 top-1/2 -translate-y-1/2 h-4 flex items-center"
              aria-hidden="true"
            >
              {/* Crossties */}
              <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} className="w-[3px] h-3.5 bg-ink/20" />
                ))}
              </div>
              {/* Two rails in teal */}
              <div className="absolute inset-x-0 top-0.5 h-[2.5px] bg-rail-teal" />
              <div className="absolute inset-x-0 bottom-0.5 h-[2.5px] bg-rail-teal" />
            </div>

            {/* Station dots */}
            {stations.map((station) => (
              <div key={station.nameKey} className="relative z-20 flex flex-col items-center">
                {station.status === 'current' && <PaperTrain />}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shadow-paper ${
                    station.status === 'current'
                      ? 'bg-rail-teal'
                      : 'bg-paper-ticket'
                  }`}
                >
                  {station.status === 'passed' ? (
                    <div className="w-3.5 h-3.5 rounded-full bg-rail-teal" />
                  ) : station.status === 'current' ? (
                    <div className="w-3 h-3 rounded-full bg-paper-ticket" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-dashed border-ink/30" />
                  )}

                  {/* PASSED stamp */}
                  {station.status === 'passed' && (
                    <div
                      className="absolute -top-3 -right-3 rotate-[-12deg] motion-reduce:rotate-0 pointer-events-none"
                      aria-hidden="true"
                    >
                      <span className="inline-block px-1 py-px bg-rail-teal/15 text-rail-teal text-[8px] font-mono font-bold tracking-tighter rounded-sm border border-rail-teal/50">
                        {t('stamps.passed')}
                      </span>
                    </div>
                  )}
                </div>
                <span
                  className={`mt-2 text-[13px] whitespace-nowrap ${
                    station.status === 'unvisited'
                      ? 'font-medium text-ink/40'
                      : 'font-semibold text-ink'
                  }`}
                >
                  {t(station.nameKey)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Continue button + Skip link */}
        <div className="relative z-10 flex flex-col items-end gap-2 border-l border-ink/10 pl-6 shrink-0">
          <button
            className="relative bg-paper-ticket text-ink font-bold text-[15px] px-6 py-2.5 shadow-paper hover:shadow-paper-lifted transition-shadow flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-1 rounded-sm"
            type="button"
          >
            {/* Punch notches */}
            <span
              className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-paper-map"
              aria-hidden="true"
            />
            <span
              className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-paper-map"
              aria-hidden="true"
            />
            <span>{t('lessons.continue')}</span>
            <span className="font-mono text-xs" aria-hidden="true">
              →
            </span>
          </button>
          <a
            href="#tickets-yard"
            className="text-[12px] font-medium text-ink/50 hover:text-ink underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal rounded"
          >
            {t('nav.skipToAlgorithms')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearningPathStrip;
