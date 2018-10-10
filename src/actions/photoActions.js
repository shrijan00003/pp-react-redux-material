import { ACTIONS } from '../constants/photoConstants';
/**
 * @param {NUll}
 */
export const uploadImagesBegins = () => dispatch => {
  dispatch({
    type: ACTIONS.UPLOAD_PENDING,
  });
};

/**
 *
 */
export const uploadImagesSuccess = img => dispatch => {
  dispatch({
    type: ACTIONS.UPLOAD_FULLFILLED,
    payload: {
      img,
    },
  });
};

/**
 *
 * @param {*} error
 */
export const uploadImagesFailure = error => dispatch => {
  dispatch({
    type: ACTIONS.UPLOAD_REJECTED,
    payload: {
      error,
    },
  });
};

/**
 *
 */
export const uploadSelectedImagesBegins = () => ({
  type: ACTIONS.UPLOAD_PENDING,
});

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
