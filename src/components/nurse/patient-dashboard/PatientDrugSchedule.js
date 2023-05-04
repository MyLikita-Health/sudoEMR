import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Table } from "reactstrap";
import { apiURL } from "../../../redux/actions";
import { _fetchApi2, _updateApi } from "../../../redux/actions/api";
import CollapsibleCard from "../../CollapsibleCard.js";
import { primaryColor } from "../../utils/constants";
import { _customNotify } from "../../utils/helpers";
import { ActionButton, columnStyle } from "../drug-schedule/DrugScheduleItem";
import { formatScheduleByTime } from "../drug-schedule/helper";
import ReasonModal from "../drug-schedule/ReasonModal";

function PatientDrugSchedule() {
  let today = moment().format("YYYY-MM-DD");
  const { patientId } = useParams();
  const [drugSchedule, setDrugSchedule] = useState([]);
  const [selectedDate, ] = useState(today);
  const [reason, setReason] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const facilityId = useSelector((state) => state.auth.user.id);

  const getDrugSchedule = useCallback(() => {
    // setLoading(true)
    _fetchApi2(
      `${apiURL()}/drug-schedule?query_type=all_schedule&patient_id=${patientId}&date=${selectedDate}&facilityId=${facilityId}`,
      (data) => {
        if (data && data.results) {
          //   setSchedule(data.results);
          // let grouped = groupArray(data.results, 'time_stamp')
          let grouped = formatScheduleByTime(data.results, "time_stamp_date");
          setDrugSchedule(grouped);
        }
        // setLoading(false)
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
  }, [selectedDate, facilityId, patientId]);

  useEffect(() => {
    getDrugSchedule();
  }, [getDrugSchedule]);

  const updateSchedule = (id, status) => {
    // alert(id)
    // setLoading(true)
    _updateApi(
      `${apiURL()}/drug-schedule/update-status`,
      {
        schedule_id: id,
        query_type: status,
        reason: reason,
      },
      () => {
        // setLoading(false)
        getDrugSchedule();
        _customNotify("Schedule updated!");
      },
      () => {
        // setLoading(false)
        alert("An error occured");
      }
    );
  };

  return (
    <CollapsibleCard
      fixed
      defaultOpen
      headerText="Drug Schedule"
      body="px-1"
      style={{ height: "85vh", overflow: "scroll" }}
    >
      {/* {JSON.stringify(drugSchedule)} */}
      {Object.keys(drugSchedule).map((time, i) => (
        <Table key={i} size="sm" bordered>
          <thead>
            <tr>
              <th
                colSpan={3}
                style={{
                  backgroundColor: primaryColor,
                  color: "#fff",
                  textAlign: "center",
                  ...columnStyle,
                }}
              >
                {moment.utc(time).format("dddd, DD/MM/YYYY")}
              </th>
            </tr>
            <tr>
              <th>Time</th>
              <th>Drug</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {drugSchedule[time].map((sch, j) => (
              <tr key={j}>
                <td>{moment.utc(sch.time_stamp).format("hh:mma")}</td>
                <td>{sch.drug_name}</td>
                <td>
                  <ActionButton
                    positive={() => updateSchedule(sch.id, "Served")}
                    negative={() => {
                      setSelectedSchedule(sch);
                      setShowAlert(true);
                    }}
                    item={sch}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}

      <ReasonModal
        showReasonAlert={showAlert}
        setShowReasonAlert={setShowAlert}
        reason={reason}
        setReason={setReason}
        updateSchedule={updateSchedule}
        selectedSchedule={selectedSchedule}
      />
    </CollapsibleCard>
  );
}

export default PatientDrugSchedule;
