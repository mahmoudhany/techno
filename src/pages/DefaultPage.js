import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components';
import defaultBcg from '../images/defaultBcg.jpeg';

const DefaultPage = () => {
  return (
    <>
      <Hero img={defaultBcg} max={'true'} title='404'>
        <h2 className='text-uppercase'>Page Not Found</h2>
        <Link to='/' className='main-link' style={{ marginTop: '2rem' }}>return home</Link>
      </Hero>
    </>
  );
};

export default DefaultPage;
