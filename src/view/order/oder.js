import { connect } from 'react-redux';
import OrderView from './orderView';
import {} from '../../actions/photoActions';

const mapStateToProps = state => {
  return {
    selectedImages: state.photo.selectedImages,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const UploadImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderView);

export default UploadImage;
