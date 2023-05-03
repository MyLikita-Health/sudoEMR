import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Alert, Card, CardText, Col, Row } from "reactstrap";
import CustomButton from "../../../comp/components/Button";
import TextWithNewLine from "../../../comp/components/TextWithNewline";
import { LabRequestTable } from "../../../doctor/lab-test/LabRequestTable";
import {
  DressingRequestView,
  ManagementPlan,
  PrescriptionsView,
} from "../../../doctor/PreviewForm";
import { getPrescriptionByReqId } from "../../actions/visitsActions";
import LabHistory from "./LabHistory";
import Textarea from "./Textarea";

function VisitPreviewItem({
  visitDetails,
  isEditting,
  setIsEditting = (f) => f,
  setSelected,
  selected,
  handleEdit = (f) => f,
  saveUpdate = (f) => f,
  type = "",
}) {
  const user = useSelector((state) => state.auth.user);
  const [prescriptionList, setPrescriptionList] = useState([]);
  useEffect(() => {
    getPrescriptionByReqId(visitDetails.id, (list) =>
      setPrescriptionList(list)
    );
  }, []);

  let isAfter24Hrs = moment().isAfter(
    moment(visitDetails.created_at).add(24, "hours")
  );
  const cannotEdit = visitDetails.userId !== user.username || isAfter24Hrs;
  return (
    <div className="border border-primary rounded p-1 my-1">
      <div className="row align-items-center">
        <h5 className="col-md-3">
          {/* Date:  */}
          {moment(visitDetails.created_at).format("DD/MM/YYYY - HH:mm")}
        </h5>
        <h5 className="col-md-6 text-center">
          Reviewed By: {visitDetails.reviewedBy}
        </h5>

        <div className="col-md-3 d-flex flex-direction-row justify-content-end">
          {isEditting || cannotEdit ? null : (
            <CustomButton
              size="sm"
              disabled={cannotEdit}
              className="mr-2"
              onClick={() => {
                setIsEditting(true);
                setSelected(visitDetails);
              }}
            >
              <FaEdit /> Edit
            </CustomButton>
          )}
        </div>
      </div>

      <Row className="m-0">
        <Col className="p-0">
          {Object.values(visitDetails).length ? (
            <div>
              {isEditting && selected._id === visitDetails._id ? (
                <>
                  <Textarea
                    label="Presenting Complaints"
                    name="consultation_notes"
                    value={selected.consultation_notes}
                    onChange={handleEdit}
                  />
                  <Textarea
                    label="Treatment Plan"
                    name="treatmentPlan"
                    value={selected.treatmentPlan}
                    onChange={handleEdit}
                  />
                </>
              ) : (
                <>
                  {visitDetails.consultation_notes !== "" ? (
                    <Card className="p-2 mt-2">
                      <CardText tag="h6">Clerking Notes</CardText>
                      <TextWithNewLine text={visitDetails.consultation_notes} />
                    </Card>
                  ) : null}
                  {visitDetails.treatmentPlan &&
                  visitDetails.treatmentPlan !== "" ? (
                    <Card className="p-2 mt-2">
                      <CardText tag="h6">Treatment Plan</CardText>
                      <TextWithNewLine text={visitDetails.treatmentPlan} />
                    </Card>
                  ) : null}
                </>
              )}

              {isEditting ? (
                <div className="d-flex flex-direction-row justify-content-end my-1">
                  <CustomButton color="success" onClick={saveUpdate}>
                    <FaSave className="mr-2" />
                    Save Update
                  </CustomButton>
                </div>
              ) : null}

              {/* {checkEmpty(prevMedHistory) ? null : (
      <div className=''>
        <CardText tag="h6">Previous Medical History</CardText>
        <ListGroup />
      </div>
      )} */}
              {/* <HistoryView historyOfPComplaints={historyOfPComplaints} /> */}
              {/* <SystemExamView systemExam={systemExam} /> */}
              {/* <Athropometry athropometry={athropometry} /> */}
              {/* <ManagementPlan
                managementPlan={{ patientStatis: visitDetails.decision }}
              /> */}
              {/* {JSON.stringify(prescriptionList)} */}
              <PrescriptionsView prescriptionRequest={prescriptionList} />
              {/* <LabRequestTable formRecords={[]} showRemove={false} /> */}

              {/* <DressingRequestView
                dressingRequest={visitDetails.dressing_request}
                nursingRequest={visitDetails.nursing_request}
              /> */}
              {/* <VitalSignsView vitalSigns={vitalSigns} /> */}

              {/* {observation_request ? (
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
      )} */}
            </div>
          ) : null}
        </Col>
        {/* <Col className="p-1">
          
        </Col> */}
      </Row>
    </div>
  );
}

export default VisitPreviewItem;
