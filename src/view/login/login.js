import { connect } from 'react-redux';
import LoginView from './loginView';

const mapStateToProps = state => {
  return {
    demoProps: 'hello',
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

export default Login;
