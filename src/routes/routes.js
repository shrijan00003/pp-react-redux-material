import React from 'react';
import NavbarView from '../view/navbarView';
import FrontBodyView from '../view/landing/frontBodyView';
import FrontFooterView from '../view/landing/frontFooterView';
import UploadImages from '../view/upload/uploadImages';
// import store from '../store';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div className="row">
        <NavbarView />
        <Switch>
          <Route exact path="/" component={FrontBodyView} />
          <Route exact path="/landingPage" component={FrontBodyView} />
          <Route exact path="/uploadImages" component={UploadImages} />
        </Switch>
        <FrontFooterView />
      </div>
    </Router>
  );
};

export default Routes;
