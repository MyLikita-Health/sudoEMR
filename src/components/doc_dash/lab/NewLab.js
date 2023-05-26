import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// import { TextArea } from "../../comp/components/InputGroup";
// import TextInput from "../../comp/components/TextInput";
import { useState } from "react";
import { _customNotify, getAgeFromDOB } from "../../utils/helpers";
// import { saveLab } from "../actions/labActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import SearchPatient from "../../comp/components/SearchPatient";
import BackButton from "../../comp/components/BackButton";
// import { getTestListFromServices } from "../../lab/actions/labActions";
// import AutoComplete from "../../comp/components/AutoComplete";
import { useEffect } from "react";
// import NewRadiologyInvestigations from "../../doctor/NewRadiologyInvestigations";
import LabRequestForm from "../../doctor/lab-test/LabRequestForm";
import { getPatient } from "../actions/patientsActions";
import { saveVisits } from "../actions/visitsActions";

function NewLab() {
  const { patientId } = useParams();
  const [patient, setPatient] = useState({});
  // const [patientInfo, setPatientInfo] = useState({});

  const [saving, setSaving] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  // const labTest = useSelector((state) => state.lab.validLabTests);
  const [note, setNote] = useState("");
  const [selectedLabs, setSelectedLabs] = useState([]);
  const [receiptDisplayed, setReceiptDisplayed] = useState([]);
  const [amount, setAmount] = useState(0);

  const selectedPatient = useSelector(
    (state) => state.individualDoc.selectedPatient
  );
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getPatient(patientId));
  }, [patientId, dispatch]);

  // const onInputChange = (name, value) => setTest({ ...test, [name]: value });

  const saveTest = () => {
    setSaving(true);
    let visit = {};
    let labInvestigations = {
      summary: receiptDisplayed,
      detail: selectedLabs,
      patient_id: patientId ? patientId : patient.patientHospitalId,
      requested_by: user.username,
      facilityId: user.facilityId,
      status: "ordered",
    };
    visit.labInvestigations = labInvestigations;
    visit.type = "lab_request";

    dispatch(
      saveVisits(
        visit,
        () => {
          setSaving(false);
          _customNotify("Lab request saved!");
          history.push(`/me/doctors/patients/view/${patientId}/lab`);
        },
        () => {
          setSaving(false);
        }
      )
    );
    // if (test.patient_id === "" || test.test === "") {
    //   _warningNotify("Please complete the form");
    // } else {
    //   setSaving(true);
    //   // console.log('====================> from form', test)
    //   dispatch(
    //     saveLab(
    //       [test],
    //       () => {
    //         _customNotify("Lab request saved!");
    //         setSaving(false);
    //         history.push(`/me/doctors/patients/view/${test.patient_id}/lab`);
    //       },
    //       () => {
    //         _warningNotify("An error occured, please try again later");
    //         setSaving(false);
    //       }
    //     )
    //   );
    // }
  };

  const handleAdd = (labs, receipt, amt) => {
    setSelectedLabs(labs);
    setReceiptDisplayed(receipt);
    setAmount(amt);
  };

  const handleNoteChange = ({ target: { value } }) => {
    setNote(value);
  };

  return (
    <>
      <BackButton />
      <Card>
        <CardHeader tag="h6">Create New Lab Request</CardHeader>
        <CardBody>
          {/* {JSON.stringify(test)}   */}
          {patientId ? null : (
            <SearchPatient
              required
              onChange={(_patient) => setPatient(_patient)}
            />
          )}
          <div className={"my-1"}>
            <PatientInfo info={selectedPatient} />
          </div>

          {/* <NewRadiologyInvestigations 
           /> */}

          <LabRequestForm
            note={note}
            selectedLabs={selectedLabs}
            receiptDisplayed={receiptDisplayed}
            amount={amount}
            handleAdd={handleAdd}
            handleNoteChange={handleNoteChange}
          />

          <div className="d-flex flex-row justify-content-center mt-3">
            <button className="btn btn-outline-primary" onClick={saveTest}>
              {saving ? "Please wait..." : "Submit"}
            </button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

const PatientInfo = ({ info }) => {
  return (
    <Card className="p-2">
      <Row className="p-0 m-0">
        <Col>
          <span className="mr-1">Patient Name:</span>
          <span className="font-weight-bold">
            {info.firstname} {info.surname} ({info.patientHospitalId})
          </span>
        </Col>
        {/* {JSON.stringify(info)} */}
        <Col>
          <span className="mr-1">Gender:</span>
          <span className="font-weight-bold">{info.gender}</span>
        </Col>
        <Col>
          <span className="mr-1">Age:</span>
          <span className="font-weight-bold">{getAgeFromDOB(info.dob)}</span>
        </Col>
      </Row>
    </Card>
  );
};

export default NewLab;
