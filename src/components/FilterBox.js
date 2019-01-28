import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterBoxWrapper = styled.div`
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 14px;
  font-family: 'Droid Sans' !important;
  font-weight: 400;
  color: #4b4b4b;
`;

const Chevron = styled.span`
  float: right;
  color: #757575;
  background: url(../img/chevron-down.png) no-repeat;
  background-size: 30px;
  background-position: center;
  height: 20px;
  width: 20px;
  font-size: 13px;
`;

const FilterBox = ({ label }) => (
  <FilterBoxWrapper>
    <Label>{label}</Label>
    <Chevron><i className="fa fa-chevron-down" /></Chevron>
  </FilterBoxWrapper>
);

FilterBox.propTypes = {
  label: PropTypes.string,
};

export default FilterBox;
