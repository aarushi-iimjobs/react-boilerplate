import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBarWrapper = styled.input`
  width: 40%;
  width: calc(33% - 10px);
  margin-right: 10px;
  border-radius: 3px;
  padding: 10px 5px 10px 40px;
  border: 1px solid #e8e8e8;
  background: #FFF;
  font-size: 14px;
  font-family: 'Droid Sans';
  font-weight: 400;
  background: url(../img/search-icon.png) no-repeat;
  background-position: 10px center;
  background-size: 20px;
  line-height: 20px;
`;

const SearchBar = () => (
  <SearchBarWrapper placeholder="Search" autoComplete="off" />
);

SearchBar.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onClickButton: PropTypes.func,
  text: PropTypes.string
};

export default SearchBar;
