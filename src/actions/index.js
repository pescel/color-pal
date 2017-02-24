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

export const deletePalette = (photo) => {
  return {
    type: 'DELETE_PALETTE',
    photo
  }
}

// export const storePalette = ()
