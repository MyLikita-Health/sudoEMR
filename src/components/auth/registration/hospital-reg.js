import React, { Component } from "react";
// import BackButton from "../../landing/BackButton";
import "./signUp.css";
import CustomButton from "../../comp/components/Button";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import PublicWrapper from "../../../routes/PublicWrapper";
import { _warningNotify } from "../../utils/helpers";
import { apiURL } from "../../../redux/actions";
import { checkUsername, checkEmail } from "./api";
import Input from "./component/Input";
import PasswordInput from "./component/PasswordInput";
import { Success } from "./doctor-reg";
import { navArr } from "../../nav/nav-modules";
import BackButton from "../../BackButton";
import allModule from "../../admin/moduleData";

class Hospital extends Component {
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
    this.setState({ loading: true });

    const hospitalObj = {
      name: this.state.name,
      code: this.state.code,
      address: this.state.address,
      type: this.props.type,
      admin: this.state.username,
    };

    const userObj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      accessTo: this.state.facilityAccess,
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

    let facilityAccess = "";
    if (this.props.type === "Hospital") {
      facilityAccess = navArr.map((item) => item.name).join(",");
    } else if (this.props.type === "Pharmacy") {
      facilityAccess = "Admin,Pharmacy,Account";
    } else if (this.props.type === "Laboratory") {
      facilityAccess = "Admin,Lab,Account";
    } else {
      facilityAccess = "";
    }

    fetch(`${apiURL()}/hospitals/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...hospitalObj,
        accessTo: facilityAccess,
      }),
    })
      .then((response) => response.json())
      .then(({ hospital }) => {
        fetch(`${apiURL()}/auth/sign-up`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...userObj,
            accessTo: facilityAccess,
            facilityId: hospital.id,
            role: "Admin",
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
          .then(() => {
            this.resetForm();
            this.setState({ loading: false, submitted: true });
          })
          .catch(() => _warningNotify("An error occurred"));
      })
      .catch((err) => {
        this.setState({ loading: false });
        _warningNotify("An error occured");
      });
  };

  render() {
    const { type } = this.props;
    const { submitted } = this.state;
    return (
      <PublicWrapper>
        <div className="offset-md-2 col-md-8 col-lg-8 p-0">
          <BackButton />
          {submitted ? (
            <Success />
          ) : (
            <Card>
              <CardHeader>{this.props.type}</CardHeader>
              <CardBody className="row">
                <div className="col-md-6 col-lg-6 v-divider">
                  <h5 className="text-center">{this.props.type} Information</h5>
                  <div>
                    <Input
                      label={`${type} Name`}
                      name="name"
                      placeholder="e.g. MyLikita Clinic"
                      value={this.state.name}
                      onChange={(e) =>
                        this.onInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Input
                      label={`Prefix (${type} File Format)`}
                      name="code"
                      placeholder="e.g. MLK"
                      value={this.state.code}
                      onChange={(e) =>
                        this.onInputChange("code", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <Input
                      label="Address"
                      name="address"
                      placeholder="e.g. 3. Sabo Bakin Zuwo Rd. Kano"
                      value={this.state.address}
                      onChange={(e) =>
                        this.onInputChange("address", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-5 col-lg-6">
                  <h5 className="text-center">User Information</h5>
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <Input
                        label="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        placeholder="e.g. John"
                        onChange={(e) =>
                          this.onInputChange("firstname", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <Input
                        label="Last Name"
                        name="lastname"
                        placeholder="e.g. Doe"
                        value={this.state.lastname}
                        onChange={(e) =>
                          this.onInputChange("lastname", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.handleEmailChange(e.target.value)}
                        placeholder="e.g. example@gmail.com"
                        loading={this.state.check_Email}
                        good={this.state.emailGood}
                        message={this.state.emailMsg}
                        required
                      />
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <Input
                        label="Phone Number"
                        name="phone"
                        value={this.state.phone}
                        placeholder="e.g. 0900000111"
                        onChange={(e) =>
                          this.onInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <Input
                        label="Username"
                        name="username"
                        value={this.state.username}
                        onChange={(e) =>
                          this.handleUsernameChange(e.target.value)
                        }
                        placeholder="e.g. johndoe"
                        required
                        loading={this.state.checkingUsername}
                        good={this.state.usernameGood}
                        message={this.state.usernameMsg}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <PasswordInput
                        label="Password"
                        name="password"
                        value={this.state.password}
                        onChange={(e) =>
                          this.onInputChange("password", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <CustomButton
                  loading={this.state.loading}
                  outline
                  className="offset-md-5 col-md-2 offset-lg-5 col-lg-2"
                  onClick={this.handleSubmit}
                >
                  Register
                </CustomButton>
              </CardFooter>
            </Card>
          )}{" "}
        </div>
      </PublicWrapper>
    );
  }
}

export default Hospital;
