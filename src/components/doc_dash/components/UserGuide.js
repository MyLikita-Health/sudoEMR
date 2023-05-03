import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import CollapsibleCard from "../../CollapsibleCard";
import { appointmentFunc } from "../actions/appointmentsAction";
import CalenderView from "../appointments/CalenderView";
import CollapsibleCard from "../../CollapsibleCard.js";

function UserGuide() {
  const [appointment, setAppointments] = useState([]);
  const { facilityId, id } = useSelector((state) => state.auth.user);

  const getAppointmentByDoc = useCallback(() => {
    const formData = {
      facilityId,
      user_id: id,
      query_type: "select",
    };
    let err = () => {
      console.log("error occur");
    };
    appointmentFunc(
      formData,
      (d) => {
        let newArr = [];
        d &&
          d.results.forEach((i) => {
            newArr.push({
              ...i,
              xid: i.id,
              title: i.patient_name,
              date: moment(i.start_at).format("YYYY-MM-DD"),
            });
          });
        setAppointments(newArr);
        // console.log(d, "LDLLD");
      },
      err
    );
  }, [facilityId, id]);

  useEffect(() => {
    getAppointmentByDoc();
  }, [getAppointmentByDoc]);

  return (
    <CollapsibleCard headerText="Appointment" defaultOpen>
      <div style={{ height: "30vh" }}>
        <CalenderView events={appointment} display={false} />
      </div>
    </CollapsibleCard>
  );
}

export default UserGuide;
