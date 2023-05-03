import React, { useState, useEffect, useCallback } from 'react';
import { Card, Label, FormGroup, Form, CardHeader } from 'reactstrap';
import { FiSend } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { TextArea } from '../../comp/components/InputGroup';
import SelectInput from '../../comp/components/SelectInput';
import BackButton from '../../comp/components/BackButton';
import { useRouteMatch, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getApprovedDoctors } from '../../../redux/actions/auth';
import DocDetails from './DocDetails';
import AutoComplete from '../../comp/components/AutoComplete';
import { initiateAppointment } from '../actions/appointments';
import RadioInput from '../../comp/components/RadioInput';
import DateTimePicker from '../../comp/components/DateTimePicker';

export const iconClass = 'd-flex flex-direction-row align-items-center';

export default function UserNewAppointment({
  editable = true,
  typeNotEditable = false,
}) {
  const match = useRouteMatch();
  const history = useHistory();

  const docId = match.params.docId || undefined;
  const [error, setError] = useState('');
  const [appointment, setAppointment] = useState({
    start: new Date(),
    end: new Date(),
    date: '',
    location: '',
    appointmentType: '',
    title: '',
    notes: '',
    doctorName: '',
    userId: '',
  });
  const dispatch = useDispatch();
  const doctorList = useSelector((state) => state.auth.approvedDoctors);

  const selectedDoc = doctorList.filter(
    (item) => item.id.toString() === docId
  )[0];

  const _getApprovedDoc = useCallback(() => dispatch(getApprovedDoctors()), []);

  useEffect(
    () => {
      // _getApprovedDoc();

      if (docId) {
        setAppointment((prev) => ({
          ...prev,
          userId: docId,
        }));
        // _setSelectedDoc();
      }
    },
    [docId, selectedDoc, _getApprovedDoc]
  );

  const onInputChange = (name, value) =>
    setAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));

  const handleSubmit = () => {
    // console.log(appointment);
    if (appointment.location === '' || appointment.start === '') {
      setError('Please complete the required fields');
    } else {
      appointment.doctorName = `${selectedDoc.firstname} ${
        selectedDoc.lastname
      }`;
      const callback = () => history.push('/user');
      dispatch(initiateAppointment(appointment, callback));
    }
  };

  // const _setSelectedDoc = useCallback(
  //   () => {
  //     if (doctorList.length) {
  //       let dd = doctorList.filter((item) => item.id.toString() === docId)[0];
  //       // console.log(dd, 'dd', docId);
  //       setSelectedDoc(dd);
  //     }
  //   },
  //   [doctorList, docId]
  // );

  return (
    <div>
      <BackButton text="Go Back" />
      <Card className="m-4">
        {/* {JSON.stringify(appointment)} */}
        <CardHeader tag="h5">Schedule an Appointment</CardHeader>

        <Form className="p-3">
          <FormGroup>
            {docId ? (
              <DocDetails doctor={selectedDoc} />
            ) : (
              <AutoComplete
                label="Doctor"
                name="doctor"
                options={doctorList}
                labelKey={(doc) =>
                  `${doc.firstname} ${doc.lastname} ${
                    doc.speciality && doc.speciality !== ''
                      ? '(' + doc.speciality + ')'
                      : ''
                  }`
                }
                value={appointment.doctor}
                placeholder="Select a doctor here"
                required
                onChange={(value) => onInputChange('doctor', value[0].id)}
              />
            )}
          </FormGroup>
          <FormGroup className="row">
            <DateTimePicker
              container="col-md-4 col-lg-4"
              label="Your preferred time"
              name="start"
              value={appointment.start}
              onChange={(date) => onInputChange('start', date)}
              editable={editable}
              selected={appointment.start}
            />
          </FormGroup>
          <div className="d-md-flex flex-md-direction-row justify-content-between p-0">
            <FormGroup>
              <Label className="font-weight-bolder">Appointment Location</Label>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <RadioInput
                  name="location"
                  value="online"
                  label="Online"
                  onChange={(e) => onInputChange('location', e.target.value)}
                />
                <RadioInput
                  value="offline"
                  name="location"
                  label="Offline"
                  onChange={(e) => onInputChange('location', e.target.value)}
                />
              </div>
            </FormGroup>

            <SelectInput
              container="mt-2 p-0"
              label="Apointment Type"
              options={[
                'Checkup',
                'Emergency',
                'Follow up',
                'Routine',
                'Walk in',
              ]}
              name="appointmentType"
              value={appointment.appointmentType}
              onChange={({ target: { value } }) =>
                onInputChange('appointmentType', value)
              }
              editable={editable && !typeNotEditable}
            />
          </div>
          <TextArea
            label="Appointment Notes (optional)"
            name="notes"
            value={appointment.notes}
            onChange={({ target: { value } }) => onInputChange('notes', value)}
            editable={editable}
          />
        </Form>
        <div className="alert alert-primary m-3">
          <span className="font-weight-bold">Note</span>: Appointment is subject
          to Doctor's approval, you will be notified on the status of your
          appointment request.
        </div>
        <span className="text-danger text-center">{error}</span>
        <div className="d-flex flex-direction-row justify-content-center">
          <div className="btn-group btn-group mt-2 mb-2">
            <button
              className="btn btn-outline-primary mr-1"
              onClick={() => handleSubmit()}
            >
              <span className={iconClass}>
                <FiSend size={20} className="mr-1" />
                Submit
              </span>
            </button>
            <button className="btn btn-outline-danger">
              <span className={iconClass}>
                <FaTimes size={20} className="mr-1" />
                Cancel
              </span>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
