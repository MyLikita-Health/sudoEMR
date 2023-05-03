import React from 'react';
import { Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import PatientCalender from './PatientCalender';
import PatientUnapprovedAppointment from './PatientUnapprovedAppointment';
// import { FileUploadTest } from './FileUploadTest';

export default function BookAppointment() {
  return (
    <div className="row m-0">
      {/* <FileUploadTest /> */}
      <Col md={9}>
        <center>
          <img
            alt="booking_default"
            src={require('../../../images/booking_co.svg')}
            className="img-fluid mt-3"
            style={{ width: '40em' }}
          />
        </center>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <Link to="/user/search">
            <Button color="primary" className="pl-4 pr-4">
              Book Appointment
            </Button>
          </Link>

          <small className="text-mute mt-2">
            Book an appointment with Doctor of your choice
          </small>
        </div>
      </Col>

      <Col md={3}>
        {/* <PatientCalender /> */}
        <PatientUnapprovedAppointment />
      </Col>
    </div>
  );
}
