import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ManageDoctor from "./ManageDoctor";
import ManagePatient from "./ManagePatients";
import { Row, Col } from "reactstrap";

function ManageAdmin() {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <Link to="/me/doctors/manage/managedoctor">
            {" "}
            <Button outline color="primary" className="mt-2 btn-block">
              {" "}
              Registered Doctors
            </Button>
          </Link>
          <Link to="/me/doctors/manage/managepatient">
            <Button outline color="primary" className="mt-2 btn-block">
              {" "}
              Registered Patient
            </Button>
          </Link>
        </Col>
        <Col md={8}>
          <Card className="mt-2">
            <CardBody>
              <Scrollbars style={{ height: "85vh" }}>
                <Switch>
                  <Redirect
                    exact
                    path="/me/doctors/manage"
                    to="/me/doctors/manage/managepatient"
                  />
                  <Route
                    exact
                    path="/me/doctors/manage/managedoctor"
                    component={ManageDoctor}
                  />
                  <Route
                    exact
                    path="/me/doctors/manage/managepatient"
                    component={ManagePatient}
                  />
                </Switch>
              </Scrollbars>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ManageAdmin;
