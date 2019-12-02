import React from 'react';

const HistoryPreview = ({ records = {} }) => {
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
  };
  const flex = {
    display: 'flex',
    padding: '.4em',
    flexDirection: 'horizontal',
  };
  return (
    <div>
      <h5>History</h5>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Others:  </label>
          <label style={valueStyle}>{records.others || '--'}</label>
        </div>

        <div style={divideStyle}>
          <label style={labelStyle}>Past Medical Records:  </label>
          <label style={valueStyle}>{records.pastMedicalHistory || '--'}</label>
        </div>
      </div>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>History of Presenting Complaints:  </label>
          <label style={valueStyle}>
            {records.historyOfPresentingComplaints || '--'}
          </label>
        </div>

        <div style={divideStyle}>
          <label style={labelStyle}>Allergy:  </label>
          <label style={valueStyle}>{records.allergy || '--'}</label>
        </div>
      </div>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Social History:  </label>
          <label style={valueStyle}>{records.socialHistory || '--'}</label>
        </div>
        <div style={divideStyle}>
          <label style={labelStyle}>Other Allergies:  </label>
          <label style={valueStyle}>{records.otherAllergies || '--'}</label>
        </div>
      </div>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Other Social History:  </label>
          <label style={valueStyle}>{records.otherSocialHistory || '--'}</label>
        </div>
        <div style={divideStyle}>
          <label style={labelStyle}>Obts & Gynea History:  </label>
          <label style={valueStyle}>{records.obtsGyneaHistory || '--'}</label>
        </div>
      </div>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Drug History:  </label>
          <label style={valueStyle}>{records.drugHistory || '--'}</label>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HistoryPreview;
