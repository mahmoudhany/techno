import React, { useContext } from 'react';
import { FilterProducts, Product, Title } from '../';
import { ProductContext } from '../../context';

const Products = () => {
  const { filteredProducts } = useContext(ProductContext)
  return (
    <section className='py-5'>
      <div className="container">
        <Title title='our products' center />
        <FilterProducts />
        <div className="row">
          <div className="col-10 mx-auto">
            <h6 className="text-title">
              total products: {filteredProducts.length}
            </h6>
          </div>
        </div>
        <div className="row py-5">
          {
            filteredProducts.length === 0 ?
              <div className="col text-title text-center">
                sorry, no item matched your search
              </div>
              :
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
