import React, { useState } from 'react'
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
  InputGroup,
  InputGroupText,
} from 'reactstrap'

function SendMessge() {
  const navigate = useNavigate()
  const [sms, setSms] = useState()
  const handleSms = () => {
    setSms(
      <Col md="5">
        <InputGroup>
          <InputGroupText>+1234</InputGroupText>
          <Input type="number" />
        </InputGroup>
      </Col>,
    )
  }
  const [email, setEmail] = useState()
  const handleEmail = () => {
    setEmail(
      <Col md="5">
        <Label>Email</Label>
        <Input type="text" />
      </Col>,
    )
  }
  const [Push, usePush] = useState()
  const handlePush = () => {
    ;<></>
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <center>
                <CardHeader>Send Messege</CardHeader>
              </center>
              <CardBody>
                <Button
                  onClick={() => navigate('/appointment')}
                  className="mt-3"
                >
                  Back
                </Button>
                <Row className="mt-4">
                  <Col md="7">
                    <Col md="7">
                      <Label>Select Patient</Label>
                      <Input type="select">
                        <option></option>
                      </Input>
                    </Col>

                    <Col md="7">
                      <Label>Messege Tille</Label>
                      <Input type="text" />
                    </Col>

                    <Col md="7">
                      <Label>Messege Body</Label>
                      <Input type="textarea" />
                    </Col>
                  </Col>
                  <Col md="5">
                    <h5>Messege type</h5>
                    <Row>
                      <Col md="4">
                        <Input
                          type="radio"
                          name="gender"
                          onClick={handleSms}
                          value=" SMS"
                          checked
                        />
                        SMS
                      </Col>
                      <Col md="4">
                        <Input
                          type="radio"
                          name="gender"
                          onClick={handleEmail}
                          value="Email"
                        />
                        Email
                      </Col>

                      <Col md="4">
                        <Input
                          type="radio"
                          name="gender"
                          onClick={handlePush}
                          value="Push Notification"
                        />
                        Push Notification
                      </Col>
                    </Row>
                    {sms}

                    {email}
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

export default SendMessge
