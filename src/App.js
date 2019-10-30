import React, { Component } from "react";
// import PropTypes from 'prop-types';
import PatientClarking from "./components/Doctor Module/PatientClarking";
import Pharmacy from "./components/Pharmacy Module/Pharmacy";
import Account from "./components/Account Module/Account";
import Admin from "./components/AdminModule/Admin";
import Patientlist from "./components/Records Module/Patientlist";
import Lab from "./components/Lab Module/Lab";
import ErrorBoundary from "./error-boundary/MyErrorBoundary";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login2";
import Navbar from "./nav-old";
import "./Style/index.css";
import { _fetchData } from "./components/helpers";
import Landing from "./components/landing";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      // loggedIn: false,
      username: "",
      password: "",
      records: true,
      doctors: true,
      pharmacy: true,
      lab: true,
      account: true,
      admin: true,
      users: [],
      isOpen: false,
      isLoading: true
      // landing: true,
    };
  }

  // static childContextTypes = {
  //   username: PropTypes.String,
  // };

  // getChildContext() {
  //   return {
  //     username: this.getUsername(),
  //   };
  // }

  // getUsername = () => 'Mustapha';

  componentDidMount() {
    let user = localStorage.getItem("user");
    console.log(user);
    this.setState({ user });
    // if(user)
    // this.fetchUsers();
  }

  //Get all the users from the database
  fetchUsers = () => {
    const cb = data => this.setState({ users: data });
    _fetchData({ route: "users/usersList", callback: cb });
  };

  /**
   * The username and password validation for the login
   * is done with the handleLogin method
   */
  handleLogin = e => {
    e.preventDefault();

    if (this.state.username === "" || this.state.password === "") {
      return this.setState({ msg: "Please enter your username and password!" });
    } else {
      // const users = this.state.users;
      const username = this.state.username.trim();
      const password = this.state.password.trim();

      if (username === "user" && password === "user") {
        localStorage.setItem("user", this.state.username);

        this.setState(prevState => ({
          // loggedIn: true,
          records: true,
          doctors: true,
          pharmacy: true,
          lab: true,
          admin: true,
          user: prevState.username
        }));
        // localStorage.setItem('user', this.state.username);
      } else {
        this.setState({
          msg: "You have entered wrong username or password"
        });
      }
    }
  };

  /**
   * These two methods handleUsernameChange and handlePasswordChange handle the onChange event
   * of the username and password text fields. They are passed down to the child form
   * which implements them
   */
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
    this.setState({ msg: "" });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
    this.setState({ msg: "" });
  };

  logout = () => {
    const user = localStorage.getItem("username");
    this.setState({ loggedIn: false, username: "" });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleLanding = () => this.setState({ landing: false });

  render() {
    return (
      <ErrorBoundary>
        {/* Conditional rendering which check if the user is a valid user or not */}
        {!this.state.user && (
          <Login
            handleLogin={this.handleLogin}
            message={this.state.msg}
            username={this.state.username}
            handleUsernameChange={this.handleUsernameChange}
            password={this.state.password}
            handlePasswordChange={this.handlePasswordChange}
          />
        )}
        {this.state.user && (
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              {/* The header goes here */}
              <Navbar
                records={this.state.records}
                doctors={this.state.doctors}
                pharmacy={this.state.pharmacy}
                lab={this.state.lab}
                account={this.state.account}
                admin={this.state.admin}
                username={this.state.username}
                toggleLanding={this.toggleLanding}
              />
              <br />
              {/* ... and the contents go here */}
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/patientlist" component={Patientlist} />
                <Route
                  exact
                  path="/patient_clarking"
                  component={PatientClarking}
                />
                <Route exact path="/pharmacy" component={Pharmacy} />
                <Route exact path="/lab" component={Lab} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/admin" component={Admin} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </Router>
        )}
        <div className="row">
          <span
            className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
            style={{ fontFamily: "cursive" }}
          ></span>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;

function PageNotFound() {
  return <h1 style={{ textAlign: "center", marginTop: 40 }}>Page not found</h1>;
}
