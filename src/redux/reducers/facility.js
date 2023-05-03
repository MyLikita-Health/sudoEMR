import {
  GETTING_FACILITY_INFO,
  GET_FACILITY_INFO,
} from "../actions/actionTypes";

const initialState = {
  loadingInfo: false,
  info: {
    facility_id: "",
    facility_name: "MyLikita",
    code: "",
    logo: "",
    type: "",
    admin: "",
  },
};

function facilityReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_FACILITY_INFO:
      return {
        ...state,
        loadingInfo: !state.loadingInfo,
      };
    case GET_FACILITY_INFO:
      return {
        ...state,
        info: action.payload,
      };
    default:
      return state;
  }
}

export default facilityReducer;
