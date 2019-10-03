import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentPalette, removePalette } from "../../Actions/index";
import { deletePalette } from "../../Utils/API";

export class Palette extends Component {

  handleClick = async () => {
    await this.props.updateCurrentPalette(this.props.id);
    this.props.setPaletteDisplay();
    this.props.showPaletteName();
  };

  erasePalette = id => {
    this.props.removePalette(id);
    deletePalette(id);
  };

  handleDelete = e => {
    e.preventDefault();
    const id = this.props.id;
    this.erasePalette(id);
  };

  choosePaletteClass = () => {
    if (this.props.currentPalette === this.props.id) {
      if (this.props.id === 0) {
        return "active-palette new-palette"
      }
      return "palette active-palette";
    } else if (this.props.id === 0) {
      return "new-palette";
    } else {
      return "palette";
    }
  }

  makePreviewPalette = () => {
    return Object.keys(this.props).map(key => {
      if (key.includes("color")) {
        const hex = "#" + this.props[key];
        const background = { backgroundColor: hex };
        return(
          <div className="color-preview" 
               style={background}
               key={key + hex}
          >
          </div>
        );
      }
    });
  };

  render() {
    return(
      <div className={this.choosePaletteClass()}>
        <div className="click-container" onClick={() => this.handleClick()}>
          <div className="palette-name">
            <h4>{this.props.name}</h4>
          </div>
        {this.props.id !== 0 &&
          <div className="palette-preview">
            <div className="color-box">
              {this.makePreviewPalette()}
            </div>
            <div className="delete-palette">
              <button onClick={this.handleDelete}><i className="fas fa-times"></i></button> 
            </div>
          </div>
        }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currentPalette: state.currentPalette
});

export const mapDispatchToProps = dispatch => ({
  updateCurrentPalette: palette => dispatch(updateCurrentPalette(palette)),
  removePalette: palette => dispatch(removePalette(palette))
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);