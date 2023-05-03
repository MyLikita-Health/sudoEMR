import { TOGGLE_MOBILE_VIEW } from '../actions/types';

const initialState = {
  isMobile: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_VIEW:
      return {
        ...state,
        isMobile: action.payload,
      };

    default:
      return state;
  }
};
