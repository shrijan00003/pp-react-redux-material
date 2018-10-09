import { connect } from 'react-redux';
import UploadImagesView from './uploadImagesView';
import {
  uploadImageToStore,
  uploadSelectedImageToStore,
} from '../../actions/photoActions';

const mapStateToProps = state => {
  return {
    demoProps: 'hello',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upLoadImageToStore: (img = [], imgPreviewUrls = [], error = '') => {
      dispatch(uploadImageToStore(img, imgPreviewUrls, error));
    },
    uploadSelectedImageToStore: (img = [], error = '') => {
      dispatch(uploadSelectedImageToStore(img, error));
    },
  };
};

const UploadImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImagesView);

export default UploadImage;
