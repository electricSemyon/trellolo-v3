import React from 'react';
import styled from 'styled-components';

import makeId from '../../utils/makeId';

const getColor = (isActive, error) => theme => {
  if (error)
    return theme.ERROR_COLOR;

  if (isActive)
    return theme.PRIMARY_COLOR;

  return '#aaa';
};


const TextFieldContainer = styled.div`
  position: relative;
  padding-top: 14px;
  box-sizing: border-box;
`;

const TextFieldLabel = styled.label`
  position: absolute;
  font-size: ${({ isActive }) => isActive ? '12px' : '14px'};
  top: ${({ isActive }) => isActive ? '0px' : '16px'};
  left: 0;
  color: ${({ getColor, theme }) => getColor(theme)};
  transition: all .2s ease-out;
`;

const TextFieldView = styled.input`
  box-sizing: border-box;
  padding-bottom: 8px;
  border: none;
  border-bottom: 2px solid #c1c1c1;
  transition: all .2s ease-out;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  ${({ isActive, theme, getColor }) => isActive && `border-bottom: 2px solid ${getColor(theme)} !important;`}
  
  &:focus {
    /* border-color: red !important; */
    outline: none;
    border-bottom: 2px solid ${({theme, getColor}) => getColor(theme)} !important;
  }
`;

class TextField extends React.Component {
  state = {
    isDirty: false,
    value: ''
  };

  id = makeId();

  handleChange = ({ target: { value } }) =>
    (
      this.props.onChange && this.props.onChange(value),
      this.setState({ value, isDirty: true })
    );

  render() {
    const { fullWidth, type, error } = this.props;
    const isActive = Boolean(this.state.value);
    const hasError = Boolean(error);

    return (
      <TextFieldContainer>
        <TextFieldView
          id={this.id}
          fullWidth={fullWidth}
          onChange={this.handleChange}
          value={this.state.value}
          isActive={isActive}
          getColor={getColor(isActive, hasError)}
          type={type}
        />

        <TextFieldLabel
          htmlFor={this.id}
          isActive={isActive}
          getColor={getColor(isActive, hasError)}
        >
          { this.props.placeholder }
        </TextFieldLabel>
      </TextFieldContainer>
    )
  }
}

export default TextField;