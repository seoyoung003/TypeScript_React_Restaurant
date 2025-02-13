
import Store from './Store'
import './App.css'
import { Restaurant } from './model/restaurant';
import { useState } from 'react';
import { Address } from './model/restaurant';
import BestMenu from './BestMenu';

const data = {
  name: '누나네 식당',
  category: 'western',
  address: {
    city: 'inchoi',
    detail: 'somewhere',
    zipCode:23425634
  },
  menu: [{name: "rese pasta", price: 2000, category: "PASTA"}, {name:"garlic steak", price: 3000, category: "Steak"}]
}
const App: React.FC = () =>{
  const [myrestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddress = (address: Address) => {
    setMyRestaurant({...myrestaurant, address: address});
  }
const showBestMenuName = (name:string) => {
  return name;
}
  return (
    <div>
      <Store info={myrestaurant} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="피자"  showBestMenuName = {showBestMenuName}/>
    </div>
    

  );
};

export default App
