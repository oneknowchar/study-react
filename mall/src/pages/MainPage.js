import React from 'react';
import { Link } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';

const MainPage = () => {
  return (
    <BasicLayout>
      <div className={'text-3xl'}>
        <div>
          <Link to={'/about'}>to... about Page</Link>
        </div>
      </div>
    </BasicLayout>
  );
};

export default MainPage;
