// @flow
import React from "react";
import styled from "styled-components";

const Paper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  &:hover {
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
      0 8px 15px rgba(0, 0, 0, 0.07);
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: 0 11px 20px rgba(50, 50, 93, 0.1),
      0 6px 11px rgba(0, 0, 0, 0.08);
    transform: translateY(2px);
  }
  transition-property: box-shadow, transform;
  transition-duration: 0.15s;
  ${props => props.inline && `width: fit-content`};
`;

type CardType = (props: { children: {}, inline: boolean }) => any;

export const Card: CardType = ({ children, ...rest }) => {
  return <Paper {...rest}>{children}</Paper>;
};
