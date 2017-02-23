import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

export default class Photo extends Component {
  constructor() {
    super()
    this.state = {
      file: ''
    }
  }

  onDrop(files) {
    console.log('Received files: ', files[0]);
    this.setState({ file: files[0].preview });
  }

  loadPhotos() {
    if(this.state.file) {
      return(
        <button className='delete-photo-btn'>✖️</button>
      )
    }
  }


  render() {
    console.log('render', this.state.file);
    return (
      <div className='photo-container'>
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <img src={this.state.file} />
        {this.loadPhotos()}
        <button className='get-palette-btn'>Get Palette!</button>
      </div>
    )
  }
}
