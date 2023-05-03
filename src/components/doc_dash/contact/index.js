import React from 'react';
import { FaSms, FaCopy } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { Card } from 'reactstrap';
import { FiMail } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { _customNotify, _warningNotify } from '../../utils/helpers';
import { useHistory } from 'react-router';

function Contact({ patient }) {
  const history = useHistory();
  return (
    <div>
      <Card className="mb-3 p-1 d-flex flex-row align-items-center justify-content-between">
        <span>
          {patient.surname} {patient.firstname}
        </span>
        <div className="d-flex">
          <button
            className="btn btn-outline-primary ml-2"
            onClick={() =>
              history.push(`/me/doctor/patients/view/${patient.patientHospitalId}/chat`)
            }
          >
            <BsChat size={20} className="mr-1" /> Chat
          </button>
          {/* <button className="btn btn-outline-success ml-2">
            <FaWhatsapp size={20} className="mr-1" /> WhatsApp
          </button> */}
        </div>
      </Card>

      {patient.phone ? (
        <Card className="mb-3 p-1 d-flex flex-row align-items-center justify-content-between">
          <div>
            <span className="mr-2">Phone: </span>
            <span className="font-weight-bold">{patient.phone}</span>
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-dark ml-2" disabled>
              <MdCall size={20} className="mr-1" /> Call
            </button>
            <button className="btn btn-outline-warning ml-2" disabled>
              <FaSms size={20} className="mr-1" /> SMS
            </button>
          </div>
        </Card>
      ) : null}

      {patient.email ? (
        <Card className="mb-3 p-1 d-flex flex-row align-items-center justify-content-between">
          <div>
            <span className="mr-2">Email: </span>
            <span className="font-weight-bold">{patient.email}</span>
            <span
              className="text-primary btn"
              onClick={() =>
                navigator.clipboard
                  .writeText(patient.email)
                  .then(() => _customNotify('Email Copied!'))
                  .catch(() => _warningNotify('Cannot copy text at this time'))
              }
            >
              <FaCopy /> copy!
            </span>
          </div>
          <div>
            {/* <button
              className="btn btn-outline-dark ml-2"
              
            >
              <FaCopy size={20} className="mr-1" /> Copy
            </button> */}
            <button className="btn btn-outline-dark ml-2" disabled>
              <FiMail size={20} className="mr-1" /> Send an email
            </button>
          </div>
        </Card>
      ) : null}

      {/* <div className="alert alert-success">
        <span className="h4">Hangouts</span>
        <p>Call Patient via Google Hangouts</p>

        <p>
          <span className="font-weight-bold mr-1">Instructions:</span>
          Copy the patient email above, click "Start Video Call" button below
          and paste the email in the invite box
        </p>
        <span
          className="btn btn-success"
          //   href="http://hangouts.google.com/start"
          //   target="_blanc"
          onClick={() => {
            history.push(
              `/me/doctor/visits/new/${
                patient.patientHospitalId
              }/history/presentingcomplaints`
            );
            // let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=1000,left=-500,top=350`;
            // window.open(
            //   'http://hangouts.google.com/start',
            //   'Video Call',
            //   params
            // );
          }}
        >
          <FaVideo className="mr-1" size={20} /> Start Video Call
        </span>
      </div> */}
    </div>
  );
}

export default Contact;
