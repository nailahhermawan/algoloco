import React from 'react';

/** Buffer stop / end-of-line bumper. Flat paper-craft style. */
export const BufferStop: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="24"
    height="32"
    viewBox="0 0 24 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {/* Vertical posts */}
    <rect x="4" y="4" width="3" height="24" rx="1" className="fill-ink/70" />
    <rect x="17" y="4" width="3" height="24" rx="1" className="fill-ink/70" />
    {/* Cross beam */}
    <rect x="2" y="10" width="20" height="4" rx="1" className="fill-rail-coral" />
    {/* Base plate */}
    <rect x="0" y="26" width="24" height="4" rx="1" className="fill-ink/40" />
  </svg>
);

export default BufferStop;
