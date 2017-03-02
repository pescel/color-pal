import { combineReducers } from 'redux';
import { palette } from './palette.js';
import { photo } from './photo.js';
import { favorites } from './favorites.js';


// import userSignIn from './User-Reducer'  ;

export const rootReducer = combineReducers({
  palette,
  photo,
  favorites,
  // userSignIn
});
