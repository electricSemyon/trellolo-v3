// @flow

import React from 'react';
import styled from 'styled-components';

type ListItemProps = {
  children?: React$Element<*>,
  onClick?: void,
};

const ListItemView = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  box-sizing: border-box;
  transition: all .1s ease-out;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
  
  &:active {
    background-color: #dadada;
  }
`;

export const ListItem = ({ children, onClick }: ListItemProps) => (
  <ListItemView onClick={onClick}>
    { children }
  </ListItemView>
);

export const List = styled.ul`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;