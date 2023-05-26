// import moment from 'moment'
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Alert } from "reactstrap";
import CollapsibleCard from "../../../CollapsibleCard.js";
import { getPrescriptionForPatient } from "../../../nurse/drug-schedule";

export const groupList = (list) => {
  if (list && list.length) {
    let final = {};
    list.forEach((item) => {
      let date_served = moment(item.time_stamp).format("YYYY-MM-DD");
      if (Object.keys(final).includes(date_served)) {
        final[date_served] = [...final[date_served], item];
      } else {
        final[date_served] = [item];
      }
    });

    return final;
  }
};

export const groupListByKey = (list, key) => {
  if (list && list.length) {
    let final = {};
    list.forEach((item) => {
      if (Object.keys(final).includes(item[key])) {
        final[item[key]] = [...final[item[key]], item];
      } else {
        final[item[key]] = [item];
      }
    });

    return final;
  }
};

function MedicationReport({ isOpen, toggle, height = "40vh", newBtn = true }) {
  const { patientId } = useParams();
  const [medication, setMedications] = useState({});
  // const [, setModal] = useState(false);
  // const toggelDrugs = () => setModal((p) => !p);
  // const [mode] = useState("view");
  const location = useLocation();
  let doctorCond = location.pathname.includes("/me/doctors/visits");

  // const fields = [
  //   {
  //     title: "Date",
  //     value: "created_at",
  //     custom: true,
  //     component: (item) => (
  //       <span>{moment(item.created_at).format("DD/MM/YYYY")}</span>
  //     ),
  //   },
  //   { title: "Medication", value: "medication" },
  // ];

  const getMedicationReport = useCallback(() => {
    getPrescriptionForPatient(patientId, "med-report").then((resp) => {
      if (resp && resp.length) {
        let finalObj = groupList(resp, "date_served");
        setMedications(finalObj);
      }
      //   console.error({ resp })
    });
  }, [patientId]);

  useEffect(() => getMedicationReport(), [getMedicationReport]);

  return (
    <>
      <CollapsibleCard
        headerText="Medication Report"
        defaultOpen={doctorCond ? true : isOpen}
        toggle={toggle}
        body="p-1"
        style={{ height, overflow: "scroll" }}
      >
        {/* <CustomTable size="sm" fields={fields} data={medication} /> */}
        {/* {JSON.stringify(medication)} */}
        {Object.keys(medication).map((day) => (
          <div className="border border-secondary mb-1 rounded p-1">
            <span className="font-weight-bold">{day}</span>
            {medication[day].map((item, i) => (
              <span key={i} className="d-block">
                - {item.route} {item.drug} {item.dosage} {item.status} @{" "}
                {moment.utc(item.time_stamp).format("ha")} by {item.nurse_name}{" "}
                {item.reason && item.reason !== "" ? `(${item.reason})` : ""}
              </span>
            ))}
          </div>
        ))}

        {!medication && !medication.length ? <Empty /> : null}
      </CollapsibleCard>
    </>
  );
}

const Empty = () => (
  <Alert color="primary" className="text-center">
    No active medication found.
  </Alert>
);

export default MedicationReport;
