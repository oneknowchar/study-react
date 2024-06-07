import React from 'react';
import { Menu } from './model/restaurant';
// interface로 작성 방법
// interface OwnProps extends Omit<Menu, 'price'> {
//   showBestMenuName(name: string): string;
// }

type OwnProps = Omit<Menu, 'price'> & {
  showBestMenuName(name: string): string;
};

const BestMenu: React.FC<OwnProps> = ({ name, category }) => {
  return <div>BestMenu</div>;
};

export default BestMenu;
