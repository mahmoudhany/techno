import React from 'react';
import { Hero, Info } from '../components';
import defaultBcg from '../images/aboutBcg.jpeg';

const AboutPage = () => {
  return (
    <>
      <Hero img={defaultBcg} />
      <Info />
    </>
  );
};

export default AboutPage;
