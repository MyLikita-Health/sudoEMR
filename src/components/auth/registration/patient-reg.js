import React from 'react';
import { Card, CardHeader, CardBody, FormGroup } from 'reactstrap';
import PublicWrapper from '../../../routes/PublicWrapper';
import BackButton from '../../landing/BackButton';
import Input from './component/Input';
import PasswordInput from './component/PasswordInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { patientSignup } from '../../../redux/actions/auth';
import { useHistory } from 'react-router';
import {useParams} from 'react-router-dom'

function PatientRegistration() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    retypePassword: '',
  });
  const [error, setError] = useState('');
  const [loading, toggle] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory()

  const onInputChange = (name, value) => setForm({ ...form, [name]: value });

  const handleSubmit = () => {
    if (
      form.fullname === '' ||
      form.email === '' ||
      form.password === '' ||
      form.retypePassword === ''
    ) {
      setError('Please complete the form');
    } else {
      if (form.password !== form.retypePassword) {
        setError('Passwords do not match');
      } else {
        toggle(true);
        let data = {};
        data.fullname = form.fullname;
        data.email = form.email;
        data.password = form.password;
        dispatch(
          patientSignup(
            data,
            () => {
              toggle(false);
              history.push('/user')
            },
            (err) => {
              // console.log(err, 'from fronetnend')
              setError(err)
              toggle(false);
            }
          )
        );
      }
    }
  };
  let params = useParams()
  return (
    <PublicWrapper>
      <div className="offset-md-3 col-md-6 col-lg-6 p-0">
        <BackButton />
        <Card>
          <CardHeader tag="h6">Register as a Patient</CardHeader>
          {JSON.stringify(params.patientId)}
          <CardBody>
            <FormGroup>
              <Input
                name="fullname"
                placeholder="Full name"
                label="Full name"
                onChange={(e) => onInputChange('fullname', e.target.value)}
                value={form.fullname}
                required
              />
              <Input
                name="email"
                placeholder="Email"
                label="Email"
                required
                onChange={(e) => onInputChange('email', e.target.value)}
                value={form.email}
              />
              <PasswordInput
                name="password"
                label="Password"
                required
                onChange={(e) => onInputChange('password', e.target.value)}
                value={form.password}
              />
              <PasswordInput
                name="retypePassword"
                label="Retype Password"
                onChange={(e) =>
                  onInputChange('retypePassword', e.target.value)
                }
                value={form.retypePassword}
              />
            </FormGroup>
            <p className="text-danger text-center">{error}</p>
          </CardBody>
          <div className="card-footer d-flex flex-row justify-content-end">
            <button className="btn btn-primary" onClick={handleSubmit}>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </Card>
      </div>
    </PublicWrapper>
  );
}

export default PatientRegistration;
