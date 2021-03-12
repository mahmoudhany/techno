import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { ProductContext } from '../../context';


const Product = ({ product }) => {
  const { addToCart, setSingleProduct } = useContext(ProductContext);

  return (
    <ProductWrapper className="col-10 col-sm-8 mx-auto my-3 col-md-6 col-lg-4">
      {
        product ?
          <div className="card">
            <div className="img-container">
              <img
                src={product.image}
                alt="product"
                className="card-img-top p-5"
                style={{ height: '320px' }}
              />
              <div className="product-icons">
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => { setSingleProduct(product.id) }}
                >
                  <FaSearch className='icon' />
                </Link>
                <FaCartPlus className='icon' onClick={() => addToCart(product.id)} />
              </div>
            </div>
            <div className="card-body d-flex justify-content-between">
              <p className="mb-0">{product.title}</p>
              <p className="mb-0 text-main">${product.price}</p>
            </div>
          </div>
          : ''
      }
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
.card{
  transition: var(--mainTransition);
  border: none;
  height:100%;
  background: transparent;
}
.card:hover{
  cursor:pointer;
}

.card-img-top{
  transition: var(--mainTransition);
}
.card:hover .card-img-top{
  transform: scale(1.07);
  opacity:0.3;
}
.img-container{
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
}
.product-icons{
  transition: var(--mainTransition);
  position:absolute;
  opacity:0;
}
.icon{
  font-size:2.5rem;
  margin:1rem;
  padding: 0.5rem;
  color: var(--primaryColor);
  background:var(--mainBlack);
  border-radius: 0.5rem;
}
.card:hover .product-icons{
  opacity:1;
}
.card-body{
/* font-weight:semi-bold; */
letter-spacing:2px;
text-transform:capitalize;
}
`;

export default Product;
