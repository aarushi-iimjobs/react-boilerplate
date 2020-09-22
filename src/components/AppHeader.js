import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './Header.css';

const AppHeaderWrapper = styled.header`
  background-color: black;
  height: 50px;
  margin: 0px;
  display: flex;
  align-items: center;
  color: white;
`;

const AppHeader = ({ push }) => (
  <AppHeaderWrapper>
    <div>
      {'Hello'}
      <div onClick={() => push('/jobfeed')}>
        jobFeed
      </div>
    </div>
    <a href="/jobfeed">Click Jobfeed</a>
  </AppHeaderWrapper>
);

AppHeader.propTypes = {
  push: PropTypes.func.isRequired,
};

export default AppHeader;
