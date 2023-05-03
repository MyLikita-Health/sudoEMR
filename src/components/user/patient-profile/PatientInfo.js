import React, { useState, useEffect } from 'react';
import { FormGroup, Card, Button } from 'reactstrap';
import { MdUpdate } from 'react-icons/md';
import { Avatar } from 'evergreen-ui';
import { useSelector, useDispatch } from 'react-redux';
import { submitBasicInfo } from '../../patient/actions/profile';
import InputGroup from '../../comp/components/InputGroup';
// import moment from 'moment';

function PatientInfo() {
  const profile = useSelector((state) => state.auth.user);
  const [user, setUser] = useState({
    fullname: '',
    dob: '',
    country: '',
    address: '',
    email: '',
    phone: '',
    state: '',
    gender: '',
  });
  const [loading, toggle] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    toggle(true);
    dispatch(submitBasicInfo(user, () => toggle(false)));
  };

  useEffect(
    () => {
      setUser(profile);
    },
    [profile],
  );

  const onInputChange = (key, value) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="p-2 mb-2">
      <h6 className="font-weight-bold">Basic Profile Information</h6>

      <Avatar src={require('../../../images/avatar.png')} size={80} />
      <FormGroup row>
        <div className="col-md-6">
          <span className="">Full Name </span>
          <input
            onChange={(e) => onInputChange('fullname', e.target.value)}
            className="form-control"
            type="text"
            value={user.fullname}
            disabled
          />
        </div>
        <div className="col-md-6">
          <span className="">Email: </span>
          <input
            onChange={(e) => onInputChange('email', e.target.value)}
            className="form-control"
            type="email"
            value={user.email}
            disabled
          />
        </div>
      </FormGroup>
      <FormGroup row>
        <div className="col-md-6">
          <span className="">Phone: </span>
          <input
            onChange={(e) => onInputChange('phone', e.target.value)}
            className="form-control"
            type="tel"
            value={user.phone}
          />
        </div>

        <div className="col-md-6">
          <span className="">Address (Location):</span>
          <input
            onChange={(e) => onInputChange('address', e.target.value)}
            className="form-control"
            type="address"
            value={user.address}
          />
        </div>
      </FormGroup>
      <FormGroup row className="mb-0">
        <div className="col-md-6 col-lg-6">
          <span className="">Gender </span>
          <input
            onChange={(e) => onInputChange('gender', e.target.value)}
            className="form-control"
            type="gender"
            value={user.gender}
          />
        </div>
        {/* {JSON.stringify(profile)} */}
        <InputGroup
          label="Date of Birth"
          type="date"
          onChange={(e) => onInputChange('dob', e.target.value)}
          value={user.dob}
          // editable={!(user.dob || user.dob === '')}
          container="col-md-6 col-lg-6"
        />
      </FormGroup>
      <FormGroup row className="mt-0">
        <div className="col-md-6">
          <span className="">State</span>
          <input
            onChange={(e) => onInputChange('state', e.target.value)}
            className="form-control"
            type="text"
            value={user.state}
          />
        </div>{' '}
        <div className="col-md-6">
          <span className="">Country</span>
          <input
            onChange={(e) => onInputChange('country', e.target.value)}
            className="form-control"
            type="text"
            value={user.country}
          />
        </div>
      </FormGroup>

      <div className="d-flex flex-row justify-content-center">
        <Button color="primary" className="m-2" onClick={handleSubmit}>
          {loading ? (
            'Loading...'
          ) : (
            <>
              <MdUpdate size={20} className="mr-1" />
              Update Profile
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}

export default PatientInfo;
