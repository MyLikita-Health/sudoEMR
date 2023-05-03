import { v4 as UUIDV4 } from 'uuid';
import { appointment_db } from '../../doc_dash/actions/appointmentsAction';
import { _customNotify } from '../../utils/helpers';
import {
  createNotification,
  notificationTypes,
} from '../../../redux/actions/notifications';
import {
  LOADING_PATIENT_APPOINTMENTS,
  LOADING_PENDING_PATIENT_APPOINTMENTS,
  GET_PATIENT_PENDING_APPOINTMENTS,
} from './types';
import { GET_PATIENTS_APPOINTMENTS } from '../../doc_dash/types';
import store from '../../../redux/store';

// const TAG = 'CHECK';

export const getAppointmentById = async (id) => {
  try {
    let data = await appointment_db.find({
      selector: {
        _id: { $eq: id },
      },
    });

    return data.docs;
  } catch (error) {
    console.log(error);
  }
};

export const getPatientPendingAppt = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_PENDING_PATIENT_APPOINTMENTS });
    const userId = store.getState().auth.user.id;
    appointment_db
      .createIndex({
        index: {
          fields: ['type', 'status', 'userId', 'start'],
        },
      })
      .then(async () => {
        try {
          const result = await appointment_db.find({
            selector: {
              type: { $eq: 'patient' },
              status: {
                $in: ['request', 'reviewed'],
              },
              patientId: { $eq: userId.toString() },
              start: { $gte: null },
            },
            // sort: [{ start: 'asc' }],
          });
          console.log('Get unapproved success');
          dispatch({
            type: GET_PATIENT_PENDING_APPOINTMENTS,
            payload: result.docs,
          });
          dispatch({ type: LOADING_PENDING_PATIENT_APPOINTMENTS });
        } catch (error) {
          console.log(error);
          dispatch({ type: LOADING_PENDING_PATIENT_APPOINTMENTS });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOADING_PENDING_PATIENT_APPOINTMENTS });
      });
  };
};

export const getAppointments = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_PATIENT_APPOINTMENTS });
    const userId = store.getState().auth.user.id;

    appointment_db
      .createIndex({
        index: {
          fields: ['type', 'status', 'patientId', 'start'],
        },
      })
      .then(() => {
        return appointment_db.find({
          selector: {
            type: { $eq: 'patient' },
            status: { $eq: 'approved' },
            patientId: { $eq: userId },
            start: { $gt: true },
          },
          // sort: [{start: 'asc'}],
        });
      })
      .then((result) => {
        console.log('RESP', 'getAppointments', result);
        dispatch({
          type: GET_PATIENTS_APPOINTMENTS,
          payload: [...result.docs],
        });
        // console.log('appoint ===========================> ', result);
        dispatch({ type: LOADING_PATIENT_APPOINTMENTS });
      })
      .catch((err) => {
        console.log('ERR', 'err getAppointments <=========', err);
        dispatch({ type: LOADING_PATIENT_APPOINTMENTS });
      });
  };
};

export const initiateAppointment = (data = {}, cb = (f) => f) => {
  return (dispatch) => {
    const user = store.getState().auth.user;

    data._id = UUIDV4();
    data.title = user.fullname;
    data.type = 'patient';
    data.status = 'request';
    data.notify = [];
    data.createdAt = new Date().toISOString();
    data.createdBy = user.fullname;
    data.patientId = user.uid;
    data.updatedAt = new Date().toISOString();
    data.updatedBy = user.fullname;
    appointment_db
      .put(data)
      .then(() => {
        console.log(data);
        cb();
        _customNotify(
          'Appointment request sent, awaiting approval from the Doctor'
        );
        dispatch(getAppointments());
        dispatch(getPatientPendingAppt())
        let docNotificationObj = {
          uid: data.userId,
          read: false,
          title: 'New Appointment Request',
          message: `Hi, you have a new appointment request from ${
            user.fullname
          }`,
          type: notificationTypes.NEW_APPOINTMENT_REQUEST,
          appointmentId: UUIDV4(),
          timestamp: new Date().toISOString(),
        };
        let patientNotificationObj = {
          uid: data.patientId,
          read: false,
          title: 'Appointment Request sent',
          message: `Your appointment request has been sent to ${
            data.doctorName
          } pending approval`,
          type: notificationTypes.APPOINTMENT_SENT,
          appointmentId: UUIDV4(),
          timestamp: new Date().toISOString(),
        };
        createNotification(docNotificationObj);
        createNotification(patientNotificationObj);
      })
      .catch((err) => {
        cb();
        console.log('create note err ', err);
      });
  };
};
