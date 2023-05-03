import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router";
import { apiURL } from "../../../redux/actions";
import { _postApi } from "../../../redux/actions/api";
import CustomButton from "../../comp/components/Button";
import { getConsultationRecord } from "../../doc_dash/visits/components/helper";
import CollapsibleCard from "../../CollapsibleCard.js";
import { _customNotify } from "../../utils/helpers";

function TreatmentPlan({ isOpen, toggle }) {
  const { patientId } = useParams();
  const [nursingReq, setNursingReq] = useState([]);

  const getData = useCallback(() => {
    getConsultationRecord(
      "treatment_plan_by_patient",
      (data) => {
        if (data.results) {
          setNursingReq(data.results);
        }
      },
      patientId
    );
  }, [patientId]);

  useEffect(() => {
    getData();
  }, [getData]);

  const treatmentDone = (id) => {
    _postApi(
      `${apiURL()}/consultation/new`,
      {
        query_type: "treatment-done",
        consult_id: id,
      },
      () => {
        getData();
        _customNotify("Changes Saved");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <CollapsibleCard
      headerText="Treatment Plan"
      defaultOpen={isOpen}
      body="p-1"
      style={{ height: "40vh", overflow: "scroll" }}
      toggle={toggle}
    >
      {/* {JSON.stringify(nursingReq)} */}
      {nursingReq.map((n, i) => (
        <div className="card p-1 pb-0 my-1" key={i}>
          <div>
            <p>{n.treatmentPlan}</p>
          </div>
          <div className="d-flex flex-direction-row justify-content-between">
            <span className="font-weight-bold">
              {n.doctor_name} -{" "}
              {moment(n.created_at).format("DD/MM/YYYY HH:mm")}
            </span>
            <CustomButton
              size="sm"
              color="success"
              onClick={() => treatmentDone(n.id)}
            >
              <FaCheck /> Done
            </CustomButton>
          </div>
        </div>
      ))}
    </CollapsibleCard>
  );
}

export default TreatmentPlan;
