import { connect } from 'react-redux';
import TopNavbarComponent from '../components/navbar/topNavbar';

const mapStateToProps = state => {
  return {
    // isLogedIn: state.auth.isLogedIn,
    isLogedIn: true
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const NavbarView = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavbarComponent);

export default NavbarView;
