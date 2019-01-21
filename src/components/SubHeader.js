import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import Menu from '../modules/JobSeek/components/Menu';

const SubHeaderWrapper = styled.header`
  box-shadow: 0 0 8px grey;
  border-bottom: 1px solid #EAEAEA;
  background: #ddd;
  margin: 0 0;
  height: 28px;
  padding: 10px 30px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavButton = styled(Button)`
  margin: auto 10px;
`;

const SubHeader = ({ push }) => (
  <SubHeaderWrapper>
    <Menu></Menu>
  </SubHeaderWrapper>
);

SubHeader.propTypes = {
  push: PropTypes.func.isRequired,
};

export default SubHeader;
