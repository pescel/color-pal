import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PhotoContainer from '../containers/PhotoContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
// import Button from './Button';

export default class App extends Component{
  render() {
  return (
    <div>
      <div className='header-container'>
        <h1 className='header color'>ColorPal</h1>

      <Link to="/favorites"><button className='fave-page-btn'>Favorites</button></Link>
      </div>
        <PhotoContainer />
    </div>
    )
  }
}
