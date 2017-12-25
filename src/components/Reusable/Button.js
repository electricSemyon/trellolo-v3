import React from 'react';
import styled from 'styled-components';

const ButtonView = styled.button`
  background-color: transparent;
  border: none;
  ${({ noPadding }) => noPadding ? 'padding: 0' : 'padding: 8px;'}
`;

const Button = ({ onClick, children, noPadding }) => (
  <ButtonView onClick={onClick} noPadding={noPadding}>
    {children}
  </ButtonView>
);

export default Button;