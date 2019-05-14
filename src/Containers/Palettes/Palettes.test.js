import React from "react";
import { Palettes } from "./Palettes";
import { mapStateToProps } from "./Palettes";
import { mapDispatchToProps } from "./Palettes";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { addCurrentPalette } from "../../Actions";

describe("Palettes", () => {
  let wrapper;
  let mockPalettes = [{ name: "Tom" ,projectId: 4}];
  beforeEach(() => {
    wrapper = shallow(<Palettes palettes={mockPalettes} />);
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  
  it("should mapStateToProps", () => {
    const mockState = {
      currentProject: 4,
      palettes: [{ name: "Mason", projectId: 4 }],
      currentProject: 4
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState);
  });

  it("should map dispatch to props", () => {
    const mockPalette= {name: "Tommy", projectId: 4}
    const mockDispatch = jest.fn();
    const actionToDispatch = addCurrentPalette(mockPalette);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addCurrentPalette(mockPalette);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});