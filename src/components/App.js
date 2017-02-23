import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

export default class App extends Component{
  render() {
  return (
    <div>
      <div className='header-container'>
        <h1 className='header'>ColorPal</h1>
      </div>
        <Photo></Photo>
    </div>
    )
  }
}
