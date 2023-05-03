import React from 'react';
import Avatar from '../user/Avatar';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { useHistory } from 'react-router';

function TopNav() {
  const dispatch = useDispatch();
  const history = useHistory();

  const gotoLogin = () => {
    history.push('/auth');
  };

  const _logout = () => {
    dispatch(logout(gotoLogin));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div />
        {/* <button type="button" id="sidebarCollapse" className="btn btn-primary">
          <i className="fas fa-align-left" />
          <span>Toggle Sidebar</span>
        </button> */}

        <Avatar logout={_logout} />
      </div>
    </nav>
  );
}

export default TopNav;
