import React from 'react'
import { connect } from 'react-redux'
import { Card, CardText, ListGroup, CardTitle } from 'reactstrap'
import { Scrollbars } from 'react-custom-scrollbars'
// import { LoadingXsm } from '../loading'
import { MdCheck } from 'react-icons/md'
// import { saveDiagnosis } from '../../redux/actions/doctor'
// import moment from "moment";
import {
  _customNotify,
  _warningNotify,
  checkEmpty,
  getAgeFromDOB,
} from '../utils/helpers'
import { useHistory } from 'react-router'
import LabRequestTable  from './lab-test/LabRequestTable'
import CustomButton from '../comp/components/Button'
// import { saveDiagnosis } from '../../redux/actions/doctor'
// import { LabRequestTable } from "./NewRadiologyInvestigations";
// import VideoChat from "../doc_dash/video-chat/VideoChat";

const PreviewForm = ({
  complaints,
  vitalSigns,
  historyOfPComplaints,
  systemExam,
  problems,
  provisionalDiagnosis,
  athropometry,
  managementPlan,
  prescriptionRequest,
  labInvestigations,
  observationRequest,
  dressingRequest,
  patient,
  height,
  savingDiagnosis,
  submitDiagnosis,
}) => {
  const history = useHistory()
  // const sameYear = moment().get("year") === moment(patient.dob).get("year");
  // const sameMonth = moment().get("month") === moment(patient.dob).get("month");
  return (
    <Card
      className="p-2 pb-1 my-1 border border-primary"
      style={{ height: height ? height : 400 }}
    >
      <CardTitle tag="h6" className="text-center">
        Diagnosis Preview
      </CardTitle>
      <div>
        {/* <VideoChat /> */}
        {/* <span style={{ float: 'right' }} className='btn btn-success btn-sm mb-1' onClick={() => toggleVid()}>
          <MdVideoCall size={30}  />
        </span> */}
      </div>
      {/* {moment().diff(moment(patient.dob).format('YYYY'), 'years')} */}
      {/* {JSON.stringify({
        sameYear,
        y: moment(patient.dob).get("year"),
        sameMonth,
        m: moment(patient.dob).get("month"),
      })} */}

      <Card outline color="secondary" className="p-1">
        <div>
          <p className="font-weight-bold m-0">
            {patient.surname} {patient.firstname} (
            {/* {patient.patientId ? patient.patientId : patient.patientHospitalId}) */}
            {patient.patientHospitalId})
          </p>
          <p className="font-weight-bold m-0">
            <span className="mr-3">
              Age: {getAgeFromDOB(patient.dob)}
              {/* {!sameYear && !sameMonth
                ? `${moment().diff(moment(patient.dob).format('YYYY-MM-DD'), 'years')} years`
                : null}
              {sameYear && !sameMonth
                ? `${moment().diff(moment(patient.dob).format('YYYY-MM-DD'), 'months')} months`
                : null}
              {sameYear && sameMonth
                ? `${moment().diff(moment(patient.dob).format('YYYY-MM-DD'), 'days')} days`
                : null} */}
            </span>
            <span>Gender: {patient.gender}</span>
          </p>
        </div>
      </Card>
      <Scrollbars>
        <DressingRequestView dressingRequest={dressingRequest} />
        {/* <LaboratoryInvestigationView labInvestigations={labInvestigations} /> */}
        <LabRequestTable formRecords={labInvestigations} showRemove={false} />
        <PrescriptionsView prescriptionRequest={prescriptionRequest} />
        <ManagementPlan managementPlan={managementPlan} />
        <ProvisionalDiagnosisView provisionalDiagnosis={provisionalDiagnosis} />
        <ProblemsView problems={problems} />
        <Athropometry athropometry={athropometry} />
        <SystemExamView systemExam={systemExam} />
        <VitalSignsView vitalSigns={vitalSigns} />
        <HistoryView historyOfPComplaints={historyOfPComplaints} />
        <PresentingComplaintsView complaints={complaints} />
        {/* {checkEmpty(prevMedHistory) ? null : (
          <Card className='p-2 mt-1'>
            <CardText tag="h6">Previous Medical History</CardText>
            <ListGroup> */}
        {/* </ListGroup>
          </Card>
        )} */}
        {observationRequest ? (
          <span>Observation Request: {observationRequest}</span>
        ) : null}
      </Scrollbars>
      {/* <button
        
        className="btn btn-sm btn-outline-success"
      >
        {savingDiagnosis ? (
          <LoadingXsm />
        ) : (
          <>
            Submit now
            <MdCheck size={16} className="ml-1" />
          </>
        )}
      </button> */}
      <CustomButton
        disabled={savingDiagnosis}
        onClick={() =>
          submitDiagnosis(
            () => {
              _customNotify('Visit record saved!')
              history.push(
                `/me/doctor/patients/view/${patient.patientHospitalId}/diagnoses`,
              )
              
            },
            () => {
              _warningNotify('Error saving visit, please try again later')
            },
          )
        }
        color="success"
        size="sm"
        outline
        loading={savingDiagnosis}
      >
        Submit now
        <MdCheck size={16} className="ml-1" />
      </CustomButton>
    </Card>
  )
}

export function PresentingComplaintsView({ complaints = [] }) {
  if (!complaints.length) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">Presenting Complaints</CardText>
      <ListGroup>
        {complaints.map((complaint, i) => (
          <div key={i}>
            <span>
              {complaint.complaint} ({complaint.history})
            </span>
          </div>
        ))}
      </ListGroup>
    </Card>
  )
}

export function HistoryView({ historyOfPComplaints = {} }) {
  if (checkEmpty(historyOfPComplaints)) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">History of Presenting Complaints</CardText>
      <ListGroup>
        {historyOfPComplaints.hypertensive ? (
          <span>Hypertensive: {historyOfPComplaints.hypertensive}</span>
        ) : null}
        {historyOfPComplaints.hypertensiveDuration ? (
          <span>
            Hypertensive Duration:
            {historyOfPComplaints.hypertensiveDuration}
          </span>
        ) : null}
        {historyOfPComplaints.hypertensiveRegularOnMedication ? (
          <span>
            Regular on Medication:
            {historyOfPComplaints.hypertensiveRegularOnMedication}
          </span>
        ) : null}
        {historyOfPComplaints.diabetic ? (
          <span>Diabetic: {historyOfPComplaints.diabetic}</span>
        ) : null}
        {historyOfPComplaints.optimalSugarControl ? (
          <span>
            Optimal Sugar Control:
            {historyOfPComplaints.optimalSugarControl}
          </span>
        ) : null}
        {historyOfPComplaints.asthmatic ? (
          <span>Asthmatic: {historyOfPComplaints.asthmatic}</span>
        ) : null}
        {historyOfPComplaints.others ? (
          <span>Others: {historyOfPComplaints.others}</span>
        ) : null}
        {historyOfPComplaints.pastMedicalHistory ? (
          <span>
            Past Medical History:
            {historyOfPComplaints.pastMedicalHistory}
          </span>
        ) : null}
        {historyOfPComplaints.pastSurgicalHistory ? (
          <span>
            Past Surgical History:
            {historyOfPComplaints.pastSurgicalHistory}
          </span>
        ) : null}
        {historyOfPComplaints.allergy ? (
          <span>Allergy: {historyOfPComplaints.allergy}</span>
        ) : null}
        {historyOfPComplaints.drugAlergy ? (
          <span>Drug Allergy: {historyOfPComplaints.drugAlergy}</span>
        ) : null}
        {historyOfPComplaints.social ? (
          <span>Social: {historyOfPComplaints.social}</span>
        ) : null}
        {historyOfPComplaints.otherAllergies ? (
          <span>Other Allergies: {historyOfPComplaints.otherAllergies}</span>
        ) : null}
        {historyOfPComplaints.otherSocialHistory ? (
          <span>
            Other Social History:
            {historyOfPComplaints.otherSocialHistory}
          </span>
        ) : null}
        {historyOfPComplaints.obtsGyneaHistory ? (
          <span>
            Obts & Gynea History: {historyOfPComplaints.obtsGyneaHistory}
          </span>
        ) : null}
        {historyOfPComplaints.drugHistory ? (
          <span>Drug History: {historyOfPComplaints.drugHistory}</span>
        ) : null}
        {historyOfPComplaints.pbnh ? (
          <span>PBNH: {historyOfPComplaints.pbnh}</span>
        ) : null}
        {historyOfPComplaints.nutrition ? (
          <span>Nutrition: {historyOfPComplaints.nutrition}</span>
        ) : null}
        {historyOfPComplaints.immunization ? (
          <span>Immunization: {historyOfPComplaints.immunization}</span>
        ) : null}
        {historyOfPComplaints.development ? (
          <span>Development: {historyOfPComplaints.development}</span>
        ) : null}
      </ListGroup>
    </Card>
  )
}

export function SystemExamView({ systemExam = {} }) {
  // if (checkEmpty(systemExam)) return null;
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">System Examination</CardText>
      <ListGroup>
        {systemExam.palor ? <span> Palor: {systemExam.palor}</span> : null}
        {systemExam.dehydration ? (
          <span> Dehydration: {systemExam.dehydration}</span>
        ) : null}
        {systemExam.icterus ? (
          <span> Icterus: {systemExam.icterus}</span>
        ) : null}
        {systemExam.cyanosis ? (
          <span> Cyanosis: {systemExam.cyanosis}</span>
        ) : null}
        {systemExam.rDistress ? (
          <span> Respiratory Distress: {systemExam.rDistress}</span>
        ) : null}
        {systemExam.pedalEdema ? (
          <span> Pedal Edema: {systemExam.pedalEdema}</span>
        ) : null}
        {systemExam.gLymphadenopathy ? (
          <span> General Lymphadenopathy: {systemExam.gLymphadenopathy}</span>
        ) : null}
        {systemExam.otherFinding ? (
          <span> Other Finding: {systemExam.otherFinding}</span>
        ) : null}

        <span className="font-weight-bold">Cardiovascular Examination:</span>
        {systemExam.cvsInspection ? (
          <span>Inspection: {systemExam.cvsInspection}</span>
        ) : null}
        {systemExam.cvsPalpation ? (
          <span>Palpation: {systemExam.cvsPalpation}</span>
        ) : null}
        {systemExam.cvsPercussion ? (
          <span>Percussion: {systemExam.cvsPercussion}</span>
        ) : null}
        {systemExam.cvsAuscultation ? (
          <span>Auscultation: {systemExam.cvsAuscultation}</span>
        ) : null}

        <span className="font-weight-bold">
          Chest / Respiratory Examination:
        </span>
        {systemExam.respiratoryInspection ? (
          <span>Inspection: {systemExam.respiratoryInspection}</span>
        ) : null}
        {systemExam.respiratoryPalpation ? (
          <span>Palpation: {systemExam.respiratoryPalpation}</span>
        ) : null}
        {systemExam.respiratoryPercussion ? (
          <span>Percussion: {systemExam.respiratoryPercussion}</span>
        ) : null}
        {systemExam.respiratoryAuscultation ? (
          <span>Auscultation: {systemExam.respiratoryAuscultation}</span>
        ) : null}

        <span className="font-weight-bold">Abdominal Examination:</span>
        {systemExam.abdomenInspection ? (
          <span>Inspection: {systemExam.abdomenInspection}</span>
        ) : null}
        {systemExam.abdomenPalpation ? (
          <span>Palpation: {systemExam.abdomenPalpation}</span>
        ) : null}
        {systemExam.abdomenPercussion ? (
          <span>Percussion: {systemExam.abdomenPercussion}</span>
        ) : null}
        {systemExam.abdomenAuscultation ? (
          <span>Auscultation: {systemExam.abdomenAuscultation}</span>
        ) : null}

        <span className="font-weight-bold">CNS Examination:</span>
        {systemExam.cnsInspection ? (
          <span>Inspection: {systemExam.cnsInspection}</span>
        ) : null}
        {systemExam.cnsPalpation ? (
          <span>Palpation: {systemExam.cnsPalpation}</span>
        ) : null}
        {systemExam.cnsPercussion ? (
          <span>Percussion: {systemExam.cnsPercussion}</span>
        ) : null}
        {systemExam.cnsAuscultation ? (
          <span>Auscultation: {systemExam.cnsAuscultation}</span>
        ) : null}
        {systemExam.eye_opening ? (
          <span>Eye Opening: {systemExam.eye_opening}</span>
        ) : null}
        {systemExam.BVR ? <span>BVR: {systemExam.BVR}</span> : null}
        {systemExam.BMR ? <span>BMR: {systemExam.BMR}</span> : null}

        <span className="font-weight-bold">Musculoskeletal Examination:</span>
        {systemExam.mssInspection ? (
          <span>Inspection: {systemExam.mssInspection}</span>
        ) : null}
        {systemExam.mssPalpation ? (
          <span>Palpation: {systemExam.mssPalpation}</span>
        ) : null}
        {systemExam.mssPercussion ? (
          <span>Percussion: {systemExam.mssPercussion}</span>
        ) : null}
        {systemExam.mssAuscultation ? (
          <span>Auscultation: {systemExam.mssAuscultation}</span>
        ) : null}
        {systemExam.RUL ? <span>RUL: {systemExam.RUL}</span> : null}
        {systemExam.LUL ? <span>LUL: {systemExam.LUL}</span> : null}
        {systemExam.RLL ? <span>RLL: {systemExam.RLL}</span> : null}
        {systemExam.LLL ? <span>LLL: {systemExam.LLL}</span> : null}
      </ListGroup>
    </Card>
  )
}

export function VitalSignsView({ vitalSigns = {} }) {
  if (checkEmpty(vitalSigns)) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">Vital Signs</CardText>
      <ListGroup>
        {vitalSigns.tempreture ? (
          <span>Tempreture: {vitalSigns.tempreture}</span>
        ) : null}
        {vitalSigns.pulse ? <span>Pulse: {vitalSigns.pulse}</span> : null}
        {vitalSigns.bloodpressure ? (
          <span>Blood Pressure: {vitalSigns.bloodpressure}</span>
        ) : null}
        {vitalSigns.vital_height ? (
          <span>Vital Height: {vitalSigns.vital_height}</span>
        ) : null}
        {vitalSigns.respiratoryRate ? (
          <span>Respiratory Rate: {vitalSigns.respiratoryRate}</span>
        ) : null}
        {vitalSigns.vital_weight ? (
          <span>Vital Weight: {vitalSigns.vital_weight}</span>
        ) : null}
      </ListGroup>
    </Card>
  )
}

export function ProblemsView({ problems = [] }) {
  if (!problems.length) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">Problems</CardText>
      <ListGroup>
        {problems.map((problem, index) => (
          <span key={index}>
            {index + 1}. {problem}
          </span>
        ))}
      </ListGroup>
    </Card>
  )
}

export function ProvisionalDiagnosisView({ provisionalDiagnosis = [] }) {
  if (!provisionalDiagnosis.length) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">Provisional Diagnosis</CardText>
      <ListGroup>
        {provisionalDiagnosis.map((diagnosis, index) => (
          <span key={index}>
            {index + 1}. {diagnosis}
          </span>
        ))}
      </ListGroup>
    </Card>
  )
}

export function Athropometry({ athropometry = {} }) {
  if (checkEmpty(athropometry)) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">Athropometry</CardText>
      <ListGroup>
        {athropometry.weight ? (
          <span>Weight: {athropometry.weight}</span>
        ) : null}
        {athropometry.headcircumference ? (
          <span>Head Circumference: {athropometry.headcircumference}</span>
        ) : null}
        {athropometry.height ? (
          <span>Height: {athropometry.height}</span>
        ) : null}
        {athropometry.muac ? <span>MUAC: {athropometry.muac}</span> : null}
      </ListGroup>
    </Card>
  )
}

export function ManagementPlan({ managementPlan = {} }) {
  if (checkEmpty(managementPlan)) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">Management Plan</CardText>
      <ListGroup>
        {managementPlan.addedcare ? (
          <span>Added Care: {managementPlan.addedcare}</span>
        ) : null}
        {managementPlan.patientStatus ? (
          <span>Patient Status: {managementPlan.patientStatus}</span>
        ) : null}
      </ListGroup>
    </Card>
  )
}

export function PrescriptionsView({ prescriptionRequest = [] }) {
  if (!prescriptionRequest.length) return null
  return (
    <Card className="p-2 mt-1">
      <CardText tag="h6">Prescriptions</CardText>
      <ListGroup>
        {/* <ol > */}
        {prescriptionRequest.map((prescription, i) => (
          <div>
            {/* // <li key={i}> */}
            {`${i + 1}. ${prescription.route} ${prescription.drug} ${
              prescription.dosage
            } every ${prescription.frequency} for ${prescription.duration} ${
              prescription.period
            }(s) ${
              prescription.additionalInfo ? prescription.additionalInfo : ''
            }`}
            {/* // </li> */}
          </div>
        ))}
      </ListGroup>
    </Card>
  )
}

export function LaboratoryInvestigationView({ labInvestigations = [] }) {
  if (!labInvestigations.length) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">Laboratory Investigations</CardText>
      <ListGroup>
        {labInvestigations.map((investigation, i) => (
          <div key={i}>
            <span>
              Test:{investigation.test}, Sample: {investigation.sample}
            </span>
          </div>
        ))}
      </ListGroup>
    </Card>
  )
}

export function DressingRequestView({ dressingRequest = '', nursingRequest='' }) {
  if (checkEmpty(dressingRequest)) return null
  return (
    <Card className="p-1 mt-1">
      <CardText tag="h6">Nursing/Dressing Request</CardText>
      <ListGroup>
        {dressingRequest ? (
          <span>Dressing Information: {dressingRequest}</span>
        ) : null}
        {nursingRequest ? (
          <span>Nursing Requests: {nursingRequest}</span>
        ) : null}
      </ListGroup>
    </Card>
  )
}

export default connect(
  ({ doctor, diagnosis, individualDoc }) => ({
    patient: individualDoc.selectedPatient,
    complaints: doctor.presentingComplaints,
    vitalSigns: doctor.vitalSigns,
    historyOfPComplaints: doctor.historyOfPComplaints,
    prevMedHistory: doctor.prevMedHistory,
    systemExam: doctor.systemExam,
    problems: doctor.problems,
    labInvestigations: doctor.labInvestigations,
    provisionalDiagnosis: doctor.provisionalDiagnosis,
    athropometry: doctor.athropometry,
    managementPlan: doctor.managementPlan,
    prescriptionRequest: doctor.prescriptionRequest,
    observationRequest: doctor.observationRequest,
    dressingRequest: doctor.dressingRequest,
    savingDiagnosis: diagnosis.savingDiagnosis,
  }),
  (dispatch) => ({
    // submitDiagnosis: (cb, err) => dispatch(saveDiagnosis(cb, err)),
    submitDiagnosis: (cb, err) => dispatch(),
  }),
)(PreviewForm)
