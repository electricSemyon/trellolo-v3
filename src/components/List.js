import React from 'react';
import styled from 'styled-components';

const ListItemView = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  box-sizing: border-box;
  transition: all .2s ease-out;
  cursor: pointer;
  
  &:hover {
    background-color: #ddd;
  }
  
  &:active {
    background-color: #d0d0d0;
  }
`;

export const ListItem = ({ children, onClick }) => (
  <ListItemView onClick={onClick}>
    { children }
  </ListItemView>
);

export const List = styled.ul`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;