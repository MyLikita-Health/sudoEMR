import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import ProblemsForm from './ProblemsForm';
import ObservationRequestForm from './ObservationRequestForm';
import HistoryPreview from './HistoryPreview';
import SystemExaminationForm from './SystemExaminationForm';
import VitalSignForm from './VitalSignForm';
import { LabRequestTable } from './NewRadiologyInvestigations';
import ProvisionalDiagnosisForm from './ProvisionalDiagnosisForm';
import AthropometryForm from './AthropometryForm';
import ManagementPlanForm from './ManagementPlanForm';
import DrugsTable from './DrugsTable';
import DressingRequestForm from './DressingRequestForm';
import { PComplaintsTable } from './PcomplaintsForm';
import PreviousMedicalHistoryPreview from './PreviousMedicalHistoryPreview';
import PatientForm from '../PatientForm';
import './print.css';

class Preview extends React.Component {
    onPrintClick=()=>{
        window.frames["print_frame"].document.body.innerHTML = document.getElementById("diagnosisPrint").innerHTML;
        window.frames["print_frame"].window.focus();
        window.frames["print_frame"].window.print();
    }
    render(){
        const { presenting_complaints, history, system_examination, vital_signs, problems, 
            lab_investigation, provisional_diagnosis, athropometry, management_plan, 
            prescription_request, dressing_request, observation_request, 
            previous_medical_history, modal, toggle, submit, patientrecord } = this.props;
        return ( 
            <Modal size="lg" isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Preview Diagnosis</ModalHeader>
                <ModalBody>
                    <div id="diagnosisPrint">
                        <h1>Patient Diagnosis Form</h1>
                        <h3>Patient's Information</h3>
                        <PatientForm record={patientrecord} />
                        <h4>Diagnosis Details</h4>
                        { vital_signs && <VitalSignForm records={vital_signs} /> }
                        { presenting_complaints && <PComplaintsTable formRecords={presenting_complaints} showHistory={false} /> }
                        { history && <HistoryPreview records={history} /> }
                        { previous_medical_history && <PreviousMedicalHistoryPreview records={previous_medical_history} /> }
                        { system_examination && <SystemExaminationForm records={system_examination} /> }
                        { problems && <ProblemsForm records={problems} /> }
                        { provisional_diagnosis && <ProvisionalDiagnosisForm records={provisional_diagnosis} /> }
                        { athropometry && <AthropometryForm records={athropometry} /> }
                        { management_plan && <ManagementPlanForm addedcare={management_plan} /> }
                        { dressing_request && <DressingRequestForm records={dressing_request} /> }                      
                        { observation_request && <ObservationRequestForm observation_request={observation_request} /> }
                        { prescription_request && <DrugsTable drugsList={prescription_request} showRemove={false} /> }
                        { lab_investigation && <LabRequestTable formRecords={lab_investigation} showRemove={false} /> }
                    </div>
                </ModalBody>
                <ModalFooter>
                    <iframe name="print_frame" width="0" height="0" src="about:blank"></iframe>
                    <Button color="success" onClick={this.onPrintClick}>Print</Button>
                    <Button color="primary" onClick={submit} >Save</Button> 
                    <Button color="danger" onClick={toggle} >Back</Button>   
                </ModalFooter>
            </Modal>  
        )
    }
}

Preview.defaultProps = {
    patientrecord: []
}
export default Preview;