import React from 'react';

/**
 * Rail footer with crossties and author GitHub link.
 * Shared across all pages. Matches the blueprint Section 4.2 footer spec.
 */
export const RailFooter: React.FC = () => {
  return (
    <footer className="mt-auto pt-8 pb-4">
      {/* Rail line with crossties */}
      <div className="relative mx-4 sm:mx-8" aria-hidden="true">
        {/* Rails */}
        <div className="h-[2px] bg-paper-map/30" />
        <div className="mt-[4px] h-[2px] bg-paper-map/30" />
        {/* Crossties */}
        <div className="absolute inset-0 flex justify-between items-center -top-[2px] h-[10px]">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-[2px] h-[10px] bg-paper-map/20"
            />
          ))}
        </div>
      </div>

      {/* Author link */}
      <div className="flex justify-end px-4 sm:px-8 mt-3">
        <a
          href="https://github.com/nailahhermawan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-paper-map/60 hover:text-paper-map/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-2 focus-visible:ring-offset-mat rounded px-2 py-1"
        >
          {/* GitHub icon — simple SVG, not an emoji */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          @nailahhermawan
        </a>
      </div>
    </footer>
  );
};

export default RailFooter;
