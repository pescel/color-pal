import { connect } from 'react-redux';
import { storePhoto } from '../actions/index';
import Photo from '../components/Photo';

 const mapStateToProps = (state) => {
   return {
     photo: state.storePalette
   }
 }

const mapDispatchToProps = (dispatch) => {
  return{
    storePhoto: (photo) => {
      dispatch(storePhoto(photo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)
