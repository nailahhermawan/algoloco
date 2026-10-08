import React from 'react';

export interface TicketIconProps {
  className?: string;
}

/**
 * BubbleSortIcon: 3 vertical bars of different heights (coral, ink, ink/50).
 */
export const BubbleSortIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <rect x="4" y="12" width="4" height="8" rx="1" className="fill-rail-coral" />
    <rect x="10" y="4" width="4" height="16" rx="1" className="fill-ink" />
    <rect x="16" y="8" width="4" height="12" rx="1" className="fill-ink/50" />
  </svg>
);

/**
 * MergeSortIcon: one horizontal bar on top splitting into two below (coral bar, ink bars).
 */
export const MergeSortIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <rect x="4" y="5" width="16" height="3.5" rx="1" className="fill-rail-coral" />
    <path
      d="M12 8.5V11M12 11L7.5 15M12 11L16.5 15"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-ink"
    />
    <rect x="4" y="15" width="7" height="3.5" rx="1" className="fill-ink" />
    <rect x="13" y="15" width="7" height="3.5" rx="1" className="fill-ink" />
  </svg>
);

/**
 * QuickSortIcon: vertical pivot line (coral) with two arrows pointing left/right (ink).
 */
export const QuickSortIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <line
      x1="12"
      y1="4"
      x2="12"
      y2="20"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-rail-coral"
    />
    <path
      d="M9 12H3M6 9L3 12L6 15M15 12H21M18 9L21 12L18 15"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-ink"
    />
  </svg>
);

/**
 * BinarySearchIcon: circle with vertical bisecting line and center dot (mustard circle, ink line/dot).
 */
export const BinarySearchIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="8" strokeWidth="2" className="stroke-rail-mustard" />
    <line x1="12" y1="4" x2="12" y2="20" strokeWidth="2" strokeLinecap="round" className="stroke-ink" />
    <circle cx="12" cy="12" r="2.25" className="fill-ink" />
  </svg>
);

/**
 * BfsIcon: concentric circles: filled center (blue), dashed middle ring (blue), outer ring (ink).
 */
export const BfsIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="2.5" className="fill-rail-blue" />
    <circle
      cx="12"
      cy="12"
      r="6"
      strokeWidth="1.75"
      strokeDasharray="2.5 2.5"
      className="stroke-rail-blue"
    />
    <circle cx="12" cy="12" r="9.5" strokeWidth="1.75" className="stroke-ink" />
  </svg>
);

/**
 * DfsIcon: branching tree path going down (blue strokes, ink dots at leaves).
 */
export const DfsIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M12 4L7 11M7 11L4 19M7 11L10 19M12 4L17 12M17 12L17 19"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-rail-blue"
    />
    <circle cx="4" cy="19" r="2" className="fill-ink" />
    <circle cx="10" cy="19" r="2" className="fill-ink" />
    <circle cx="17" cy="19" r="2" className="fill-ink" />
  </svg>
);

/**
 * DijkstraIcon: three nodes connected by path (ink/blue nodes, blue path).
 */
export const DijkstraIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M5 17L11 7L19 14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-rail-blue"
    />
    <circle cx="5" cy="17" r="2.5" className="fill-rail-blue" />
    <circle cx="11" cy="7" r="2.5" className="fill-rail-blue" />
    <circle cx="19" cy="14" r="2.5" className="fill-ink" />
  </svg>
);

/**
 * AStarIcon: dashed diagonal line between two dots (ink).
 */
export const AStarIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <line
      x1="5"
      y1="19"
      x2="19"
      y2="5"
      strokeWidth="2"
      strokeDasharray="3 3"
      strokeLinecap="round"
      className="stroke-ink"
    />
    <circle cx="5" cy="19" r="2.5" className="fill-ink" />
    <circle cx="19" cy="5" r="2.5" className="fill-ink" />
  </svg>
);

/**
 * GraphColoringIcon: triangle of three colored nodes (coral, teal, mustard) with ink edges.
 */
export const GraphColoringIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <polygon
      points="12,5 5,18 19,18"
      strokeWidth="2"
      strokeLinejoin="round"
      className="stroke-ink"
    />
    <circle cx="12" cy="5" r="3" className="fill-rail-coral" />
    <circle cx="5" cy="18" r="3" className="fill-rail-teal" />
    <circle cx="19" cy="18" r="3" className="fill-rail-mustard" />
  </svg>
);

/**
 * FlowNetworkIcon: horizontal arrow line (ink).
 */
export const FlowNetworkIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M3 12H21M15 6L21 12L15 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-ink"
    />
  </svg>
);

/**
 * MasterTheoremIcon: curve on axes (teal curve, ink axes).
 */
export const MasterTheoremIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M4 4V19H20"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-ink"
    />
    <path
      d="M5 17C10 17 14 13 19 6"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-rail-teal"
    />
  </svg>
);

/**
 * HeapSortIcon: binary tree with 3 nodes (coral root, ink children, ink edges).
 */
export const HeapSortIcon: React.FC<TicketIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M12 6L6 18M12 6L18 18"
      strokeWidth="2"
      strokeLinecap="round"
      className="stroke-ink"
    />
    <circle cx="12" cy="6" r="3" className="fill-rail-coral" />
    <circle cx="6" cy="18" r="3" className="fill-ink" />
    <circle cx="18" cy="18" r="3" className="fill-ink" />
  </svg>
);
