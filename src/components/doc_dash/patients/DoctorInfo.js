import React, { Component } from 'react';
// import PublicNavbar from '../../../routes/PublicNav';
// import BackButton from '../../landing/BackButton';

import {
  Card,
  CardTitle,
} from 'reactstrap';
// import VideoChat from '../video-chat/VideoChat';

class Hospital extends Component {
  state = {};

  render() {
    return (
      <div>
        <Card body style={{ height: 500 }}>
          <CardTitle tag="h6" className="text-center">
            Doctors Information
          </CardTitle>
          <div>{/* <VideoChat /> */}</div>

          {/* <Card outline color="secondary" className="p-1" />

          <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">System Examination</CardText>
          </Card>

          <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">Vital Signs</CardText>
          </Card>

          <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">Problems</CardText>
          </Card>

          <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">Provisional Diagnosis</CardText>
          </Card>

          <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">Athropometry</CardText>
          </Card> */}

          {/* <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">Management Plan</CardText>
          </Card>

          <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">Prescriptions</CardText>
          </Card>

          <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">Laboratory Investigations</CardText>
          </Card>

          <Card className="p-1 mt-1 mr-1">
            <CardText tag="h6">Nursing/Dressing Request</CardText>
          </Card> */}

          <button className="btn btn-sm btn-outline-success">Submit</button>
        </Card>
      </div>
    );
  }
}

export default Hospital;
