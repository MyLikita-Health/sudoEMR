import React from 'react';

const ProvisionalDiagnosisForm = ({ records = {} }) => {
  const valueStyle = {
    paddingLeft: '1em',
  };
  return (
    <div>
      <h5>Provisional Diagnosis</h5>
      <div className="row">
        {records.provisionalDiagnosis1 && (
          <div className="col-md-6">
            <label className="col-md-1">1.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.provisionalDiagnosis1}
            </label>
          </div>
        )}
        {records.provisionalDiagnosis2 && (
          <div className="col-md-6">
            <label className="col-md-1">2.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.provisionalDiagnosis2}
            </label>
          </div>
        )}
        {records.provisionalDiagnosis3 && (
          <div className="col-md-6">
            <label className="col-md-1">3.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.provisionalDiagnosis3}
            </label>
          </div>
        )}
        {records.provisionalDiagnosis4 && (
          <div className="col-md-6">
            <label className="col-md-1">4.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.provisionalDiagnosis4}
            </label>
          </div>
        )}
        {records.provisionalDiagnosis5 && (
          <div className="col-md-6">
            <label className="col-md-1">5.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.provisionalDiagnosis5}
            </label>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ProvisionalDiagnosisForm;
