import React from "react";
import { CardTitle, Card, CardText, Button } from "reactstrap";
import Loading from "../../comp/components/Loading";
import {
  HistoryView,
  SystemExamView,
  // ProblemsView,
  // ProvisionalDiagnosisView,
  Athropometry,
  ManagementPlan,
  PrescriptionsView,
  DressingRequestView,
  VitalSignsView,
  // LaboratoryInvestigationView,
} from "../../doctor/PreviewForm";
import { AiFillPrinter } from "react-icons/ai";
import Scrollbars from "react-custom-scrollbars";
import moment from "moment";
import { getAgeFromDOB } from "../../utils/helpers";
import TextWithNewLine from "../../comp/components/TextWithNewline";

function DiagnosisPreview({
  loading,
  patientDetails,
  visitDetails,
  facility,
  setPrint,
  presenting_complaints,
  historyOfPComplaints,
  systemExam,
  athropometry,
  managementPlan,
  prescriptionRequest,
  dressingRequest,
  vitalSigns,
  observation_request,
  provisionalDiagnosis,
  problems,
}) {
  return (
    <Card body>
      {loading && <Loading />}
      {/* {JSON.stringify(patientDetails)} */}

      <>
        <CardTitle tag="h5" className="text-right">
          <span className="mr-2">Visit Date:</span>
          {moment(visitDetails.createdAt).format("DD-MM-YYYY")}
          {facility.facility_id === "doctors" ? null : (
            <Button
              className="ml-5"
              color="dark"
              onClick={() => setPrint(true)}
            >
              Print Consultation
              <AiFillPrinter size="22" className="ml-2" />
            </Button>
          )}
        </CardTitle>
        <Card className="p-1">
          <div>
            <p className="font-weight-bold m-0">
              {patientDetails.surname} {patientDetails.firstname} (
              {patientDetails.patientHospitalId})
            </p>
            <p className="font-weight-bold m-0">
              <span style={{ marginRight: 20 }}>
                Age: {getAgeFromDOB(patientDetails.dob)}
              </span>
              <span>Gender: {patientDetails.gender}</span>
            </p>
          </div>
        </Card>
        {Object.values(visitDetails).length ? (
          <Scrollbars style={{ height: "70vh" }} tagName="div">
            {presenting_complaints !== "" ? (
              <Card className="p-2 mt-2">
                <CardText tag="h6">Presenting Complaints</CardText>
                <TextWithNewLine text={presenting_complaints} />
              </Card>
            ) : null}

            {/* {checkEmpty(prevMedHistory) ? null : (
            <div className=''>
              <CardText tag="h6">Previous Medical History</CardText>
              <ListGroup />
            </div>
          )} */}
            <HistoryView historyOfPComplaints={historyOfPComplaints} />
            <SystemExamView systemExam={systemExam} />
            <Athropometry athropometry={athropometry} />
            <ManagementPlan managementPlan={managementPlan} />
            <PrescriptionsView prescriptionRequest={prescriptionRequest} />
            <DressingRequestView dressingRequest={dressingRequest} />
            <VitalSignsView vitalSigns={vitalSigns} />

            {observation_request ? (
              <span>Observation Request: {observation_request}</span>
            ) : null}
            {!problems === "" ? null : (
              <Card className="p-2 mt-2">
                <CardText tag="h6">Problems</CardText>
                <p>{problems}</p>
              </Card>
            )}
            {!provisionalDiagnosis === "" ? null : (
              <Card className="p-2 mt-2">
                <CardText tag="h6">Provisional Diagnosis</CardText>
                <p>{provisionalDiagnosis}</p>
              </Card>
            )}
            {/* {labInvestigations.length ? (
            <Card className="mt-2 p-0 col-md-6 col-lg-5">
              <CardText tag="h6" className='text-center m-1'>Laboratory Investigations</CardText>
              <Table size="sm" >
                <thead>
                  <tr>
                    <th>Investigation</th> <th>Sample</th>
                  </tr>
                </thead>
                <tbody>
                  {labInvestigations.map((investigation, index) => (
                    <tr>
                      <td>{investigation.test}</td>
                      <td>{investigation.sample}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          ) : null} */}
          </Scrollbars>
        ) : null}
      </>
    </Card>
  );
}

export default DiagnosisPreview;
