import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '@/i18n';
import type { CatalogEntry } from '@/lib/catalog';
import {
  BubbleSortIcon,
  MergeSortIcon,
  QuickSortIcon,
  BinarySearchIcon,
  BfsIcon,
  DfsIcon,
  DijkstraIcon,
  AStarIcon,
  GraphColoringIcon,
  FlowNetworkIcon,
  MasterTheoremIcon,
  HeapSortIcon,
} from './TicketIcons';

/** Map algorithm id to its icon component */
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'bubble-sort': BubbleSortIcon,
  'merge-sort': MergeSortIcon,
  'quick-sort': QuickSortIcon,
  'binary-search': BinarySearchIcon,
  bfs: BfsIcon,
  dfs: DfsIcon,
  dijkstra: DijkstraIcon,
  'a-star': AStarIcon,
  'graph-coloring': GraphColoringIcon,
  'flow-network': FlowNetworkIcon,
  'master-theorem': MasterTheoremIcon,
  'heap-sort': HeapSortIcon,
};

/** Map category to its color strip Tailwind class */
const categoryColorMap: Record<string, string> = {
  sorting: 'bg-rail-coral',
  searching: 'bg-rail-mustard',
  graph: 'bg-rail-blue',
  analysis: 'bg-rail-teal',
};

/** Semicircular notch overlays for the perforation line */
const Notches: React.FC = () => (
  <>
    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-mat z-20" aria-hidden="true" />
    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-mat z-20" aria-hidden="true" />
  </>
);

interface TicketProps {
  entry: CatalogEntry;
}

/**
 * Train ticket card for an algorithm.
 * Body: category strip, name, icon, subtitle, ticket number.
 * Stub: complexity on ONE line (never wrapped), label kind, arrow.
 * Hover: lifts and stub tears slightly.
 */
export const Ticket: React.FC<TicketProps> = ({ entry }) => {
  const Icon = iconMap[entry.id];
  const colorClass = categoryColorMap[entry.category] ?? 'bg-ink/30';

  return (
    <Link
      to={`/algo/${entry.id}`}
      className="group relative bg-paper-ticket rounded-sm shadow-paper hover:shadow-paper-lifted hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition-all motion-reduce:transition-none flex items-stretch h-36 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rail-teal focus-visible:ring-offset-2 focus-visible:ring-offset-mat"
    >
      {/* Category color strip */}
      <div className={`w-2.5 ${colorClass} shrink-0`} />

      {/* Body */}
      <div className="relative flex-1 p-3.5 flex flex-col justify-between min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[17px] font-bold leading-tight text-ink">{t(entry.nameKey)}</h3>
          {Icon && (
            <div className="w-8 h-8 flex items-center justify-center opacity-70 shrink-0" aria-hidden="true">
              <Icon />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-ink/50">
            {t(entry.subtitleKey)}
          </span>
          <span className="w-1 h-1 rounded-full bg-ink/30" aria-hidden="true" />
          <span className="text-[10px] font-mono text-ink/50">
            #{String(entry.ticketNumber).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Perforation line with notches */}
      <div className="relative flex flex-col items-center justify-between w-0 shrink-0" aria-hidden="true">
        <Notches />
        <span className="h-full border-r border-dashed border-ink/15" />
      </div>

      {/* Stub */}
      <div className="w-20 bg-paper-map-light/60 shrink-0 p-2 flex flex-col items-center justify-center text-center group-hover:rotate-[3.5deg] group-hover:translate-x-0.5 motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:translate-x-0 transition-transform origin-top-left">
        <span className="font-mono text-[11px] text-ink font-bold whitespace-nowrap leading-tight">
          {entry.complexityValue}
        </span>
        <span className="text-[11px] text-ink/50 mt-1">{entry.complexityKind}</span>
        <span className="font-mono text-[13px] text-ink font-semibold mt-2" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
};

/**
 * Faded "SOON" variant of the ticket. Not clickable, not a link.
 */
export const SoonTicket: React.FC<TicketProps> = ({ entry }) => {
  const Icon = iconMap[entry.id];

  return (
    <div
      className="relative bg-paper-ticket/75 opacity-60 rounded-sm shadow-paper flex items-stretch h-36 overflow-hidden select-none"
      aria-label={`${t(entry.nameKey)} — ${t('stamps.soon')}`}
    >
      {/* Muted strip */}
      <div className="w-2.5 bg-ink/20 shrink-0" />

      {/* SOON stamp overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="rotate-[-18deg] motion-reduce:rotate-0 px-5 py-0.5 border-2 border-rail-coral/60 text-rail-coral/70 font-mono text-sm uppercase tracking-widest font-extrabold bg-paper-ticket/40">
          {t('stamps.soon')}
        </div>
      </div>

      {/* Body (muted) */}
      <div className="relative flex-1 p-3.5 flex flex-col justify-between min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[17px] font-semibold leading-tight text-ink/50">{t(entry.nameKey)}</h3>
          {Icon && (
            <div className="w-8 h-8 flex items-center justify-center opacity-40 shrink-0" aria-hidden="true">
              <Icon />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-ink/30">
            {t(entry.subtitleKey)}
          </span>
          <span className="w-1 h-1 rounded-full bg-ink/20" aria-hidden="true" />
          <span className="text-[10px] font-mono text-ink/30">
            #{String(entry.ticketNumber).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Perforation */}
      <div className="relative flex flex-col items-center justify-between w-0 shrink-0" aria-hidden="true">
        <Notches />
        <span className="h-full border-r border-dashed border-ink/15" />
      </div>

      {/* Stub (muted) */}
      <div className="w-20 bg-paper-map-light/40 shrink-0 p-2 flex flex-col items-center justify-center text-center">
        <span className="font-mono text-[11px] text-ink/40 font-medium whitespace-nowrap">
          {entry.complexityValue}
        </span>
        <span className="text-[11px] text-ink/30 mt-1">{entry.complexityKind}</span>
        <span className="font-mono text-[13px] text-ink/30 font-semibold mt-2" aria-hidden="true">
          →
        </span>
      </div>
    </div>
  );
};

export default Ticket;
