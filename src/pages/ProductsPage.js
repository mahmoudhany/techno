import React from 'react';
import { Hero, Products } from '../components';
import productsBcg from '../images/productsBcg.jpeg';

const ProductsPage = () => {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
};

export default ProductsPage;
