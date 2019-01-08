import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Header.css';

import { JOB_FEED_ROUTE } from '../models/routes';

import Button from './Button';
import Categories from '../modules/JobSeek/components/Categories';

const AppHeaderWrapper = styled.header`
  background-color: black;
  height: 27px;
  padding: 10px 30px;
  margin: 0px;
  display: flex;
  align-items: center;
`;

const Aref = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 9px;
  font-family: 'Droid Sans',sans-serif;
  font-size: 14px;
`;

// const Head = styled.h3`
//   font-family: 'Comfortaa',cursive;
//   font-size: 24px !important;
// `;

const NavButton = styled(Button)`
  margin: auto 10px;
`;

const AppHeader = ({ push }) => (
  <AppHeaderWrapper>
    <div>
      {/* <Aref href="https://www.iimjobs.com/jobfeed">
        <h3>iimjobs</h3>
        <span>.com</span>
      </Aref> */}
      <Categories></Categories>
      {/* <NavButton onClick={() => push(JOB_FEED_ROUTE)}>Job Feed</NavButton> */}
    </div>
  </AppHeaderWrapper>
);

AppHeader.propTypes = {
  push: PropTypes.func.isRequired,
};

export default AppHeader;
