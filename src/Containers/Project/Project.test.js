import React from "react";
import { Project } from "./Project";
import { mapStateToProps } from "./Project";
import { mapDispatchToProps } from "./Project";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { addProjects } from "../../Actions";
import { addCurrentProject } from "../../Actions";
import { removeProject } from "../../Actions";
import { removeProjectPalettes } from "../../Actions";


describe("Project", () => {
  let wrapper;
  let mockPalettes = [{ name: "Tom" ,projectId: 4}];
  beforeEach(() => {
    wrapper = shallow(<Project palettes={mockPalettes} />);
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
       id: 0
    });
  });

  
  it("should mapStateToProps", () => {
    const mockState = {
      currentProject: 4,
      palettes: [{ name: "Mason", projectId: 4 }],
      projects: [{name: "Tommy"}]
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState);
  });

  it("should map dispatch to props", () => {
    const mockProjects= {name: "Tommy"}
    const mockDispatch = jest.fn();
    const actionToDispatch = addProjects(mockProjects);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addProjects(mockProjects);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should map dispatch to props", () => {
    const mockProject= {name: "Tommy"}
    const mockDispatch = jest.fn();
    const actionToDispatch = addCurrentProject(mockProject);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addCurrentProject(mockProject);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should map dispatch to props", () => {
    const mockId= 4
    const mockDispatch = jest.fn();
    const actionToDispatch = removeProject(mockId);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeProject(mockId);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should map dispatch to props", () => {
    const mockId= 4
    const mockDispatch = jest.fn();
    const actionToDispatch = removeProjectPalettes(mockId);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeProjectPalettes(mockId);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});