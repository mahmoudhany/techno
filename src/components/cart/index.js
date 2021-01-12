import React from 'react';
import { Title } from '../../components';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';


const Cart = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <Title title='your cart items' center />
      </div>
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
};

export default Cart;
