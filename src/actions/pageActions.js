import { LANDING_PAGE_ACTIONS } from '../constants/photoPayoConstants'

//for landing page 

export const setLandingPage = () => ({
  type : LANDING_PAGE_ACTIONS.SET_LANDING_PAGE,
})
export const unsetLandingPage = () => ({
  type : LANDING_PAGE_ACTIONS.UNSET_LANDING_PAGE,
})

// for landing page 
export const setLandingPageAction = () => {
  return async dispatch => {
    await dispatch(setLandingPage());
  }
}

export const unSetLandingPageAction = () => {
  return async dispatch => {
    await dispatch(unsetLandingPage());
  }
}
