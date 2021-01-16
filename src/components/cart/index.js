import React, { useContext } from 'react';
import { Title } from '../../components';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductContext } from '../../context';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { setOrder, cart } = useContext(ProductContext)
  return (
    <section className='py-5'>
      <div className="container">
        <Title title={`${cart.length === 0 ? 'Cart is empty' : 'your cart items'}`} center />
      </div>
      {
        cart.length !== 0 &&
        <>
          <CartColumns />
          <CartList />
          <CartTotals />
          <div className="col text-center">
            <Link
              className='main-link'
              to='/order'
              onClick={() => {
                setOrder()
              }}
            >Proceed to checkout</Link>
          </div>
        </>
      }
    </section >
  );
};

export default Cart;
