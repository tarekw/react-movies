import React from "react";
// import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  // const element = shallow(<App />);
  // expect(element).toBeDefined();
  const container = render(<App />);
  expect(container).toBeDefined();
});
