import { connect } from 'react-redux';
import UploadImagesView from './uploadImagesView';
import {
  uploadImagesBegins,
  uploadImagesFailure,
  uploadImagesSuccess,
  uploadSelectedImagesBegins,
  uploadSelectedImagesSuccess,
  uploadSelectedImagesFailure,
} from '../../actions/photoActions';

const mapStateToProps = state => {
  return {
    isUploaded: state.photo.isUploaded,
    uploadedImages: state.photo.uploadedImages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadImagesBegins: () => {
      dispatch(uploadImagesBegins());
    },
    uploadImagesFailure: errs => {
      dispatch(uploadImagesFailure(errs));
    },
    uploadImagesSuccess: img => {
      dispatch(uploadImagesSuccess(img));
    },
    uploadSelectedImagesBegins: () => {
      dispatch(uploadSelectedImagesBegins());
    },
    uploadSelectedImagesSuccess: img => {
      dispatch(uploadSelectedImagesSuccess(img));
    },
    uploadSelectedImagesFailure: errs => {
      dispatch(uploadSelectedImagesFailure(errs));
    },
  };
};

const UploadImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImagesView);

export default UploadImage;
