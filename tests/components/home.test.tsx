import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '@/app/App';
import { t } from '@/i18n';
import { algorithmCatalog } from '@/lib/catalog';

function renderHome() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );
}

describe('Home page', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    try {
      localStorage.clear();
    } catch {
      // ignore
    }
  });

  describe('Category filter', () => {
    it('shows all tickets by default', async () => {
      renderHome();
      // Wait for page to load
      await screen.findByText(t('app.draftingYard'));

      // All catalog entries should be visible
      const totalCount = algorithmCatalog.length;
      const countText = t('filters.yardCount', {
        count: String(totalCount).padStart(2, '0'),
      });
      expect(screen.getByText(countText)).toBeInTheDocument();
    });

    it('filters tickets when a category sticker is clicked', async () => {
      const user = userEvent.setup();
      renderHome();
      await screen.findByText(t('app.draftingYard'));

      // Click "Graph" filter
      const graphButton = screen.getByRole('tab', { name: t('filters.graph') });
      await user.click(graphButton);

      // Count should reflect only graph algorithms
      const graphCount = algorithmCatalog.filter((e) => e.category === 'graph').length;
      const countText = t('filters.yardCount', {
        count: String(graphCount).padStart(2, '0'),
      });
      expect(screen.getByText(countText)).toBeInTheDocument();
    });

    it('returns to all tickets when "All" is clicked', async () => {
      const user = userEvent.setup();
      renderHome();
      await screen.findByText(t('app.draftingYard'));

      // Click a filter then click All
      await user.click(screen.getByRole('tab', { name: t('filters.sorting') }));
      await user.click(screen.getByRole('tab', { name: t('filters.all') }));

      const totalCount = algorithmCatalog.length;
      const countText = t('filters.yardCount', {
        count: String(totalCount).padStart(2, '0'),
      });
      expect(screen.getByText(countText)).toBeInTheDocument();
    });
  });

  describe('SOON ticket', () => {
    it('is not a navigable link', async () => {
      renderHome();
      await screen.findByText(t('app.draftingYard'));

      // A* Search and Flow Network are marked 'soon'
      const aStarLabel = `${t('algorithms.aStar')} — ${t('stamps.soon')}`;
      const soonTicket = screen.getByLabelText(aStarLabel);

      // It should NOT be a link
      expect(soonTicket.tagName).not.toBe('A');
      expect(soonTicket.closest('a')).toBeNull();
    });
  });

  describe('Continue ticket visibility', () => {
    it('does NOT show Continue ticket when localStorage is empty', async () => {
      renderHome();
      await screen.findByText(t('app.draftingYard'));

      // Continue badge should not be present
      expect(screen.queryByText(t('special.continueBadge'))).not.toBeInTheDocument();
    });

    it('shows Continue ticket when a valid algorithm is saved in localStorage', async () => {
      // Save a valid algorithm id
      localStorage.setItem('algoloco:lastAlgorithm', 'merge-sort');

      renderHome();
      await screen.findByText(t('app.draftingYard'));

      // Continue badge and resume text should be present
      expect(screen.getByText(t('special.continueBadge'))).toBeInTheDocument();
      expect(
        screen.getByText(
          t('special.continueResume', { name: t('algorithms.mergeSort'), number: '02' }),
        ),
      ).toBeInTheDocument();
    });

    it('does NOT show Continue ticket when storage throws', async () => {
      // Mock localStorage.getItem to throw
      const originalGetItem = Storage.prototype.getItem;
      Storage.prototype.getItem = () => {
        throw new Error('Storage access denied');
      };

      renderHome();
      await screen.findByText(t('app.draftingYard'));

      expect(screen.queryByText(t('special.continueBadge'))).not.toBeInTheDocument();

      // Restore
      Storage.prototype.getItem = originalGetItem;
    });
  });
});
