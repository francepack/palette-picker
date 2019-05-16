import React, { Component } from "react";
import Palette from "../Palette/Palette";
import { connect } from "react-redux";
import { updateCurrentPalette } from "../../Actions";

export class Palettes extends Component {
  constructor(props) {
    super(props);
  }

  refreshSelectedPalette = () => {
    this.props.updateCurrentPalette(0);
    this.props.showPaletteName();
  };

  getProjectPalettes = currProject => {
    let palettes = this.props.palettes.filter(palette => {
      return palette.project_id === currProject;
    });
    return palettes.map(palette => {
      return (
        <Palette
          key={palette.id}
          id={palette.id}
          name={palette.name}
          color1={palette.color1}
          color2={palette.color2}
          color3={palette.color3}
          color4={palette.color4}
          color5={palette.color5}
          setPaletteDisplay={this.props.setPaletteDisplay}
          showPaletteName={this.props.showPaletteName}
        />
      );
    });
  };

  render() {
    let renderPalettes = this.getProjectPalettes(this.props.currentProject);
    return (
      <div className="palettes-container">
        <Palette id={0}
                 key={0}
                 name="Create New Palette"
                 setPaletteDisplay={this.props.setPaletteDisplay}
                 refreshSelectedPalette={this.refreshSelectedPalette}
                 showPaletteName={this.props.showPaletteName}
        />
        {renderPalettes}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currentProject: state.currentProject,
  palettes: state.palettes
});

export const mapDispatchToProps = dispatch => ({
  updateCurrentPalette: palette => dispatch(updateCurrentPalette(palette))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Palettes);
