import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import photoReducer from './photoReducer';

const reducer = combineReducers({
  page: pageReducer,
  photo: photoReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === ACTIONS.LOGOUT_FULFILLED) {
  //   state = undefined;
  // }
  return reducer(state, action);
};

export default rootReducer;
