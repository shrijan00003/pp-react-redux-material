import { connect } from 'react-redux';
import UploadImagesView from './uploadImagesView';
import {
  uploadImagesBegins,
  uploadImagesFailure,
  uploadImagesSuccess,
} from '../../actions/photoActions';

const mapStateToProps = state => {
  return {
    demoProps: 'hello',
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
  };
};

const UploadImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImagesView);

export default UploadImage;
