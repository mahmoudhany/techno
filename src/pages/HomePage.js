import React from 'react';
import { ProductContext } from '../context'
import { Featured, Hero, Services } from "../components";
import { Link } from 'react-router-dom';
const HomePage = () => {

  return (
    <div>
      <Hero title={'Awsome gadgets'} max={'true'}>
        <Link
          to='/products'
          className='main-link'
          style={{ margin: '2rem' }}
        >Our products</Link>
      </Hero>
      <Services />
      <Featured />
    </div>
  );
};

export default HomePage;
