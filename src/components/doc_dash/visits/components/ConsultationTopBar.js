import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";
// import { ButtonGroup, Col, Row } from 'reactstrap'
import { useQuery } from "../../../../hooks";
// import BackButton from "../../../comp/components/BackButton";
import CustomButton from "../../../comp/components/Button";
import { APPOINTMENTS } from "../../routes";
// import { getAgeFromDOB } from '../../../utils/helpers'

function ConsultationTopBar() {
  const history = useHistory();
  // const location = useLocation();
  const query = useQuery();
  const section = query.get("section");
  const showBack = query.get("show_back");
  // const { patientId } = useParams()
  // const showBack = location.pathname.includes('/doctor/visits/new-summary')

  return (
    <div className="d-flex flex-direction-row justify-content-between p-0">
      {showBack && (
        <CustomButton color="success" onClick={() => history.goBack()}>
          <FaArrowLeft className="mr-2" />
          Back
        </CustomButton>
      )}
      {/* <ButtonGroup> */}
      <CustomButton
        size="sm"
        color={
          section === "assigned-patients" || !section ? "warning" : "primary"
        }
        onClick={() =>
          history.push(
            `/me/doctor/visits/new-summary/view?section=assigned-patients`
          )
        }
      >
        <span className="font-weight-bold">Assigned</span>
      </CustomButton>
      <CustomButton
        size="sm"
        color={section === "in-patients" ? "warning" : "primary"}
        className="mx-1"
        onClick={() =>
          history.push(`/me/doctor/visits/new-summary/view?section=in-patients`)
        }
      >
        <span className="font-weight-bold">In Patients</span>
      </CustomButton>
      <CustomButton
        size="sm"
        color={section === "out-patients" ? "warning" : "primary"}
        onClick={() =>
          history.push(
            `/me/doctor/visits/new-summary/view?section=out-patients`
          )
        }
      >
        <small className="font-weight-bold ">Out Patients</small>
      </CustomButton>
      <CustomButton
        size="xs"
        color={section === "appointments" ? "warning" : "primary"}
        onClick={() => history.push(APPOINTMENTS)}
      >
        <small className="font-weight-bold">Appointment</small>
      </CustomButton>
      {/* </ButtonGroup> */}
    </div>
  );
}

export default ConsultationTopBar;
