import React from 'react';

/** Signal light showing red. Flat paper-craft style. */
export const RedSignal: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="16"
    height="40"
    viewBox="0 0 16 40"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {/* Post */}
    <rect x="6" y="16" width="4" height="22" rx="1" className="fill-ink/60" />
    {/* Signal head */}
    <rect x="1" y="0" width="14" height="20" rx="3" className="fill-ink/80" />
    {/* Red light */}
    <circle cx="8" cy="7" r="4" className="fill-rail-coral" />
    {/* Dark light (off) */}
    <circle cx="8" cy="15" r="3" className="fill-ink/30" />
  </svg>
);

export default RedSignal;
