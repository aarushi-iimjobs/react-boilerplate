import styled from 'styled-components';

const ToolTip = styled.span`
  visibility: hidden;
  width: ${props => props.width ? props.width : '160px' };
  color: #fff;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-color: #c9c9c9;
  box-sizing: border-box;
  background-color: #2b2b2b;
  box-shadow: 0 0 9px 0 rgba(0,0,0,.28);
  border-radius: 6px;
  padding: 2px 0;
  font-size: 12px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 68%;
  margin-left: -80px;
`;

export default ToolTip;
