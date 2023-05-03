import React from 'react'
import { useNavigate } from 'react-router-dom'
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
  ButtonGroup,
} from 'reactstrap'

function ViewAppointment() {
  const navigate = useNavigate()
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <center>
                {' '}
                <CardHeader>View Appointment</CardHeader>
              </center>
              <CardBody>
                <Button
                  onClick={() => navigate('/appointment')}
                  className="mt-3"
                >
                  Back
                </Button>
                <Row className="mt-3">
                  <Col md="10">
                    <p>
                      <b>Patient Name</b>: Halifan Putin
                    </p>
                    <p>
                      <b>Preferred Location</b>: Prime Specialist
                    </p>
                    <p>
                      <b>Department/ Speciality</b>: Neurosurgery
                    </p>
                    <p>
                      <b>Preferred Doctor</b>: Dr Nagudu
                    </p>
                    <p>
                      <b>Other Notes</b>: Some Information Required From
                    </p>
                    <p>The Patient Befor The Appointment Date</p>
                  </Col>
                  <Col md="2">
                    <Col className="mb-3">
                      <Input type="datetime-local" />
                    </Col>

                    <Button className="mb-3">Reschedule</Button>
                    <Button className="mb-3">cancel</Button>
                    <Button className="mb-3">Send Remainder</Button>
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

export default ViewAppointment
