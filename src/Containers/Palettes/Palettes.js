import React, { Component } from 'react';
import { Palette } from '../Palette/Palette'
import { connect } from 'react-redux';

export class Palettes extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getProjectPalettes = (currProject) => {
    let palettes = this.props.palettes.filter(palette => {
      return (palette.project_id === currProject) 
    })
    return palettes.map(palette => {
      return (
        <Palette key={palette.id} 
              color1={palette.color1}
              color2={palette.color1}
              color3={palette.color1}
              color4={palette.color1}
              color5={palette.color1}
        />
      ) 
    })
  }


  render() {
    let renderPalettes = this.getProjectPalettes(this.props.currentProject)
    return(
      <div>
        {renderPalettes}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currentProject: state.currentProject,
  palettes: state.palettes
})

// export const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps, null)(Palettes)