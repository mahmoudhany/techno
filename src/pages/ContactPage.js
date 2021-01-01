import React from 'react';
import { Hero, Contact } from '../components';
import contactBcg from '../images/contactBcg.jpeg';

const ContactPage = () => {
  return (
    <>
      <Hero img={contactBcg} />
      <Contact></Contact>
    </>
  );
};

export default ContactPage;
