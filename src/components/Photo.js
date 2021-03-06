import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
const ColorPalette = require('../helpers/ColorPalette')

export default class Photo extends Component {
  constructor() {
    super()

    this.getColors = this.getColors.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
  }

  handleFavorite() {
    this.props.addFavorite(this.props.photo, this.props.palette)
  }

  getColors(aPalette) {
    this.props.storePalette(aPalette);
  }

  onDrop(files) {
    let paletteColors;
    let cp = new ColorPalette()
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 60;
    let self = this;
    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
      paletteColors = cp.getPalette(this, 7)
      self.getColors(paletteColors);
      self.scrollToPalette()
    }
    this.props.storePhoto(files[0].preview)
  }

  removePhoto(paletteColors) {
    this.props.deletePalette(this.props.palette)
    this.props.deletePhoto(this.props.photo)
    this.scrollToTop()
  }

  loadPhotos() {
    if(this.props.photo) {
      return(
        <div className='photo-options'>
          <button className='delete-btn color' onClick={this.removePhoto.bind(this)} >x</button>
          <button className='fave-btn color' onClick={() => this.handleFavorite()}>☆</button>
        </div>
      )
    }
  }

  paletteToRGB(position) {
    return `rgb(${this.props.palette[position][0]},${this.props.palette[position][1]},${this.props.palette[position][2]})`
  }

  scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  scrollToPalette() {
    var pal = document.getElementById('palette');
    pal.scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  setBackground() {
    if(this.props.palette.length) {
      document.body.style.background = this.paletteToRGB(5);
    } else {
      document.body.style.background = '#e1e6e2';
    }
  }

  setTextColor() {
    let color = '#475559'
    if(this.props.palette.length) { color = this.paletteToRGB(0) }
    let elements = document.getElementsByClassName('color');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = color;
    }
  }


  render() {
    this.setBackground()
    this.setTextColor()
    let divStyle1 = {}
    let divStyle2 = {}
    let divStyle3 = {}
    let divStyle4 = {}
    let divStyle5 = {}

    if (this.props.palette.length) {
      divStyle1 = {
        background: this.paletteToRGB(0)
      }
      divStyle2 = {
        background: this.paletteToRGB(1)
      }
      divStyle3 = {
        background: this.paletteToRGB(2)
      }
      divStyle4 = {
        background: this.paletteToRGB(3)
      }
      divStyle5 = {
        background: this.paletteToRGB(4)
      }
    };

    return (
      <div className='photo-palette-container'>
      <p className='color'>Try dropping an image here, or click to select an image from your computer.</p>
        <Dropzone className='drop-zone' onDrop={this.onDrop.bind(this)}>
        </Dropzone>
        <div className='img-palette-container'>
          <img src={this.props.photo} />
          <div id='palette' className='palette-container'>
            <div className='color1' style={divStyle1}></div>
            <div className='color2' style={divStyle2}></div>
            <div className='color3' style={divStyle3}></div>
            <div className='color4' style={divStyle4}></div>
            <div className='color5' style={divStyle5}></div>
          </div>
        </div>
        {this.loadPhotos()}
      </div>
    )
  }
}
