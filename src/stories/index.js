import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button } from "./../components/Button";
import { TextField } from "./../components/TextField";
import { Card } from "./../components/Card";

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

storiesOf("TextField", module)
  .add("basic", () => (
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
  ))
  .add("widths", () => (
    <Fragment>
      <TextField
        id="inlineTextField"
        type="text"
        placeholder="Inline TextField"
        value=""
        inline
        onChange={input => {
          console.log(input);
          action("changed");
        }}
      />
      <br />
      <br />
      <TextField
        id="defaultTextfield"
        placeholder="Default full width TextField"
        type="text"
        onChange={input => {
          console.log(input);
          action("changed");
        }}
      />
    </Fragment>
  ));

storiesOf("Card", module)
  .add("basic", () => (
    <Card>
      <b>Basic Full Width Card</b>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Card>
  ))
  .add("widths", () => (
    <Fragment>
      <Card inline>
        {" "}
        <b>Inline Card</b>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br />
        <br />
        <Button inline onClick={action("clicked")}>
          Click Me!
        </Button>
      </Card>
      <br />
      <Card>
        {" "}
        <b>Basic Full Width Card</b>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br />
        <br />
        <Button onClick={action("clicked")}>Click Me!</Button>
      </Card>
    </Fragment>
  ));
