import React from 'react';

export interface CuttingMatProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Top ruler labels: 00 through 100 with step of 5 (21 marks).
 */
const TOP_RULER_MARKS: readonly string[] = [
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
  '60',
  '65',
  '70',
  '75',
  '80',
  '85',
  '90',
  '95',
  '100',
];

/**
 * Left ruler labels: 00 through 70 with step of 5 (15 marks).
 */
const LEFT_RULER_MARKS: readonly string[] = [
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
  '60',
  '65',
  '70',
];

/**
 * Home page cutting mat background component.
 *
 * Renders a full-viewport self-healing cutting mat with:
 * - A two-layer grid (minor grid every ~10px at low opacity, major grid every ~50px brighter)
 * - Ruler measurements along the top and left edges
 * - Content container with relative z-10 stacking
 *
 * Conforms to BLUEPRINT.md section 6.4 paper-craft rules and flat-color design tokens.
 */
export const CuttingMat: React.FC<CuttingMatProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative min-h-screen w-full bg-mat overflow-hidden ${className}`.trim()}>
      {/* Decorative background overlay: fine grid + rulers */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--color-cutting-mat-grid) 40%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--color-cutting-mat-grid) 40%, transparent) 1px, transparent 1px),
            linear-gradient(to right, var(--color-cutting-mat-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-cutting-mat-grid) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px, 10px 10px, 50px 50px, 50px 50px',
        }}
      >
        {/* Top ruler bar */}
        <div
          className="absolute top-0 left-0 right-0 h-6 flex items-center justify-between border-b border-paper-map/10 px-6 sm:px-8 font-mono text-[9px] text-paper-map/30 pointer-events-none overflow-hidden select-none"
          aria-hidden="true"
        >
          {TOP_RULER_MARKS.map((mark) => (
            <span key={`top-${mark}`} className="shrink-0">
              {mark}
            </span>
          ))}
        </div>

        {/* Left ruler bar */}
        <div
          className="absolute top-6 bottom-0 left-0 w-6 flex flex-col items-center justify-between border-r border-paper-map/10 py-6 sm:py-8 font-mono text-[9px] text-paper-map/30 pointer-events-none overflow-hidden select-none"
          aria-hidden="true"
        >
          {LEFT_RULER_MARKS.map((mark) => (
            <span key={`left-${mark}`} className="shrink-0">
              {mark}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CuttingMat;
