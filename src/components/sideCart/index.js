import React, { useContext } from 'react';
import { ProductContext } from "../../context";
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const SideCart = () => {

  const { cartOpen, closeCart, cart, cartTotal } = useContext(ProductContext)
  return (
    <CartWrapper show={cartOpen} onClick={closeCart}>
      <ul>
        {
          cart.map(item => (
            <li key={item.id} className='cart-item mb-4'>
              <img width='35' src={`../${item.image}`} alt="cart item" />
              <div className="mt-3">
                <h6 className="text-uppercase">{item.title}</h6>
                <h6 className="text-title text-uppercase">amount: {item.count}</h6>
              </div>
            </li>
          ))
        }
      </ul>
      <h4 className="text-capitalize text-main">cart total: ${cartTotal}</h4>
      <div className="text-center my-5">
        <Link to='/cart' className='main-link'>Cart page</Link>
      </div>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  top: 61px;
  right:0;
  width:100%;
  height:100%;
  background: var(--mainGrey);
  z-index:1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform:${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  overflow:scroll;
  padding:2rem;
  ul{
    padding:0;
  }
  li{
    list-style-type:none;
  }
  @media (min-width: 500px){
  width:20rem;
}
`;

export default SideCart;
