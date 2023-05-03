import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchDocs from './SearchDocs';
import BookAppointment from './BookAppointment';
import UserNewAppointment from './UserNewAppointment';
import PatientWrapper from '../../../routes/PatientWrapper';
import PatientIndex from '../../user/patient-profile/PatientIndex';
import NotificationsContainer from '../../notifications';
import ReportIssues from '../../user/ReportIssues';

export default function PatientApp() {
  return (
    <PatientWrapper>
      <Switch>
        <Redirect exact from="/user" to="/user/appointments" />
        <Route path="/user/search" component={SearchDocs} />
        <Route exact path="/user/appointments" component={BookAppointment} />
        <Route
          exact
          path="/user/appointments/new"
          component={UserNewAppointment}
        />
        <Route
          exact
          path="/user/appointments/new/:docId"
          component={UserNewAppointment}
        />
        <Route path="/user/profile" component={PatientIndex} />
        <Route
          exact
          path="/user/notifications"
          component={NotificationsContainer}
        />
        <Route exact path="/user/issuereport" component={ReportIssues} />
      </Switch>
    </PatientWrapper>
  );
}
