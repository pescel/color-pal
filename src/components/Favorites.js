import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Favorites extends Component {
  constructor() {
    super()
  }

  paletteToRGB(palette, position) {
    return {
      background: `rgb(${palette[position][0]},${palette[position][1]},${palette[position][2]})`
    }
  }

  loadFavorites(favorites) {
    return this.props.favorites.map((favorite) => {
      return(

        <div>
          <h1 className='fave-header'>Favorites</h1>
          <Link to="/">
           <button className='home-btn'>Home</button>
          </Link>
        <div className='favorite-container'>
          <div className='img-container'>
            <img className='fave-img' src={favorite.photo} />
          </div>
            <div className='color1' style={this.paletteToRGB(favorite.palette, 0)}></div>
            <div className='color2' style={this.paletteToRGB(favorite.palette, 1)}></div>
            <div className='color3' style={this.paletteToRGB(favorite.palette, 2)}></div>
            <div className='color4' style={this.paletteToRGB(favorite.palette, 3)}></div>
            <div className='color5' style={this.paletteToRGB(favorite.palette, 4)}></div>
        </div>
        </div>
      )
    })
  }

  render(){
    console.log(this.props.favorites);
    if (this.props.favorites.length == 0) {
      return(<p>No favorites</p>)
    } else {
      return(<div>{this.loadFavorites()}</div>)
    }
  }
}
