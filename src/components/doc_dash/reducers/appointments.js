import { LOADING_UNAPPROVED_APPT, GET_UNAPPROVED_APPT } from '../types';

const initialState = {
  loadingUnapproved: false,
  unApprovedAppts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_UNAPPROVED_APPT:
      return {
        ...state,
        loadingUnapproved: !state.loadingUnapproved,
      };
    case GET_UNAPPROVED_APPT:
      return {
        ...state,
        unApprovedAppts: action.payload,
      };
    default:
      return state;
  }
};
