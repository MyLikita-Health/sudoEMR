import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import CollapsibleCard from "../../../CollapsibleCard.js";
import { getVitalHistory } from "./helper";
import moment from "moment";
import { Button } from "reactstrap";
import CustomModal from "../../../comp/components/CustomModal";
import VitalSignForm from "../../../nurse/NewVitalSigns";
import { useQuery } from "../../../../hooks";

function VitalSignsHistory({ height = "23vh", isOpen, toggle }) {
  const { _patientId } = useParams();
  const query = useQuery();
  const patientId = query.get("patient_id");
  // const allocation_id = query.get("allocation_id");
  const location = useLocation();
  let doctorCond = location.pathname.includes("/me/doctor/visits");

  const [vitalHistory, setVitalHistory] = useState([]);
  const [modal, setModal] = useState(false);
  const toggleVital = () => setModal((p) => !p);

  useEffect(
    () =>
      getVitalHistory(
        patientId ? patientId : _patientId,
        "list by patient",
        (data) => {
          setVitalHistory(data);
        }
      ),
    [patientId ? patientId : _patientId]
  );

  return (
    <CollapsibleCard
      headerText="Vital Sign Chart"
      defaultOpen={doctorCond ? true : isOpen}
      body="p-1"
      style={{ height, overflow: "scroll" }}
      toggle={toggle}
    >
      <div className="d-flex flex-direction-row justify-content-end">
        <Button size="sm" color="primary" className="m-1" onClick={toggleVital}>
          Create New
        </Button>
      </div>
      {vitalHistory.map((v, i) => (
        <div className="mb-1" style={{ borderBottom: `1px solid #333` }}>
          <div className="d-flex flex-direction-row justify-content-between font-weight-bold">
            Date:
            <span className="font-weight-normal">
              {moment(v.created_at).format("DD/MM/YYYY HH:mm")}
            </span>
          </div>
          <span className="font-weight-bold mr-2">
            Temp:
            <span className="font-weight-normal ml-1">
              {v.body_temp} <sup>o</sup>C,
            </span>
          </span>
          <span className="font-weight-bold mr-2">
            PR:
            <span className="font-weight-normal ml-1">
              {v.pulse_rate} beats/min,
            </span>
          </span>
          <span className="font-weight-bold mr-2">
            BP:
            <span className="font-weight-normal ml-1">
              {v.blood_pressure} mmHg,
            </span>
          </span>
          <span className="font-weight-bold mr-2">
            RR:
            <span className="font-weight-normal ml-1">
              {v.respiratory_rate} beats/min,
            </span>
          </span>
          <span className="font-weight-bold mr-2">
            FBS:
            <span className="font-weight-normal ml-1">
              {v.fasting_blood_sugar},
            </span>
          </span>
          <span className="font-weight-bold mr-2">
            RBS:
            <span className="font-weight-normal ml-1">
              {v.random_blood_sugar}
            </span>
          </span>
          <span className="font-weight-bold mr-2">
            SPO2:
            <span className="font-weight-normal ml-1">{v.spo2}</span>
          </span>
        </div>
      ))}
      <CustomModal isOpen={modal} toggle={toggleVital}>
        <VitalSignForm toggleVital={toggleVital} />
      </CustomModal>
    </CollapsibleCard>
  );
}

export default VitalSignsHistory;
