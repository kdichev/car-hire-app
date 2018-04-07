import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button } from "./../components/Button";
import { TextField } from "./../components/TextField";

storiesOf("Button", module)
  .add("basic", () => (
    <Button onClick={action("clicked")}>Medium Sized Button</Button>
  ))
  .add("widths", () => {
    return (
      <Fragment>
        <Button onClick={action("clicked")} inline>
          inline button
        </Button>
        <br />
        <br />
        <Button onClick={action("clicked")}>default full width button</Button>
      </Fragment>
    );
  });

storiesOf("TextField", module).add("basic", () => (
  <Fragment>
    <TextField
      id="email"
      placeholder="Email Address"
      type="email"
      onChange={input => {
        console.log(input);
        action("changed");
      }}
    />
    <br />
    <br />
    <TextField
      id="password"
      placeholder="Password"
      type="password"
      value=""
      onChange={input => {
        console.log(input);
        action("changed");
      }}
    />
    <br />
    <br />
    <TextField
      id="number"
      placeholder="Post Code"
      type="number"
      value=""
      onChange={input => {
        console.log(input);
        action("changed");
      }}
    />
    <br />
    <br />
    <TextField
      id="disabled"
      type="disabled"
      placeholder="Disabled"
      value=""
      disabled
      onChange={input => {
        console.log(input);
        action("changed");
      }}
    />
  </Fragment>
));
