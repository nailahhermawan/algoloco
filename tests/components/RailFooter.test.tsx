import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RailFooter } from '@/components/home/RailFooter';
import DefaultRailFooter from '@/components/home/RailFooter';
import { t } from '@/i18n';

describe('RailFooter (Home)', () => {
  it('exports both named and default component', () => {
    expect(RailFooter).toBeDefined();
    expect(DefaultRailFooter).toBe(RailFooter);
  });

  it('renders rail tracks and 20 crossties', () => {
    render(<RailFooter />);

    const crossties = screen.getAllByTestId('crosstie');
    expect(crossties).toHaveLength(20);

    const topRail = screen.getByTestId('top-rail');
    const bottomRail = screen.getByTestId('bottom-rail');
    expect(topRail).toBeInTheDocument();
    expect(bottomRail).toBeInTheDocument();
  });

  it('renders shunter label from i18n', () => {
    render(<RailFooter />);
    expect(screen.getByText(t('footer.shunter'))).toBeInTheDocument();
  });

  it('renders station nameplate with accessible GitHub link', () => {
    render(<RailFooter />);

    const link = screen.getByRole('link', { name: /@nailahhermawan/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/nailahhermawan');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('sets aria-hidden on decorative elements', () => {
    const { container } = render(<RailFooter />);

    const svgs = container.querySelectorAll('svg');
    svgs.forEach((svg) => {
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
