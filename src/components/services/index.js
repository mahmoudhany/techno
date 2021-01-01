import React, { useState } from 'react';
import styled from 'styled-components';
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

const Services = () => {
  const [state, setState] = useState([
    {
      id: 1,
      icon: <FaDolly />,
      title: 'free shiping',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.'
    },
    {
      id: 2,
      icon: <FaRedo />,
      title: '30 days return policy',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.'
    },
    {
      id: 3,
      icon: <FaDollarSign />,
      title: 'secured payment',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.'
    }
  ])
  return (
    <ServicesWrapper className='py-5'>
      <div className="container">
        <div className="row">
          {state.map(({ id, icon, title, text }) => (
            <div className="col-10 col-sm-6 col-md-4 mx-auto text-center" key={id}>
              <div className="service-icon">{icon}</div>
              <div className="mt-3 text-text-capitalize">{title}</div>
              <div className="mt-3">{text}</div>
            </div>
          ))}
        </div>
      </div>

    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
background:rgba(95,183,234,0.5);
.service-icon{
  font-size:2.5rem;
  color: var(--primaryColor);
}
p{
  color:var(--darkGrey)
}
`;

export default Services;
