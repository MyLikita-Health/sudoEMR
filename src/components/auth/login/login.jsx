import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import {
  login,
  authLoading,
} from "../../../redux/actions/auth";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input, 
  CardFooter,
  CardBody,
  Row,
} from "reactstrap";
import { Spinner } from "evergreen-ui";
import "./login.css";
import Loading from "../../loading";
import PublicWrapper from "../../../routes/PublicWrapper";
import { _fetchApi2 } from "../../../redux/actions/api";
import { apiURL } from "../../../redux/actions";

export const accountTypes = {
  PATIENT: "PATIENT",
  DOCTOR: "DOCTOR",
  OTHER: "OTHER",
};

class Login extends PureComponent {
  state = {
    formData: {
      username: "",
      passowrd: "",
      accountType: "OTHER",
    },
    loading: false,
    pageLoading: true,
  };

  // defaultNav = (access) => {
  //   if (access && access.length) {
  //     switch (access[0]) {
  //       case "Laboratory":
  //         return this.props.history.push("/me/lab");
  //       case "Accounts":
  //         return this.props.history.push("/me/account");
  //       case "Reports":
  //         return this.props.history.push("/me/report");
  //       case "Records":
  //         return this.props.history.push("/me/records");
  //       case "Doctors":
  //         return this.props.history.push("/me/doctor");
  //       case "Pharmacy":
  //         return this.props.history.push("/me/pharmacy");

  //       case "Inventory":
  //         return this.props.history.push("/me/inventory");

  //       case "Operation":
  //         return this.props.history.push("/me/operation");
  //       case "Admin":
  //         return this.props.history.push("/me/admin");

  //       case "Patient":
  //         return this.props.history.push("/user");
  //       default:
  //         return this.props.history.push("/");
  //     }
  //   }
  // };

  // navigateUser(access) {
  //   // console.log(access)
  //   this.setState({ pageLoading: false });
  //   if (this.props.user.role && this.props.user.role !== "") {
  //     _fetchApi2(
  //       `${apiURL()}/navigation/get-homepage?facilityId=${
  //         this.props.user.facilityId
  //       }&role=${this.props.user.role}`,
  //       (data) => {
  //         if (data.results) {
  //           let url = data.results.length
  //             ? data.results[0].home_page
  //             : "/me/account";
  //           this.props.history.push(url);
  //         }
  //       },
  //       (err) => {
  //         console.log(err);
  //         this.defaultNav(access);
  //       }
  //     );
  //   } else {
  //     this.defaultNav(access);
  //   }
  // }

  componentDidMount() {
    //   console.log(this.props)
    // checkAuthStatus(
    //   (acc) => this.navigateUser(acc),
    //   () => this.setState({ pageLoading: false })
    // );
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState((prevState) => ({
      formData: Object.assign({}, prevState.formData, { [name]: value }),
    }));

  handleRadioChange = (value) =>
    this.setState((prevState) => ({
      formData: Object.assign({}, prevState.formData, { accountType: value }),
    }));

  loginSuccess = () => {
    const { accountType } = this.state.formData;
    this.setState(
      {
        loading: false,
        formData: { username: "", password: "" },
      },
      () => {
        console.log(accountType);
        switch (accountType) {
          case accountTypes.PATIENT: {
            this.props.history.push("/user");
            break;
          }
          case accountTypes.DOCTOR: {
            this.props.history.push("/me/doctor");
            break;
          }
          case accountTypes.OTHER: {
            this.props.history.push("/me/lab");
            break;
          }
          default:
            return null;
        }
      }
    );
  };

  loginErr = () => {
    this.setState({ loading: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { username, password, accountType } = this.state.formData;
    this.props.login(
      { username, password, accountType },
      this.loginSuccess,
      this.loginErr
    );
    // alert("JFJFJFFJ");
  };

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
    } = this;

    // if (pageLoading) {
    //   return (
    //     <div style={{ marginTop: "40vh" }}>
    //       <Loading />
    //     </div>
    //   );
    // }

    return (
      <PublicWrapper>
        <Row className="m-0">
          <img
            alt="bg"
            src={require("../../../images/callWitDoc.png")}
            className="img-fluid h-100 w-100"
            style={{ position: "absolute", zIndex: -1 }}
          />
          <Form className="login-form" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-center text-white">LOGIN</h3>
              <CardBody className="bg-white p-3">
                {/* {JSON.stringify(this.state.formData)} */}
                <FormGroup>
                  <Label>username or email</Label>
                  <Input
                    name="username"
                    value={username}
                    placeholder="username"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>password</Label>
                  <Input
                    name="password"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={handleChange}
                  />
                </FormGroup>

                {/* <FormGroup>
                  <label htmlFor="accountTpe">Login as:</label>
                  <div>
                    <label className="mr-4" htmlFor="patient">
                      <input
                        name="accountType"
                        id="patient"
                        type="radio"
                        checked={accountType === accountTypes.PATIENT}
                        onChange={() => handleRadioChange(accountTypes.PATIENT)}
                      />{' '}
                      Patient
                    </label>
                    <label className="mr-4" htmlFor="doctor">
                      <input
                        name="accountType"
                        id="doctor"
                        type="radio"
                        checked={accountType === accountTypes.DOCTOR}
                        onChange={() => handleRadioChange(accountTypes.DOCTOR)}
                      />{' '}
                      Doctor
                    </label>
                    <label className="mr-4" htmlFor="other">
                      <input
                        name="accountType"
                        id="other"
                        type="radio"
                        checked={accountType === accountTypes.OTHER}
                        onChange={() => handleRadioChange(accountTypes.OTHER)}
                      />{' '}
                      Other
                    </label>
                  </div>
                </FormGroup> */}

                <Button
                  className="btn-dark btn-block"
                  disabled={
                    username === "" ||
                    password === "" ||
                    !accountType || accountType === ""
                  }
                >
                  <>
                    {loading ? (
                      <center>
                        <Spinner size={20} />
                      </center>
                    ) : (
                      "Login"
                    )}
                  </>
                </Button>
              </CardBody>
              <CardFooter className="m-0 bg-primary shadow">
                <div className="text-center text-white">
                  <Link to="/signup/hospital" className="text-light">
                    Sign up
                  </Link>
                  <span className="p-2">|</span>
                  <Link to="/forgotpassword" className="text-light">
                    Forgot password?
                  </Link>
                </div>
                <div style={{ color: "red" }}>
                  <center>{error.length ? error : ""}</center>
                </div>
              </CardFooter>
            </div>
          </Form>
        </Row>
      </PublicWrapper>
    );
  }
}

function mapStateToProps({ auth: { authenticated, error, user } }) {
  return {
    authenticated,
    error,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, authLoading }, dispatch);
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
