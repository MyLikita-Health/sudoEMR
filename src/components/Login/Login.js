import React from 'react';
import './login.css';

const Login = props => {
  return (
    <div class="container login-form">
      <h2 class="login-title">- Please Login -</h2>
      <div class="panel panel-default">
        <div class="panel-body">
          <form onSubmit={props.handleLogin}>
            <div class="input-group login-userinput">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-user" />
              </span>
              <input
                id="txtUser"
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                onChange={props.handleUsernameChange}
                value={props.username}
              />
            </div>
            <div class="input-group">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-lock" />
              </span>
              <input
                id="txtPassword"
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                onChange={props.handlePasswordChange}
                value={props.password}
              />
              <span id="showPassword" class="input-group-btn">
                <button class="btn btn-default reveal" type="button">
                  <i class="glyphicon glyphicon-eye-open" />
                </button>
              </span>
            </div>
            <button
              class="btn btn-primary btn-block login-button"
              type="submit">
              <i class="fa fa-sign-in" /> Login
            </button>
            <div class="checkbox login-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" class="login-forgot">
                Forgot Username/Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
