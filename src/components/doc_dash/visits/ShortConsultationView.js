import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams, Prompt } from "react-router";

import { saveBreifDiagnosis } from "./components/helper";
import { _fetchApi } from "../../../redux/actions/api";
import { apiURL } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as UUIDV4 } from "uuid";
import { checkEmpty, today, _customNotify } from "../../utils/helpers";
import { Col, Row } from "reactstrap";
import { useQuery } from "../../../hooks";
import {
  assignPatient,
  // updateAssignedPatient,
} from "../../record/actions/patientsActions";
import {
  getAssignedToDoc,
  getWaitingList,
} from "../../record/actions/bed-allocation";
import { getInPatientsQuery } from "../../../redux/actions/records";
// import CustomModal from '../../comp/components/CustomModal'
// import Loading from '../../comp/components/Loading'
import { checkStrEmpty } from "../../utils/util";
import ConsultationTopBar from "./components/ConsultationTopBar";
import PatientsAssignedToDoc from "../patients/PatientsAssignedToDoc";
import InPatientList from "./components/InPatientList";
import PatientList from "./components/PatientList";
import ShortConsultationViewBody from "./ShortConsultationViewBody";
// import { getChargesLaps } from "../../account/helpers";
import moment from "moment";

function ShortConsultationView() {
  const dispatch = useDispatch();
  const query = useQuery();
  const patientType = query.get("patientType");
  const consultationType = query.get("consultation_type");
  const assignmentId = query.get("assignment_id");
  const allocation_id = query.get("allocation_id");
  const section = query.get("section");
  const facilityId = useSelector((state) => state.auth.user.facilityId);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { patientId } = useParams();
  const [patientInfo, setPatientInfo] = useState({});
  const [admissionMode, setAdmissionMode] = useState(false);

  const sheetIsValid = patientId && patientId !== "view";
  const [preview, setPreview] = useState(false);
  const [getTime, setGetTime] = useState([]);
  const [getLastConsult, setgetLastConsult] = useState([]);
  // const sheetIsValid = patientInfo.id;
  let timeLast = moment().diff(
    getLastConsult && getLastConsult.created_at,
    "days"
  );
  // const api_new = apiURL()
  const tabs = ["New Consultation", "Follow-up"];
  const [consultStatus, setconsultStatus] = useState(tabs[0]);
  const emptyPrescription = {
    _id: UUIDV4(),
    route: "",
    name: "",
    dosage: "",
    duration: "1",
    period: "days",
    frequency: "",
    price: "",
    treatmentPlan: "",
    id:""
  };

  //     additionalInfo: "",
  // };

  // useEffect(
  //   () => {
  //     if (!location.pathname.includes("/view")) {
  //       _fetchApi(`${apiURL()}/lab/patient/info/${patientId}`, (data) => {
  //         if (data) {
  //           console.log(data);
  //           setPatientInfo(data.results[0]);
  //         }
  //       });

  //       getInPatientsQuery("in_patient_by_id", patientId, (data) => {
  //         if (data.results.length) {
  //           setAdmissionMode(true);
  //         }
  //       });
  //     }
  //   },
  //   [patientId]
  // );

  // const [data, setData] = useState([])

  // const [modal, setModal] = useState(false);
  // const [focusAfterClose, setFocusAfterClose] = useState(true);
  // const handleSelectChange = ({ target: { value } }) => {
  //   setFocusAfterClose(JSON.parse(value));
  // };
  // const toggleModal = () => setModal(!modal);

  useEffect(() => {
    setPreview(true);
    // getChargesLaps(facilityId, patientId, "select_time", (data) =>
    //   setGetTime(data[0])
    // );
    // getChargesLaps(facilityId, patientId, "last_consultation", (data) =>
    //   setgetLastConsult(data[0])
    // );
    if (!location.pathname.includes("/view")) {
      _fetchApi(`${apiURL()}/lab/patient/info/${patientId}`, (data) => {
        if (data) {
          console.log(data);
          setPatientInfo(data.results[0]);
        }
      });

      getInPatientsQuery("in_patient_by_id", patientId, (data) => {
        if (data.results.length) {
          setAdmissionMode(true);
          setConsultation((p) => ({
            ...p,
            managementPlan: {
              ...p.managementPlan,
              patientStatus: "admit",
              admissionStatus: "admitted",
            },
          }));
        } else {
          setConsultation((p) => ({
            ...p,
            managementPlan: {
              ...p.managementPlan,
              patientStatus: "out-patient",
            },
          }));
        }
      });
    }
  }, [patientId]);

  const emptyConsultation = {
    presentingComplaint: "",
    prescriptionRequestList: [emptyPrescription],
    labInvestigations: {
      selectedLabs: [],
      receiptDisplayed: [],
      amount: 0,
      note: "",
    },
    nursingRequests: {},
    managementPlan: {},
  };

  const [consultation, setConsultation] = useState(emptyConsultation);
  // let now = moment(); //now

  // const getDiff = () => {
  //   let before = moment(getLastConsult.created_at);
  //   return now.diff(before, "days"); // in days
  // };
  const handleConsultationChange = (key, value) =>
    setConsultation((p) => ({
      ...p,
      [key]: value,
    }));

  const submit = () => {
    setLoading(true);
    // toggleModal();
    // preventNavigation = false
    
    dispatch(
      saveBreifDiagnosis(consultation, patientInfo, consultStatus,patientType, () => {
        _customNotify("Consultation saved!");
        setPatientInfo({});
        if (consultationType === "assignment") {
          dispatch(
            assignPatient({
              id: patientInfo.id,
              query_type: "end",
            })
          );
          // dispatch(updateAssignedPatient(assignmentId, 'completed'))
          dispatch(getWaitingList());
          dispatch(getAssignedToDoc());
          setConsultation(emptyConsultation);
        }
        history.push(
          `/me/doctor/visit-preview/${patientId}?page_type=preview&visit_id=&patient_id=${patientId}&allocation_id=${allocation_id}&page_type=preview&section=disabled`
        );
        setLoading(false);
      })
    );
  };

  const pComplaintsEmpty = checkStrEmpty(consultation.presentingComplaint);
  const nursingReqEmpty = checkEmpty(consultation.nursingRequests);
  const treatmentPlanEmpty = checkStrEmpty(consultation.treatmentPlan);
  const formIsNotEmpty =
    !pComplaintsEmpty || !nursingReqEmpty || !treatmentPlanEmpty;

  let preventNavigation = formIsNotEmpty;

  const sectionIsDisabled = section === "disabled";

  // if (pageType === 'preview') {
  //   return <VisitPreview />
  // }

  // const printReport = () => {
  //   window.frames[
  //     "print_frame"
  //   ].document.body.innerHTML = document.getElementById(
  //     "doctor-reporting-fees"
  //   ).innerHTML;
  //   window.frames["print_frame"].window.focus();
  //   window.frames["print_frame"].window.print();
  // };

  // const printPharmReport = () => {
  //   window.frames[
  //     "print_frames"
  //   ].document.body.innerHTML = document.getElementById(
  //     "pharm-prescription"
  //   ).innerHTML;
  //   window.frames["print_frame"].window.focus();
  //   window.frames["print_frame"].window.print();
  // };

  return (
    <div>
      {/* {JSON.stringify({
        getTime,
        getLastConsult,
        dat: timeLast,
      })} */}
      {/* <Modal isOpen={modal} returnFocusAfterClose={focusAfterClose}>
        <ModalBody>
          <p>All Done</p>

          <divthe 
            id="doctor-reporting-fees"
            style={{ display: !modal ? null : "none" }}
          >
            <LabRequestTable formRecords={consultation.labInvestigations} />
          </divthe>
          <div
            id="pharm-prescription"
            style={{ display: !modal ? null : "none" }}
          >
            <PrintPrescription
              data={consultation.prescriptionRequestList}
              // patientInfo={patientInfo}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={printReport} color="primary">
            <FaPrint />
            Print Lab Request
          </Button>
          <Button onClick={printPharmReport} color="warning">
            <FaPrint />
            Print Drug Prescription
          </Button>
          <Button
            color="danger"
            onClick={() => {
              toggleModal();
              setConsultation(emptyConsultation);
            }}
          >
            Close
          </Button>
        </ModalFooter>
        <iframe
          title="doctor-reporting-fees"
          name="print_frame"
          width="0"
          height="0"
          src="about:blank"
          // style={styles}
        />
        <iframe
          title="pharm-prescription"
          name="print_frames"
          width="0"
          height="0"
          src="about:blank"
          // style={styles}
        />
      </Modal> */}
      <Row className="m-0 p-0">
        {sectionIsDisabled ? null : (
          <Col md={3} className="mx-0 px-0">
            <ConsultationTopBar />

            {section === "assigned-patients" ? (
              <PatientsAssignedToDoc />
            ) : section === "in-patients" ? (
              <InPatientList />
            ) : section === "out-patients" ? (
              <PatientList />
            ) : (
              <PatientsAssignedToDoc />
            )}
          </Col>
        )}
        {/* {JSON.stringify(patientType)} */}
        <Col md={sectionIsDisabled ? 12 : 9} className="mx-0 px-0">
          <ShortConsultationViewBody
            sectionIsDisabled={sectionIsDisabled}
            sheetIsValid={sheetIsValid}
            consultation={consultation}
            handleConsultationChange={handleConsultationChange}
            emptyPrescription={emptyPrescription}
            admissionMode={admissionMode}
            loading={loading}
            patientInfo={patientInfo}
            submit={submit}
            preview={preview}
            tabs={tabs}
            setconsultStatus={setconsultStatus}
            consultStatus={consultStatus}
            time_laps={getTime.time_laps}
            timeLast={timeLast}
          />
        </Col>
      </Row>
      {/* <Prompt
        when={preventNavigation}
        message="Are you sure you want leave the page?"
      /> */}
    </div>
  );
}

export default ShortConsultationView;
