import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className={'text-3xl'}>
      <div>
        <Link to={'/'}>to... MainPage</Link>
      </div>
    </div>
  );
};

export default AboutPage;
