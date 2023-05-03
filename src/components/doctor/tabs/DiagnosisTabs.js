import React from "react";
import { useSelector } from "react-redux";
import { checkEmpty } from "../../utils/helpers";
import TabItem from "./TabItem";

const DiagnosisTabs = ({ patientId }) => {
  const problems = useSelector((state) => state.doctor.problems);
  const provisionalDiagnosis = useSelector(
    (state) => state.doctor.provisionalDiagnosis
  );
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-auto mr-auto mb-4">
        <div className="multisteps-form__progress">
          <TabItem
            title="Problems"
            path={`/me/doctor/visits/new/${patientId}/diagnosis/problems`}
            done={checkEmpty(problems)}
          />
          <TabItem
            title="Provisional Diagnosis"
            path={`/me/doctor/visits/new/${patientId}/diagnosis/provisionaldiagnosis`}
            done={checkEmpty(provisionalDiagnosis)}
          />
        </div>
      </div>
    </div>
  );
};

export default DiagnosisTabs;
