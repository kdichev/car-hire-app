// @flow
import React from "react";
import styled, { css } from "styled-components";
import type { StatelessFunctionalComponent } from "react";
import type { ButtonProps } from "./../types";

const buttonBoxShadow = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  &:active {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const buttonBackground = css`
  background: #6772e5;
  &:hover {
    background: #7795f8;
  }
  &:active {
    background: #555abf;
  }
`;

const buttonLabelColor = css`
  color: #fff;
  &:active {
    color: #e6ebf1;
  }
`;

const buttonTransforms = css`
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  padding: 0 14px;
  border-radius: 4px;
  line-height: 40px;
  text-transform: uppercase;
  ${(props: ButtonProps) => !props.inline && `width: 100%`};
  ${buttonBoxShadow};
  ${buttonBackground};
  ${buttonLabelColor};
  ${buttonTransforms};
  transition: all 0.15s ease;
`;

export const Button: StatelessFunctionalComponent<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
