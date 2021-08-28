import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa'
import styled from 'styled-components';
import { ProductConsumer } from '../../context';

const Navbar = () => {
  return (
    <ProductConsumer>
      {
        value => {
          const { cartItems, handleSidebar, handleCart } = value
          return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars className='nav-icon' onClick={handleSidebar} />
                <h2 className='logo'>Techno</h2>
                <div className="nav-cart">
                  <FaCartPlus className='nav-icon' onClick={handleCart} />
                  <div className="cart-items">{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          )
        }
      }
    </ProductConsumer>
  );
};

const NavWrapper = styled.nav`
  position:sticky;
  top:0;
  width:100%;
  padding:1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom:1px solid var(--primaryColor);
  z-index:1;
.nav-center{
  display:flex;
  align-items:center;
  justify-content:space-between;
  max-width:1170px;
  margin:0 auto;
}
.logo{
  font-size: 1.5rem;
  font-family: 'Akaya Telivigala', cursive;
  margin: 0;
  font-weight: 700;
  color: var(--primaryColor);
  text-transform: uppercase;  
  letter-spacing: var(--mainSpacing);
}
.nav-icon{
  font-size: 1.5rem;
  cursor:pointer;
}

.nav-cart{
  position:relative;
}

.cart-items{
  background: rgb(223 56 154) ;
  color:var(--mainWhite);
  position:absolute;
  top:-8px;
  right:-9px;
  width: 18px;
  height:18px;
  border-radius:50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

}
`;

export default Navbar;
