import { ACTIONS } from '../constants/photoConstants';

/**
 *
 */
export const uploadImagesBegins = () => ({
  type: ACTIONS.UPLOAD_PENDING,
});

/**
 *
 */
// export const uploadImagesSuccess = img => dispatch => {
//   dispatch({
//     type: ACTIONS.UPLOAD_FULLFILLED,
//     payload: {
//       img,
//     },
//   });
// };
export const uploadImagesSuccess = (img, imgPreviewUrls) => ({
  type: ACTIONS.UPLOAD_FULLFILLED,
  payload: {
    img,
    imgPreviewUrls,
  },
});

/**
 *
 * @param {*} error
 */
export const uploadImagesFailure = error => ({
  type: ACTIONS.UPLOAD_REJECTED,
  payload: {
    error,
  },
});

/**
 *
 */
export const uploadSelectedImagesBegins = () => ({
  type: ACTIONS.UPLOAD_PENDING,
});

/**
 *
 */
// export const uploadImagesSuccess = img => dispatch => {
//   dispatch({
//     type: ACTIONS.UPLOAD_FULLFILLED,
//     payload: {
//       img,
//     },
//   });
// };
export const uploadSelectedImagesSuccess = img => ({
  type: ACTIONS.UPLOAD_FULLFILLED,
  payload: {
    img,
  },
});

/**
 *
 * @param {*} error
 */
export const uploadSelectedImagesFailure = error => ({
  type: ACTIONS.UPLOAD_REJECTED,
  payload: {
    error,
  },
});

/**
 *
 * @param {*} img
 * @param {*} error
 */
export const uploadImageToStore = (
  img = [],
  imgPreviewUrls = [],
  error = ''
) => dispatch => {
  console.log('img in action creator', img);
  dispatch(uploadImagesBegins());
  if (error.length > 0) {
    dispatch(uploadImagesFailure(error));
  } else {
    dispatch(uploadImagesSuccess(img, imgPreviewUrls));
  }
};

/**
 *
 */
export const uploadSelectedImageToStore = (
  img = {},
  error = ''
) => dispatch => {
  console.log('image selected to store', img);
  dispatch(uploadSelectedImagesBegins());
  if (error.length > 0) {
    dispatch(uploadSelectedImagesFailure(error));
  } else {
    dispatch(uploadSelectedImagesSuccess(img));
  }
};
