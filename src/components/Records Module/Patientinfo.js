import React, { Component } from 'react';

import { Form, FormGroup, Container, Row, Col, Label, Input } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './Style/App.css';

class PatientForm extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <Container className="Container">
        <Row>
          <Form className="">
            <FormGroup>
              <Col sm={5}>
                <br />

                <Label className="imageFig">
                  {' '}
                  Upload Passport Here...
                  <Input type="file" ref="Imagefile" className="ImgFile" />
                </Label>
              </Col>
              <Col sm={2}>
                <br />
              </Col>

              <Col sm={5}>
                <br />
                <Label>Date</Label>
                <Input
                  type=""
                  ref="Date"
                  className="Form-control"
                  placeholder="Date"
                />
                {/* <FormText color="muted">
                        Upload Passport Here...
                        </FormText> */}
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label>Surname:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Firstname:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Gender:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Age:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Marital Status:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Date of Birth:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Tribe:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Religion:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Phone Number:</Label>
            </FormGroup>
            <FormGroup row>
              <Label>Email:</Label>
            </FormGroup>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default PatientForm;
