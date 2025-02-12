
import Store from './Store'
import './App.css'
import { Restaurant } from './model/restaurant';
import { useState } from 'react';
const data = {
  name: '누나네 식당',
  category: 'western',
  address: {
    city: 'inchoi',
    detail: 'somewhere',
    zipCode:23425634
  },
  menu: [{name: "rese pasta", price: 2000, category: "PASTA"}, {name:"garlic steak", price: 3000, category: "PASTA"}]
}
const App: React.FC = () =>{
  const [myrestaurant, setMyRestaurant] = useState<Restaurant>(data)

  return (
    <div>
      <Store info={myrestaurant}/>
    </div>
    

  );
};

export default App
