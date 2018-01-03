import React from 'react';
import styled from 'styled-components';
import DownArrow from 'react-icons/lib/md/arrow-drop-down';
import ProjectIcon from 'react-icons/lib/md/folder';

import {List, ListItem} from './List';

const SelectView = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 3px;
  border: none;
  background-color: ${props => props.theme.DARKEN_PRIMARY_COLOR};
  padding-left: 10px;
  padding-right: 10px;
  min-height: 100%;
  color: #fff;
  box-shadow: inset 1px 1px 1px #333
`;

const OptionsWrapper = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  max-height: ${({ opened }) => opened ? '200px' : '0'};
  width: 100%;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
  overflow-y: auto;
  transition: all .1s ease-out;
  box-shadow: 0px 6px 11px #bbb;
  margin: 0;
  padding: 0;
  ${ ({ opened }) => `transform: scale(${ opened ? '1' : '.6' });` }
  transform-origin: top center;
`;

const OptionWrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

class Select extends React.Component {
  state = {
    opened: false
  };

  toggleSelect = () => this.setState({opened: !this.state.opened});

  renderOptionsListItem = (body) => (
    <ListItem>
      <OptionWrapper>
        {body}
      </OptionWrapper>
    </ListItem>
  );

  render() {
    const { list } = this.props;

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <SelectView onClick={this.toggleSelect}>

          <ProjectIcon size={20} style={{marginRight: 4}} />
          Trellolo Frontend

          <DownArrow color={'#fff'} size={25}/>
        </SelectView>

        <OptionsWrapper opened={this.state.opened}>
          <List style={{ fontSize: 14 }}>
            {list.map(element => this.renderOptionsListItem(element.body))}
          </List>
        </OptionsWrapper>
      </div>
    )
  }
}

export default Select;