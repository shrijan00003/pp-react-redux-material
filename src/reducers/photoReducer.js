import { ACTIONS } from '../constants/photoConstants';

const INITIAL_STATE = {
  error: null,

  isUploading: false,
  isUploaded: false,

  isProccessing: false,
  isProccessed: false,

  uploadedImages: [],

  selectedImages: [],
};

const photoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.UPLOAD_PENDING:
      return {
        ...state,
        isUploading: true,
        error: null,
      };

    case ACTIONS.UPLOAD_FULLFILLED:
      return {
        ...state,
        isUploaded: true,
        uploadedImages: action.payload.img,
      };

    case ACTIONS.UPLOAD_REJECTED:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default photoReducer;
