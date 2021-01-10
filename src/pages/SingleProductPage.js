import React from 'react';

const SingleProductPage = () => {
  const product = JSON.parse(localStorage.getItem('singleProduct'))
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="ss" />
    </div>
  );
};

export default SingleProductPage;
