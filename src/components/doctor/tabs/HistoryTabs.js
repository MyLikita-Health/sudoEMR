import React from "react";
import { useSelector } from "react-redux";
import { checkEmpty } from "../../utils/helpers";
import TabItem from "./TabItem";

const HistoryTabs = ({ patientId }) => {
  const pComplain = useSelector((state) => state.doctor.presentingComplaints);
  const history = useSelector((state) => state.doctor.historyOfPComplaints);
  // const medicalHistory = useSelector(state => state.doctor.prevMedHistory)
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-auto mr-auto mb-4">
        <div className="multisteps-form__progress">
          <TabItem
            title="Presenting Complaints"
            done={pComplain.length}
            path={`/me/doctors/visits/new/${patientId}/history/presentingcomplaints`}
          />

          <TabItem
            title="History of Presenting Complaints"
            done={checkEmpty(history)}
            path={`/me/doctors/visits/new/${patientId}/history/previousmedicalhistory`}
          />

          {/* <button
                type="button"
                title="Medical History"
                onClick={() => setComponentToRender('PreviousMedicalHistoryForm')}
                className={`multisteps-form__progress-btn ${
                  checkEmpty(medicalHistory) ? '' : 'done'
                } ${
                  component === 'PreviousMedicalHistoryForm' ? 'js-active' : ''
                }`}>
                Medical History
              </button> */}
        </div>
      </div>
    </div>
  );
};

export default HistoryTabs;
