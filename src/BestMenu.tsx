import React from 'react';
import { Menu } from './model/restaurant';


// type OwnProps = Menu &{
//     showBestMenuName(name:string) : string  type의 경우 같은 코드드
//  }

interface OwnProps extends Omit<Menu , 'price'>{
   showBestMenuName(name:string) : string
}

const BestMenu: React.FC<OwnProps> = ({name,  category, showBestMenuName}) => {
  return (
    <div>{name}</div>
  );
};

export default BestMenu;