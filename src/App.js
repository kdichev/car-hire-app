// @flow
import React, { Component } from "react";
import styled from "styled-components";

import { TextField } from "./components/TextField";
import { Button } from "./components/Button";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column
  padding: 0px 15px;
`;
const Container = styled.div`
  display: flex;
`;

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
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
        </BodyContainer>
      </div>
    );
  }
}

export default App;
