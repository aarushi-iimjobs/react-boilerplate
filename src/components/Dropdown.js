import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import PropTypes from 'prop-types';

const DropdownWrapper = styled.ul`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Droid Sans';
  color: #757575;
  padding: 0;
  background: #fff;
  border-top: 0;
  z-index: 50;
  line-height: 10px;
  min-width: 120px;
  
  position: absolute;
  border: solid 1px #BBB;
  background: #FFF;
  box-shadow: 0 2px 6px rgba(0,0,0,.2);
  overflow: auto;
  
  li {
    padding: 6px 13px;
  }
`;

const ListWrapper = styled.li`
  font-size: 12px;
  padding: 0;
  padding-left: 7px;
`;

const Dropdown = ({ options }) => (
  <DropdownWrapper>
    {map(options, option => (
      <ListWrapper value={option.id}>{option.name}</ListWrapper>
    ))}
  </DropdownWrapper>
);

Dropdown.propTypes = {
  options: PropTypes.array,
};

export default Dropdown;
