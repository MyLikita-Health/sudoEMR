import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { GoSignOut } from "react-icons/go";
import { FaCaretDown, FaUser, FaUserAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function UserAvatar({ logout = (f) => f }) {
  const [isOpen, setState] = useState(false);
  const toggle = () => setState((prevState) => !prevState);
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);

  return (
    <div
      className="mx-1"
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Dropdown isOpen={isOpen} toggle={toggle} direction="left">
        <DropdownToggle color="warning">
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
