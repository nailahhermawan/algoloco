import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '@/app/App';
import { t } from '@/i18n';

describe('App smoke test & router resolution', () => {
  it('renders Home route at /', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    // Home page shows the Drafting Yard header
    expect(await screen.findByText(t('app.draftingYard'))).toBeInTheDocument();
  });

  it('renders UnderConstruction at /learn until lessons exist', async () => {
    render(
      <MemoryRouter initialEntries={['/learn']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('pages.underConstruction.message'))).toBeInTheDocument();
    expect(screen.getByText(t('special.lessons'))).toBeInTheDocument();
  });

  it('renders UnderConstruction at /learn/:lessonId until lessons exist', async () => {
    render(
      <MemoryRouter initialEntries={['/learn/big-o']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('pages.underConstruction.message'))).toBeInTheDocument();
  });

  it('renders UnderConstruction for known catalog algorithm not in registry at /algo/:algorithmId', async () => {
    render(
      <MemoryRouter initialEntries={['/algo/bfs']}>
        <App />
      </MemoryRouter>,
    );

    // BFS is in catalog but not implemented in registry -> UnderConstruction with BFS title
    expect(await screen.findByText(t('algorithms.bfs'))).toBeInTheDocument();
    expect(screen.getByText(t('pages.underConstruction.message'))).toBeInTheDocument();
  });

  it('renders real algorithm page automatically when algorithm is registered in registry', async () => {
    // Register mock BFS module
    const { registerAlgorithm, clearRegistry } = await import('@/engine/registry');
    registerAlgorithm({
      id: 'bfs',
      category: 'graph',
      nameKey: 'algorithms.bfs',
      pseudocode: [],
      complexity: { worst: 'O(V+E)', space: 'O(V)' },
      sceneId: 'rings',
      defaultInput: {} as unknown as never,
      validateInput: () => ({ ok: true }),
      generateSteps: () => [],
      Renderer: () => null,
    });

    render(
      <MemoryRouter initialEntries={['/algo/bfs']}>
        <App />
      </MemoryRouter>,
    );

    // Shows real algorithm desk instead of UnderConstruction message
    expect(await screen.findByText(t('algorithms.bfs'))).toBeInTheDocument();
    expect(screen.queryByText(t('pages.underConstruction.message'))).not.toBeInTheDocument();

    clearRegistry();
  });

  it('renders NotFound for unknown algorithm id not in catalog at /algo/:unknown', async () => {
    render(
      <MemoryRouter initialEntries={['/algo/non-existent-algo']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('pages.notFound.title'))).toBeInTheDocument();
  });

  it('renders UnderConstruction at /duel until implemented', async () => {
    render(
      <MemoryRouter initialEntries={['/duel']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('special.duel'))).toBeInTheDocument();
    expect(screen.getByText(t('pages.underConstruction.message'))).toBeInTheDocument();
  });

  it('renders UnderConstruction at /random when registry is empty', async () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('special.random'))).toBeInTheDocument();
    expect(screen.getByText(t('pages.underConstruction.message'))).toBeInTheDocument();
  });

  it('renders NotFound route at unknown routes', async () => {
    render(
      <MemoryRouter initialEntries={['/untracked/unknown-route']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('pages.notFound.title'))).toBeInTheDocument();
  });
});
