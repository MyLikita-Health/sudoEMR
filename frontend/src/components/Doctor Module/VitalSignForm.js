import React from 'react';

const VitalSignForm = ({ records = {} }) => {
//   const valueStyle = {
//     width: '50%',
//     textAlign: 'left',
//   };
//   const labelStyle = {
//     width: '50%',
//     textAlign: 'left',
//   };
//   const divideStyle = {
//     width: '50%',
//     padding: '.4em',
//   };
//   const flex = { display: 'flex', flexDirection: 'horizontal' };
  return (
    <div>
      <h5>Vital Signs</h5>
      <div className="row">
        {records.tempreture && (
          <div className="col-md-6">
            <label className="col-md-3">Temperature (C):</label>
            <label className="col-md-1 value">{records.tempreture}</label>
          </div>
        )}

        {records.bloodpressure && (
          <div className="col-md-6">
            <label className="col-md-3">Blood Pressure (mmHg):</label>
            <label className="col-md-1 value">{records.bloodpressure}</label>
          </div>
        )}

        {records.respiratoryRate && (
          <div className="col-md-6">
            <label className="col-md-3">Respiratory Rate (c/min):</label>
            <label className="col-md-1 value">{records.respiratoryRate}</label>
          </div>
        )}
      </div>
      <div className="row">
        {records.pulse && (
          <div className="col-md-6">
            <label className="col-md-3">Pulse Rate (b/min):</label>
            <label className="col-md-1 value">{records.pulse}</label>
          </div>
        )}

        {records.vital_height && (
          <div className="col-md-6">
            <label className="col-md-3">Height (m):</label>
            <label className="col-md-1 value">{records.vital_height}</label>
          </div>
        )}

        {records.vital_weight && (
          <div className="col-md-6">
            <label className="col-md-3">Weight (kg):</label>
            <label className="col-md-1 value">{records.vital_weight}</label>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default VitalSignForm;
