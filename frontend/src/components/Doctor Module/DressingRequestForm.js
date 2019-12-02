import React from 'react';

const DressingRequestForm = ({ records = {} }) => {
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
    <div style={flex}>
      <h5>Dressing Request</h5>
      <div style={divideStyle}>
        <label style={labelStyle}>Part to dress:</label>
        <label style={valueStyle}>{records.partToDress || '--'}</label>
      </div>
      <div style={divideStyle}>
        <label style={labelStyle}>Dress With:</label>
        <label style={valueStyle}>{records.dresswith || '--'}</label>
      </div>
      <hr />
    </div>
  );
};

export default DressingRequestForm;
