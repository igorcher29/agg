import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import AppMenu from '../app-menu/app-menu';
import Main from '../main/main';
import Posts from '../posts/posts';

const AppRoutes = () => (
  <>
    <AppMenu />
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/posts/" component={Posts} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </>
);

export default AppRoutes;
