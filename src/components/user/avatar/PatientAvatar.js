import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Avatar } from 'evergreen-ui';
import { GoSignOut } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../redux/actions/auth';

function PatientAvatar() {
  const [isOpen, setState] = useState(false);
  const toggle = () => setState((prevState) => !prevState);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cb = () => history.push('/auth');

  const _logout = useCallback(() => dispatch(logout(cb)), []);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Dropdown
        isOpen={isOpen}
        toggle={toggle}
        direction="left"
        style={{ cursor: 'pointer' }}
      >
        <DropdownToggle tag="div">
          <Avatar src="" name={user.fullname} size={40} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            Signed in as <b>{user.fullname}</b>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag="div" onClick={() => history.push('/user/profile')}>
            <FaUser style={{ margin: '0 20px 0 0' }} />
            Profile
          </DropdownItem>
          <DropdownItem tag="div" onClick={_logout}>
            <GoSignOut style={{ margin: '0 20px 0 0' }} />
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default PatientAvatar;
