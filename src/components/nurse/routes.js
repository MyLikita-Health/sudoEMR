import React from 'react'
// import { FaCapsules } from "react-icons/fa";
import { GiHealthIncrease } from 'react-icons/gi'
// import { GoRequestChanges } from "react-icons/go";
import { MdReport } from 'react-icons/md'
import ViewSchedule from './drug-schedule/ViewSchedule'
// import InPatientTable from './InPatientTable'
import NewVitalSigns from './NewVitalSigns'
import DressingRequest from './DressingRequest'
// import DrugsSchedule from './drug-schedule/DrugsSchedule'
import NursingReport from './NursingReport'
import OutPatients from './out-patients'
// import NursingRequests from './nursing-requests'
// import InPatientsContainer from './InPatientsContainer'
import NursingPatientDashboard from './patient-dashboard'
import VisitPreview from '../doc_dash/visits/components/VisitPreview'
// import MainNursingDashboard from './MainDashboard'
import Landing from './dashboard/Landing'

export const NURSING_ROUTE_ROOT = '/me/nurse'

const nursingRoutes = [
  // {
  //   path: `${NURSING_ROUTE_ROOT}/dashboard`,
  //   title: 'Dashboard',
  //   icon: () => <GiHealthIncrease size={26} style={{ marginRight: 10 }} />,
  //   component: MainNursingDashboard,
  // },
  {
    path: `${NURSING_ROUTE_ROOT}/vital-signs`,
    title: 'In-Patients',
    icon: () => <GiHealthIncrease size={26} style={{ marginRight: 10 }} />,
    component: Landing,
  },
  // {
  //   path: `${NURSING_ROUTE_ROOT}/dressing-requests`,
  //   title: "Dressing Request",
  //   icon: () => <GoRequestChanges size={26} style={{ marginRight: 10 }} />,
  //   component: DressingRequest,
  // },
  // {
  //   path: `${NURSING_ROUTE_ROOT}/drug-schedule`,
  //   title: 'Drug Schedule',
  //   icon: () => <MdSchedule size={26} style={{ marginRight: 10 }} />,
  //   component: DrugsSchedule,
  // },
  // {
  //   path: `${NURSING_ROUTE_ROOT}/nursing-requests`,
  //   title: 'Nursing Requests',
  //   icon: () => <MdReport size={26} style={{ marginRight: 10 }} />,
  //   component: NursingPatientDashboard,
  // },
  {
    path: `${NURSING_ROUTE_ROOT}/out-patient-prescriptions`,
    // title: 'Out-Patient Prescriptions',
    // icon: () => <MdSchedule size={26} style={{ marginRight: 10 }} />,
    component: OutPatients,
  },
  {
    path: `${NURSING_ROUTE_ROOT}/nursing-report`,
    title: 'Nursing Report',
    icon: () => <MdReport size={26} style={{ marginRight: 10 }} />,
    component: NursingReport,
  },

  {
    path: `${NURSING_ROUTE_ROOT}/vital-signs/new-vitals`,
    component: NewVitalSigns,
  },
  {
    path: `${NURSING_ROUTE_ROOT}/vital-signs/nursing-dressing-requests`,
    component: DressingRequest,
  },
  {
    path: `${NURSING_ROUTE_ROOT}/drug-schedule/view`,
    component: ViewSchedule,
  },
  {
    path: `${NURSING_ROUTE_ROOT}/nursing-requests/:patientId`,
    component: NursingPatientDashboard,
  },
  {
    path: `${NURSING_ROUTE_ROOT}/documentation/:patientId`,
    component: VisitPreview,
  },
]

export default nursingRoutes
