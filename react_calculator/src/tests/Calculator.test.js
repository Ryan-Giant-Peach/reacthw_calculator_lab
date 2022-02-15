import React from "react";
import Calculator from "../containers/Calculator";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.find("#number4");

    const runningTotal = container.find("#running-total");
    button4.simulate("click");
    expect(runningTotal.text()).toEqual("4");
  });

  it("should be able to add numbers", () => {
    const runningTotal = container.find("#running-total");
    const button1 = container.find("#number1");
    button1.simulate("click");
    const addbutton = container.find("#operator_add");
    addbutton.simulate("click");
    const button4 = container.find("#number4");
    button4.simulate("click");
    const equals = container.find("#operator-equals");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("5");
  });

  it("should be able to subtract numbers", () => {
    const runningTotal = container.find("#running-total");
    const button7 = container.find("#number7");
    button7.simulate("click");
    const subtractbutton = container.find("#operator-subtract");
    subtractbutton.simulate("click");
    const button4 = container.find("#number4");
    button4.simulate("click");
    const equals = container.find("#operator-equals");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("3");
  });

  it("should be able to mulitply numbers", () => {
    const runningTotal = container.find("#running-total");
    const button3 = container.find("#number3");
    button3.simulate("click");
    const multiplybutton = container.find("#operator-multiply");
    multiplybutton.simulate("click");
    const button5 = container.find("#number5");
    button5.simulate("click");
    const equals = container.find("#operator-equals");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("15");
  });

  it("should be able to divide", () => {
    const runningTotal = container.find("#running-total");
    const equals = container.find("#operator-equals");
    const button2 = container.find("#number2");
    const button1 = container.find("#number1");
    const button7 = container.find("#number7");
    const divide = container.find("#operator-divide");
    button2.simulate("click");
    button1.simulate("click");
    divide.simulate("click");
    button7.simulate("click");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("3");
  });

  it("should be able to concatenate number clicks", () => {
    const runningTotal = container.find("#running-total");
    const button2 = container.find("#number2");
    button2.simulate("click");
    button2.simulate("click");
    button2.simulate("click");
    expect(runningTotal.text()).toEqual("222");
  });

  it("should be able to chain operators", () => {
    const runningTotal = container.find("#running-total");
    const equals = container.find("#operator-equals");
    const add = container.find("#operator_add");
    const subtract = container.find("#operator-subtract");
    const button2 = container.find("#number2");
    const button1 = container.find("#number1");
    const button7 = container.find("#number7");
    button7.simulate("click");
    add.simulate("click");
    button1.simulate("click");
    subtract.simulate("click");
    button2.simulate("click");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("6");
  });

  it("should be able to clear running total without affecting calculation", () => {
    const runningTotal = container.find("#running-total");
    const equals = container.find("#operator-equals");
    const add = container.find("#operator_add");
    const clear = container.find("#clear");
    const button2 = container.find("#number2");
    const button1 = container.find("#number1");
    const button7 = container.find("#number7");
    button7.simulate("click");
    add.simulate("click");
    button1.simulate("click");
    clear.simulate("click");
    add.simulate("click");
    button2.simulate("click");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("9");
  });
});
