import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Loading = <div className={'bg-red-700'}>Loading....</div>;

const MainPage = lazy(() => import('../pages/MainPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));

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
]);

export default root;
