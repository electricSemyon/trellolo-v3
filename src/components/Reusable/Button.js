// @flow

import React from 'react';
import styled from 'styled-components';
import type { ComponentType } from 'react';

const ButtonView: ComponentType<{
  theme: mixed,
  fullWidth?: boolean,
  backgroundColor?: string
}> = styled.button`
  border: 1px solid ${({ theme }) => theme.PRIMARY_COLOR};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  color: ${({ theme }) => theme.PRIMARY_COLOR};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
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