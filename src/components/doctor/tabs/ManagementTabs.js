import React from "react";
import { useSelector } from "react-redux";
import { checkEmpty } from "../../utils/helpers";
import TabItem from "./TabItem";

const ManagementTabs = ({ patientId }) => {
  const labInvestigations = useSelector(
    (state) => state.doctor.labInvestigations
  );
  const managementPlan = useSelector((state) => state.doctor.managementPlan);
  const prescriptionRequest = useSelector(
    (state) => state.doctor.prescriptionRequest
  );
//   const observation_request = useSelector(
//     (state) => state.doctor.observation_request
//   );
  const dressingRequest = useSelector((state) => state.doctor.dressingRequest);
  const formView = useSelector((state) => state.doctor.formView);

  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-auto mr-auto mb-4">
        <div className="multisteps-form__progress">
          <TabItem
            title="Management"
            path={`/me/doctor/visits/new/${patientId}/management/plan`}
            done={checkEmpty(managementPlan)}
          />
          <TabItem
            title="Prescriptions"
            path={`/me/doctor/visits/new/${patientId}/management/prescription`}
            done={prescriptionRequest.length}
          />
          <TabItem
            title="Investigations"
            path={`/me/doctor/visits/new/${patientId}/management/radiologyinvestigations`}
            done={labInvestigations.length}
          />
          <TabItem
            title="Dressing"
            path={`/me/doctor/visits/new/${patientId}/management/dressing`}
            done={checkEmpty(dressingRequest)}
          />
          <TabItem
            title="Complete   "
            path={`/me/doctor/visits/new/${patientId}/management/view`}
            done={checkEmpty(formView)}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagementTabs;
