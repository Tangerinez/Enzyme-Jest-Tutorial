import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });

  it("knows that 4 * 9 makes 36", () => {
    expect(4 * 9).toBe(36);
  });
});

describe("App component", () => {
  it("starts with a count of 0", () => {
    const wrapper = shallow(<App />); // shallow rendering only renders the component iteself, no DOM required
    const text = wrapper.find("p").text(); // find text in a p tag in the App component
    expect(text).toEqual("Count: 0"); // see if the string text value in the p tag equals the argument
  });
});

describe("App Component", () => {
  it("increments count by 1 when the increment button is clicked", () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find("button.increment"); // increment method linked to the button
    incrementBtn.simulate("click"); // simulates DOM events on an element
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 1");
  });
});
