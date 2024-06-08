import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import todoRouter from './todoRouter';

const Loading = <div className={'bg-green-700'}>Loading....</div>;
const Loading2 = <div className={'bg-red-700'}>Loading....</div>;

const MainPage = lazy(() => import('../pages/MainPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const TodoIndex = lazy(() => import('../pages/todo/IndexPage'));
const TodoList = lazy(() => import('../pages/todo/ListPage'));

const root = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={Loading}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: 'about',
    element: (
      <Suspense fallback={Loading}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: 'todo',
    element: (
      <Suspense fallback={Loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(Loading2),
  },
]);

export default root;
