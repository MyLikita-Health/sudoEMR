import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
// import { ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './components/test.css'
import './components/test2.css'
// import { checkEmpty } from "../utils/helpers";
import { setTab } from '../../redux/actions/doctor'
import Tabs from './tabs/index'

import PcomplaintsForm from './PcomplaintsForm'
import HistoryForm from './HistoryForm'
import SystemExaminationForm from './SysExaminationEdit'
import CreateVitalSigns from './CreateVitalSigns'
import NewProblems from './NewProblems'
import NewRadiologyInvestigations from './NewRadiologyInvestigations'
import NewProvisionalDiagnosis from './NewProvisionalDiagnosis'
import CreateAthropometry from './CreateAthropometry'
import EditManagementplan from './EditManagementplan'
import EditPrescriptionRequest from './EditPrescriptionRequest'
import EditDressingRequest from './EditDressingRequest'
import EditObservationRequest from './EditObservationRequest'
import PreviousMedicalHistoryForm from './PreviousMedicalHistoryForm'
import DocNav from './components/nav-bar'
// import { FaNotesMedical } from 'react-icons/fa';

const DocOptions = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      // height: '40vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h3>Dashboard</h3>
    {/* <ListGroupItem
      style={{
        height: 150,
        width: 150,
        cursor: 'pointer',
        margin: '0 10px',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      tag="div">
      <FaNotesMedical size={32} style={{ marginBottom: 15 }} /> Operation Note
    </ListGroupItem>
    <ListGroupItem
      style={{
        height: 150,
        width: 150,
        cursor: 'pointer',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        margin: '0 10px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      tag="div">
      <FaNotesMedical size={32} style={{ marginBottom: 15 }} /> Operation Note
    </ListGroupItem>
    <ListGroupItem
      style={{
        height: 150,
        width: 150,
        cursor: 'pointer',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        margin: '0 10px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      tag="div">
      <FaNotesMedical size={32} style={{ marginBottom: 15 }} /> Operation Note
    </ListGroupItem> */}
  </div>
)

const TabBody = ({ component, setComponentToRender }) => {
  switch (component) {
    case 'PcomplaintsForm':
      return <PcomplaintsForm setComponent={setComponentToRender} />
    case 'HistoryForm':
      return <HistoryForm setComponent={setComponentToRender} />
    case 'PreviousMedicalHistoryForm':
      return <PreviousMedicalHistoryForm setComponent={setComponentToRender} />
    case 'SystemExaminationForm':
      return <SystemExaminationForm setComponent={setComponentToRender} />
    case 'CreateVitalSigns':
      return <CreateVitalSigns setComponent={setComponentToRender} />
    case 'NewProblems':
      return <NewProblems setComponent={setComponentToRender} />
    case 'NewRadiologyInvestigations':
      return <NewRadiologyInvestigations setComponent={setComponentToRender} />
    case 'NewProvisionalDiagnosis':
      return <NewProvisionalDiagnosis setComponent={setComponentToRender} />
    case 'CreateAthropometry':
      return <CreateAthropometry setComponent={setComponentToRender} />
    case 'EditManagementplan':
      return <EditManagementplan setComponent={setComponentToRender} />
    case 'EditPrescriptionRequest':
      return <EditPrescriptionRequest setComponent={setComponentToRender} />
    case 'EditObservationRequest':
      return <EditObservationRequest setComponent={setComponentToRender} />
    case 'EditDressingRequest':
      return <EditDressingRequest setComponent={setComponentToRender} />
    default:
      return null
  }
}

export const DiagnosisDashboard = ({ location, setTab, component }) => (
  <>
    <DocNav />
    <Tabs
      path={location.pathname}
      component={component}
      setComponentToRender={(component) => setTab(component)}
    />
    <TabBody
      component={component}
      setComponentToRender={(component) => setTab(component)}
    />
  </>
)

const DoctorDashboard = ({ location, activeTab, setTab, patient }) => {
  const [component, setComponent] = useState('')
  useEffect(() => {
    setComponent(activeTab)
  })
  return (
    <div>
      {patient.id ? (
        <DiagnosisDashboard
          location={location}
          setTab={setTab}
          component={component}
        />
      ) : (
        <DocOptions />
      )}
    </div>
  )
}

function mapStateToProps({ doctor, auth }) {
  return {
    access: auth.user.accessTo,
    activeTab: doctor.activeTab,
    patient: doctor.patient,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTab: (tab) => dispatch(setTab(tab)),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(DoctorDashboard)
