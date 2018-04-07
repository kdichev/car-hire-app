// @flow
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;

  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  text-transform: uppercase;

  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: #fff;
  background: #6772e5;

  ${props => !props.inline && `width: 100%`};

  &:hover {
    background-color: #7795f8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  &:active {
    color: #e6ebf1;
    background-color: #555abf;
    transform: translateY(1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  transition: all 0.15s ease;
`;

type Props = {
  children: {},
  inline: boolean,
  onClick: () => void
};

type ButtonType = (props: Props) => any;

export const Button: ButtonType = ({ children, ...rest }) => {
  Button.defaultProps = {
    children: "Button",
    inline: false,
    onClick: () => null
  };
  return <StyledButton {...rest}>{children}</StyledButton>;
};
