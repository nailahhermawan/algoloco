import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const LessonIndex = lazy(() => import('@/pages/LessonIndex'));
const Lesson = lazy(() => import('@/pages/Lesson'));
const Algorithm = lazy(() => import('@/pages/Algorithm'));
const NotFound = lazy(() => import('@/pages/NotFound'));

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
    path: '*',
    element: <NotFound />,
  },
];
