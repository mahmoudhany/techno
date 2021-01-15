import React, { useContext } from 'react';
import { ProductContext } from "../../context";
import { useAuth } from "../../context/AuthContext";

import { Link } from "react-router-dom";
import styled from 'styled-components';

const Sidebar = () => {
  const { links, sidebarOpen, handleSidebar } = useContext(ProductContext)
  const { currentUser, logout } = useAuth();
  return (
    <div>
      <SidebarWrapper show={sidebarOpen}>
        <ul>
          {
            links.map(({ id, path, text }) => (
              <li key={id}>
                <Link
                  to={path}
                  className='sidebar-link'
                  onClick={handleSidebar}
                >{text}</Link>
              </li>
            ))
          }
          {currentUser ?
            <li>
              <Link
                id="logout"
                to='/logout'
                className='sidebar-link'
                onClick={() => {
                  logout()
                  handleSidebar()
                }}
              >logout</Link>
            </li> :
            <li>
              <Link
                to='/login'
                className='sidebar-link'
                onClick={handleSidebar}
              >login</Link>
            </li>
          }
        </ul>
        {/* {currentUser &&
          <div className='text-center'>
            <Link
              className='main-link text-center'
              onClick={() => }
            >Log out</Link>
          </div>} */}
      </SidebarWrapper>
    </div>
  );
};

const SidebarWrapper = styled.nav`
  position:fixed;
  top:60px;
  left:0; 
  width:100%;
  height:100%;
  background:var(--mainGrey); 
  z-index:1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform:${props => (props.show ? "translateX(0)" : "translateX(-100%)")}; 
  ul{
    list-style-type:none;
    padding: 0;
  }
  .sidebar-link{
    display:block;
    font-size:1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background:transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover{
    background: var(--primaryColor);
    color:var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
@media (min-width: 500px){
  max-width:20rem;
}
`;
export default Sidebar;
