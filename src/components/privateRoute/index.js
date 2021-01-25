import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser: { user, loaded } } = useAuth();
  const component = props => {
    if (user && loaded) return <Component {...props} />
    if (!user && loaded) return <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    return null;
  }
  return (
    <Route
      {...rest}
      render={props => component(props)}
    ></Route >
  );
};

export default PrivateRoute;
