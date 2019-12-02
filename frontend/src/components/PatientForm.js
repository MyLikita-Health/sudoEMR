import React from 'react';
import { Container } from 'reactstrap';
import defaultImage from '../images/default_image.png';
import { toCamelCase } from './helpers';
// import './print.css';

/**
 * This component renders the basic details of the patient.
 */
function PatientForm({ record }) {
  const username = localStorage.getItem('user');
  const doctor = toCamelCase(username);
  const date = new Date();
  const flexStyle = { display: 'flex', flexDirection: 'horizontal' };
  return (
    <Container style={flexStyle}>
      <div style={{ width: '20%' }}>
        <img src={defaultImage} alt="default_image" />
      </div>
      <div style={{ width: '80%' }}>
        <div style={flexStyle}>
          <div className="label" style={{ padding: '.7em', width: '41.66%' }}>
            <label>Names: </label>
            <span>
              {record.surname} {record.firstname}
            </span>
          </div>
          <div className="label" style={{ padding: '.7em', width: '25%' }}>
            <label>Gender: </label>
            <span>{record.gender}</span>
          </div>
          <div className="label" style={{ padding: '.7em', width: '33.33%' }}>
            <label>DOB: </label>
            <span>{record.DOB}</span>
          </div>
        </div>
        <div style={flexStyle}>
          <div className="label" style={{ padding: '.7em', width: '41.66%' }}>
            <label>Phone: </label>
            <span>{record.phoneNo}</span>
          </div>
          <div className="label" style={{ padding: '.7em', width: '25%' }}>
            <label>ID: </label>
            <span>{record.id}</span>
          </div>
          <div className="label" style={{ padding: '.7em', width: '33.33%' }}>
            <label>Doctor: </label>
            <span>{doctor}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PatientForm;
