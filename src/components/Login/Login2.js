import React from 'react';
import image from '../../images/login-icon.jpg';
import './login2.css';

const Login = props => {
  return (
    <div className="wrapper">
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}
        <h2 className="title"> Hospital Management System </h2>

        {/* <!-- Icon --> */}
        <div className="first">
          <img
            src={image}
            id="icon"
            alt="User Icon"
            style={{ borderRadius: '50%' }}
          />
        </div>

        {/* <!-- Login Form --> */}
        <form onSubmit={props.handleLogin}>
          <input
            type="text"
            id="login"
            className="second username"
            placeholder="username"
            onChange={props.handleUsernameChange}
            value={props.username}
          />
          <input
            type="password"
            id="password"
            className="third password"
            placeholder="password"
            onChange={props.handlePasswordChange}
            value={props.password}
          />
          <input type="submit" className="fourth customBtn" value="Login" />
          <label style={{ color: 'red' }}>{props.message}</label>
        </form>

        {/* <!-- Remind Passowrd --> */}
        <div id="formFooter">
          <a className="underlineHover forgot-pswd" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
