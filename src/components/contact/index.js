import React from 'react';
import Title from '../title';

const Contact = () => {
  return (
    <section className='py-5'>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title='contact us' />
          <form action="https://formspree.io/f/xnqooogk"
            method='POST'
            className='mt-5'>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="john simth"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="important!!"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="hello there buddy"
                rows='10'
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div >
    </section >
  );
};

export default Contact;
