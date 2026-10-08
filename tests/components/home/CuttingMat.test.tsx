import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DefaultCuttingMat, { CuttingMat } from '@/components/home/CuttingMat';

describe('Home CuttingMat component', () => {
  it('exports both named and default component', () => {
    expect(CuttingMat).toBeDefined();
    expect(DefaultCuttingMat).toBeDefined();
    expect(CuttingMat).toBe(DefaultCuttingMat);
  });

  it('renders children inside relative z-10 container', () => {
    render(
      <CuttingMat>
        <div data-testid="test-child">Child Content</div>
      </CuttingMat>,
    );

    const child = screen.getByTestId('test-child');
    expect(child).toBeInTheDocument();
    expect(child.parentElement).toHaveClass('relative', 'z-10');
  });

  it('renders min-h-screen container with bg-mat class', () => {
    const { container } = render(
      <CuttingMat>
        <div>Content</div>
      </CuttingMat>,
    );

    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveClass('min-h-screen', 'bg-mat', 'relative');
  });

  it('renders aria-hidden decorative overlay with fine grid and rulers', () => {
    const { container } = render(
      <CuttingMat>
        <div>Content</div>
      </CuttingMat>,
    );

    const overlay = container.querySelector('[aria-hidden="true"]');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('pointer-events-none', 'inset-0');

    // Grid backgroundImage verification
    const style = (overlay as HTMLElement).style;
    expect(style.backgroundImage).toContain('linear-gradient');
    expect(style.backgroundSize).toContain('10px 10px');
    expect(style.backgroundSize).toContain('50px 50px');
  });

  it('renders top ruler marks from 00 to 100 with expected styling', () => {
    const { container } = render(
      <CuttingMat>
        <div>Content</div>
      </CuttingMat>,
    );

    const topRuler = container.querySelector('.border-b') as HTMLElement;
    expect(topRuler).toBeInTheDocument();
    expect(topRuler).toHaveClass('font-mono', 'text-[9px]');

    // Check boundary and intermediate marks
    expect(topRuler.textContent).toContain('00');
    expect(topRuler.textContent).toContain('50');
    expect(topRuler.textContent).toContain('100');

    // 21 marks in top ruler (00, 05, 10, ... 100)
    const marks = topRuler.querySelectorAll('span');
    expect(marks).toHaveLength(21);
    expect(marks[0]?.textContent).toBe('00');
    expect(marks[1]?.textContent).toBe('05');
    expect(marks[20]?.textContent).toBe('100');
  });

  it('renders left ruler marks from 00 to 70 with expected styling', () => {
    const { container } = render(
      <CuttingMat>
        <div>Content</div>
      </CuttingMat>,
    );

    const leftRuler = container.querySelector('.border-r') as HTMLElement;
    expect(leftRuler).toBeInTheDocument();
    expect(leftRuler).toHaveClass('font-mono', 'text-[9px]');

    // Check boundary and intermediate marks
    expect(leftRuler.textContent).toContain('00');
    expect(leftRuler.textContent).toContain('35');
    expect(leftRuler.textContent).toContain('70');

    // 15 marks in left ruler (00, 05, 10, ... 70)
    const marks = leftRuler.querySelectorAll('span');
    expect(marks).toHaveLength(15);
    expect(marks[0]?.textContent).toBe('00');
    expect(marks[1]?.textContent).toBe('05');
    expect(marks[14]?.textContent).toBe('70');
  });
});
