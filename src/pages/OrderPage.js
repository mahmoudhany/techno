import React from 'react';
import { Order, Hero } from '../components';
import cartBcg from '../images/storeBcg.jpeg';

const OrderPage = () => {
  return (
    <div>
      <Hero img={cartBcg} />
      <Order />
    </div>
  );
};

export default OrderPage;
