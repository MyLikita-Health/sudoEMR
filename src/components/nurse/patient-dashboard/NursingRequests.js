import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getConsultationRecord } from "../../doc_dash/visits/components/helper";
import CollapsibleCard from "../../CollapsibleCard.js";

function PatientNursingRequests({ isOpen, toggle }) {
  const { patientId } = useParams();
  const [nursingReq, setNursingReq] = useState([]);

  const getData = useCallback(() => {
    getConsultationRecord(
      "nursing_req_by_patient",
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

  return (
    <CollapsibleCard
      headerText="Nursing Requests"
      defaultOpen={isOpen}
      toggle={toggle}
      body="p-1"
      style={{ height: "40vh", overflow: "scroll" }}
    >
      {/* {patientId} */}
      {nursingReq.map((n, i) => (
        <div className="card" key={i}>
          <p>
            <b>Nursing Request:</b> {n.nursing_request}
          </p>
          <p>
            <b>Dressing Request:</b> {n.dressing_request}
          </p>
          <span>- {moment(n.created_at).format("DD/MM/YYYY HH:mm")}</span>
        </div>
      ))}
    </CollapsibleCard>
  );
}

export default PatientNursingRequests;
