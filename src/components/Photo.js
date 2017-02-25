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
    this.colorBam = this.colorBam.bind(this)
  }

  colorBam(aPalette) {
    this.setState({ palette: aPalette, load: true  });
  }

  onDrop(files) {
    let paleto;
    let cp = new ColorPalette()
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 60;
    let self = this;
    img.onload = function() {
      console.log(this)
      window.URL.revokeObjectURL(this.src);
      paleto = cp.getPalette(this, 5)
      console.log(paleto);
      self.colorBam(paleto);
      console.log(paleto);
    }
    this.props.storePhoto(files[0].preview)
  }

  removePhoto() {
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
    let divStyle = {}
    if (this.state.load) {
      console.log(this.state.palette[0][0])
        // background: "black",
         divStyle = {
        background: `rgb(${this.state.palette[0][0]},${this.state.palette[0][1]},${this.state.palette[0][2]})`,
        height: "250px",
        width: "250px",
        padding: "20px",
        margin: "20px"
        }
      };
  

    return (
      <div className='photo-container'>
        <Dropzone className='drop-zone' onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <img src={this.props.photo} />
        <div>
          <div className='color1' style={divStyle}></div>
        </div>


        {this.loadPhotos()}
        <button className='get-palette-btn'>Get Palette!</button>
      </div>
    )
  }
}
