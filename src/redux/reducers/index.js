import { combineReducers } from 'redux'
import appReducer from './app'
import authReducer from './auth'
import recordsReducer from './records'
import transactionsReducer from './transactions'
import servicesReducer from './services'
import doctorReducer from './doctor'
import diagnosisReducer from './diagnosis'
import labReducer from './lab'
import facilityReducer from './facility'
import individualDocReducer from '../../components/doc_dash/reducers/patientReducer'
import appointmentReducer from '../../components/doc_dash/reducers/appointments'
import notificationReducer from './notifications'
import patientAppointmentReducer from '../../components/patient/reducers/patientAppointment'
import adminReducer from './admin'
import resultsReducer from './results'
import pharmacyReducer from './pharmacy'

const rootReducer = combineReducers({
  app: appReducer,
  facility: facilityReducer,
  auth: authReducer,
  records: recordsReducer,
  transactions: transactionsReducer,
  services: servicesReducer,
  doctor: doctorReducer,
  diagnosis: diagnosisReducer,
  loadingBar: {},
  lab: labReducer,
  individualDoc: individualDocReducer,
  appointment: appointmentReducer,
  notifications: notificationReducer,
  patientAppointment: patientAppointmentReducer,
  admin: adminReducer,
  result: resultsReducer,
  pharmacy:pharmacyReducer
});

export default rootReducer
