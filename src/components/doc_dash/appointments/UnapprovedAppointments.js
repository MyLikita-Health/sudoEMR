import React, { useState, useEffect } from 'react';
import { Table, Card, Row, CardTitle } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../comp/components/Loading';
import { useCallback } from 'react';
import {
  getUnapprovedAppointments,
  reviewAppt,
} from '../actions/appointmentsAction';
import moment from 'moment';
import BackButton from '../../comp/components/BackButton';
import ReviewAppointment from './ReviewAppointment';
import { _customNotify } from '../../utils/helpers';
import { notificationTypes } from '../../../redux/actions/notifications';

function UnapprovedAppointments() {
  const [divided, toggleDivided] = useState(false);
  const [selected, setSelected] = useState(null);
  const [editDate, toggleEditDate] = useState(false);
  const [newDate, setNewDate] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.appointment.loadingUnapproved);
  const list = useSelector((state) => state.appointment.unApprovedAppts);

  const _getUnapprovedAppts = useCallback(
    () => dispatch(getUnapprovedAppointments()),
    [dispatch]
  );

  useEffect(() => {
    _getUnapprovedAppts();
  }, []);

  const onApptSelected = useCallback((appt) => {
    setSelected(appt);
    toggleDivided(true);
  }, []);

  const closeReview = useCallback(() => {
    setSelected({});
    toggleDivided(false);
  }, []);

  const _cancelAppt = () => {
    let notificationObj = {
      uid: selected.userId,
      read: false,
      title: 'Appointment Cancelled',
      message: `Hi, Your appointment with was not accepted by Dr. ${
        selected.doctorName
      }, Please select another Doctor from the available list`,
      type: notificationTypes.APPOINTMENT,
      appointmentId: selected._id,
      timestamp: new Date().toISOString(),
    };
    let action = reviewAppt(
      { ...selected, status: 'cancelled' },
      notificationObj,
      () => {
        _customNotify('Appointment Cancelled');
        closeReview();
      }
    );

    dispatch(action);
  };

  const _editAppt = () => {
    let newApptObj = {
      ...selected,
      proposedNewDate: newDate,
      status: 'reviewed',
    };
    let notificationObj = {
      uid: selected.userId,
      read: false,
      title: 'Appointment Reviewd',
      message: `Hi, Dr. ${
        selected.doctorName
      } has reviewed your appointment. Please check the new date 
      and confirm if it works for you, click here`,
      type: notificationTypes.APPOINTMENT,
      appointmentId: selected._id,
      timestamp: new Date().toISOString(),
    };
    // console.log(selected);
    let action = reviewAppt(newApptObj, notificationObj, () => {
      _customNotify("Review saved, awaiting Patient's confirmation.");
      closeReview();
    });

    dispatch(action);
  };

  const _approveAppt = () => {
    let notificationObj = {
      uid: selected.userId,
      read: false,
      title: 'Appointment Approved',
      message: `Congratulations, Dr. ${
        selected.doctorName
      } has approved your appointment. A reminder has been set, to cancel the reminder, click here`,
      type: notificationTypes.APPOINTMENT,
      appointmentId: selected._id,
      timestamp: new Date().toISOString(),
    };

    let action = reviewAppt(
      { ...selected, status: 'approved' },
      notificationObj,
      () => {
        _customNotify('Appointment Approved');
        closeReview();
      }
    );

    dispatch(action);
  };

  return (
    <>
      <BackButton />
      <Card className="p-3">
        <CardTitle tag="h6" className="text-center">
          Unapproved Appointment Requests
        </CardTitle>
        {loading && <Loading />}
        <Row className="m-0 p-0">
          <div className={divided ? 'col-md-6' : 'col-md-12'}>
            {list.length ? (
              <Table hover>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Patient</th>
                    <th>Proposed Date</th>
                    <th>Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item, index) => (
                    <tr
                      key={index}
                      style={{ cursor: 'pointer' }}
                      onClick={() => onApptSelected(item)}
                    >
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{moment(item.start).calendar()}</td>
                      <td>{moment(item.updatedAt).calendar()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="alert alert-primary offset-sm-3 col-sm-6 offset-md-3 col-md-6 mt-3">
                You currently do not have an unapproved appointment. Unapproved
                Appointments are initiated by patients who wants to consult a
                doctor
              </p>
            )}
          </div>

          {divided ? (
            <ReviewAppointment
              closeReview={closeReview}
              selected={selected}
              _approveAppt={_approveAppt}
              _cancelAppt={_cancelAppt}
              _editAppt={_editAppt}
              _toggleEditDate={toggleEditDate}
              editDate={editDate}
              newDate={newDate}
              setNewDate={setNewDate}
            />
          ) : null}
        </Row>
      </Card>
    </>
  );
}

export default UnapprovedAppointments;
