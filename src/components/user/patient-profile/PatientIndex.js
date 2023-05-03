import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PatientInfo from './PatientInfo';
import { Card, CardBody } from 'reactstrap';
import Wallet from '../components/Wallet';
import PasswordMngmt from '../PasswordMngmt';
import HealthStatus from './PatientHealthStatus';
import BackButton from '../../comp/components/BackButton';
import { init } from '../../../redux/actions/auth';
import { useHistory, } from 'react-router';
// import PatientProfileMenu from './Menu';

function PatientIndex() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [profile, setProfile] = useState({
    fullname: '',
    location: '',
    state: '',
    city: '',
    username: '',
    email: '',
    gender: '',
    bio: '',
    dob: '',
    blood_group: '',
    genotype: '',
    physical_disability: '',
    contaminated_disease: '',
    other_info: '',
  });

  // useEffect(() => {
  //   dispatch(init(history));
  // }, [dispatch]);

  const onInputChange = (name, value) => {
    setProfile((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <BackButton text="Go Back" />
      <div className="row">
        <div className="col-md-2 m-4">
          {/* <PatientProfileMenu /> */}
        </div>
        <Card className="mt-lg-4 mt-sm-1 col-md-8 p-0 shadow">
          <CardBody tag="div">
            {/* <Route exact path="/user/profile"> */}
              <PatientInfo onInputChange={onInputChange} profile={profile} />
            {/* </Route>
            <Route exact path="/user/profile/healthstatus"> */}
              <HealthStatus onInputChange={onInputChange} profile={profile} />
            {/* </Route>
            <Route exact path="/user/profile/payment"> */}
              <Wallet balance="0" />
            {/* </Route>
            <Route exact path="/user/profile/changepassword"> */}
              <PasswordMngmt />
            {/* </Route> */}
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default PatientIndex;
