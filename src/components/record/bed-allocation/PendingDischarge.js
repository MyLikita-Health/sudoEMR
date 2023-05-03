// import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Card, CardBody, CardHeader } from "reactstrap";
import { getPatientDischargedByDoctor } from "../../../redux/actions/records";
import CustomTable from "../../comp/components/CustomTable";
import Loading from "../../comp/components/Loading";

function PendingDischarge({ history, location }) {
  const fields = [
    // {
    //   title: "Date Admitted",
    //   custom: true,
    //   component: (item) =>
    //     moment.utc(item.allocated).format("DD/MM/YYYY hh:mm"),
    // },
    // { title: "Patient ID", value: "patient_id", className: "text-center" },
    { title: "Patient", custom: true, component: (i) => (
      <div>
        <span>{i.patient_name} ({i.patient_id})</span>
      </div>
    ) },
    { title: "Room", value: "name" },
    {
      title: "Action",
      custom: true,
      component: (item) => (
        <Button
          size="sm"
          color="info"
          onClick={() => {
            // history.push(
            //   `${NURSING_ROUTE_ROOT}/vital-signs/nursing-dressing-requests?patient_id=${
            //     item.patient_id
            //   }&allocation_id=${item.allocation_id}`
            // );
          }}
        >
          Process
        </Button>
      ),
      className: "text-center",
    },
  ];

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const list = useSelector((state) => state.records.patientsDischargedByDoctor);

  useEffect(
    () => {
      setLoading(true);
      dispatch(getPatientDischargedByDoctor(() => setLoading(false)));
    },
    [dispatch]
  );

  return (
    <Card>
      <CardHeader className='h6'>Pending Discharge</CardHeader>
      <CardBody className="px-0">
        {loading && <Loading />}
        <CustomTable size="sm" hover fields={fields} data={list} />
        {!list.length && (
            <Alert className="text-center mx-2" color="primary">
              No data found, check back later
            </Alert>
          )}
      </CardBody>
    </Card>
  );
}

export default PendingDischarge;
