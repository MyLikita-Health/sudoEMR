import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import {
  login,
  authLoading,
  checkAuthStatus,
} from '../../../redux/actions/auth';
import './login.css';
import Loading from '../../loading';

class Login extends PureComponent {
  state = {
    formData: {
      username: '',
      passowrd: '',
    },
    loading: false,
    pageLoading: true,
  };

  navigateUser(access) {
    // console.log(access)
    this.setState({ pageLoading: false });
    if (access && access.length) {
      switch (access[0]) {
        case 'records':
          return this.props.history.push('/me/records');
        case 'doctor':
          return this.props.history.push('/me/doctor');
        case 'pharmacy':
          return this.props.history.push('/me/pharmacy');
        case 'lab':
          return this.props.history.push('/me/lab');
        case 'account':
          return this.props.history.push('/me/account');
        case 'operation':
          return this.props.history.push('/me/operation');
        case 'admin':
          return this.props.history.push('/me/admin');
        default:
          return this.props.history.push('/');
      }
    }
  }

  componentDidMount() {
    //   console.log(this.props)
    checkAuthStatus(
      (acc) => this.navigateUser(acc),
      () => this.setState({ pageLoading: false })
    );
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState((prevState) => ({
      formData: Object.assign({}, prevState.formData, { [name]: value }),
    }));

  loginSuccess = () => {
    this.setState(
      {
        loading: false,
        formData: { username: '', password: '' },
      },
      () => this.props.history.push('/me/records')
    );
  };

  loginErr = () => {
    this.setState({ loading: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { username, password } = this.state.formData;
    this.props.login({ username, password }, this.loginSuccess, this.loginErr);
  };

  render() {
    const {
      state: { pageLoading },
    } = this;

    if (pageLoading) {
      return (
        <div style={{ marginTop: '40vh' }}>
          <Loading />
        </div>
      );
    }

    return (
      <>
        <header id="header" class="ex-2-header">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h1>Log In</h1>
                <p>
                  You don't have a password? Then please{' '}
                  <a class="white" href="sign-up.html">
                    Sign Up
                  </a>
                </p>

                <div class="form-container">
                  <form
                    id="logInForm"
                    data-toggle="validator"
                    data-focus="false"
                  >
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control-input"
                        id="lemail"
                        required
                      />
                      <label class="label-control" for="lemail">
                        Email
                      </label>
                      <div class="help-block with-errors" />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control-input"
                        id="lpassword"
                        required
                      />
                      <label class="label-control" for="lpassword">
                        Password
                      </label>
                      <div class="help-block with-errors" />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="form-control-submit-button">
                        LOG IN
                      </button>
                    </div>
                    <div class="form-message">
                      <div id="lmsgSubmit" class="h3 text-center hidden" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

function mapStateToProps({ auth: { authenticated, error } }) {
  return {
    authenticated,
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, authLoading }, dispatch);
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login);
