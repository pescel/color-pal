import { connect } from 'react-redux';
import { storePhoto, deletePalette } from '../actions/index';
import Favorites from '../components/Favorites';

const mapStateToProps = (state) => {
  return {
    photo: state.storePalette
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addFavorites: (photo, palette) => {
      dispatch(storePhoto(photo, palette))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
