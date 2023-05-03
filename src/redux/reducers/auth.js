import {
  LOGIN,
  ERROR,
  LOADING,
  LOGOUT,
  LOADING_AVATAR,
  LOAD_AVATAR,
  CREATING_USER,
  ERROR_CREATING_USER,
  GET_ROLES,
  GET_USERS,
  GET_DOCTORS_LIST,
  GET_DOC_LIST_LOADING,
  GET_APPROVED_DOCTORS,
  LOADING_APPROVED_DOCTORS,
} from '../actions/types'
// import { persistentDocumentReducer } from 'redux-pouchdb';

// import { db } from '../store';

const defaultState = {
  authenticated: false,
  user: {},
  token: null,
  error: '',
  ids: [],
  loadingAvatar: false,
  creatingUser: false,
  createUserError: '',
  gettingDoctors: false,
  roles: [],
  users: [],
  doctors: [],
  approvedDoctors: [],
  loadingApprovedDoc: false,
  fullPageLoading: false,
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: {
      return Object.assign({}, state, {
        authenticated: true,
        user: Object.assign({}, state.user, action.payload.user),
        token: action.payload.token,
        error: '',
      })
    }

    case LOGOUT: {
      return {
        ...state,
        authenticated: false,
        user: {},
        token: null,
      }
    }

    case ERROR: {
      const { payload } = action
      return Object.assign({}, state, {
        error: payload,
      })
    }

    case LOADING: {
      return Object.assign({}, state, {
        loading: !state.loading,
      })
    }

    case LOADING_AVATAR:
      return {
        ...state,
        loadingAvatar: !state.loadingAvatar,
      }

    case LOAD_AVATAR:
      return {
        ...state,
        user: { ...state.user, avatar: action.avatar },
      }

    case CREATING_USER:
      return {
        ...state,
        creatingUser: !state.creatingUser,
      }

    case ERROR_CREATING_USER:
      return {
        ...state,
        creatingUser: false,
        createUserError: action.payload,
      }

    case GET_ROLES:
      return {
        ...state,
        roles: action.payload,
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case GET_DOCTORS_LIST:
      return {
        ...state,
        doctors: action.payload,
      }
    case GET_DOC_LIST_LOADING:
      return {
        ...state,
        gettingDoctors: !state.gettingDoctors,
      }
    case GET_APPROVED_DOCTORS:
      return {
        ...state,
        approvedDoctors: action.payload,
      }
    case LOADING_APPROVED_DOCTORS:
      return {
        ...state,
        loadingApprovedDoc: !state.loadingApprovedDoc,
      }
    case 'START_FULL_PAGE_LOADING':
      return { ...state, fullPageLoading: true }
    case 'STOP_FULL_PAGE_LOADING':
      return { ...state, fullPageLoading: false }

    default:
      return state
  }
}

export default authReducer
// const reducerName = 'auth';

// export default persistentDocumentReducer(db, reducerName)(authReducer);
