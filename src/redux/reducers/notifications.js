import { LOADING_NOTIFICATIONS, GET_NOTIFICATIONS } from '../../components/doc_dash/types';

const initialState = {
  loadingNotifications: false,
  notifications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_NOTIFICATIONS:
      return {
        ...state,
        loadingNotifications: !state.loadingNotifications,
      };
    case GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };
    default:
      return state;
  }
};
