import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';

import JobSeekPage from './pages/JobSeekPage';

export default () => (
  <BrowserRouter>
    <Route path="/" component={JobSeekPage} />
  </BrowserRouter>
);