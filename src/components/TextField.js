import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: 4px;
  padding: 0px 13px;
  height: 40px;
  color: #32325d;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  width: calc(100% - 2 * 13px);
  ${props => props.disabled && `background: lightgray`};
`;

export class TextField extends Component {
  state = { value: "" };
  getInputData = ({ target: { name, value } }) => {
    const { onChange } = this.props;
    this.setState(prevState => ({
      value: value
    }));
    onChange({ id: name, value: value });
  };
  render() {
    const { id, onChange, ...rest } = this.props;
    const { value } = this.state;
    return (
      <Input
        {...rest}
        name={id}
        onBlur={this.getInputData}
        onFocus={this.getInputData}
        onChange={this.getInputData}
        value={value}
      />
    );
  }
}
