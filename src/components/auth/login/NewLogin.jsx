import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { login, authLoading } from '../../../redux/actions/auth'
import sudoEMR from '../../../images/sudoEMR...png'
import { Row, Card, Col } from 'reactstrap'
import { Spinner } from 'evergreen-ui'
import './login.css'
import { TextInput } from '../../comp/components'

export const accountTypes = {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  OTHER: 'OTHER',
}

class NewLogin extends PureComponent {
  state = {
    formData: {
      username: '',
      passowrd: '',
      accountType: 'OTHER',
    },
    loading: false,
    pageLoading: true,
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState((prevState) => ({
      formData: Object.assign({}, prevState.formData, { [name]: value }),
    }))

  handleRadioChange = (value) =>
    this.setState((prevState) => ({
      formData: Object.assign({}, prevState.formData, { accountType: value }),
    }))

  loginSuccess = () => {
    const { accountType } = this.state.formData
    this.setState(
      {
        loading: false,
        formData: { username: '', password: '' },
      },
      () => {
        console.log(accountType)
        switch (accountType) {
          case accountTypes.PATIENT: {
            this.props.history.push('/user')
            break
          }
          case accountTypes.DOCTOR: {
            this.props.history.push('/me/doctor')
            break
          }
          case accountTypes.OTHER: {
            this.props.history.push(`/me/records`)
            break
          }
          default:
            return null
        }
      },
    )
  }

  loginErr = () => {
    this.setState({ loading: false })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    const { username, password, accountType } = this.state.formData
    this.props.login(
      { username, password, accountType },
      this.loginSuccess,
      this.loginErr,
    )
    // alert("JFJFJFFJ");
  }

  render() {
    const {
      handleChange,
      handleSubmit,
      // handleRadioChange,
      state: {
        formData: { username, password, accountType },
        loading,
        // pageLoading,
      },
      props: { error },
    } = this

    return (
      <div className="auth_div_2">
        <Card className="auth_div_wrapper shadow">
          <Row className="mt-3">
            <Col md={12}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div>
                    <img
                      src={sudoEMR}
                      className="auth_logo"
                      style={{ width: 200 }}
                      alt="sudoEMR logo"
                    />
                  </div>
                </div>
                <div>
                  {/* <h4 className=" m-0 auth_heading">Login</h4> */}
                  {/* <p className="already_have_account m-0">
                    Don't have an account?{' '}
                    <span className="login_text">Register</span>
                  </p> */}
                </div>
              </div>
            </Col>
          </Row>
          <h5 className="auth_heading mt-5">Login here</h5>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <div>
                  <label className="input_label mt-2">
                    Username <span className="star">*</span>
                  </label>
                  <TextInput
                    // _ref={inputFocus}
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>
              </Col>
              <Col md={12}>
                <div>
                  <label className="input_label mt-2">
                    Password <span className="star">*</span>
                  </label>
                  <TextInput
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-4">
              <Col md={8}>
                <p className="m-0">
                  Don't have an account?{' '}
                  <span className="login_text">
                    <Link to="/signup">Register</Link>
                  </span>
                </p>
              </Col>
              <Col md={4}>
                <div>
                  <button
                    disabled={
                      username === '' ||
                      password === '' ||
                      !accountType ||
                      accountType === ''
                    }
                    className="app_primary_button auth_button_1 pl-5 pr-5"
                  >
                    <>
                      {loading ? (
                        <center>
                          <Spinner size={20} />
                        </center>
                      ) : (
                        'Login'
                      )}
                    </>
                  </button>
                </div>
              </Col>
            </Row>
            <div style={{ color: 'red' }}>
              <center>{error.length ? error : ''}</center>
            </div>
          </form>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ auth: { authenticated, error, user } }) {
  return {
    authenticated,
    error,
    user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, authLoading }, dispatch)
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(NewLogin)
