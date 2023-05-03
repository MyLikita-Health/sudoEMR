import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
} from "reactstrap";
// import CheckBoxItem from "../../theater/operation-notes/CheckBoxItem";
import { LoadingSM } from "../../loading";
import { createUser } from "../../../redux/actions/auth";

class SignUp extends PureComponent {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role: "",
    accessTo: [],
    error: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      error: "",
      [target.name]: target.value,
    });
  };

  resetForm = () => {
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      role: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      role,
      accessTo,
    } = this.state;
    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      role === ""
    ) {
      this.setState({ error: "Please complete the form" });
    } else {
      const data = {
        firstname,
        lastname,
        username,
        email,
        password,
        role,
        accessTo,
      };
      let callback = () => console.log("success");
      let error = () => console.log("error");
      this.props.createUser(data, callback, error);
      // console.log(data)
    }
  };

  handleCheckboxChange = (name, checked, value) => {
    if (checked) {
      this.setState((prev) => ({ [name]: [...prev.accessTo, value] }));
    } else {
      this.setState((prev) => ({
        [name]: prev[name].filter((item) => item !== value),
      }));
    }
  };

  render() {
    const {
      handleChange,
      handleSubmit,
      handleCheckboxChange,
      state: { firstname, lastname, username, email, password, role, accessTo },
      props: { creatingUser, createUserError },
    } = this;
    return (
      <Form onSubmit={handleSubmit}>
        <Card>
          <CardHeader tag="h5" className="text-center" />
          <CardBody>
            <Form>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    autoFocus
                    value={firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                  />
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <label>Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </FormGroup>

              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Role</label>
                  <input
                    onChange={handleChange}
                    name="role"
                    type="text"
                    list="role"
                    autoComplete="disabled"
                    value={role}
                    className="form-control"
                    // placeholder="Role"
                  />
                  <datalist id="role">
                    <option value="Doctor" />
                    <option value="Nurse" />
                    <option value="Director" />
                    <option value="Store Keeper" />
                    <option value="Lab Technologist" />
                  </datalist>
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <label>Access (User's Privilege)</label>
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                     {/* ? <CheckBoxItem
                        label="Records"
                        name="accessTo"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                      />
                      <CheckBoxItem
                        label="Doctors"
                        name="accessTo"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                      />
                      <CheckBoxItem
                        label="Pharmacy"
                        name="accessTo"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                      />
                      <CheckBoxItem
                        label="Lab"
                        name="accessTo"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <CheckBoxItem
                        label="Accounts"
                        name="accessTo"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                      />
                      <CheckBoxItem
                        label="Theater"
                        name="accessTo"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                      />
                      <CheckBoxItem
                        label="Maintenance"
                        name="accessTo"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                      />
                      <CheckBoxItem
                        label="Admin"
                        name="accessTo"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                      /> */}
                    </div>
                  </div>
                </div>
              </FormGroup>
            </Form>
            {createUserError !== "" ? (
              <center>
                <p style={{ color: "red" }}>{createUserError}</p>
              </center>
            ) : null}
          </CardBody>

          <CardFooter>
            <Button
              color="primary"
              outline
              className="offset-md-5 col-md-2 offset-lg-5 col-lg-2"
            >
              {creatingUser ? <LoadingSM /> : "Create User"}
            </Button>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    creatingUser: auth.creatingUser,
    createUserError: auth.createUserError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (data) => dispatch(createUser(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
