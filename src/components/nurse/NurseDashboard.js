import React from "react";
import { Route, Switch, Redirect } from "react-router";
import nursingRoutes, { NURSING_ROUTE_ROOT } from "./routes";

function NurseDashboard() {
  return (
    <Switch>
      <Redirect
        exact
        from={NURSING_ROUTE_ROOT}
        to={`${NURSING_ROUTE_ROOT}/vital-signs`}
        // to={`${NURSING_ROUTE_ROOT}/dashboard?section=in-patients`}
      />
      {nursingRoutes.map((route) => (
        <Route exact path={route.path} component={route.component} />
      ))}
    </Switch>
  );
}

export default NurseDashboard;
