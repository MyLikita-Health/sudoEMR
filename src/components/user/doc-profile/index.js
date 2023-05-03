import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Button, CustomInput } from 'reactstrap';
// import SalesDetails from './SalesDetails';
import { Avatar } from 'evergreen-ui';
import { apiURL } from '../../redux/actions';
import { _warningNotify, _customNotify } from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../redux/actions/auth';
import { MdUpdate } from 'react-icons/md';
// import { FaCopy } from 'react-icons/fa';
import ReferralDashboard from './components/ReferralDashboard';
import Wallet from './components/Wallet';
import UserInfo from './doc-profile/DoctorInfo';
import { useCallback } from 'react';
// import PasswordMngmt from './PasswordMngmt';
import { DocAvailable } from './doc-profile/DoctorAvailability';
// import { FiRepeat } from 'react-icons/fi';
// import { FaYenSign, FaSave, FaLink } from 'react-icons/fa';

function DoctorProfile({ user, _saveUserData }) {
  const [profile, setProfile] = useState({
    lastname: '',
    firstname: '',
    profilename: '',
    role: '',
    prefix: '',
    email: '',
    speciality: '',
    userType: '',
    serviceCost: '',
    selectDay: [],
    fromTime: '',
    toTime: '',
  });
  const [availability, setAvailability] = useState(false);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (Object.values(user).length) {
        setProfile(user);
      }
    },
    [user],
  );

  const onInputChange = (name, value) => {
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const getData = () => {
    fetch(`${apiURL()}/users/profile/${profile.id}`)
      .then((raw) => raw.json())
      .then((res) => {
        console.log(res);
        _saveUserData({ success: true, token: '', user: res.user[0] });
        dispatch({ type: 'LOGIN', payload: { user: res.user[0] } });
      })
      .catch((err) => console.log(err));
  };

  const submitToDb = () => {
    if (profile.id) {
      fetch(`${apiURL()}/users/doctors/profile/${profile.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      })
        .then((res) => res.json())
        .then((data) => {
          _customNotify('Profile Updated Successfully');
          getData();
        })
        .catch((err) => {
          _warningNotify('An error occurred');
        });
    }
  };

  const toggleAvailability = useCallback(() => setAvailability((d) => !d));

  return (
    <Card className="mt-lg-4 mt-sm-1 offset-md-2 col-md-8 p-0 shadow">
      <CardBody tag="div">
        <div className="row">
          <div
            className={`col-sm-12  col-xs-12  ${
              user.role === 'Doctor' ? 'col-md-12' : 'col-lg-6'
            } `}
            style={{ margin: '7px 0' }}
          >
            <Card body outline color="secondary">
              <div className="d-flex justify-content-between align-items-center mb-1 mt-1">
                <Avatar src={require('../../images/avatar.png')} size={80} />
                <div>
                  Availability
                  <CustomInput
                    type="switch"
                    id="exampleCustomSwitch"
                    name="customSwitch"
                    label={availability ? 'ON' : 'OFF'}
                    defaultChecked={availability}
                    onChange={toggleAvailability}
                  />
                </div>
              </div>

              <UserInfo onInputChange={onInputChange} profile={profile} />

              <div className="d-flex flex-row justify-content-center">
                <Button color="primary" className="m-2" onClick={submitToDb}>
                  <MdUpdate size={20} className="mr-1" />
                  Update Profile
                </Button>
              </div>

              <DocAvailable
                onInputChange={onInputChange}
                profile={profile}
                getProfile={getData}
              />

              <Wallet balance="0" />

              {profile.referralId ? (
                <ReferralDashboard profile={profile} />
              ) : null}

              {/* <PasswordMngmt /> */}
            </Card>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

function mapDisptachToProps(dispatch) {
  return {
    _saveUserData: (data) => dispatch(saveUserData(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(DoctorProfile);
