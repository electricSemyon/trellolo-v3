import React from 'react';
import styled from 'styled-components';

const CardView = styled.div`
  box-sizing: border-box;
  padding: ${({ noPadding }) => noPadding ? '0' : '16px'};
  box-shadow: 1px 1px 5px 0px #aaa;
  background-color: #fff;
  
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  height: ${({ fullHeight }) => fullHeight ? '100%' : 'auto'};
`;

export default CardView;