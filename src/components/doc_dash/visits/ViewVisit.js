import React from "react";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVisitDetails } from "../actions/visitsActions";
import { useState, useCallback } from "react";
import { Row, Col } from "reactstrap";
import BackButton from "../../comp/components/BackButton";

import { getLabDetails } from "../actions/labActions";
import DiganosisPrintPreview from "./PrintPreview";
import DiagnosisPreview from "./DiagnosisPreview";

function ViewVisits() {
  const [loading, toggleLoading] = useState(false);
  const [print, setPrint] = useState(false);
  const visitDetails = useSelector(
    (state) => state.individualDoc.selectedVisit
  );
  const patientDetails = useSelector(
    (state) => state.individualDoc.selectedPatient
  );
  const labDetails = useSelector(
    (state) => state.individualDoc.selectedLabTest
  );

  const dispatch = useDispatch();
  const match = useRouteMatch();

  const _getLabDetails = useCallback(
    () => {
      dispatch(getLabDetails(visitDetails._id));
    },
    [dispatch]
  );

  useEffect(
    () => {
      toggleLoading(true);
      dispatch(
        getVisitDetails(match.params.visitId, () => {
          toggleLoading(false);
          _getLabDetails(visitDetails._id);
        })
      );
    },
    [dispatch]
  );

  const facility = useSelector((state) => state.facility.info);

  const {
    presenting_complaints,
    historyOfPComplaints,
    systemExam,
    vitalSigns,
    problems,
    provisionalDiagnosis,
    athropometry,
    managementPlan,
    observation_request,
    // labInvestigations,
    prescriptionRequest,
    dressingRequest,
  } = visitDetails;

  return (
    <>
      <BackButton />
      <Row className='m-0 p-0'>
        <Col>
          <DiagnosisPreview
            loading={loading}
            patientDetails={patientDetails}
            visitDetails={visitDetails}
            facility={facility}
            setPrint={setPrint}
            presenting_complaints={presenting_complaints}
            historyOfPComplaints={historyOfPComplaints}
            systemExam={systemExam}
            athropometry={athropometry}
            managementPlan={managementPlan}
            prescriptionRequest={prescriptionRequest}
            dressingRequest={dressingRequest}
            vitalSigns={vitalSigns}
            observation_request={observation_request}
            provisionalDiagnosis={provisionalDiagnosis}
            problems={problems}
          />
        </Col>
        {print ? (
          <Col>
            <DiganosisPrintPreview
              facility={facility}
              presenting_complaints={presenting_complaints}
              historyOfPComplaints={historyOfPComplaints}
              systemExam={systemExam}
              athropometry={athropometry}
              managementPlan={managementPlan}
              vitalSigns={vitalSigns}
              problems={problems}
              provisionalDiagnosis={provisionalDiagnosis}
              dressingRequest={dressingRequest}
              patientDetails={patientDetails}
              setPrint={setPrint}
              prescriptionRequest={prescriptionRequest}
              labDetails={labDetails}
            />
          </Col>
        ) : null}
      </Row>
    </>
  );
}

export default ViewVisits;
