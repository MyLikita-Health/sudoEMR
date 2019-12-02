import React, { Suspense, lazy } from "react";
import { Route, NavLink } from "react-router-dom";
import Loading from "../loading";
const Users = lazy(() => import("./Users"));
const CreateUser = lazy(() => import("./CreateUserForm"));

const Tabs = ({
  hideCarousel = f => f,
  fetchData = f => f,
  setMode = f => f,
  setComponentToRender = f => f
}) => {
  return (
    <div style={{ width: "100%" }}>
      <button
        onClick={() => setComponentToRender("Users")}
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        All Users
      </button>
      <button
        onClick={() => setComponentToRender("CreateUser")}
        className="btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Add User
      </button>
    </div>
  );
};

const TabForm = ({
  req,
  isRoute,
  toggleRoute,
  carouselIsOpen,
  updateTable,
  mode,
  renderComponents
}) => {
  return <Suspense fallback={<Loading />}>{renderComponents()}</Suspense>;
};

class Admin extends React.Component {
  state = {
    component: ""
  };

  hideCarousel = () => {
    this.setState({ carouselIsOpen: false });
  };

  setComponentToRender = component => this.setState({ component });

  renderComponents = () => {
    const { component } = this.state;

    switch (component) {
      case "Users":
        return <Users />;
      case "CreateUser":
        return <CreateUser />;
      default:
        return (
          <p style={{ marginTop: 30, textAlign: "center" }}>
            Select an item to view
          </p>
        );
    }
  };
  render() {
    const {
      req,
      isRoute,
      toggleRoute,
      updateTable,
      fetchData,
      setMode,
      mode
    } = this.props;
    return (
      <div>
        <Tabs setComponentToRender={this.setComponentToRender} />
        <br />
        <TabForm
          req={req}
          updateTable={updateTable}
          renderComponents={this.renderComponents}
        />
      </div>
    );
  }
}

export default Admin;
