import React, { Suspense, lazy } from "react";
import Loading from "../loading";
const SalesReport = lazy(() => import("./SalesReport"));
const UpToDateStockBalance = lazy(() => import("./UpToDateStockBalance"));
const EditDrugs = lazy(() => import("./EditDrugs"));
const AddDrug = lazy(() => import("./AddDrug"));
const AddPurchase = lazy(() => import("./Purchase Record/AddPurchase"));
const PurchasePending = lazy(() => import("./PurchasePending"));

const PrescriptionProcessingForm = lazy(() =>
  import("./PrescriptionProcessingForm")
);

const Tabs = ({ setComponentToRender }) => {
  return (
    <div style={{ width: "100%" }}>
      <button
        onClick={() => setComponentToRender("SalesReport")}
        className="btn btn-outline-warning col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Add Drugs
      </button>

      <button
        onClick={() => setComponentToRender("AddDrug")}
        className="btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Daily Inventory Report
      </button>
      <button
        onClick={() => setComponentToRender("UpToDateStockBalance")}
        className="btn btn-outline-secondary col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Sales Report
      </button>
      <button
        onClick={() => setComponentToRender("EditDrugs")}
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-5 col-lg-5"
      >
        Up To Date Stock Balance
      </button>
      <button
        onClick={() => setComponentToRender("AddPurchase")}
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-5 col-lg-5"
      >
        Purchase Records
      </button>
      <button
        onClick={() => setComponentToRender("PurchasePending")}
        className="btn btn-outline-danger col-xs-12 col-sm-6 col-md-5 col-lg-5"
      >
       Purchase pending
      </button>
     
    </div>

  );
};

const TabForm = ({
  pendingRequest,
  showCarousel,
  processing,
  toggleProcessingForm,
  details,
  renderComponents
}) => {
  return (
    <Suspense fallback={<Loading />}>
      {renderComponents()}
      {processing && (
        <div>
          <PrescriptionProcessingForm
            details={details}
            toggleProcessingForm={toggleProcessingForm}
          />
        </div>
      )}
    </Suspense>
  );
};

class PharmacyDashboard extends React.Component {
  state = {
    component: ""
  };

  hideCarousel = () => this.setState({ showCarousel: false });

  renderComponents = () => {
    const { component } = this.state;

    switch (component) {
      case "SalesReport":
        return <SalesReport />;
      case "AddDrug":
        return <AddDrug />;
      case "UpToDateStockBalance":
        return <UpToDateStockBalance />;
      case "EditDrugs":
        return <EditDrugs />;
      case "AddPurchase":
        return <AddPurchase />;
        case "PurchasePending":
            return <PurchasePending />;
            
      default:
          
        return <p className="text-center">Select an item above to view</p>;
    }
  };

  setComponentToRender = component => this.setState({ component });

  render() {
    const {
      pendingRequest,
      processing,
      toggleProcessingForm,
      details
    } = this.props;
    return (
      <div>
        <Tabs setComponentToRender={this.setComponentToRender} />
        <br />
        <TabForm
          renderComponents={this.renderComponents}
          processing={processing}
          pendingRequest={pendingRequest}
          toggleProcessingForm={toggleProcessingForm}
          details={details}
        />
      </div>
    );
  }
}

export default PharmacyDashboard;
