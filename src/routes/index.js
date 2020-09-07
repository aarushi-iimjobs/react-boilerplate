import React from 'react';
import { Route, Router } from 'react-router-dom';
import { JOB_FEED_ROUTE } from '../models/routes';
import JobSeek from '../modules/JobSeek';

import history from './history';
import AppHeader from '../components/AppHeader';

export default (
  <Router history={history}>
    <div>
      <AppHeader push={history.push} />
      <Route path={JOB_FEED_ROUTE} exact component={JobSeek} />
    </div>
  </Router>
);
