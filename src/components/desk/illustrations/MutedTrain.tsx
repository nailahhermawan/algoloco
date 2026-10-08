import React from 'react';

/** Waiting train in muted colors. Flat paper-craft style. */
export const MutedTrain: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="80"
    height="28"
    viewBox="0 0 80 28"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {/* Locomotive body */}
    <rect x="0" y="4" width="30" height="16" rx="2" className="fill-ink/25" />
    {/* Cab */}
    <rect x="2" y="0" width="14" height="8" rx="2" className="fill-ink/30" />
    {/* Chimney */}
    <rect x="22" y="0" width="5" height="6" rx="1" className="fill-ink/20" />
    {/* Car 1 */}
    <rect x="34" y="6" width="20" height="14" rx="1" className="fill-ink/20" />
    {/* Car 2 */}
    <rect x="58" y="6" width="20" height="14" rx="1" className="fill-ink/15" />
    {/* Coupling bars */}
    <rect x="30" y="11" width="4" height="2" className="fill-ink/30" />
    <rect x="54" y="11" width="4" height="2" className="fill-ink/30" />
    {/* Wheels */}
    <circle cx="8" cy="22" r="4" className="fill-ink/35" />
    <circle cx="22" cy="22" r="4" className="fill-ink/35" />
    <circle cx="42" cy="22" r="3" className="fill-ink/30" />
    <circle cx="52" cy="22" r="3" className="fill-ink/30" />
    <circle cx="66" cy="22" r="3" className="fill-ink/30" />
    <circle cx="76" cy="22" r="3" className="fill-ink/30" />
  </svg>
);

export default MutedTrain;
