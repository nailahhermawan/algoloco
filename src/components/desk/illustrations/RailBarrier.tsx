import React from 'react';

/** Red/white striped rail barrier. Flat paper-craft style. */
export const RailBarrier: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="40"
    height="28"
    viewBox="0 0 40 28"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {/* Support post */}
    <rect x="2" y="8" width="4" height="18" rx="1" className="fill-ink/60" />
    {/* Barrier arm with stripes */}
    <rect x="4" y="8" width="34" height="6" rx="1" className="fill-rail-coral" />
    <rect x="10" y="8" width="4" height="6" className="fill-paper-ticket" />
    <rect x="20" y="8" width="4" height="6" className="fill-paper-ticket" />
    <rect x="30" y="8" width="4" height="6" className="fill-paper-ticket" />
    {/* Counterweight */}
    <rect x="0" y="4" width="8" height="6" rx="1" className="fill-ink/50" />
  </svg>
);

export default RailBarrier;
