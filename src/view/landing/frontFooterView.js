import { connect } from 'react-redux';
import LandingFooterComponent from '../../components/landing/footerComponent';

const mapStateToProps = state => {
  return {
    isLogedIn: true,
    // isLogedIn: state.auth.isLogedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const FrontFooterView = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingFooterComponent);

export default FrontFooterView;
