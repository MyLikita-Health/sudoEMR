import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Container,
  Table,
  ButtonGroup,
} from 'reactstrap'
import { useHistory } from 'react-router-dom'

function Appointment() {
  const history = useHistory()
  return (
    <div>
      <Row>
        <Col>
          <Container>
            <Card>
              <center>
                <CardHeader>Appointment</CardHeader>
              </center>
              <CardBody>
                <div>
                  <Button
                    style={{ margin: '0em' }}
                    onClick={() => history.push('/me/appointments/bookanappointment')}
                  >
                    Add New
                  </Button>
                  <Button style={{ margin: '1em' }}>View Calendar</Button>
                  <Button onClick={() => history.push('/me/appointments/sendmessge')}>
                    Send Messege
                  </Button>
                </div>
                <Row className="mt-4">
                  <Table className="mt-4 table table-bordered">
                    <thead>
                      <tr>
                        <th>Patient ID</th>
                        <th>Purpose</th>
                        <th>Speciality</th>
                        <th>Other Senices</th>
                        <th>Amount</th>
                        <th>State</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>329-1</td>
                        <td>Consultation</td>
                        <td>Generic</td>
                        <td></td>
                        <td>5,000</td>
                        <td>Pending</td>
                        <td>
                          <Button onClick={() => history.push('/me/appointments/viewappointment')}>
                            View
                          </Button>
                          &nbsp;
                          <Button
                            onClick={() => history.push('/me/appointments/bookanappointment')}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </CardBody>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  )
}
export default Appointment
