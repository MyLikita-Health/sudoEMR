import React from 'react';
import { Card } from 'reactstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';

function DocDetails({ doctor = {} }) {
  return (
    <Card className="d-flex flex-row" style={{ backgroundColor: '#eee' }}>
      <img
        src={require('../../../images/docAvater.png')}
        alt="doc-avatar"
        style={{ height: 150, width: 120 }}
      />
      <div
        className="d-flex flex-column justify-content-center p-3"
        style={{ flex: 2 }}
      >
        <div className="font-weight-bold">
          {doctor.firstname} {doctor.lastname}
        </div>
        <div>{doctor.speciality}</div>
        {doctor.address && doctor.address !== '' ? (
          <div>
            <FaMapMarkerAlt />
            {doctor.address}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export default DocDetails;
