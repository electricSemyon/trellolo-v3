import React from 'react';
import styled from 'styled-components';

const TextField = styled.input`
  box-sizing: border-box;
  padding-bottom: 4px;
  border: none;
  border-bottom: 2px solid #c1c1c1;
  transition: all .2s ease-out;
  
  &:focus {
    /* border-color: red !important; */
    outline: none;
    border-bottom: 2px solid ${props => props.theme.PRIMARY_COLOR} !important;
  }
`;

export default TextField;