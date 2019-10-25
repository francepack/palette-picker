import React, { Component } from "react";
import { connect } from "react-redux";
import { addProjects } from "../../Actions/index";
import Project from "../Project/Project";
import NewProject from "../NewProject/NewProject";
import PropTypes from "prop-types";

export class Projects extends Component {

  renderProjects = () => {
    const { projects } = this.props;
    if (projects.length) {
      return projects.map(project => (
        <Project 
          id={project.id}
          key={project.id} 
          name={project.name} 
          setError={this.props.setError}
        />
      ));
    }
  } 

  render() {
    return (
      <div className="projects-container">
        <div className="projects-head">
          <h3>Create New Project...</h3>
          <div className="new-project">
            <NewProject 
              checkForSameName={this.props.checkForSameName}
              setError={this.props.setError}
              clearError={this.props.clearError}
            />
          </div>
          <h3>Select Saved Project:</h3>
        </div>
        <div className="projects-list scroll">
          {!this.props.projects.length && 
            <div className="no-projects">
              <p>No saved projects.</p>
              <p>Create a project <i className="fas fa-arrow-up"></i></p>
            </div>
          }
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  palettes: PropTypes.array,
  currentProject: PropTypes.number,
  setError: PropTypes.func,
  clearError: PropTypes.func,
  checkForSameName: PropTypes.func,
};

export const mapStateToProps = state => ({
  projects: state.projects,
  palettes: state.palettes,
  currentProject: state.currentProject,
});

export const mapDispatchToProps = dispatch => ({
  addProjects: project => dispatch(addProjects(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
