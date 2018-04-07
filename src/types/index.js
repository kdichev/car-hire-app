// @flow
import type { Node } from "react";

export type TextFieldState = {
  value: string,
  name: string
};

export type TextFieldProps = {
  onChange: (data: TextFieldState) => void,
  id: string,
  inline: boolean,
  placeholder: string,
  type: string,
  marginRight: string,
  disabled?: boolean
};

export type getTextFieldData = (e: { currentTarget: TextFieldState }) => void;

export type ButtonProps = {
  children: Node,
  inline: boolean,
  onClick?: () => void
};

export type CardProps = {
  children: Node,
  inline: boolean
};
