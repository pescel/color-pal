import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
const ColorPalette = require('../helpers/ColorPalette')

export default class Photo extends Component {
  constructor() {
    super()
    this.state = {
      palette: [],
      load: false
    }
    this.getColors = this.getColors.bind(this)
  }

  getColors(aPalette) {
    this.setState({ palette: aPalette, load: true  });
  }

  onDrop(files) {
    let paletteColors;
    let cp = new ColorPalette()
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 60;
    let self = this;
    img.onload = function() {
      console.log(this)
      window.URL.revokeObjectURL(this.src);
      paletteColors = cp.getPalette(this, 5)
      self.getColors(paletteColors);
    }
    this.props.storePhoto(files[0].preview)
  }

  removePhoto(paletteColors) {
    this.props.deletePalette(this.props.photo)
  
  }


  loadPhotos() {
    if(this.props.photo) {
      return(
        <div>
          <button className='delete-photo-btn' onClick={this.removePhoto.bind(this)} >✖️</button>
          <button className='fav-photo-btn'>✩</button>
        </div>
      )
    }
  }



  render() {
    let divStyle1 = {}
    let divStyle2 = {}
    let divStyle3 = {}
    let divStyle4 = {}
    let divStyle5 = {}

    if (this.state.load) {
         divStyle1 = {
           background: `rgb(${this.state.palette[0][0]},${this.state.palette[0][1]},${this.state.palette[0][2]})`
        }
        divStyle2 = {
          background: `rgb(${this.state.palette[1][0]},${this.state.palette[1][1]},${this.state.palette[1][2]})`
      }
        divStyle3 = {
          background: `rgb(${this.state.palette[2][0]},${this.state.palette[2][1]},${this.state.palette[2][2]})`
        }
        divStyle4 = {
          background: `rgb(${this.state.palette[3][0]},${this.state.palette[3][1]},${this.state.palette[3][2]})`
        }
        divStyle5 = {
          background: `rgb(${this.state.palette[4][0]},${this.state.palette[4][1]},${this.state.palette[4][2]})`
        }
    };


    return (
      <div className='photo-container'>
        <Dropzone className='drop-zone' onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <img src={this.props.photo} />
        <div>
          <div className='color1' style={divStyle1}></div>
          <div className='color2' style={divStyle2}></div>
          <div className='color3' style={divStyle3}></div>
          <div className='color4' style={divStyle4}></div>
          <div className='color5' style={divStyle5}></div>
        </div>


        {this.loadPhotos()}
        <button className='get-palette-btn'>Get Palette!</button>
      </div>
    )
  }
}
