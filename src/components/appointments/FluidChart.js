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
  InputGroup,
  InputGroupText,
} from 'reactstrap'

function FloridChart() {
  const navigate = useNavigate()
  return (
    <di>
      <Container>
        <Row>
          <Col>
            <Card>
              <center>
                <CardHeader>Flurid Chart</CardHeader>
              </center>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Label>type</Label>
                    <Input type="text" />
                  </Col>

                  <Col md="6">
                    <Label>Urine</Label>
                    <Input type="text" />
                  </Col>

                  <Col md="6">
                    <Label>Tule</Label>
                    <Input type="text" />
                  </Col>

                  <Col md="6">
                    <Label>Tube/Vomit</Label>
                    <Input type="text" />
                  </Col>

                  <Col md="6">
                    <Label>Oral</Label>
                    <Input type="text" />
                  </Col>

                  <Col md="6">
                    <Label>Faeces</Label>
                    <Input type="text" />
                  </Col>

                  <Col md="6">
                    <Label>VI</Label>
                    <Input type="text" />
                  </Col>

                  <Col md="6">
                    <Label>Type</Label>
                    <Input type="text" />
                  </Col>
                  <center>
                    {' '}
                    <Button className="mt-3">Save</Button>
                  </center>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </di>
  )
}

export default FloridChart
