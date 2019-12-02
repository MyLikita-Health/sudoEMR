import React from 'react';

const ObservationRequestForm = ({ observation_request }) => {
  return (
    <div>
      <h5>Observation Request</h5>
      <div className="row">
        <br />
        <label className="col-md-3">Observation Required: </label>
        <label className="col-md-5" style={{ paddingLeft: '1em' }}>
          {observation_request}
        </label>
      </div>
      <hr />
    </div>
  );
};

export default ObservationRequestForm;
