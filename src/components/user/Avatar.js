import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // Badge
} from "reactstrap";
import { GoSignOut } from "react-icons/go";
import { FaCaretDown, FaUser, FaUserAlt } from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
// import { MdNotifications } from 'react-icons/md'
// import Profile from './Profile';
import { MdDashboard, MdReceipt } from "react-icons/md";
import { canUseThis } from "../auth";

function UserAvatar({ logout = (f) => f }) {
  const [isOpen, setState] = useState(false);
  const toggle = () => setState((prevState) => !prevState);
  const history = useHistory();
  const location = useLocation();

  const user = useSelector((state) => state.auth.user);

  const _gotoAdminDashboard = () => {
    history.push("/admin");
  };

  const _gotoApp = () => {
    history.push("/me");
  };

  const isAdminPage = location.pathname.includes("/admin");

  const _action = isAdminPage ? _gotoApp : _gotoAdminDashboard;

  const _actionText = isAdminPage ? "Back to App" : "Admin Dashboard";

  return (
    <div
    className="mx-1"
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Dropdown isOpen={isOpen} toggle={toggle} direction="left">
        <DropdownToggle color="warning">
          {/* <Avatar
            src={user.image}
            name={`${user.firstname} ${user.lastname}`}
            size={40}
          /> */}
          <FaUserAlt size={14} className="mr-2" />
          {user.username}
          <FaCaretDown className="ml-2" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            Signed in as{" "}
            <b>
              {user.firstname} {user.lastname}
            </b>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="div" onClick={() => history.push("/me/profile")}>
            <FaUser style={{ margin: "0 20px 0 0" }} />
            Profile
          </DropdownItem>
          {/* {JSON.stringify(user.functionality)} */}
          {canUseThis(user, ["Registrations"]) && (
            <DropdownItem
              tag="div"
              onClick={() => history.push("/me/lab/patients/reports")}
            >
              <MdReceipt style={{ margin: "0 20px 0 0" }} />
              Reports
            </DropdownItem>
          )}
          {user.userType === "admin" ? (
            <DropdownItem tag="div" onClick={_action}>
              <MdDashboard style={{ margin: "0 20px 0 0" }} />
              {_actionText}
            </DropdownItem>
          ) : null}
          <DropdownItem tag="div" onClick={logout}>
            <GoSignOut style={{ margin: "0 20px 0 0" }} />
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(UserAvatar);
