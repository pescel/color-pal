// import { Link, browserHistory } from 'react-router';
//
// export const signIn = (email,password, user) => {
//   return {
//     type: 'SIGN_IN',
//     email,
//     password,
//     user,
//   }
// }

export const storePhoto = (photo) => {
  return {
    type: 'LOAD_PHOTO',
    photo
  }
}

export const storePalette = (palette) => {
  return {
    type: 'STORE_PALETTE',
    palette
  }
}

export const deletePalette = (palette) => {
  return {
    type: 'DELETE_PALETTE',
    palette
  }
}

export const deletePhoto = (photo) => {
  return {
    type: 'DELETE_PHOTO',
    photo
  }
}

export const loadPalette = (palette) => {
  return {
    type: 'LOAD_PALETTE',
    palette
  }
}

export const addFavorite = (photo, palette) => {
  return {
    type: 'ADD_FAVORITE',
    photo,
    palette

  }
}
