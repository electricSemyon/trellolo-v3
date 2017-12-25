import React from 'react';
import styled from 'styled-components';

import { NEUTRAL_COLOR } from '../theme';

const DrawerView = styled.div`
  display: flex;
  flex-direction: column;
  
  transition: all .2s ease-out;
  height: calc(100vh - 54px);
  width: ${ ({ isOpened }) => isOpened ? DRAWER_STATES.OPENED : DRAWER_STATES.CLOSED }px;
  border-right: 1px solid #ccc;
  flex-shrink: 0;
`;

const DRAWER_STATES = {
  CLOSED: 50,
  OPENED: 200,
};

const Drawer = ({ children, isOpened, style }) => (
  <DrawerView isOpened={isOpened} style={style}>
    {children}
  </DrawerView>
);

export default Drawer;