import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  margin-top: 7px;
  line-height: 9px;
  text-align: right;
  padding: 0;
  float: left !important;
`;

const H3 = styled.h3`
  font-family: 'Comfortaa',cursive;
  font-size: 20px;
  font-weight: 500;
  margin-left: 6px;
  margin-top: 14px;
`;

const Logo = () => (
  <LogoWrapper>
    <a href="https://www.iimjobs.com/jobfeed" className="sitename">
      <H3>iimjobs</H3>
      <span className="txt13">.com</span>
    </a>
  </LogoWrapper>
);

Logo.propTypes = {
};

export default Logo;
