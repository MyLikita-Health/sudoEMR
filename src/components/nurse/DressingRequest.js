import moment from "moment";
import React, { useEffect, useState, useCallback } from "react";

import { Alert, Card, CardBody, CardHeader } from "reactstrap";
import { useQuery } from "../../hooks";
import BackButton from "../comp/components/BackButton";
import CustomTable from "../comp/components/CustomTable";
import Loading from "../comp/components/Loading";
import { getAllocationInfo, getNursingDressingRequestFormPatient } from "./api";

const fields = [
  {
    title: "Date",
    custom: true,
    component: (item) => `${moment(item.createdAt).format("DD-MM-YYYY hh:mm")}`,
  },
  {
    title: "Request Details",
    custom: true,
    component: (item) => <RequestItem item={item} />,
  },
];

function NursingDressingRequests() {
  const query = useQuery();
  const allocation_id = query.get("allocation_id");

  const [list, setList] = useState([]);
  const [allocationInfo, setAllocationInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const _getAllocationInfo = useCallback(
    () => {
      setLoading(true);
      getAllocationInfo(
        allocation_id,
        (data) => {
          setLoading(false);
          if (data && data.results && data.results.length) {
            let currAllo = data.results[0];
            setAllocationInfo(currAllo);
            getNursingDressingRequestFormPatient(
              currAllo.patient_id,
              (data) => {
                // console.log(data)
                setList(data);
              },
              (err) => {
                console.log(err);
              }
            );
          }
        },
        (err) => {
          setLoading(false);
          console.error(err);
        }
      );
    },
    [allocation_id]
  );

  useEffect(
    () => {
      _getAllocationInfo();
    },
    [_getAllocationInfo]
  );

  return (
    <>
      <BackButton />
      <Card>
        <CardHeader className="h5">Nursing/Dressing Requests</CardHeader>
        <CardBody className="p-0">
          <div className="m-3">
            <h6>
              Patient: {allocationInfo.patient_name} (
              {allocationInfo.patient_id})
            </h6>
            <h6>
              Room: {allocationInfo.name} ({allocationInfo.class_type})
            </h6>
            <h6>
              Date Admitted:{" "}
              {moment(allocationInfo.allocated).format("DD-MM-YYYY hh:mm a")}
            </h6>
            {/* Up-Next: {next_allo_id} sort_index:{allocationInfo.sort_index} */}
          </div>

          {loading ? <Loading /> : null}
          <CustomTable hover size="sm" fields={fields} data={list} />
          {list.length ? null : (
            <Alert className="mx-4 text-center" color="primary">
              No request found at this time, checkback later.
            </Alert>
          )}
          {/* {list.map((item, ix) => (
          <div key={ix}>
            {item.dressingRequest ? <RequestItem item={item} /> : null}
          </div>
        ))} */}
        </CardBody>
      </Card>
    </>
  );
}

export default NursingDressingRequests;

function RequestItem({ item }) {
  if (item.dressingRequest) {
    return (
      <div>
        <p>
          <strong> Dressing Request:</strong>{" "}
          {item.dressingRequest.dressingInfo}
        </p>
        <p>
          <strong>Nursing Request:</strong> {item.dressingRequest.nursingReq}
        </p>
      </div>
    );
  } else return "-";
}
