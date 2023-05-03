import React, { useEffect, useState } from "react";
import { Alert, Card } from "reactstrap";
import CustomButton from "../../comp/components/Button";
import CustomTable from "../../comp/components/CustomTable";
import Loading from "../../comp/components/Loading";
import {
  getConsultationRecord,
  postConsultationRecord,
} from "../../doc_dash/visits/components/helper";
import CollapsibleCard from "../../CollapsibleCard";

function NursingRequests() {
  const [loading, setLoading] = useState(false);
  const [pendingReq, setPendingReq] = useState([]);

  const getData = () => {
    getConsultationRecord("pending nursing requests", (data) => {
      if (data.results) {
        setPendingReq(data.results);
      }
    });
  };

  const onCompleted = ({ id }) => {
    postConsultationRecord(
      { consult_id: id, query_type: "complete nursing req" },
      () => {
        getData();
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const fields = [
    { title: "S/N", component: (item, i) => <span>{i + 1}</span> },
    { title: "Nursing Request", value: "nursing_request" },
    { title: "Dressing Request", value: "dressing_request" },
    {
      title: "Action",
      component: (item) => (
        <div className="text-center">
          <CustomButton onClick={() => onCompleted(item)} size="sm">
            Completed
          </CustomButton>
        </div>
      ),
    },
  ];

  return (
    <CollapsibleCard
      headerText="Pending Nursing Requests"
      defaultOpen
      style={{ height: "80vh", overflow: "scroll" }}
    >
      {/* {JSON.stringify(pendingReq)} */}
      {loading && <Loading />}

      <CustomTable fields={fields} size="sm" data={pendingReq} bordered />
      {pendingReq.length ? null : (
        <Alert color="primary" className="text-center">
          No pending nursing request found, check back later
        </Alert>
      )}
    </CollapsibleCard>
  );
}

export default NursingRequests;
