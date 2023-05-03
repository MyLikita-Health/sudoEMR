import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Alert, Card } from "reactstrap";
import { useQuery } from "../../../hooks";
import { apiURL } from "../../../redux/actions";
import { _fetchApi2 } from "../../../redux/actions/api";
import BackButton from "../../comp/components/BackButton";
import CustomButton from "../../comp/components/Button";
import Loading from "../../comp/components/Loading";
import { checkEmpty, groupArray } from "../../utils/helpers";
import { getAllocationInfo } from "../api";

function ViewSchedule() {
  const query = useQuery();
  const patient_id = query.get("patient_id");
  const allocation_id = query.get("allocation_id");
  const facilityId = useSelector((state) => state.auth.user.facilityId);

  //   const [schedule, setSchedule] = useState();
  const [loading, setLoading] = useState(false);
  const [scheduleObj, setScheduleObj] = useState({});
  const [allocationInfo, setAllocationInfo] = useState({});

  const filterDate = moment.utc().format('YYYY-MM-DD hh:mm:ss')

  const getDrugSchedule = useCallback(() => {
    _fetchApi2(
      `${apiURL()}/drug-schedule?query_type=by_date&patient_id=${patient_id}&date=${filterDate}&facilityId=${facilityId}`,
      (data) => {
        if (data && data.results) {
          //   setSchedule(data.results);
          let grouped = groupArray(data.results, "drug_name");
          setScheduleObj(grouped);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

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
      getDrugSchedule();
      _getAllocationInfo();
    },
    [getDrugSchedule]
  );

  return (
    <>
      <BackButton />
      <Card>
        {loading ? <Loading /> : null}
        <div className="m-3">
          <h6>
            Patient: {allocationInfo.patient_name} ({allocationInfo.patient_id})
          </h6>
          <h6>
            Room: {allocationInfo.name} ({allocationInfo.class_type})
          </h6>
          <h6>
            Date Admitted:{" "}
            {moment.utc(allocationInfo.allocated).format("DD/MM/YYYY hh:mm A")}
          </h6>
        </div>

        {Object.keys(scheduleObj).map((item, idx) => (
          <ScheduleItem key={idx} title={item} list={scheduleObj[item]} />
        ))}

        {checkEmpty(scheduleObj) && (
          <Alert className="mx-4 text-center" color="primary">
            No drug is scheduled for this patient today, checkback later.
          </Alert>
        )}
      </Card>
    </>
  );
}

function ScheduleItem({ list = [], title = "" }) {
  return (
    <Card className="p-2 m-1">
      <h6>{title}</h6>
      <div>
        {list.map((item, idx) => {
          const now = moment.utc();
          let nextIdx = idx === list.length - 1 ? idx : idx + 1;
          const active = moment.utc(now).isBetween(
            moment.utc(item.time_stamp),
            moment.utc(list[nextIdx].time_stamp)
          );
          // console.log(
          //   active,
          //   // moment.utc(item.time_stamp),
          //   // moment.utc(list[nextIdx].time_stamp)
          // );
          return (
            <CustomButton
              key={idx}
              size="lg"
              color={active ? "primary" : "secondary"}
              className="mx-2 my-1 px-4"
            >
              {moment.utc(item.time_stamp).format("hh:mm A")}
            </CustomButton>
          );
        })}
      </div>
    </Card>
  );
}

export default ViewSchedule;
