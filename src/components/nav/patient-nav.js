import React from "react";
import { useHistory } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  //   Nav,
  //   NavItem,
  //   NavLink as NavL,
  //   Collapse,
  //   NavbarToggler,
} from "reactstrap";
import PatientAvatar from "../user/avatar/PatientAvatar";
// import Notifications from '../notifications/Notifications';
import PatientNotificationBell from "../notifications/PatientNotificationBell";
import { GoIssueOpened } from "react-icons/go";
// import { useSelector } from "react-redux";
// import { useSelector } from 'react-redux';

const PatientNavBar = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  // const isMobile = useSelector((state) => state.app.isMobile);

  // const toggle = () => setIsOpen(!isOpen);
  // const facilityInfo = useSelector(state => state.facility.info)

  return (
    <Navbar
      expand="md"
      light
      style={{
        minHeight: "50px",
        padding: 0,
        margin: 0,
        paddingRight: 5,
        backgroundColor: "#0069D9",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <NavbarBrand>
        <img
          alt="logo"
          src={require("../../images/logo192.png")}
          // src={facilityInfo.logo}
          width="100px"
          onClick={() => history.push("/user/appointments")}
          style={{ margin: "0 20px", cursor: "pointer" }}
        />
      </NavbarBrand>
      <span className="d-flex flex-row align-items-center">
        <button
          className="btn btn-danger"
          onClick={() => {
            history.push("/user/issuereport");
          }}
        >
          <GoIssueOpened size={20} className="mr-1" />
          Report Issues
        </button>
        <PatientNotificationBell />
        <PatientAvatar />
        {/* <NavbarToggler onClick={toggle} /> */}

        {/* <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto text-dark">
                
                </Nav>
            </Collapse> 
        */}
      </span>
    </Navbar>
  );
};

export default PatientNavBar;
