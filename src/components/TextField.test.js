import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { TextField } from "./TextField";

Enzyme.configure({ adapter: new Adapter() });

it("renders TextField without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextField />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("CheckboxWithLabel changes the text after click", () => {
  const textField = shallow(<TextField value="test value" id="test name" />);
  expect(textField.props().value).toEqual("test value");
  expect(textField.props().name).toEqual("test name");
});
