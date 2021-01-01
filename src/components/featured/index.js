import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Product, Title } from '../';
import { ProductContext } from "../../context";

const Featured = () => {
  const { featuredProducts } = useContext(ProductContext);
  return (
    <section className='py-5'>
      <div className="container">
        <Title title='Featured products' center='true' />
        <div className="row my-3">
          {
            featuredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>
        <Product />
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <Link to='/products' className='main-link'>
            our products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
