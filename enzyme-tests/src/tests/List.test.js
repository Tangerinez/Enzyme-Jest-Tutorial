import React from "react";
import Users from "../components/list/list";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("User component", () => {
  test("it shows a list of users", async () => {
    const fakeResponse = [{ name: "John Doe" }, { name: "Kevin Mitnick" }];

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse)
      };
      return Promise.resolve(fetchResponse);
    });
    /*  jest.spyOn “spies” on the Fetch method, available on the window object. 
    When the method is called we mock, aka replace the real Fetch with a so called 
    mock implementation (.mockImplementation). mockImplementation takes a function 
    which is our fake Fetch. Inside the mock we create a new response object with a
    function called json. This function returns a resolved Promise with the fake 
    JSON response. Finally we return the entire response object inside another 
    resolved Promise. And that’s it!

    Do not call a real API in your tests!!! By mocking Fetch and providing a fake 
    response we ensure test isolation.
    */
    await act(async () => {
      render(<Users />, container);
    });

    expect(container.textContent).toBe("John DoeKevin Mitnick");

    window.fetch.mockRestore();
  });
});
