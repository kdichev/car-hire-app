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
`;

export const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
