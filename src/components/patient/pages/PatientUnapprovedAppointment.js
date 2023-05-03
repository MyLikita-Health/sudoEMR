import React, { useEffect } from 'react';
import { Card, CardTitle } from 'reactstrap';
// import Loading from '../../comp/components/Loading';
import { useSelector } from 'react-redux';
// import { getPatientPendingAppt } from '../actions/appointments';
import moment from 'moment';
import { FaTimes } from 'react-icons/fa';

function PatientUnapprovedAppointment() {
  // const loading = useSelector(
  //   (state) => state.patientAppointment.loadingPendingAppointments
  // );
  const pending = useSelector(
    (state) => state.patientAppointment.pendingPatientAppointments
  );


  return (
    <Card className="p-3 mt-3">
      <CardTitle tag="h6" className="text-center">
        Your pending appointments
      </CardTitle>

      {/* {loading && <Loading />} */}

      {pending && pending.length
        ? pending.map((item) => <AppointmentItem item={item} />)
        : null}

      {!pending.length ? (
        <p className="alert alert-primary text-center">
          You currently do not have any pending unapproved appointment
        </p>
      ) : null}
    </Card>
  );
}

function AppointmentItem({ item }) {
  return (
    <p className="card p-1" style={{cursor: 'pointer'}}>
      <span className="text-muted small text-right">
        created {moment(item.createdAt).fromNow()}
      </span>
      <span className="card-text">{item.doctorName}</span>
      <span>{item.appointmentType}</span>
      <button className="btn text-danger">
        <FaTimes className="text-danger mr-1" /> Cancel
      </button>
    </p>
  );
}

export default PatientUnapprovedAppointment;
