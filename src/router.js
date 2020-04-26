import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClassPage from './components/ClassPage';

export default () => (
  <Route render={(routeProps => (
    <Switch>
      <Route path="/classes" component={ClassPage} exact />
    </Switch>
  ))}/>
);
