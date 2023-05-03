import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default function LabDocAmt () {
    return (
        <>
            <Card body outline color="secondary" className="mt-3">
        <CardTitle tag="h6">My Monthly Amount Received</CardTitle>
        <CardText>
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>No Of Patients Seen: </span>
          <span> 24 </span>
        </CardText>
        <CardText>
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>
            Amount to be paid
          </span>
          <span> 40000</span>
        </CardText>
      </Card>
        </>
    )
}