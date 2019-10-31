import React, { Component } from "react";
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
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.toggleLanding();
  };
  render() {
    const {
      records,
      doctors,
      pharmacy,
      lab,
      admin,
      account,
      username
    } = this.props;
    return (
      <Navbar 
        dark 
        expand="md"
        style={{
          minHeight: '50px',
          padding: 0,
          margin: 0,
          paddingRight: 5,
          backgroundColor: '#0069D9',
        }}
      >
        <NavbarBrand href="https://bits-his.com" target="_blank">
          <img src={logo} alt="logo" height="44"
            width="50"
            style={{
              margin: '0 20px',
            }} 
          />
          {/* <h4 className="logoText">HMS</h4> */}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar className="">
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
            <NavItem onClick={this.toggle}>
              <NavLink to="/admin" className="nav">
                Admin
              </NavLink>
            </NavItem>
            {/* {account && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/account" className="nav">
                  Account Module
                </NavLink>
              </NavItem>
            )} */}
            <NavItem className="">
              User:{" "}
              <b>
                <em>{username.toUpperCase()}</em>
              </b>
              {/* <Button color="danger" onClick={this.logout}>
              Logout
            </Button> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
