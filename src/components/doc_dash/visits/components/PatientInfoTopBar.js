import React from "react";
import { FaPagelines, FaSave } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import CustomButton from "../../../comp/components/Button";
import { getAgeFromDOB } from "../../../utils/helpers";
import ConsultationTopBar from "./ConsultationTopBar";

function PatientInfoTopBar({
  sheetIsValid = false,
  patientInfo = {},
  loading = false,
  submit = (f) => f,
}) {
  const history = useHistory();
  if (!sheetIsValid) return null;
  return (
    <div className="row">
      <div className="col-md-4">
        <ConsultationTopBar />
      </div>

      <div className="col-md-8 d-flex flex-direction-row justify-content-between align-items-center">
        <div className="text-center">
          <h6>
            Patient: {patientInfo.name} ({patientInfo.id}), {patientInfo.gender}
            , <tab />
            {getAgeFromDOB(patientInfo.dob, "YM")}
          </h6>
        </div>
        <div>
          <CustomButton
            color="success"
            // onClick={toggleModal}
            disabled={!sheetIsValid}
            className="mr-2"
            onClick={() =>
              history.push(`/me/doctor/past-records/${patientInfo.patientId}`)
            }
          >
            <FaPagelines className="mr-2" size={22} />
            <span className="font-weight-bold">View past records</span>
          </CustomButton>
          <CustomButton
            color="success"
            loading={loading}
            onClick={submit}
            disabled={!sheetIsValid}
            // onClick={() => history.push(`/me/doctor/visits/new/${patientId}`)}
          >
            <FaSave className="mr-2" size={22} />
            <span className="font-weight-bold">Submit now</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default PatientInfoTopBar;
