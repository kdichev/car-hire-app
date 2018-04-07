// @flow
import React from "react";
import type { StatelessFunctionalComponent } from "react";
import styled from "styled-components";
import type { CardProps } from "./../types";

const Paper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  transition-property: box-shadow, transform;
  transition-duration: 0.15s;
  ${(props: CardProps) => props.inline && `width: fit-content`};
`;

export const Card: StatelessFunctionalComponent<CardProps> = ({
  children,
  ...rest
}) => {
  return <Paper {...rest}>{children}</Paper>;
};
