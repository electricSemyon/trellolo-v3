import React from 'react';
import styled from 'styled-components';
import type { ComponentType } from 'react';

const Link: ComponentType<{}> = styled.a`
  text-decoration: none;
  border-bottom: 1px dashed ${({ theme }) => theme.PRIMARY_COLOR};
  color: ${({ theme }) => theme.PRIMARY_COLOR};
  transition: all .1s ease-out;
  
  &:hover {
    opacity: .85;
  }
`;

export default Link;
