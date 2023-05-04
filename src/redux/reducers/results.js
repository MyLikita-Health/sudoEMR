import { RESULT_VIEW } from '../actions/types'

const initialState = {
  view: {},
  data: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESULT_VIEW:
      return {
        ...state,
        view: action.payload,
      }

    default:
      return state
  }
}
