import React from 'react';
import styled from 'styled-components';
import DownArrow from 'react-icons/lib/md/arrow-drop-down';

import Button from './Button';
import {List, ListItem} from './List';
import {BACKGROUND_COLOR, DARKEN_PRIMARY_COLOR} from '../../theme/index';

const SelectView = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 3px;
  border: none;
  background-color: ${DARKEN_PRIMARY_COLOR};
  padding-left: 10px;
  padding-right: 10px;
  min-height: 100%;
  color: #fff;
  box-shadow: inset 1px 1px 1px #333
`;

const SelectedItemWrapper = styled.div`
  
`;

const OptionsWrapper = styled.ul`
  position: absolute;
  bottom: ${({ opened }) => opened ? '-200px' : '0px'};
  left: 0;
  height: ${({ opened }) => opened ? '200px' : '0px'};
  width: 100%;
  background-color: ${BACKGROUND_COLOR};
  overflow: hidden;
  transition: all .2s ease-out;
  box-shadow: 0px 6px 11px #666;
  margin: 0;
  padding: 0;
  ${ ({ opened }) => `transform: scale(${ opened ? '1' : '.6' });` }
`;

const OptionWrapper = styled.li`
  padding: 16px;
  
  &:hover {
    background-color: rgba(1, 1, 1, .1);
  }
`;

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    }
  }

  toggleSelect = () => this.setState({opened: !this.state.opened});

  render() {
    return (
      <div style={{position: 'relative', height: '100%'}}>
        <SelectView onClick={this.toggleSelect}>

          {this.props.children}

          <DownArrow color={'#fff'} size={25}/>
        </SelectView>

        <OptionsWrapper opened={this.state.opened}>
          <List>
            <ListItem>kek</ListItem>
            <ListItem>kek</ListItem>
            <ListItem>kek</ListItem>
            <ListItem>kek</ListItem>
            <ListItem>kek</ListItem>
            <ListItem>kek</ListItem>
            <ListItem>kek</ListItem>
          </List>
        </OptionsWrapper>
      </div>
    )
  }
}

export default Select;