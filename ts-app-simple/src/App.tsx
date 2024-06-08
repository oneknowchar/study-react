import React, { useState } from 'react';
import './App.css';
import Store from './Store';
import { Adress, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data: Restaurant = {
  name: "jiseong's `restaurant`",
  category: 'western',
  adress: {
    city: 'incheon',
    detail: 'somewhere',
    zipcode: 1232131,
  },
  menu: [
    {
      name: 'rose pasta',
      price: 2000,
      category: 'PASTA',
    },
    {
      name: 'galic steak',
      price: 3000,
      category: 'STEAK',
    },
  ],
};
const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAddress = (adress: Adress) => {
    setMyRestaurant({ ...myRestaurant, adress: adress });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu
        name="불고기 피자"
        category="피자"
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
