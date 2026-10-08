import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const LessonIndex = lazy(() => import('@/pages/LessonIndex'));
const Lesson = lazy(() => import('@/pages/Lesson'));
const Algorithm = lazy(() => import('@/pages/Algorithm'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Duel = lazy(() => import('@/pages/SpecialRoutes').then((m) => ({ default: m.DuelPage })));
const Random = lazy(() => import('@/pages/SpecialRoutes').then((m) => ({ default: m.RandomPage })));
const Continue = lazy(() => import('@/pages/SpecialRoutes').then((m) => ({ default: m.ContinuePage })));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/learn',
    element: <LessonIndex />,
  },
  {
    path: '/learn/:lessonId',
    element: <Lesson />,
  },
  {
    path: '/algo/:algorithmId',
    element: <Algorithm />,
  },
  {
    path: '/duel',
    element: <Duel />,
  },
  {
    path: '/random',
    element: <Random />,
  },
  {
    path: '/continue',
    element: <Continue />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
