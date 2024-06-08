import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import TodoList from '../pages/todo/ListPage';
import TodoRead from '../pages/todo/ReadPage';
const todoRouter = (Loading2) => {
  return [
    {
      path: 'list',
      element: (
        <Suspense fallback={Loading2}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: '',
      element: <Navigate replace={true} to={'list'} />,
    },
    {
      path: 'read/:tno',
      element: (
        <Suspense fallback={Loading2}>
          <TodoRead />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
