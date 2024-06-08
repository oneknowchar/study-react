import React from 'react';
import { Adress, Restaurant } from './model/restaurant';

interface OwnProps {
  info: Restaurant;
  changeAddress(adress: Adress): void;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
