import React from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import { BASE_ROUTE, JOB_FEED_ROUTE } from '../models/routes';
import JobSeek from '../modules/JobSeek';

import history from './history';
import AppHeader from '../components/AppHeader';
import SubHeader from '../components/SubHeader';

export default (
  <Router history={history}>
    <div>
      <AppHeader push={history.push} />
      <SubHeader />
      <Route path={JOB_FEED_ROUTE} exact component={JobSeek} />
      <Redirect from={BASE_ROUTE} to={JOB_FEED_ROUTE} />
    </div>
  </Router>
);
