import React from 'react';
import PcomplaintsForm from './PcomplaintsForm';
import HistoryForm from './HistoryForm';
import SystemExaminationForm from './SysExaminationEdit';
import CreateVitalSigns from './CreateVitalSigns';
import NewProblems from './NewProblems';
import NewRadiologyInvestigations from './NewRadiologyInvestigations';
import NewProvisionalDiagnosis from './NewProvisionalDiagnosis';
import CreateAthropometry from './CreateAthropometry';
import EditManagementplan from './EditManagementplan';
import EditPrescriptionRequest from './EditPrescriptionRequest';
import EditDressingRequest from './EditDressingRequest';
import EditObservationRequest from './EditObservationRequest';
import PreviousMedicalHistoryForm from './PreviousMedicalHistoryForm';
import DiagnosticCode from './DiagnosticCode';

const Tabs = ({ setComponentToRender, component }) => {
  return (
    <>
      <div>
        <button
          onClick={() => setComponentToRender('CreateVitalSigns')}
          className={`btn ${
            component === 'CreateVitalSigns'
              ? 'btn-primary'
              : 'btn-outline-primary'
          } btn-sm col-xs-12 col-sm-6 col-md-4 col-lg-4`}
        >
          Problem and Diagnosis
        </button>
      </div>
      <div>
        <button
          onClick={() => setComponentToRender('CreateVitalSigns')}
          className={`btn ${
            component === 'CreateVitalSigns'
              ? 'btn-primary'
              : 'btn-outline-primary'
          } btn-sm col-xs-12 col-sm-6 col-md-4 col-lg-4`}
        >
          Problem and Diagnosis
        </button>
      </div>
      <button
        onClick={() => setComponentToRender('PcomplaintsForm')}
        className={`btn ${
          component === 'PcomplaintsForm'
            ? 'btn-success'
            : 'btn-outline-success'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
        title="Patient Complaints"
      >
        Complaints
      </button>
      <button
        onClick={() => setComponentToRender('HistoryForm')}
        className={`btn ${
          component === 'HistoryForm' ? 'btn-primary' : 'btn-outline-primary'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        History
      </button>
      <button
        onClick={() => setComponentToRender('PreviousMedicalHistoryForm')}
        className={`btn ${
          component === 'PreviousMedicalHistoryForm'
            ? 'btn-success'
            : 'btn-outline-success'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Medical History
      </button>
      <button
        onClick={() => setComponentToRender('SystemExaminationForm')}
        className={`btn ${
          component === 'SystemExaminationForm'
            ? 'btn-primary'
            : 'btn-outline-primary'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        System Exam
      </button>
      <button
        onClick={() => setComponentToRender('NewProblems')}
        className={`btn ${
          component === 'NewProblems' ? 'btn-success' : 'btn-outline-success'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Problems
      </button>
      <button
        onClick={() => setComponentToRender('NewProvisionalDiagnosis')}
        className={`btn ${
          component === 'NewProvisionalDiagnosis'
            ? 'btn-primary'
            : 'btn-outline-primary'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Diagnosis
      </button>
      <button
        onClick={() => setComponentToRender('CreateAthropometry')}
        className={`btn ${
          component === 'CreateAthropometry'
            ? 'btn-success'
            : 'btn-outline-success'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Athropometry
      </button>
      <button
        onClick={() => setComponentToRender('EditManagementplan')}
        className={`btn ${
          component === 'EditManagementplan'
            ? 'btn-primary'
            : 'btn-outline-primary'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Management Plan
      </button>
      <button
        onClick={() => setComponentToRender('EditDressingRequest')}
        className={`btn ${
          component === 'EditDressingRequest'
            ? 'btn-success'
            : 'btn-outline-success'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Dressing
      </button>
      <button
        onClick={() => setComponentToRender('EditObservationRequest')}
        className={`btn ${
          component === 'EditObservationRequest'
            ? 'btn-primary'
            : 'btn-outline-primary'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Observations
      </button>
      <button
        onClick={() => setComponentToRender('EditPrescriptionRequest')}
        className={`btn ${
          component === 'EditPrescriptionRequest'
            ? 'btn-success'
            : 'btn-outline-success'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Prescriptions
      </button>
      <button
        onClick={() => setComponentToRender('NewRadiologyInvestigations')}
        className={`btn ${
          component === 'NewRadiologyInvestigations'
            ? 'btn-primary'
            : 'btn-outline-primary'
        } btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
      >
        Investigations
      </button>
    </>
  );
};

const TabForm = ({ renderTabItems }) => {
  return (
    <div style={{ height: '60vh', width: '100%' }}>{renderTabItems()}</div>
  );
};

class Diagnosis extends React.Component {
  state = {
    component: 'PcomplaintsForm',
  };
  renderTabItems = () => {
    const { component } = this.state;

    switch (component) {
      case 'PcomplaintsForm':
        return <PcomplaintsForm setComponent={this.setComponentToRender} />;
      case 'HistoryForm':
        return <HistoryForm setComponent={this.setComponentToRender} />;
      case 'PreviousMedicalHistoryForm':
        return (
          <PreviousMedicalHistoryForm
            setComponent={this.setComponentToRender}
          />
        );
      case 'SystemExaminationForm':
        return (
          <SystemExaminationForm setComponent={this.setComponentToRender} />
        );
      case 'CreateVitalSigns':
        return <CreateVitalSigns setComponent={this.setComponentToRender} />;
      case 'NewProblems':
        return <NewProblems setComponent={this.setComponentToRender} />;
      case 'NewRadiologyInvestigations':
        return (
          <NewRadiologyInvestigations
            setComponent={this.setComponentToRender}
          />
        );
      case 'NewProvisionalDiagnosis':
        return (
          <NewProvisionalDiagnosis setComponent={this.setComponentToRender} />
        );
      case 'CreateAthropometry':
        return <CreateAthropometry setComponent={this.setComponentToRender} />;
      case 'EditManagementplan':
        return <EditManagementplan setComponent={this.setComponentToRender} />;
      case 'EditPrescriptionRequest':
        return (
          <EditPrescriptionRequest setComponent={this.setComponentToRender} />
        );
      case 'EditObservationRequest':
        return (
          <EditObservationRequest setComponent={this.setComponentToRender} />
        );
      case 'EditDressingRequest':
        return <EditDressingRequest setComponent={this.setComponentToRender} />;
        case 'EditView':
        return <EditView setComponent={this.setComponentToRender} />;
      case 'DiagnosticCode':
        return <DiagnosticCode setComponent={this.setComponentToRender} />;
      default:
        return (
          <p style={{ textAlign: 'center', marginTop: '20vh' }}>
            Click a button above to get started
          </p>
        );
    }
  };

  setComponentToRender = (component) => this.setState({ component });

  render() {
    return (
      <div>
        <Tabs
          component={this.state.component}
          setComponentToRender={this.setComponentToRender}
        />

        <div style={{ marginTop: 15 }}>
          {/* <DocNav /> */}
          <TabForm renderTabItems={this.renderTabItems} />
        </div>
      </div>
    );
  }
}

export default Diagnosis;
