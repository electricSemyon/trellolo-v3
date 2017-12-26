import React from 'react';
import styled from 'styled-components';

const ButtonView = styled.button`
  border: 1px solid ${props => props.theme.PRIMARY_COLOR};
  background-color: #ffffff;
  color: ${props => props.theme.PRIMARY_COLOR};
  border-radius: 3px;
  transition: all .1s ease-out;
  padding: 5px;
  
  &:focus {
    outline: none !important;
    box-shadow: 1px 1px 1px 0px #aaa !important;
  }
  
  &:active {
    outline: none !important;
    box-shadow: 1px 1px 3px 2px #aaa !important;
  }
`;

export default ButtonView;