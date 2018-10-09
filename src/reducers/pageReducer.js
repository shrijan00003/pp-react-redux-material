import { LANDING_PAGE_ACTIONS } from '../constants/photoPayoConstants';

const INITIAL_STATE = {
  isLandingPage: true,
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LANDING_PAGE_ACTIONS.SET_LANDING_PAGE:
      return {
        ...state,
        isLandingPage:true,

      }
    case LANDING_PAGE_ACTIONS.UNSET_LANDING_PAGE:
      return {
        ...state,
        isLandingPage:false,

      }
    default:
      return state;
  }
};

export default pageReducer;
