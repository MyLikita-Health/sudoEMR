import React, { useEffect, useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { iconClass } from "./NewAppointment2";
import { useHistory } from "react-router";
// import { connect } from 'react-redux';
import {
  getPatientAppointments,
  saveAppointment,
  setSelectedAppointment,
} from "../actions/appointmentsAction";
import { Card, CardText } from "reactstrap";
import moment from "moment";
import { FiChevronRight, FiClock } from "react-icons/fi";
import { useSelector } from "react-redux";

function AppointmentList({ patient }) {
  const history = useHistory();
  const { facilityId, id } = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);
  let obj = {
    user_id: id,
    patientId: patient.patientHospitalId,
    facilityId,
    query_type: "select",
  };
  useEffect(() => {
    // saveAppointment(obj, cb, err);
    if (patient.patientHospitalId) {
      getPatientAppointments(patient.patientHospitalId);
    }
  }, []);

  // const { history, patientAppointments, setAppointment } = this.props;

  return (
    <div>
      <div className="d-flex justify-content-end mb-1 mt-1">
        <button
          className={`btn btn-outline-dark ${iconClass}`}
          onClick={() =>
            history.push(
              `/me/doctor/appointments/new/${patient.patientHospitalId}`
            )
          }
        >
          <FaCalendarPlus size={20} className="mr-2" />
          Create Appointment
        </button>
      </div>

      <div className="mt-2">
        {data.map((item, index) => (
          <Card
            key={index}
            body
            className="p-2 mt-2"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
            onClick={() => {
              history.push(`/me/doctor/appointments/edit/${item._id}`);
              // setAppointment(item);
            }}
          >
            <span>
              <CardText>Appointment Type: {item.appointmentType}</CardText>
              <CardText className={iconClass}>
                <FiClock className="mr-2" size={20} />
                {moment(item.start).calendar()}
              </CardText>
            </span>
            <span>
              <FiChevronRight />
            </span>
          </Card>
        ))}
      </div>

      {!data.length && (
        <p className="alert alert-primary offset-sm-3 col-sm-6 offset-md-3 col-md-6 mt-3">
          No appointments found for this patient, add a new appointment to get
          started
        </p>
      )}
    </div>
  );
}

// const mapStateToProps = ({ individualDoc: { patientAppointments } }) => ({
//   patientAppointments: patientAppointments,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getPatientAppointments: (x, y, z) =>
//     dispatch(getPatientAppointments(x, y, z)),
//   setAppointment: (x) => dispatch(setSelectedAppointment(x)),
// });

export default AppointmentList;
