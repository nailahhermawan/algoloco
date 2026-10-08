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

  it('renders LessonIndex route placeholder at /learn', async () => {
    render(
      <MemoryRouter initialEntries={['/learn']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('pages.lessonIndex.title'))).toBeInTheDocument();
  });

  it('renders Lesson route placeholder at /learn/:lessonId', async () => {
    render(
      <MemoryRouter initialEntries={['/learn/big-o']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('pages.lesson.title', { id: 'big-o' }))).toBeInTheDocument();
  });

  it('renders Algorithm route placeholder at /algo/:algorithmId', async () => {
    render(
      <MemoryRouter initialEntries={['/algo/bfs']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('pages.algorithm.title', { id: 'bfs' }))).toBeInTheDocument();
  });

  it('renders NotFound route placeholder at unknown routes', async () => {
    render(
      <MemoryRouter initialEntries={['/untracked/unknown-route']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(t('pages.notFound.title'))).toBeInTheDocument();
  });
});
