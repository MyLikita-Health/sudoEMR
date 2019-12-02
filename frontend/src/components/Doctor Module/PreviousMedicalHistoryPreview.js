import React from 'react';

const PreviousMedicalHistoryPreview = ({ records = {} }) => {
  const valueStyle = {
    width: '50%',
    textAlign: 'left',
  };
  const labelStyle = {
    width: '50%',
    textAlign: 'left',
  };
  const divideStyle = {
    width: '50%',
    padding: '.4em',
  };
  const flex = { display: 'flex', flexDirection: 'horizontal' };
  return (
    <div>
      <h5>Previous Medical History</h5>
      <div style={flex}>
        <div style={{padding:'.4em', width:'100%'}}>
          <label>Pregnancy, Birth Neonatal History: </label>
          <label>{records.pbnh || '--'}</label>
        </div>
      </div>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Immunization History: </label>
          <label style={valueStyle}>{records.immunization || '--'}</label>
        </div>

        <div style={divideStyle}>
          <label style={labelStyle}>Nutrition History: </label>
          <label style={valueStyle}>{records.nutrition || '--'}</label>
        </div>
      </div>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Developmental History: </label>
          <label style={valueStyle}>{records.development || '--'}</label>
        </div>

        <div style={divideStyle}>
          <label style={labelStyle}>Known Hypertensive: </label>
          <label style={valueStyle}>{records.hypertensive || '--'}</label>
        </div>
      </div>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Known Diabetic: </label>
          <label style={valueStyle}>{records.diabetic || '--'}</label>
        </div>
        <div style={divideStyle}>
          <label style={labelStyle}>Known Asthmatic: </label>
          <label style={valueStyle}>{records.asthmatic || '--'}</label>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PreviousMedicalHistoryPreview;
