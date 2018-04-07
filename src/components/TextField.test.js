import React from "react";
import ReactDOM from "react-dom";
import { TextField } from "./TextField";

it("renders TextField without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextField />, div);
  ReactDOM.unmountComponentAtNode(div);
});
