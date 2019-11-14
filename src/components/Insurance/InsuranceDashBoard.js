import React, { Suspense, lazy } from "react";
import Loading from "../loading";
const Registration = lazy(() => import("./Registration"));

const Tabs = ({
  hideCarousel = f => f,
  fetchData = f => f,
  setMode = f => f,
  setComponentToRender = f => f
}) => {
  return (
    <div style={{ width: "100%" }}>
      <button
        onClick={() => setComponentToRender("Registration")}
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        NHIS Registration
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

class InsuranceDashBoard extends React.Component {
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
      case "Registration":
        return <Registration />;

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

export default InsuranceDashBoard;
