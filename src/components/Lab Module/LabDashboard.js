import React, { Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { RequestProcessingForm } from './RequestProcessingForm';
import Loading from '../loading';
const LaboratorySetupForms = lazy(() => import('./LaboratorySetupForms'));
const SampleCollection = lazy(() => import('./SampleCollection'));
const SampleReception = lazy(() => import('./SampleReception'));
const SampleAnalysis = lazy(() => import('./SampleAnalysis'));
const PrintResult = lazy(() => import('./PrintResult'));
const PathologistComment = lazy(() => import('./PathologistComment'));
const SampleTracking = lazy(() => import('./SampleTracking'));
const CompletedLabTests = lazy(() => import('./CompletedLabTests'));

const Tabs = ({ hideCarousel=f=>f, fetchData=f=>f, setMode=f=>f, setComponentToRender=f=>f }) => {
  return (
    <div style={{ width: '100%' }}>
      <button
        onClick={() => setComponentToRender('LaboratorySetupForms')}
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Lab Setup Forms
      </button>
      <button
        onClick={() => setComponentToRender('CompletedLabTests')}
        className="btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Completed Lab Tests
      </button>
      <button
        onClick={() => setComponentToRender('SampleCollection')}
        className="btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Sample Collection
      </button>
      <button
        onClick={() => setComponentToRender('SampleReception')}
        className="btn btn-outline-warning col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Sample Analysis
      </button>
      <button
        onClick={() => setComponentToRender('PathologistComment')}
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Pathologist Comment
      </button>
      <button
        onClick={() => setComponentToRender('SampleTracking')}
        className="btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Sample Tracking
      </button>
      <button
        onClick={() => setComponentToRender('PrintResult')}
        className="btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        Print Result
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
 
  return (
    <Suspense fallback={<Loading />}>
      {renderComponents()}
      
      <div>
        <RequestProcessingForm
          req={req}
          toggleRoute={toggleRoute}
          updateTable={updateTable}
          mode={mode}
        />
      </div>
      
    </Suspense>
  );
};

class LabDashboard extends React.Component {
  state = {
    component: ''
  }

  hideCarousel = () => {
    this.setState({ carouselIsOpen: false });
  };

  setComponentToRender = component => this.setState({ component })

  renderComponents = () => {
    const { pendingRequest, updateTable } = this.props
    const { component } = this.state

    switch(component) {
      case 'LaboratorySetupForms' : return <LaboratorySetupForms />
      case 'PrintResult' : return <PrintResult />
      case 'SampleTracking' : return <SampleTracking />
      case 'SampleReception' : return <SampleReception />
      case 'SampleCollection' : return <SampleCollection pendingRequest={pendingRequest} updateTable={updateTable} />
      case 'PathologistComment' : return <PathologistComment />
      case 'CompletedLabTests': return <CompletedLabTests />
      default : return <p style={{ marginTop: 30, textAlign:'center' }} >Select an item to view</p>
    }
  }
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
    return (
      <div>
        <Tabs
          // hideCarousel={this.hideCarousel}
          // fetchData={fetchData}
          // setMode={setMode}
          setComponentToRender={this.setComponentToRender}
        />
        <br />
        <TabForm
          req={req}
          // isRoute={isRoute}
          // toggleRoute={toggleRoute}
          updateTable={updateTable}
          renderComponents={this.renderComponents}
        />
      </div>
    );
  }
}

export default LabDashboard;
