import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClassPage from './components/ClassPage';
import FunctionPage from './components/FunctionPage';

export default () => (
  <Route render={(routeProps => (
    <Switch>
      <Route path="/class" component={ClassPage} exact />
      <Route path="/function" component={FunctionPage} exact />
    </Switch>
  ))}/>
);
