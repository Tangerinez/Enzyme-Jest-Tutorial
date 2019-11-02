import React from "react";
import Button from "../components/button/button";
import renderer from "react-test-renderer"; // rtr is a wlibrary for rendering React components to pure JavaScript objects

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = renderer.create(<Button />).toJSON(); // create() is a method for mounting the component
    expect(button).toMatchSnapshot(); // IF YOUR COMPONENT CHANGES A LOT, DON'T DO SNAPSHOT TESTING
  });

  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = renderer.create(<Button text="SUBSCRIBE TO BASIC" />);
    const instance = component.root; // returns the root test instance object that is useful for making assertions about specific nodes in the tree
    const button = instance.findByType("button");
    button.props.onClick();
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  });
});
