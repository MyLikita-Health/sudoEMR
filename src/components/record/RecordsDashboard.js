import React from "react";
import { Route, Switch, Redirect } from "react-router";
import BedAllocation from "./bed-allocation";
import Patientlist from "./Patientlist";

function RecordsDashboard() {
  return (
    <Switch>
      <Redirect exact from="/me/records" to="/me/records/patients/list" />
      <Route path="/me/records/patients" component={Patientlist} />
      <Route path="/me/records/beds-allocation" component={BedAllocation} />
    </Switch>
  );
}

export default RecordsDashboard;
