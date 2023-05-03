import React, { useState } from 'react';
import {Card, CardHeader, Row, Col, Button} from 'reactstrap'
export default function PatientCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <Card style={{borderRadius: '10px 20px', padding: 3}}>
        <CardHeader>Pick The Date</CardHeader>

   
      <h4 className="ml-3 mt-2">Time</h4>
      <Row>
          <Col md={6}>
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                    <Button  color="link"className="nav-link active text-dark btn-block" data-toggle="tab" >8:00am</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >9:00am</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >10:00am</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >11:00am</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >12:00pm</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >1:00pm</Button>
                </li>
                </ul>

          </Col>

          <Col md={6}>
          <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                    <Button  color="link"className="nav-link active text-dark btn-block" data-toggle="tab" >With Adewale</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >No event</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >With Mustapha</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >Issa boy</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >Dangana</Button>
                </li>
                <li className="nav-item">
                    <Button color="link" className="nav-link text-dark btn-block" data-toggle="tab" >Ibrahim</Button>
                </li>
                </ul>
          </Col>
 
      </Row>

    </Card>
  );

}