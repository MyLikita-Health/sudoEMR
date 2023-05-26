import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollapsibleCard from "../../../CollapsibleCard";
import { setSelectedAppointment } from "../../actions/appointmentsAction";
import Calender from "../../appointments/Calender";
// import CalenderView from '../../appointments/CalenderView'

function AppointmentsView() {
  const dispatch = useDispatch();

  const appointments = useSelector((state) => state.individualDoc.appointments);

  const setAppointment = (it) => dispatch(setSelectedAppointment(it));

  return (
    <CollapsibleCard headerText="Appointments" body="p-1">
      {/* <CalenderView events={appointments} /> */}
      <Calender
        calendarEvents={appointments}
        onEventClick={(item) => {
          //   history.push(`/me/doctors/appointments/edit/${item._id}`);
          setAppointment(item);
        }}
      />
    </CollapsibleCard>
  );
}

export default AppointmentsView;
