// a few api methods for the admin dashboard

import { appointment_db } from '../../components/doc_dash/actions/appointmentsAction';
import {
  LOADING_ADMIN_ALL_APPOINTMENT_LIST,
  GET_ADMIN_ALL_APPOINTMENT_LIST,
} from './actionTypes';

// get count of all created appointment
// get count of all created online appointment
// get count of all created offline appointment
// get count of all patient created appointment

// get list of all appointment
export const allAppointments = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_ADMIN_ALL_APPOINTMENT_LIST });
    appointment_db
      .find({
        selector: { createdAt: { $gte: null } },
        fields: [
          '_id',
          'doctorName',
          'createdBy',
          'start',
          'location',
          'createdAt',
          'updatedAt',
        ],
      })
      .then(({ docs }) => {
        console.log(docs);
        let data = {};
        data.total = docs.length;
        data.all = docs;
        let online = 0;
        let offline = 0;
        docs.forEach((item) => {
          if (item.location === 'online') {
            online += 1;
          } else {
            offline += 1;
          }
        });
        data.online = online;
        data.offline = offline;

        dispatch({ type: LOADING_ADMIN_ALL_APPOINTMENT_LIST });
        dispatch({
          type: GET_ADMIN_ALL_APPOINTMENT_LIST,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOADING_ADMIN_ALL_APPOINTMENT_LIST });
      });
  };
};
