import React from "react";
import Button from "../components/button/button";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
// boilerplate

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
// boilerplate

describe("Button component", () => {
  test("it shows the expected text when clicked", () => {
    act(() => {
      ReactDOM.render(<Button text="SUBSCRIBE TO BASIC" />, container);
    });
    const button = container.getElementsByTagName("button")[0];
    expect(button.textContent).toBe("SUBSCRIBE TO BASIC");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(button.textContent).toBe("PROCEED TO CHECKOUT");
  });
});
