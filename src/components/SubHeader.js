import React from 'react';
import styled from 'styled-components';

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

const SubHeader = () => (
  <SubHeaderWrapper>
    <Menu />
  </SubHeaderWrapper>
);

SubHeader.propTypes = {
};

export default SubHeader;
