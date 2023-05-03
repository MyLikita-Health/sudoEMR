import React from 'react'
import { Route, Switch } from 'react-router'
import { Row, Col } from 'reactstrap'
import useQuery from '../../hooks/useQuery'
// import InPatientList from '../doc_dash/visits/components/InPatientList'
import PatientList from '../doc_dash/visits/components/PatientList'
import Landing from './dashboard/Landing'
import LeftMenuBar from './dashboard/LeftMenuBar'
// import DrugSchedule from './drug-schedule/DrugsSchedule'
import InPatientTable from './InPatientTable'
import OutPatient from './out-patients'
import NursingPatientDashboard from './patient-dashboard'
import  { NURSING_ROUTE_ROOT } from './routes'

function MainNursingDashboard() {
  const query = useQuery()
  const section = query.get('section')
  return (
    <Row className="m-0">
      <Col md={3} className="p-0">
        <LeftMenuBar />
        {section === 'out-patients' ? <PatientList /> : <InPatientTable />}
      </Col>
      <Col className="m-0 p-0 row">
        <Switch>
          <Route
            exact
            path={`${NURSING_ROUTE_ROOT}/view-patient-details/:patientId`}
            component={NursingPatientDashboard}
          />
          <Route
            exact
            path={`${NURSING_ROUTE_ROOT}/out-patient-prescriptions`}
            component={OutPatient}
          />
          <Route
            exact
            path={`${NURSING_ROUTE_ROOT}/dashboard`}
            component={Landing}
          />

          {/* {nursingRoutes.map((route) => (
            <Route exact path={route.path} component={route.component} />
          ))} */}
        </Switch>
      </Col>
    </Row>
  )
}

export default MainNursingDashboard
