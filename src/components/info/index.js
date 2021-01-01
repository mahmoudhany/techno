import React from 'react';
import { Title } from '../';
import defaultBcg from '../../images/aboutBcg.jpeg';

const Info = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={defaultBcg} alt="About us" className="img-fluid img-thumbnail" style={{ background: 'var(--darkGrey)' }} />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title='about us' />
            <p className="text-lead text-muted my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere saepe molestias officia optio alias suscipit aspernatur assumenda odit dicta ipsa, sint eius doloribus? Quisquam alias cum fuga iure tempora.</p>
            <button className="main-link" type='button' style={{ marginTop: '2rem' }}>more info</button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Info;
