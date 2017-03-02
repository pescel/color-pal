import { connect } from 'react-redux';
import { storePhoto, deletePalette, storePalette, addFavorite, deletePhoto } from '../actions/index';
import Photo from '../components/Photo';

 const mapStateToProps = (state) => {
   console.log('state', state)
   return {
     photo: state.photo,
     palette: state.palette,
     favorites: state.favorites
   }
 }

const mapDispatchToProps = (dispatch) => {
  return{
    storePhoto: (photo) => {
      dispatch(storePhoto(photo))
    },
    storePalette: (palette) => {
      dispatch(storePalette(palette))
    },
    deletePalette: (palette) => {
      dispatch(deletePalette(palette))
    },
    addFavorite: (photo, palette) => {
      dispatch(addFavorite(photo, palette))
    },
    deletePhoto: (photo) => {
      dispatch(deletePhoto(photo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)
