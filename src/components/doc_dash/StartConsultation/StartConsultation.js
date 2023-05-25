import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';

import {
  // Form,
  // FormGroup,
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Button,
  ButtonGroup,
} from "reactstrap";

class StartConsultation extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader tag="h6">Start Consultation</CardHeader>
          <CardBody>
            <center>
              <ButtonGroup size="md">
                <Button
                  color="success"
                  outline
                  onClick={() => {
                    this.props.history.push("/me/doctors/onlineconsultation");
                  }}
                >
                  Online Consultation
                </Button>
                <Button
                  color="primary"
                  outline
                  onClick={() => {
                    this.props.history.push("/me/doctors/offlineconsultation");
                  }}
                >
                  Offline Consultation
                </Button>
              </ButtonGroup>
            </center>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default StartConsultation;
