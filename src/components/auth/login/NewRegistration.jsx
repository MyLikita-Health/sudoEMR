import React, { Component } from "react";
import sudoEMR from "../../../images/sudoEMR..png";
import { Row, Col } from "reactstrap";
import { _customNotify, _warningNotify } from "../../utils/helpers";
import { apiURL } from "../../../redux/actions";
import allModule from "../../admin/moduleData";
import { checkUsername, checkEmail } from "../registration/api";
import { CustomButton, TextInput } from "../../comp/components";
import { Link } from "react-router-dom";
import PasswordInput from "../registration/component/PasswordInput";

class NexRegistration extends Component {
  state = {
    name: "",
    email: "",
    code: "",
    address: "",
    firstname: "",
    lastname: "",
    phone: "",
    username: "",
    password: "",
    loading: false,
    check_Email: false,
    check_Username: false,
    usernameMsg: "",
    emailMsg: "",
    usernameGood: false,
    emailGood: false,
    submitted: false,
  };

  handleUsernameChange = (value) => {
    this.setState((prev) => ({ ...prev, username: value }));
    this.setState({ check_Username: true });
    checkUsername(
      value,
      (msg) => {
        this.setState({ check_Username: false });
        this.setState({ usernameGood: true });
        this.setState({ usernameMsg: msg });
      },
      (err) => {
        this.setState({ check_Username: false });
        this.setState({ usernameGood: false });
        this.setState({ usernameMsg: err });
      }
    );
  };

  handleEmailChange = (value) => {
    this.setState((prev) => ({ ...prev, email: value }));
    this.setState({ check_Email: true });
    checkEmail(
      value,
      (msg) => {
        this.setState({ check_Email: false });
        this.setState({ emailGood: true });
        this.setState({ emailMsg: msg });
      },
      (err) => {
        this.setState({ check_Email: false });
        this.setState({ emailGood: false });
        this.setState({ emailMsg: err });
      }
    );
  };

  onInputChange = (name, value) =>
    this.setState((prev) => ({ ...prev, [name]: value }));

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      code: "",
      address: "",
      firstname: "",
      lastname: "",
      phone: "",
      username: "",
      password: "",
    });
  };
  handleSubmit = () => {
    this.setState((prev) => ({ ...prev, loading: true }));

    const hospitalObj = {
      name: this.state.name,
      code: this.state.code,
      address: this.state.address,
      type: "Hospital",
      admin: this.state.username,
      
    };

    const userObj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      accessTo: this.state.facilityAccess,
      phone: this.state.phone,
      status:'approved'
    };
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.name === "" ||
      this.state.address === "" ||
      this.state.firstname === "" ||
      this.state.lastname === ""
    ) {
      return _warningNotify("Form is invalid, please complete the form");
    }

    let facilityAccess = allModule.map((item) => item.name).join(",");

    fetch(`${apiURL()}/hospitals/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...hospitalObj,
        accessTo: facilityAccess,
      }),
    })
      .then((response) => response.json())
      .then(({ hospital, success }) => {
        console.log({ hospital, success });
        if (success) {
          console.log(hospital);
          fetch(`${apiURL()}/auth/sign-up`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...userObj,
              accessTo: facilityAccess,
              facilityId: hospital.id,
              role: "admin",
              privilege: 4,
              functionality: allModule
                .flatMap((module) => module.type)
                .filter((value, index, self) => {
                  return self.indexOf(value) === index;
                })
                .join(","),
            }),
          })
            .then((response) => response.json())
            .then((res) => {
              if (res.success) {
                console.log("hospital");
                console.log(res);
                _customNotify("Facility Successfully Created");
                this.setState((prev) => ({ ...prev, loading: false }));
                this.resetForm();
                this.setState({ loading: false, submitted: true });
              } else {
                this.setState((prev) => ({ ...prev, loading: false }));
                _warningNotify("An error occurred");
              }
            })
            .catch(() => _warningNotify("An error occurred"));
        } else {
          this.setState((prev) => ({ ...prev, loading: false }));
          _warningNotify("An error occurred");
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
        _warningNotify("An error occured");
      });
  };

  render() {
    return (
      <>
        <div className="auth_div">
          <Row>
            <Col md={5} className="auth_left_col">
              <Row className="">
                <Col md={1}></Col>
                <Col md={10} className="text-white left_col_content_div">
                  <div>
                    <img
                      src={sudoEMR}
                      className="auth_logo"
                      alt="sudoEMR logo"
                    />
                    <h2>
                      Empowering Healthcare with sudoEMR: Building a Healthier
                      World
                    </h2>
                    <div className="disc_div">
                      <h5>Disclosure & Consent</h5>
                      <p>
                        Before proceeding, you must confirm that you have read
                        and agree to the terms of the sudoEMR disclosure
                        available at the link below.
                      </p>

                      <a href="/" target="_blank" rel="noreferrer">
                        sudoEMR Disclosure
                      </a>
                      <div>
                        <button className="app_primary_button auth_button_2 pl-5 pr-5">
                          <Link to="/auth">Login to your account</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={1}></Col>
              </Row>
            </Col>
            <Col md={7} className="auth_right_col p-5">
              <Row>
                <Col md={1}></Col>
                <Col md={10}>
                  <Row>
                    <Col md={6}>
                      <h2 className="auth_heading">Register</h2>
                    </Col>
                    <Col md={6}>
                      <p className="already_have_account">
                        Already have an account?{" "}
                        <span className="login_text">
                          <Link to="/auth">Login to your account</Link>
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <h5 className="auth_heading mt-4">Hospital Information</h5>
                  <Row>
                    <Col md={6}>
                      <label className="input_label mt-2">
                        Hospital Name <span className="star">*</span>
                      </label>
                      <div>
                        <TextInput
                          name="name"
                          value={this.state.name}
                          onChange={(e) =>
                            this.onInputChange("name", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label className="input_label mt-2">
                        Prefix (Hospital File Format){" "}
                        <span className="star">*</span>
                      </label>
                      <div>
                        <TextInput
                          name="code"
                          value={this.state.code}
                          onChange={(e) =>
                            this.onInputChange("code", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Col>{" "}
                    <Col md={6}>
                      <label className="input_label mt-2">
                        Hospital Address <span className="star">*</span>
                      </label>
                      <div>
                        <TextInput
                          name="address"
                          value={this.state.address}
                          onChange={(e) =>
                            this.onInputChange("address", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <h5 className="auth_heading mt-5">User Information</h5>
                  <Row>
                    <Col md={6}>
                      <label className="input_label mt-2">
                        First Name <span className="star">*</span>
                      </label>
                      <div>
                        <TextInput
                          name="firstname"
                          value={this.state.firstname}
                          onChange={(e) =>
                            this.onInputChange("firstname", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label className="input_label mt-2">
                        Last Name <span className="star">*</span>
                      </label>
                      <div>
                        <TextInput
                          name="lastname"
                          value={this.state.lastname}
                          onChange={(e) =>
                            this.onInputChange("lastname", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Col>{" "}
                    <Col md={6}>
                      <label className="input_label mt-2">
                        Email <span className="star">*</span>
                      </label>
                      <div>
                        <TextInput
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={(e) =>
                            this.handleEmailChange(e.target.value)
                          }
                          loading={this.state.check_Email}
                          good={this.state.emailGood}
                          message={this.state.emailMsg}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label className="input_label mt-2">
                        Phone Number <span className="star">*</span>
                      </label>
                      <div>
                        <TextInput
                          name="phone"
                          value={this.state.phone}
                          onChange={(e) =>
                            this.onInputChange("phone", e.target.value)
                          }
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label className="input_label mt-2">
                        Username <span className="star">*</span>
                      </label>
                      <div>
                        <TextInput
                          name="username"
                          value={this.state.username}
                          onChange={(e) =>
                            this.handleUsernameChange(e.target.value)
                          }
                          required
                          loading={this.state.checkingUsername}
                          good={this.state.usernameGood}
                          message={this.state.usernameMsg}
                        />
                      </div>
                    </Col>{" "}
                    <Col md={6}>
                      <label className="input_label mt-2">
                        Password <span className="star">*</span>
                      </label>
                      <div>
                        <PasswordInput
                          name="password"
                          value={this.state.password}
                          onChange={(e) =>
                            this.onInputChange("password", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <hr className="mt-5 mb-5" />
                  <Row className="d-flex align-items-center">
                    <Col md={7}>
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          I have read and agree to the terms of{" "}
                          <span className="login_text">sudoEMR</span>
                        </label>
                      </div>
                    </Col>
                    <Col md={5}>
                      <div>
                        <CustomButton
                          className="app_primary_button auth_button_1 pl-5 pr-5"
                          onClick={this.handleSubmit}
                          loading={this.state.loading}
                          disabled={
                            !this.state.usernameGood || !this.state.emailGood
                          }
                        >
                          Register
                        </CustomButton>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default NexRegistration;
