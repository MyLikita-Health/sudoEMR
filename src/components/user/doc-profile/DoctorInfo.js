import React from 'react';
import { useSelector } from 'react-redux';
import { FormGroup } from 'reactstrap';

function UserInfo({ onInputChange = (f) => f, profile = {} }) {
  const isDiagnostics = useSelector(
    (state) => state.facility.info.type === "diagnosticCenter"
  )
  return (
    <>
      <FormGroup row className="mt-4">
        <div className="col-md-6 col-lg-6">
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>Firstname </span>
          <input
            onChange={(e) => onInputChange('firstname', e.target.value)}
            className="form-control"
            type="text"
            value={profile.firstname}
            disabled
          />
        </div>
        <div className="col-md-6 col-lg-6">
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>Lastname </span>
          <input
            onChange={(e) => onInputChange('lastname', e.target.value)}
            className="form-control"
            type="text"
            value={profile.lastname}
            disabled
          />
        </div>
      </FormGroup>

     { isDiagnostics ? null :
      <>
     <FormGroup row>
        <div className="col-md-6 col-lg-6">
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>Prefix: </span>
          <input
            className="form-control"
            type="text"
            value={profile.prefix}
            disabled
          />
        </div>
        <div className="col-md-6 col-lg-6">
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>
            Speciality:{' '}
          </span>
          <input
            onChange={(e) => onInputChange('speciality', e.target.value)}
            className="form-control"
            type="text"
            value={profile.speciality}
          />
        </div>
      </FormGroup>

      <FormGroup row>
        <div className="col-md-6 col-lg-6">
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>Phone: </span>
          <input
            onChange={(e) => onInputChange('phone', e.target.value)}
            className="form-control"
            type="text"
            value={profile.phone}
          />
        </div>

        <div className="col-md-6 col-lg-6">
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>Email: </span>
          <input
            onChange={(e) => onInputChange('email', e.target.value)}
            className="form-control"
            type="text"
            value={profile.email}
          />
        </div>
      </FormGroup>
      <FormGroup row>
        <div className="col-md-6 col-lg-6">
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>
            Address (Location):{' '}
          </span>
          <input
            onChange={(e) => onInputChange('address', e.target.value)}
            className="form-control"
            type="text"
            value={profile.address}
          />
        </div>
        <div className="col-md-6 col-lg-6">
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>
            Service Cost:{' '}
          </span>
          <input
            onChange={(e) => onInputChange('serviceCost', e.target.value)}
            className="form-control"
            type="text"
            value={profile.serviceCost}
          />
        </div>
      </FormGroup>
      </>}
    </>
  );
}

export default UserInfo;
