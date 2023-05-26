import React from "react";
import SearchPatient from "../../comp/components/SearchPatient";
import { Card } from "reactstrap";
import { useHistory } from "react-router";
// import { useDispatch } from 'react-redux';

function VideoChat() {
  const history = useHistory();
  // const dispatch = useDispatch();
  return (
    <Card body>
      <h5>Select a patient to initiate a call with</h5>
      <SearchPatient
        onChange={(patient) => {
          // console.log(patient)
          history.push(
            `/me/doctors/visits/new/${patient.id}/history/presentingcomplaints`
          );
          // dispatch(toggleVideoView(true));
        }}
      />
    </Card>
  );
}

export default VideoChat;
