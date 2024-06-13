import React from 'react';
import { Link } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';

const AboutPage = () => {
  return (
    <BasicLayout>
      <div className={'text-3xl'}>
        <div>
          <Link to={'/'}>to... main Page</Link>
        </div>
      </div>
    </BasicLayout>
  );
};

export default AboutPage;
