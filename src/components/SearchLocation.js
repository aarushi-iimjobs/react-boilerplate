import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import PropTypes from 'prop-types';

const SearchLocationWrapper = styled.div`
  background: #fff;
  position: absolute;
  z-index: 99999;
  padding: 5px;
  max-width: 320px;
  height: 250px;
  overflow-y: scroll;
  border: solid 1px #bbb;
  right: 0;
  min-width: 180px;
  font-size: 12px;
`;

const LocationWrapper = styled.div`
  height: 27px;
  line-height: 20px;
  border-bottom: 1px solid #eee;
  clear: both;
  padding: 3px 0;
  float: left;
  width: 100%;

  label {
    font-weight: 400;
    display: inline-block;
    margin-bottom: 5px;
  }
`;

const SearchLocation = ({ options }) => (
  <SearchLocationWrapper>
    <input type="text" id="myLocInput" placeholder="Search Location" title="Type in a location" />
    {map(options, option => (
      <LocationWrapper data-value={option.name}>
        <input type="checkbox" id={option.id} value={option.value} loctext={option.name} />
        <label htmlFor={option.id}>{option.name}</label>
      </LocationWrapper>
    ))}
  </SearchLocationWrapper>
);

SearchLocation.propTypes = {
  options: PropTypes.array,
};

export default SearchLocation;
