import React, { useContext } from 'react';
import { ProductContext } from "../../context";
import styled from 'styled-components'

const SideCart = () => {
  const { cartOpen, closeCart, cart } = useContext(ProductContext)
  return (
    <CartWrapper show={cartOpen} onClick={closeCart}>
      <p>Cart Items</p>
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

  @media (min-width: 500px){
  width:20rem;
}
`;

export default SideCart;
