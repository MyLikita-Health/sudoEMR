import React, { Component } from 'react';
import BackButton from '../../landing/BackButton';

import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import PublicWrapper from '../../../routes/PublicWrapper';

class Laboratory extends Component {
  state = {
    laboratory_name: '',
    email: '',
    file_format: '',
    address: '',
    first_name: '',
    last_name: '',
    admin_email: '',
    phone: '',
    username: '',
    password: '',
    laboratory: [],
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = () => {
    this.setState(
      (prevState) => ({
        laboratory: prevState.laboratory.concat({
          laboratory_name: this.state.laboratory_name,
          email: this.state.email,
          file_format: this.state.file_format,
          address: this.state.address,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          admin_email: this.state.admin_email,
          phone: this.state.phone,
          username: this.state.username,
          password: this.state.password,
        }),
      }),

      console.log(
        this.state.laboratory_name,
        this.state.email,
        this.state.file_format,
        this.state.address,
        this.state.first_name,
        this.state.last_name,
        this.state.admin_email,
        this.state.phone,
        this.state.username,
        this.state.password
      )
    );
  };
  render() {
    return (
      <PublicWrapper>
        <div className="offset-md-2 col-md-8 col-lg-8 p-0">
          <BackButton />
          <Card >
            <CardHeader tag="h6">Your Laboratory</CardHeader>
            <CardBody className="row">
              <div className="col-md-6 col-lg-6">
                <div>
                  <label>Laboratory Name</label>
                  <input
                    name="laboratory_name"
                    className="form-control"
                    value={this.state.laboratory_name}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label>prefix (Laboratory File Format)</label>
                  <input
                    name="file_format"
                    className="form-control"
                    value={this.state.file_format}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label>Address</label>
                  <input
                    name="address"
                    className="form-control"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <h6>Laboratory Admin Account</h6>
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <label>First Name</label>
                    <input
                      name="first_name"
                      className="form-control"
                      value={this.state.first_name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label>Last Name</label>
                    <input
                      name="last_name"
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <label>Email</label>
                    <input
                      name="admin_email"
                      className="form-control"
                      value={this.state.admin_email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label>Phone Number</label>
                    <input
                      name="phone"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <label>Username</label>
                    <input
                      name="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label>Password</label>
                    <input
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <button
                className="btn btn-outline-primary offset-md-5 col-md-2 offset-lg-5 col-lg-2"
                onClick={this.handleSubmit}
              >
                submit
              </button>
            </CardFooter>
          </Card>
        </div>
      </PublicWrapper>
    );
  }
}

export default Laboratory;
