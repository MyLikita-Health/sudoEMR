import React from 'react'
import { Route, Switch } from 'react-router'
// import ViewCompletedLabResults from '../../lab/ViewCompletedLabResult'
import AllLabRequests from './AllLabRequests'
import NewLab from './NewLab'

export const DOCTOR_LAB_ROUTE = '/me/doctor/labs'

function Lab() {
  return (
    <>
      <Switch>
        <Route exact path={DOCTOR_LAB_ROUTE} component={AllLabRequests} />
        {/* <Route
          exact
          path={`${DOCTOR_LAB_ROUTE}/view/:patientId/:labNo`}
          component={(props) => <ViewCompletedLabResults {...props} />}
        />
        <Route
          exact
          path={`${DOCTOR_LAB_ROUTE}/uncompleted/:patientId/:labNo`}
          component={(props) => <ViewCompletedLabResults {...props} />}
        /> */}
        <Route
          exact
          path="/me/doctor/labs/new"
          component={(props) => <NewLab {...props} />}
        />
        <Route
          exact
          path="/me/doctor/labs/new/:patientId"
          component={(props) => <NewLab {...props} />}
        />
      </Switch>
    </>
  )
}

export default Lab
