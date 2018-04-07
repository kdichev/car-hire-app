import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "./components/TextField";
import { Button } from "./components/Button";
import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, type in your <code>location</code> and search.
        </p>
        <BodyContainer>
          <Container>
            <TextField
              id="location"
              placeholder="Location"
              type="address"
              onChange={input => {
                console.log(input);
              }}
              marginRight={"15px"}
            />
            <Button inline>Search</Button>
          </Container>
        </BodyContainer>
      </div>
    );
  }
}

export default App;
