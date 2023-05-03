import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { getPatient, getPatientList } from "../actions/patientsActions";
// import { useQuery } from '../../../hooks'
import { Row, Col } from "reactstrap";
import VitalSignsHistory from "./components/VitalSignsHistory";
import MedicationHistory from "./components/MedicationHistory";
import MedicationReport from "./components/MedicationReport";
import LabHistory from "./components/LabHistory";
// import CollapsibleCard from '../../CollapsibleCard'
// import OperationNoteForm from '../../theater/operation-notes/OperationNoteForm'
import PatientInfoTopBar from "./components/PatientInfoTopBar";
import { _fetchApi, _fetchApi2, _postApi } from "../../../redux/actions/api";
import { apiURL } from "../../../redux/actions";
import { _customNotify, _warningNotify } from "../../utils/helpers";
import moment from "moment";
import { v4 as UUIDV4 } from "uuid";
import { useSelector } from "react-redux";
import { savePrescriptionRequest } from "./components/helper";
import { getInPatientsQuery } from "../../../redux/actions/records";
import CollapsibleCard from "../../CollapsibleCard.js";
// import AppointmentsView from './components/AppointmentsView'
// import VisitPreview from './components/VisitPreview'
// import CustomTable from '../../comp/components/CustomTable'
// import CustomButton from '../../comp/components/Button'
// import { CardHeader } from "reactstrap";

function OperationNoteSheet() {
  const emptyPrescription = {
    _id: UUIDV4(),
    route: "",
    drug: "",
    dosage: "",
    duration: "1",
    period: "days",
    frequency: "",
    price: "",
    treatmentPlan: "",
    // mode: 'edit',
  };

  const today = moment().format("YYYY-MM-DD");
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const { patientId } = match.params;
  const [patientInfo, setPatientInfo] = useState({});
  const [admissionMode, setAdmissionMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [opNote, setOpNote] = useState({
    _id: UUIDV4(),
    date: today,
    patientId,
    name: patientInfo.name,
    prescriptionRequestList: [emptyPrescription],
    anesthetic: "GA",
  });

  const facilityId = useSelector((state) => state.auth.user.facilityId);

  // const patientDetails = useSelector(
  //   (state) => state.individualDoc.selectedPatient,
  // )
  // const isMobile = useSelector((state) => state.app.isMobile)
  // const videoIsOpen = (state) => state.individualDoc.videoIsOpen;
  // const [showVid, toggleVid] = useState(false);

  // const _toggleVideoView = () => dispatch(toggleVideoView())

  useEffect(() => {
    // console.log('heereeee', patientId)
    dispatch(getPatient(patientId));
    dispatch(getPatientList());
  }, [dispatch, patientId]);
  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const query = useQuery()
  // const section = query.get('section')
  // const history = useHistory()

  useEffect(() => {
    // setPreview(true)
    // if (!location.pathname.includes('/view')) {
    _fetchApi(`${apiURL()}/lab/patient/info/${patientId}`, (data) => {
      if (data) {
        console.log(data);
        setPatientInfo(data.results[0]);
      }
    });

    // }
  }, [patientId]);

  useEffect(() => {
    getInPatientsQuery("in_patient_by_id", patientId, (data) => {
      if (data.results.length) {
        setAdmissionMode(true);
        setOpNote((p) => ({
          ...p,
          managementPlan: {
            ...p.managementPlan,
            patientStatus: "admit",
            admissionStatus: "admitted",
          },
          decision: "admit",
        }));
      } else {
        setOpNote((p) => ({
          ...p,
          managementPlan: {
            ...p.managementPlan,
            patientStatus: "out-patient",
          },
          decision: "out-patient",
        }));
      }
    });
  }, [patientId]);

  const handleChange = ({ target: { name, value } }) => {
    setOpNote((p) => ({ ...p, [name]: value }));
  };

  const handleCheck = (name, checked, value) => {
    console.log(name, checked, value);
    let rChecked =
      opNote[name] && opNote[name].length && opNote[name].includes(value);
    if (rChecked) {
      setOpNote((p) => ({ ...p, [name]: p[name].filter((i) => i !== value) }));
    } else {
      if (opNote[name] && opNote[name].length) {
        setOpNote((p) => ({ ...p, [name]: [...p[name], value] }));
      } else {
        setOpNote((p) => ({ ...p, [name]: [value] }));
      }
    }
  };

  const handleAdd = (name, values) => {
    if (values.length) {
      let testData = opNote[name];
      let newData = [...testData];
      values.forEach((d) => {
        if (!testData.includes(d)) {
          return newData.push(d);
        }
      });

      setOpNote((p) => ({ ...p, [name]: newData }));
    }
  };

  const handleRemove = (name, value) => {
    let testData = opNote[name];
    let newData = testData.filter((d) => d !== value);
    setOpNote((p) => ({ ...p, [name]: newData }));
  };

  const handleSubmit = () => {
    setLoading(true);
    if (!opNote.patientId) {
      _warningNotify("No patient selected!");
    } else {
      _postApi(
        `${apiURL()}/patientrecords/operation`,
        opNote,
        (res) => {
          let validPrescription = [];
          opNote.prescriptionRequestList.forEach((pr) => {
            if (pr.drug) {
              validPrescription.push({
                ...pr,
                decision: opNote.decision,
              });
            }
          });

          // console.log(validPrescription, 'validPrescription')
          _fetchApi2(
            `${apiURL()}/frequency-setup/get?query_type=list&facilityId=${facilityId}`,
            (data) => {
              if (data && data.results) {
                savePrescriptionRequest(
                  validPrescription,
                  patientInfo,
                  opNote,
                  () => {
                    // if (visit.managementPlan.patientStatus === 'admit') {
                    //   createDrugSchedule(
                    //     patient.id,
                    //     null,
                    //     // allocation_id,
                    //     () => {
                    //       // _customNotify("Drug Schedule Saved!");
                    console.log("successfully saved drug schedule");
                    //     },
                    //     () => {
                    //       // _warningNotify("Error saving drug schedule");
                    //       console.log('Error saving drug schedule')
                    //     },
                    //   )
                    // }
                  },
                  data.results
                );
              }
            }
          );
          _customNotify("Data Saved");
          setLoading(false);
          history.push(
            `/me/doctor/visit-preview/${patientId}?page_type=preview&visit_id=&patient_id=${patientId}&allocation_id=&page_type=preview&section=disabled`
          );
        },
        (err) => {
          _warningNotify("There was an error when submitting note");
          setLoading(false);
        }
      );
    }
  };

  const handleAnestheticAgenChange = (v) =>
    setOpNote((p) => ({ ...p, anesthetic: v }));

  const handlePrescriptionChange = (key, value) =>
    setOpNote((p) => ({ ...p, [key]: value }));

  return (
    <div>
      <PatientInfoTopBar
        patientInfo={patientInfo}
        sheetIsValid={true}
        loading={loading}
        submit={handleSubmit}
      />
      <Row className="m-0">
        <Col className="p-0">
          <CollapsibleCard
            defaultOpen
            headerText="New Operation Note"
            style={{ height: "80vh", overflow: "scroll" }}
          >
            {/* {JSON.stringify(opNote)} */}
            {/* <OperationNoteForm
              formdata={opNote}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              handleCheck={handleCheck}
              handleInputChange={handleChange}
              handleAnestheticAgenChange={handleAnestheticAgenChange}
              emptyPrescription={emptyPrescription}
              handlePrescriptionChange={handlePrescriptionChange}
            /> */}
          </CollapsibleCard>
        </Col>
        <Col className="pr-1" md={4}>
          <VitalSignsHistory />
          <MedicationHistory height="30vh" newBtn={false} />
          <MedicationReport />
          <LabHistory type="doctor" />
        </Col>
      </Row>
    </div>
  );
}

export default OperationNoteSheet;
