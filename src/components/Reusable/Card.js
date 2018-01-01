import React from 'react';
import styled from 'styled-components';
import type { ComponentType } from 'react';

const CardView: ComponentType<{ noPadding: boolean, fullWidth: boolean }> = styled.div`
  box-sizing: border-box;
  padding: ${({ noPadding }) => noPadding ? '0' : '16px'};
  box-shadow: 1px 1px ${({ elevation }) => 5 * (elevation || 1)}px 0px #aaa;
  background-color: #fff;
  
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  height: ${({ fullHeight }) => fullHeight ? '100%' : 'auto'};
`;

export default CardView;