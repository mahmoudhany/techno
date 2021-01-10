import React, { useContext } from 'react';
import { Product, Title } from '../';
import { ProductContext } from '../../context';

const Products = () => {
  const { filteredProducts } = useContext(ProductContext)
  return (
    <section className='py-5'>
      <div className="container">
        <Title title='our porducts' center />
        <div className="row py-5">
          {
            filteredProducts.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Products;
