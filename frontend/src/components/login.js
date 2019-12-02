import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

/**
 * This renders the login page on loading the page
 */
export default function LoginForm(props) {
  const formStyle = {
    paddingTop: '2em',
    width: '40%',
    marginTop: '10%',
    marginLeft: '25%',
  };
  return (
    <div style={formStyle}>
      <Card>
        <CardHeader>
          <h6 className="text-center">Login</h6>
        </CardHeader>
        <CardBody>
          <form onSubmit={props.handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                onChange={props.handleUsernameChange}
                value={props.username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={props.handlePasswordChange}
                value={props.password}
              />
            </div>
            <label style={{ color: 'red' }}>{props.message}</label>
            <div style={{ paddingLeft: '40%' }}>
              <input type="submit" className="btn btn-outline-secondary" />
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
