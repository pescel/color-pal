import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoContainer from '../containers/PhotoContainer';

export default class App extends Component{
  render() {
  return (
    <div>
      <div className='header-container'>
        <h1 className='header'>ColorPal</h1>
      </div>
        <PhotoContainer />
    </div>
    )
  }
}
