import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Alert, Card, CardBody, CardHeader } from "reactstrap";
import { apiURL } from "../../../redux/actions";
import { _fetchApi2, _updateApi } from "../../../redux/actions/api";
import { checkEmpty } from "../../utils/helpers";
import Loading from "../../comp/components/Loading";
import moment from "moment";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { _customNotify } from "../../utils/helpers";
import { formatSchedule } from "./helper";
import DrugScheduleItem from "./DrugScheduleItem";
import ReasonModal from "./ReasonModal";
import CollapsibleCard from "../../CollapsibleCard.js";

function DrugSchedule() {
  const facilityId = useSelector((state) => state.auth.user.facilityId);
  const [loading, setLoading] = useState(false);
  const [scheduleObj, setScheduleObj] = useState({});
  const [showReasonAlert, setShowReasonAlert] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState({});
  const [reason, setReason] = useState("");

  const today = moment().format("YYYY-MM-DD");

  const [selectedDate, setSelectedDate] = useState(today);

  const prevDate = () =>
    setSelectedDate((p) =>
      moment(p)
        .subtract(1, "day")
        .format("YYYY-MM-DD")
    );
  const nextDate = () =>
    setSelectedDate((p) =>
      moment(p)
        .add(1, "day")
        .format("YYYY-MM-DD")
    );

  const getDrugSchedule = useCallback(() => {
    setLoading(true);
    _fetchApi2(
      `${apiURL()}/drug-schedule?query_type=by_date&patient_id=all&date=${selectedDate}&facilityId=${facilityId}`,
      (data) => {
        if (data && data.results) {
          //   setSchedule(data.results);
          // let grouped = groupArray(data.results, 'time_stamp')
          let grouped = formatSchedule(data.results);
          setScheduleObj(grouped);
        }
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
  }, [selectedDate, facilityId]);

  useEffect(() => {
    getDrugSchedule();

    let refreshDrugSchedule = setInterval(() => {
      getDrugSchedule();
    }, 60000);

    return () => {
      clearInterval(refreshDrugSchedule);
    };
  }, [getDrugSchedule]);

  const updateSchedule = (id, status) => {
    // alert(id)
    setLoading(true);
    _updateApi(
      `${apiURL()}/drug-schedule/update-status`,
      {
        schedule_id: id,
        query_type: status,
        reason: reason,
      },
      () => {
        setLoading(false);
        getDrugSchedule();
        _customNotify("Schedule updated!");
      },
      () => {
        setLoading(false);
        alert("An error occured");
      }
    );
  };

  return (
    <CollapsibleCard
      defaultOpen
      headerText="Daily Drug Schedules"
      style={{ padding: 0 }}
    >
      {/* <Card>
      <CardHeader className="h5">Daily Drug Schedule</CardHeader>
      <CardBody> */}
      <div className="d-flex flex-direction-row justify-content-between m-2 text-primary">
        <FaArrowCircleLeft size={30} onClick={prevDate} />
        <h6 className="">
          {moment(selectedDate).format("dddd")}, {selectedDate}
        </h6>
        <FaArrowCircleRight size={30} onClick={nextDate} />
      </div>

      {loading ? <Loading /> : null}
      <div style={{ height: "78vh", overflow: "scroll" }}>
        {/* {JSON.stringify(scheduleObj)} */}
        <div>
          {Object.keys(scheduleObj).map((item, idx) => (
            <DrugScheduleItem
              key={idx}
              title={item}
              list={scheduleObj[item]}
              updateSchedule={updateSchedule}
              toggleReasonModal={(s) => {
                setSelectedSchedule(s);
                setShowReasonAlert(true);
              }}
            />
          ))}
        </div>

        {checkEmpty(scheduleObj) && (
          <Alert className="mx-4 text-center" color="primary">
            No drug is scheduled for {selectedDate}, checkback later.
          </Alert>
        )}

        <ReasonModal
          showReasonAlert={showReasonAlert}
          setShowReasonAlert={setShowReasonAlert}
          reason={reason}
          setReason={setReason}
          updateSchedule={updateSchedule}
          selectedSchedule={selectedSchedule}
        />
      </div>
      {/* <div className="d-flex flex-direction-row justify-content-between mb-2 text-primary">
          <FaArrowCircleLeft size={30} onClick={prevDate} />
          <h5>{moment(selectedDate).format('dddd')}, {selectedDate}</h5>
          <FaArrowCircleRight size={30} onClick={nextDate} />
        </div> */}
      {/* </CardBody>
    </Card> */}
    </CollapsibleCard>
  );
}

export default DrugSchedule;
