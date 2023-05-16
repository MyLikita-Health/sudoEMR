import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaBook, FaUserAlt, FaUserNurse } from "react-icons/fa";
import { Nav, NavItem } from "reactstrap";
// import { MdLocalPharmacy } from "react-icons/md";
import { GiStethoscope } from "react-icons/gi";
import { hasAccess } from "../auth";
import './nav2.css';

export const navArr = [
  {
    name: "Records",
    display_name: "Records",
    route: "/me/records",
    icon: <FaBook size={16} style={{ marginRight: 3 }} />,
  },
  {
    name: "Doctors",
    route: "/me/doctor",
    display_name: "Doctors",
    icon: (
      <GiStethoscope
        size={20}
        style={{ marginRight: 3 }}
      />
    ),
  },
  {
    name: "Nurse",
    route: "/me/nurse",
    display_name: "Nursing",
    icon: (
      <FaUserNurse
        style={{ marginRight: 3 }}
        size={20}
      />
    ),
  },
  {
    name: "Admin",
    route: "/me/admin",
    display_name: "Admin",
    icon: (
      <span style={{ marginRight: 3 }}>
        <FaUserAlt size={16} style={{ marginLeft: 5 }} />
      </span>
    ),
  },
];
const NavModules = ({ user, toggle, userAccess }) => {
  return (
    <Nav className="ml-auto" navbar>
      {navArr.map((item) =>
        user.accessTo
          ? hasAccess(user, [item.name]) && (
              <NavItem onClick={toggle}>
                <NavLink to={`${item.route}`} activeClassName=' nav-link-active-bg   ' className="nav text-primary" >
                  {item.icon}
                  {item.display_name}
                </NavLink>
              </NavItem>
            )
          : null
      )}
    </Nav>
  );
};

function mapStateToProps(state) {
  return {
    userAccess: state.auth.user.accessTo,
  };
}

export default connect(mapStateToProps)(NavModules);
