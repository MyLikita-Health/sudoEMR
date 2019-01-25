import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
  } from 'reactstrap';
import logo from './images/logo.png';


export default class NavbarNow extends Component {
    constructor(props){
      super(props);
      this.state = {
        isOpen:false
      }
    }
    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    };
    render(){
  return (
    <Navbar color="secondary" dark expand="md">
      <NavbarBrand href="https://di-hub.com/" target="_blank">
        {/* <img
          src={logo}
          alt="logo"
          className="img-thumbnail"
          height="50em"
          width="80em"
        /> */}
        <h4 className="logoText">HMS</h4>
      </NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar className="">
          {this.props.records && (
            <NavItem onClick={this.toggle}>
              <NavLink to="/patientlist" className="nav">
                Record Module
              </NavLink>
            </NavItem>
          )}
          {this.props.doctors && (
            <NavItem onClick={this.toggle}>
              <NavLink to="/patient_clarking" className="nav">
                Doctors Module
              </NavLink>
            </NavItem>
          )}
          {this.props.pharmacy && (
            <NavItem onClick={this.toggle}>
              <NavLink to="/pharmacy" className="nav">
                Pharmacy Module
              </NavLink>
            </NavItem>
          )}

          {this.props.lab && (
            <NavItem onClick={this.toggle}>
              <NavLink to="/lab" className="nav">
                Laboratory Module
              </NavLink>
            </NavItem>
          )}
          {this.props.admin && (
            <NavItem onClick={this.toggle}>
              <NavLink to="/admin" className="nav">
                Admin
              </NavLink>
            </NavItem>
          )}
          {this.props.account && (
            <NavItem onClick={this.toggle}>
              <NavLink to="/account" className="nav">
                Account Module
              </NavLink>
            </NavItem>
          )}
          <NavItem className="">
            User:{' '}
            <b>
              <em>{this.props.username.toUpperCase()}</em>
            </b>
            {/* <Button color="danger" onClick={this.logout}>
              Logout
            </Button> */}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}}
