import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { hasAccess } from "../components/auth";
import AuthWrapper from "./AuthWrapper";
import RecordsDashboard from "../components/record/RecordsDashboard";
import Doctor from "../components/doc_dash";
import Nurse from "../components/nurse/Nurse";
import Admin from "../components/admin/Admin";
import ReportIssues from "../components/user/ReportIssues";
import Profile from "../components/user/Profile";
import Report from "../components/report/Report";
import { NURSING_ROUTE_ROOT } from "../components/nurse/routes";
import AppointmentsIndex from "../components/appointments";
import CustomScrollbar from "../components/comp/components/CustomScrollbar";

const AuthenticatedContainer = ({ user = {} }) => {
  return (
    <AuthWrapper>
      <CustomScrollbar height="95vh">
        <Switch>
          {/* <Redirect from='/me' to='/me/records' exact /> */}
          {user.accessTo
            ? hasAccess(user, ["Records"]) && (
                <Route
                  path="/me/records"
                  render={(props) => <RecordsDashboard {...props} />}
                />
              )
            : null}

          {user.accessTo
            ? hasAccess(user, ["Doctors"]) && (
                <Route
                  path="/me/doctor"
                  render={(props) => <Doctor {...props} />}
                />
              )
            : null}

          {user.accessTo
            ? hasAccess(user, ["Nurse"]) && (
                // <Route path="/me/nurse" component={Nurse} />
                <Route
                  path={NURSING_ROUTE_ROOT}
                  render={(props) => <Nurse {...props} />}
                />
              )
            : null}
          {user.accessTo
            ? hasAccess(user, ["Admin"]) && (
                <Route
                  path="/me/admin"
                  render={(props) => <Admin {...props} />}
                />
              )
            : null}

          <Route path="/me/report" render={(props) => <Report {...props} />} />

          <Route
            exact
            path="/me/report_issues"
            render={(props) => <ReportIssues {...props} />}
          />
          <Route
            exact
            path="/me/profile"
            render={(props) => <Profile {...props} />}
          />

          <Route
            path="/me/appointments"
            render={(props) => <AppointmentsIndex {...props} />}
          />
        </Switch>
      </CustomScrollbar>
    </AuthWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(AuthenticatedContainer);
