import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { FaUserPlus } from "react-icons/fa";
import { connect, useSelector } from "react-redux";
import { getPatientList } from "../actions/patientsActions";
import { SET_PATIENT_FORM_MODE } from "../types";
import { Row, Col } from "reactstrap";
// import { FallbackComp } from '../../comp/components/FallbackSkeleton'

import PatientTable from "./PatientTable";
import PatientsAssignedToDoc from "./PatientsAssignedToDoc";

function Patients({ getPatients, setForm }) {
  const history = useHistory();
  // const [divided, toggleDivide] = useState(false);

  const userFacility = useSelector((state) => state.auth.user.facilityId);

  useEffect(() => {
    getPatients();
  }, []);

  const gotoNewPatient = () => {
    history.push("/me/doctors/patients/new");
    setForm();
  };

  const divided = userFacility !== "doctors";

  return (
    <div>
      <div className="d-flex my-1">
        <button
          className="btn btn-outline-dark ml-auto"
          onClick={gotoNewPatient}
          disabled
        >
          <FaUserPlus className="mr-1" size={20} /> Add new patient
        </button>
      </div>

      <Row>
        {divided ? (
          <Col>
            <PatientsAssignedToDoc />
          </Col>
        ) : null}
        <Col md={divided ? 9 : 12}>
          <PatientTable />
        </Col>
      </Row>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getPatients: () => dispatch(getPatientList()),
    setForm: () =>
      dispatch({ type: SET_PATIENT_FORM_MODE, payload: "EDITABLE" }),
  };
}

export default connect(null, mapDispatchToProps)(Patients);
