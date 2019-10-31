import Temperature from "../components/temperature/temperature";
import React from "react";
import sinon from "sinon";
import { shallow, mount } from "enzyme";

it("renders correctly", () => {
  const wrapper = shallow(
    // light-weight representation of rendered component
    <Temperature temp={10} city="Toronto" toggleForecast={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});

it("formats temp correctly", () => {
  // mount our Temperature component
  const wrapper = mount(
    <Temperature temp={10} city="Toronto" toggleForecast={() => {}} />
  );

  // extract the text from the LargeText styled component
  const text = wrapper.find("p").text();

  // ensure it matches what is expected
  expect(text).toEqual("10°c");
});

it("calls toggleForecast on click", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Temperature temp={10} city="Toronto" toggleForecast={spy} />
  );

  // find the first div and simulate a click event on it
  wrapper
    .find("div")
    .first()
    .simulate("click");

  // ensure that our spy (toggleForecast) was called when click was simulated
  expect(spy.calledOnce).toBe(true);
});
