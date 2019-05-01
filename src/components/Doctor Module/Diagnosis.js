import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { PcomplaintsForm } from './PcomplaintsForm';
import HistoryForm from './HistoryForm';
import SystemExaminationForm from './SysExaminationEdit';
import CreateVitalSigns from './CreateVitalSigns';
import NewProblems from './NewProblems';
import { NewRadiologyInvestigations } from './NewRadiologyInvestigations';
import NewProvisionalDiagnosis from './NewProvisionalDiagnosis';
import CreateAthropometry from './CreateAthropometry';
import EditManagementplan from './EditManagementplan';
import EditPrescriptionRequest from './EditPrescriptionRequest';
import EditDressingRequest from './EditDressingRequest';
import EditObservationRequest from './EditObservationRequest';
import PreviousMedicalHistoryForm from './PreviousMedicalHistoryForm';
import DiagnosticCode from './DiagnosticCode'

const Tabs =()=> {
    
    return (
        <div style={{width:'100%'}}>
            <NavLink to="/patient_clarking/vital_signs" className='btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4'>Vital Signs</NavLink>
            <NavLink to="/patient_clarking/presenting_complaints" className='btn btn-outline-warning col-xs-12 col-sm-6 col-md-4 col-lg-4' title="Patient Complaints">Presenting Complaints</NavLink>
            <NavLink to="/patient_clarking/history" className='btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4'>History</NavLink>
            <NavLink to="/patient_clarking/previous_medical_history" className='btn btn-outline-info col-xs-12 col-sm-6 col-md-4 col-lg-4'>Previous Medical History</NavLink>
            <NavLink to="/patient_clarking/system_examination" className='btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4'>System Examination</NavLink>
            <NavLink to="/patient_clarking/problems" className='btn btn-outline-secondary col-xs-12 col-sm-6 col-md-4 col-lg-4'>Problems</NavLink>
            <NavLink to="/patient_clarking/provisional_diagnosis" className='btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4'>Provisional Diagnosis</NavLink>
            <NavLink to="/patient_clarking/athropometry" className='btn btn-outline-warning col-xs-12 col-sm-6 col-md-4 col-lg-4'>Athropometry</NavLink>
            <NavLink to="/patient_clarking/management_plan" className='btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4'>Management Plan</NavLink>
            <NavLink to="/patient_clarking/dressing_request" className='btn btn-outline-info col-xs-12 col-sm-6 col-md-4 col-lg-4'>Dressing Request</NavLink>
            <NavLink to="/patient_clarking/observation_request" className='btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4'>Observation Request</NavLink>
            <NavLink to="/patient_clarking/prescription_request" className='btn btn-outline-info col-xs-12 col-sm-6 col-md-4 col-lg-4'>Prescription Request</NavLink>
            <NavLink to="/patient_clarking/radiological_investigation" className='btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4'>Investigations</NavLink>
            <NavLink to="/patient_clarking/diagnostic_code" className='btn btn-outline-secondary col-xs-12 col-sm-6 col-md-4 col-lg-4'>Diagnostic Code</NavLink>
        </div>
    )
}

const TabForm = () => {
    return (
            <div style={{height: '60vh', width:'100%'}}>
            <Switch>
                <Route exact path="/patient_clarking/presenting_complaints" component={PcomplaintsForm}/>
                <Route exact path="/patient_clarking/history" component={HistoryForm}/>
                <Route exact path="/patient_clarking/previous_medical_history" component={PreviousMedicalHistoryForm}/>
                <Route exact path="/patient_clarking/system_examination" component={SystemExaminationForm}/>
                <Route exact path="/patient_clarking/vital_signs" component={CreateVitalSigns}/>
                <Route exact path="/patient_clarking/problems" component={NewProblems}/>
                <Route exact path="/patient_clarking/radiological_investigation" component={NewRadiologyInvestigations}/>
                <Route exact path="/patient_clarking/provisional_diagnosis" component={NewProvisionalDiagnosis}/>
                <Route exact path="/patient_clarking/athropometry" component={CreateAthropometry}/>
                <Route exact path="/patient_clarking/management_plan" component={EditManagementplan}/>
                <Route exact path="/patient_clarking/prescription_request" component={EditPrescriptionRequest}/>
                <Route exact path="/patient_clarking/observation_request" component={EditObservationRequest}/>
                <Route exact path="/patient_clarking/dressing_request" component={EditDressingRequest}/>
                <Route exact path="/patient_clarking/diagnostic_code" component={DiagnosticCode}/>
            </Switch>
            </div>
    )
}

const Diagnosis =()=> {
    return (
        <div>
            <Tabs />
            <TabForm />
        </div>
    )
}

export default Diagnosis;