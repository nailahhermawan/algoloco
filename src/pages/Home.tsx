import React, { useState } from 'react';
import {
  CuttingMat,
  HeaderSlip,
  LearningPathStrip,
  CategoryFilter,
  Ticket,
  SoonTicket,
  SpecialTicketsRow,
  RailFooter,
} from '@/components/home';
import type { FilterValue } from '@/components/home';
import { getCatalogByCategory } from '@/lib/catalog';

/**
 * Home page — the Drafting Yard.
 * Cutting mat background, learning path, category-filtered ticket grid,
 * special tickets, and rail footer.
 */
export const HomePage: React.FC = () => {
  const [filter, setFilter] = useState<FilterValue>('all');

  const visibleTickets = getCatalogByCategory(filter === 'all' ? undefined : filter);

  return (
    <CuttingMat>
      <div className="min-h-screen w-full p-4 sm:p-8 flex flex-col">
        <HeaderSlip />
        <LearningPathStrip />
        <CategoryFilter
          active={filter}
          onFilter={setFilter}
          count={visibleTickets.length}
        />

        {/* Ticket grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
          {visibleTickets.map((entry) =>
            entry.status === 'soon' ? (
              <SoonTicket key={entry.id} entry={entry} />
            ) : (
              <Ticket key={entry.id} entry={entry} />
            ),
          )}
        </div>

        {/* Special tickets */}
        <SpecialTicketsRow />

        <RailFooter />
      </div>
    </CuttingMat>
  );
};

export default HomePage;
