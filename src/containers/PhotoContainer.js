import { connect } from 'react-redux';
import { storePhoto, deletePalette, storePalette, addFavorite } from '../actions/index';
import Photo from '../components/Photo';

 const mapStateToProps = (state) => {
   console.log('state', state)
   return {
     photo: state.photo,
     palette: state.palette
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
    deletePalette: (photo) => {
      dispatch(deletePalette(photo))
    },
    addFavorite: (photo, palette) => {
      dispatch(addFavorite(photo, palette))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)
