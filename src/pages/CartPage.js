import React from 'react';
import { Cart, Hero } from '../components';
import cartBcg from '../images/storeBcg.jpeg';

const CartPage = () => {
  return (
    <div>
      <Hero img={cartBcg} />
      <Cart />
    </div>
  );
};

export default CartPage;
