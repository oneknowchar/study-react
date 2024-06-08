import React from 'react';
import { useParams } from 'react-router-dom';

const ReadPage = () => {
  const { tno } = useParams();
  console.log(tno);

  return <div className={'text-3xl'}>ReadPage</div>;
};

export default ReadPage;
