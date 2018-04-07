// @flow
import React, { Component } from "react";
import styled from "styled-components";

import { TextField } from "./components/TextField";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column
  padding: 0px 15px;
  background: #f6f9fc;
  height: 100vh
`;
const Container = styled.div`
  display: flex;
`;

class App extends Component<{}> {
  render() {
    return (
      <BodyContainer>
        <p className="App-intro">
          To get started, type in your location and search.
        </p>
        <Container>
          <TextField
            id="location"
            placeholder="Location"
            type="address"
            onChange={input => {
              console.log(input);
            }}
            marginRight={"15px"}
            inline
          />
          <Button inline>Search</Button>
        </Container>
        <br />
        <br />
        <Card inline>
          <b>Basic Full Width Card</b>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Card>
      </BodyContainer>
    );
  }
}

export default App;
