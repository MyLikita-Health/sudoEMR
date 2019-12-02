import React, { Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { RequestProcessingForm } from './RequestProcessingForm';
import Loading from '../loading';
const LaboratorySetupForms = lazy(() => import('./LaboratorySetupForms'));
// const SampleCollection = lazy(() => import('./SampleCollection'));
// const SampleReception = lazy(() => import('./SampleReception'));
// const SampleAnalysis = lazy(() => import('./SampleAnalysis'));
const PrintResult = lazy(() => import('./PrintResult'));
// const PathologistComment = lazy(() => import('./PathologistComment'));
const SampleTracking = lazy(() => import('./SampleTracking'));
// const CompletedLabTests = lazy(() => import('./CompletedLabTests'));

const Tabs = ({ hideCarousel=f=>f, fetchData=f=>f, setMode=f=>f }) => {
  const onNavClick = (route = '', mode = '') => {
    route.length && fetchData(route);
    mode.length && setMode(mode);
    // hideCarousel();
  };
  return (
    <div style={{ width: '100%' }}>
      <NavLink
        to="/lab/laboratory_setup_forms"
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={() => onNavClick()}>
        Lab Setup Forms
      </NavLink>
      <NavLink
        to="/lab/completed_lab_tests"
        className="btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={() => onNavClick('lab/testCompleted', 'completed')}>
        Completed Lab Tests
      </NavLink>
      <NavLink
        to="/lab/sample_collection"
        className="btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={() => onNavClick('lab/pending', 'pending')}>
        Sample Collection
      </NavLink>
      <NavLink
        to="/lab/sample_analysis"
        className="btn btn-outline-warning col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={() => onNavClick('lab/getSampleCollected', 'collected')}>
        Sample Analysis
      </NavLink>
      <NavLink
        to="/lab/pathologist_comment"
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={() => onNavClick('lab/sampleAnalyzed', 'analyzed')}>
        Pathologist Comment
      </NavLink>
      <NavLink
        to="/lab/sample_tracking"
        className="btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={() => onNavClick()}>
        Sample Tracking
      </NavLink>
      <NavLink
        to="/lab/print_result"
        className="btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={() => onNavClick()}>
        Print Result
      </NavLink>
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
}) => {
  const routes = [
    // {
    //   path: '/lab/completed_lab_tests',
    //   exact: true,
    //   main: () => <CompletedLabTests />,
    // },

    {
      path: '/lab/laboratory_setup_forms',
      exact: true,
      main: () => <LaboratorySetupForms />,
    },

    // {
    //   path: '/lab/sample_collection',
    //   exact: true,
    //   main: () => (
    //     <SampleCollection
    //       // pendingRequest={pendingRequest}
    // updateTable={updateTable}
    //     />
    //   ),
    // },

    // {
    //   path: '/lab/sample_analysis',
    //   exact: true,
    //   main: () => <SampleReception />,
    //   //<SampleAnalysis />,
    // },

    {
      path: '/lab/print_result',
      exact: true,
      main: () => <PrintResult />,
    },

    // {
    //   path: '/lab/pathologist_comment',
    //   exact: true,
    //   main: () => <PathologistComment />,
    // },

    {
      path: '/lab/sample_tracking',
      exact: true,
      main: () => <SampleTracking />,
    },
  ];
  return (
    <Suspense fallback={<Loading />}>
      {isRoute && (
        <div>
          {!carouselIsOpen &&
            routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.main}
              />
            ))}
          {carouselIsOpen && (
            <div style={{ height: '40vh' }}>
              {/* News feed component if any */}
              <h1>News Feed</h1>
            </div>
          )}
        </div>
      )}
      {!isRoute && (
        <div>
          <RequestProcessingForm
            req={req}
            toggleRoute={toggleRoute}
            updateTable={updateTable}
            mode={mode}
          />
        </div>
      )}
    </Suspense>
  );
};

class LabDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselIsOpen: true,
    };
  }

  hideCarousel = () => this.setState({ carouselIsOpen: false });

  showCarousel = () => this.setState({ carouselIsOpen: true });

  render() {
    const {
      req,
      isRoute,
      toggleRoute,
      updateTable,
      fetchData,
      setMode,
      mode,
    } = this.props;
    const { carouselIsOpen } = this.state;
    return (
      <div>
        <Tabs
          hideCarousel={this.hideCarousel}
          showCarousel={this.showCarousel}
          fetchData={fetchData}
          setMode={setMode}
        />
        <br />
        <TabForm
          req={req}
          isRoute={isRoute}
          toggleRoute={toggleRoute}
          carouselIsOpen={carouselIsOpen}
          updateTable={updateTable}
          mode={mode}
        />
      </div>
    );
  }
}

export default LabDashboard;
