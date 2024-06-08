import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className={'text-3xl'}>
      <div>
        <Link to={'/about'}>to... About</Link>
      </div>
    </div>
  );
};

export default MainPage;
