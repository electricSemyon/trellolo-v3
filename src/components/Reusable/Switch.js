import React from 'react';
import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const SwitchWrapper = styled.div`
  width: 2.5em;
  height: 1.5em;
  border-radius: 1em;
  background-color: ${(props) => props.toggled ? props.theme.NEUTRAL_COLOR : '#ccc'};
  padding: 2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: ${({ toggled }) => toggled ? 'flex-end' : 'flex-start'};
  box-shadow: inset 1px 1px 2px #aaa;
  transition: all .2s ease-out;
`;

const SwitchCircle = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${props => props.theme.PRIMARY_COLOR};
  transition: all .2s ease-out;
`;


const Switch = ({ toggled }) => (
  <SwitchWrapper toggled={toggled}>
    <SwitchCircle toggled={toggled} />
  </SwitchWrapper>
);



class SwitchContainer extends React.Component {
  state = { toggled: this.props.toggled };

  toggle = () => this.setState({ toggled: !this.state.toggled });

  render() {
    return (
      <ButtonBase noPadding onClick={this.toggle}>
        <Switch toggled={this.state.toggled}/>
      </ButtonBase>
    )
  }
}

export default SwitchContainer;