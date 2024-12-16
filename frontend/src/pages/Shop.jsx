import React from 'react';
import Hero from '../components/hero/hero'; 
import Popular from '../components/popular/popular';  
import Offers from '../components/Offers/Offers';
import Newcollections from '../components/Newcollections/Newcollections'
import Newsletter from '../components/Newsletter/Newsletter';
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <Newcollections/>
      <Newsletter/>
    </div>
  );
};
export default Shop;


