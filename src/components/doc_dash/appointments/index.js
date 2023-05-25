import React, { useCallback, useEffect, useState } from "react";
import {
  FaCalendarPlus,
  FaRegCalendarCheck,
  FaRegCalendarTimes,
} from "react-icons/fa";
import { useHistory } from "react-router";
// import Calender from './Calender';
import CalenderView from "./CalenderView";
import { useSelector } from "react-redux";
import { clearPatient } from "../actions/patientsActions";
import { UNAPPROVED_APPOINTMENTS } from "../routes";
// import BackButton from "../../landing/BackButton";
import { appointmentFunc } from "../actions/appointmentsAction";
import moment from "moment";
import BackButton from "../../BackButton";

function Appointments() {
  const history = useHistory();
  const { facilityId, id } = useSelector((state) => state.auth.user);

  const handleNewAppointmentClick = () => {
    history.push("/me/doctors/appointments/new");
    clearPatient();
  };
  const [appointment, setAppointments] = useState([]);
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
    <div>
      <div className="d-flex justify-content-between mb-1 mt-1">
        <span>
          <BackButton />
        </span>
        <span>
          <button className="btn btn-outline-primary mr-1" disabled>
            <FaRegCalendarCheck className="mr-1" size={20} /> View All
          </button>
          <button
            className="btn btn-outline-info mr-1"
            onClick={() => history.push(UNAPPROVED_APPOINTMENTS)}
          >
            <FaRegCalendarTimes className="mr-1" size={20} /> All Unapproved
          </button>
          <button
            className="btn btn-outline-warning"
            // onClick={() => history.push(UNAPPROVED_APPOINTMENTS)}
            disabled
          >
            <FaRegCalendarTimes className="mr-1" size={20} /> All Cancelled
          </button>
        </span>
        <button
          className="btn btn-outline-dark"
          onClick={handleNewAppointmentClick}
        >
          <FaCalendarPlus /> New Appointment
        </button>
        {/* {JSON.stringify(appointment)} */}
      </div>
      <div>
        <CalenderView events={appointment} display={true} />
      </div>
    </div>
  );
}

export default Appointments;
