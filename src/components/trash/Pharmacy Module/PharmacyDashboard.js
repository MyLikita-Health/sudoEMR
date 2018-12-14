import React, { Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Loading from '../loading';
// import PendingPharmacyRequest from './PendingPharmacyRequest';
const SalesReport = lazy(() => import('./SalesReport'));
const UpToDateStockBalance = lazy(() => import('./UpToDateStockBalance'));
const EditDrugs = lazy(() => import('./EditDrugs'));
const AddDrug = lazy(() => import('./AddDrug'));
const PrescriptionProcessingForm = lazy(() =>
  import('./PrescriptionProcessingForm')
);
const Tabs = ({ hideCarousel }) => {
  return (
    <div style={{ width: '100%' }}>
      {/* <NavLink
        to="/pharmacy/pendingPrescriptionRequest"
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4">
        Pending Prescription Requests
      </NavLink> */}
      <NavLink
        to="/pharmacy/addDrugs"
        className="btn btn-outline-warning col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hideCarousel}>
        Add Drugs
      </NavLink>

      <NavLink
        to="/pharmacy/dailyInventoryReport"
        className="btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hideCarousel}>
        Daily Inventory Report
      </NavLink>
      <NavLink
        to="/pharmacy/salesReport"
        className="btn btn-outline-secondary col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hideCarousel}>
        Sales Report
      </NavLink>
      <NavLink
        to="/pharmacy/upToDateStockBalance"
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-5 col-lg-5"
        onClick={hideCarousel}>
        Up To Date Stock Balance
      </NavLink>
    </div>
  );
}; //385159356-7052

const TabForm = ({
  pendingRequest,
  showCarousel,
  processing,
  toggleProcessingForm,
  details,
}) => {
  const routes = [
    // {
    //   path: '/pharmacy/pendingPrescriptionRequest',
    //   main: () => <PendingPharmacyRequest />,
    // },
    {
      path: '/pharmacy/salesReport',
      main: () => <SalesReport />,
    },
    {
      path: '/pharmacy/addDrugs',
      main: () => <AddDrug />,
    },
    {
      path: '/pharmacy/upToDateStockBalance',
      main: () => <UpToDateStockBalance />,
    },
    {
      path: '/pharmacy/dailyInventoryReport',
      main: () => <EditDrugs />,
    },
  ];
  return (
    <Suspense fallback={<Loading />}>
      {!processing && (
        <div>
          {!showCarousel &&
            routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.main}
              />
            ))}
          {showCarousel && (
            <div style={{ height: '40vh' }}>
              <h1>News Feed</h1>
            </div>
          )}
        </div>
      )}
      {processing ? (
        <div>
          <PrescriptionProcessingForm
            details={details}
            toggleProcessingForm={toggleProcessingForm}
          />
        </div>
      ) : null}
    </Suspense>
  );
};

class PharmacyDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showCrousel: true };
  }

  hideCarousel = () => this.setState({ showCarousel: false });

  render() {
    const {
      pendingRequest,
      processing,
      toggleProcessingForm,
      details,
    } = this.props;
    return (
      <div>
        <Tabs hideCarousel={this.hideCarousel} />
        <br />
        <TabForm
          processing={processing}
          showCarousel={this.state.showCarousel}
          pendingRequest={pendingRequest}
          toggleProcessingForm={toggleProcessingForm}
          details={details}
        />
      </div>
    );
  }
}

export default PharmacyDashboard;
