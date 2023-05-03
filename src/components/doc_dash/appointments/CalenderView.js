import React from "react";
import MyCal from "./Calender";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { setSelectedAppointment } from "../actions/appointmentsAction";

function CalenderView({ events, setAppointment, display }) {
  const history = useHistory();
  // const [view, setView] = useState('dayGridMonth');

  return (
    <div className="bg-light">
      <MyCal
        calendarEvents={events}
        onEventClick={(item) => {
          history.push(
            `/me/doctor/appointments/edit?appointmentId=${item.xid}`
          );
          console.log(item, "UFHFH");
          setAppointment(item);
        }}
        display={display}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setAppointment: (app) => dispatch(setSelectedAppointment(app)),
});

export default connect(null, mapDispatchToProps)(CalenderView);
