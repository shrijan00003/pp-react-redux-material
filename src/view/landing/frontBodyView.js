import { connect } from 'react-redux';
import LandingBodyComponent from '../../components/landing/bodyComponent';
import { unsetLandingPage } from '../../actions/pageActions'

const mapStateToProps = state => {
  return {
    isLogedIn: true,
    // isLogedIn: state.auth.isLogedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    unsetLandingPage : async () => dispatch(unsetLandingPage)
  };
};

const FrontBodyView = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingBodyComponent);

export default FrontBodyView;
