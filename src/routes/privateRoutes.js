import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const isLoggedIn=true;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/landingPage' }} />
      )
    }
  />
);

export default PrivateRoute;
