import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from "../../context";

const Footer = () => {
  const { socialIcons } = useContext(ProductContext);
  return (
    <FooterWrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
            <p className="text-capitalize my-md-0 py-2">
              copyright &copy; techno {new Date().getFullYear()}. all
              rights reserved
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-around align-items-center">
            {socialIcons.map(item => (
              <a href={item.url} key={item.id}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  background: rgb(247 247 250);
  color: var(--mainBlack);
  border-top: 1px solid #e2e5f1;

  .icon {
    font-size: 1.5rem;
    color: var(--mainBlack);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
export default Footer;
