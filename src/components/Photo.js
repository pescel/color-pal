import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
const ColorPalette = require('../helpers/ColorPalette')

export default class Photo extends Component {
  constructor() {
    super()
    this.state = {
      palette: ''
    }
  }


  onDrop(files) {

    let cp = new ColorPalette()
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 60;
    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
      console.log(cp.getPalette(this, 5));
    }
    this.props.storePhoto(files[0].preview)
    // this.setState({ palette: cp.getPalette(this, 5) })
  }

  loadPhotos() {
    if(this.props.photo) {
      return(
        <div>
          <button className='delete-photo-btn'>✖️</button>
          <button className='fav-photo-btn'>✩</button>
        </div>
      )
    }
  }


  render() {
    return (
      <div className='photo-container'>
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <img src={this.props.photo} />
        {this.loadPhotos()}
        <button className='get-palette-btn'>Get Palette!</button>
      </div>
    )
  }
}
