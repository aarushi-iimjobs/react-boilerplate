import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  width: 15%;
  background-color: #9b9b9b;
  padding: 10px;
  border: 1px solid #e8e8e8;
  color: #FFF;
  font-size: 16px;
  font-family: 'Droid Sans';
  font-weight: 400;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
`;

const Button = ({
  type, value, onClickButton, text,
}) => (
  <ButtonWrapper type={type} value={value} onClick={onClickButton}>
    {text}
  </ButtonWrapper>
);

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onClickButton: PropTypes.func,
  text: PropTypes.string
};

export default Button;
