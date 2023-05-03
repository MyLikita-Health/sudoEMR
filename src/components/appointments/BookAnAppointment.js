import React from 'react'
import Appointment from './Appointment'
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  CardFooter,
  Label,
  Container,
  Table,
} from 'reactstrap'
import { useNavigate } from 'react-router-dom'

function BookAnAppointment() {
  const navigate = useNavigate()

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <center>
                <CardHeader>Book An Appointment</CardHeader>
              </center>
              <CardBody>
                <Button
                  onClick={() => navigate('/appointment')}
                  className="mt-3"
                >
                  Back
                </Button>
                <Row>
                  <Col md="6">
                    <Label>Patient Name</Label>
                    <Input type="text" />
                  </Col>
                  <Col md="6">
                    <Label>Purpose</Label>
                    <Input type="select">
                      <option></option>
                    </Input>
                  </Col>
                  <Col md="6">
                    <Label>Preferred Date</Label>
                    <Input type="date" />
                  </Col>
                  <Col md="6">
                    <Label>Preferred Location</Label>
                    <Input type="select">
                      <option></option>
                    </Input>
                  </Col>
                  <Col md="6">
                    <Label>Department/ Speciality</Label>
                    <Input type="select">
                      <option></option>
                    </Input>
                  </Col>
                  <Col md="6">
                    <Label>Select Docter (Option)</Label>
                    <Input type="select">
                      <option></option>
                    </Input>
                  </Col>
                  <Col md="6">
                    <Label>Other Noise</Label>
                    <Input type="textarea" />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BookAnAppointment
