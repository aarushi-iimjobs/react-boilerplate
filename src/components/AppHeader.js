import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './Header.css';
import Categories from '../modules/JobSeek/components/Categories';

const AppHeaderWrapper = styled.header`
  background-color: black;
  height: 50px;
  margin: 0px;
  display: flex;
  align-items: center;
`;

const AppHeader = ({ push }) => (
  <AppHeaderWrapper>
    <div>
      <Categories />
    </div>
  </AppHeaderWrapper>
);

AppHeader.propTypes = {
  push: PropTypes.func.isRequired,
};

export default AppHeader;
