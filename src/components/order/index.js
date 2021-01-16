import React, { useContext } from 'react';
import { Title } from '../../components';
import OrderList from './OrderList';
import OrderTotals from './OrderTotals';
import OrderColumns from './OrderColumns';
import { ProductContext } from '../../context';
import { useAuth } from '../../context/AuthContext';
import { Firestore } from '../../utility/firebase';
import { useHistory } from 'react-router-dom';

const Order = (props) => {
  const { order, clearCart, clearOrder } = useContext(ProductContext)
  const { currentUser } = useAuth()
  const history = useHistory()
  const orderPayment = (uid, order) => {
    Firestore.collection('orders').doc(uid)
      .set({ order })
      .then(() => {
        clearCart()
        clearOrder()
        history.push('/')
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <section className='py-5'>
      <div className="container">
        <Title title='your order' center />
      </div>
      <OrderColumns />
      <OrderList />
      <OrderTotals />

      <div className="col text-center">
        <button
          className='main-link'
          onClick={() => {
            orderPayment(currentUser.uid, order)
          }}>pay now</button>
      </div>
    </section >
  );
};

export default Order;
