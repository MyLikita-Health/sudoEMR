import React, { Component } from "react";
import Profile from "./components/Profile/Profile";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import logo from "./images/logo.png";

export default class NavbarNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isProfileOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.toggleLanding();
  };

  toggleProfile = () => {
    this.setState({
      isProfileOpen: !this.state.isProfileOpen
    });
  };
  render() {
    const {
      records,
      doctors,
      pharmacy,
      lab,
      admin,
      insurance,
      profile,
      account,
      username
    } = this.props;
    return (
      <Navbar color="secondary" dark expand="md">
        <NavbarBrand href="https://bits-his.com" target="_blank">
          <img src={logo} alt="logo" height="50" width="150" />
          {/* <h4 className="logoText">HMS</h4> */}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {records && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/patientlist" className="nav">
                  Record Module
                </NavLink>
              </NavItem>
            )}
            {doctors && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/patient_clarking" className="nav">
                  Doctors Module
                </NavLink>
              </NavItem>
            )}
            {pharmacy && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/pharmacy" className="nav">
                  Pharmacy Module
                </NavLink>
              </NavItem>
            )}
            {lab && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/lab" className="nav">
                  Laboratory Module
                </NavLink>
              </NavItem>
            )}
            {admin && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/admin" className="nav">
                  Admin
                </NavLink>
              </NavItem>
            )}
            {insurance && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/insurance" className="nav">
                  NHIS
                </NavLink>
              </NavItem>
            )}

            <NavItem>
              <Profile
                isProfileOpen={this.state.isProfileOpen}
                toggleProfile={this.toggleProfile}
              />
            </NavItem>

            <NavItem>
              <Button color="danger" onClick={this.logout}>
                Logout
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
