import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from "../../context";

const Footer = () => {
  const { socialIcons } = useContext(ProductContext);
  return (
    <FooterWrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-capitalize">
              copyright &copy; tech store {new Date().getFullYear()}. all
                    rights reserved
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-around">
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

    background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
export default Footer;
