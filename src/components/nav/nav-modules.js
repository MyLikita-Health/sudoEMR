import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaUserAlt,
  FaUserNurse,
} from "react-icons/fa";
import { Nav, NavItem } from "reactstrap";
// import { MdLocalPharmacy } from "react-icons/md";
import { GiStethoscope } from "react-icons/gi";
import { hasAccess } from "../auth";

const NavModules = ({ user, toggle, userAccess }) => {
  return (
    <Nav className="ml-auto" navbar>
      {user.accessTo
        ? hasAccess(user, ["Records"]) && (
            <NavItem onClick={toggle}>
              <NavLink to="/me/records" className="nav">
                <FaBook size={16} style={{ marginRight: 3 }} />
                Records
              </NavLink>
            </NavItem>
          )
        : null}
      {user.accessTo
        ? hasAccess(user, ["Doctors"]) && (
            <NavItem onClick={toggle}>
              <NavLink to="/me/doctor" className="nav">
                <GiStethoscope
                  size={userAccess.length === 1 ? 30 : 22}
                  style={{ marginRight: 3 }}
                />
                {userAccess.length === 1 ? null : "Doctors"}
              </NavLink>
            </NavItem>
          )
        : null}

      {user.accessTo
        ? hasAccess(user, ["Nurse"]) && (
            <NavItem onClick={toggle}>
              <NavLink to="/me/nurse" className="nav">
                <FaUserNurse
                  size={userAccess.length === 1 ? 30 : 22}
                  style={{ marginRight: 3 }}
                />
                Nursing
              </NavLink>
            </NavItem>
          )
        : null}

      {user.accessTo
        ? hasAccess(user, ["Admin"]) && (
            <NavItem onClick={toggle}>
              <NavLink to="/me/admin" className="nav">
                <span style={{ marginRight: 3 }}>
                  <FaUserAlt size={16} style={{ marginLeft: 5 }} />
                </span>
                Admin
              </NavLink>
            </NavItem>
          )
        : null}
    </Nav>
  );
};

function mapStateToProps(state) {
  return {
    userAccess: state.auth.user.accessTo,
  };
}

export default connect(mapStateToProps)(NavModules);
