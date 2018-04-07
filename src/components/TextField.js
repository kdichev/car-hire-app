// @flow
import React, { Component } from "react";
import styled from "styled-components";
import type { TextFieldProps, getTextFieldData } from "./../types";

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0px 13px;
  height: 40px;
  color: #32325d;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  width: calc(100% - 2 * 13px);
  ${(props: TextFieldProps) => props.disabled && `background: lightgray`};
  ${(props: TextFieldProps) =>
    props.marginRight && `margin-right: ${props.marginRight}`};
  ${(props: TextFieldProps) => props.inline && `width: auto`};
  &:focus {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  transition: box-shadow 0.15s ease;
`;

export class TextField extends Component<TextFieldProps> {
  getInputData: getTextFieldData = ({ currentTarget: { name, value } }) => {
    const { onChange } = this.props;
    onChange({ name, value });
  };
  render() {
    const { id, onChange, ...rest } = this.props;
    return (
      <Input
        {...rest}
        name={id}
        onBlur={this.getInputData}
        onFocus={this.getInputData}
        onChange={this.getInputData}
      />
    );
  }
}
