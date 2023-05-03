import React from "react";
import { useSelector } from "react-redux";
import { checkEmpty } from "../../utils/helpers";
import TabItem from "./TabItem";

const ExaminationTabs = ({ patientId }) => {
  const systemExam = useSelector((state) => state.doctor.systemExam);
  const vitalSigns = useSelector((state) => state.doctor.vitalSigns);
  const athropometry = useSelector((state) => state.doctor.athropometry);
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-auto mr-auto mb-4">
        <div className="multisteps-form__progress">
          <TabItem
            title="Vital Signs"
            done={checkEmpty(vitalSigns)}
            path={`/me/doctor/visits/new/${patientId}/examination/vitalsigns`}
          />
          <TabItem
            title="System Examination"
            done={checkEmpty(systemExam)}
            path={`/me/doctor/visits/new/${patientId}/examination/systemexam`}
          />
          <TabItem
            title="Athropometry"
            done={checkEmpty(athropometry)}
            path={`/me/doctor/visits/new/${patientId}/examination/athropometry`}
          />
        </div>
      </div>
    </div>
  );
};

export default ExaminationTabs;
