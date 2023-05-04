import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { getPatient, toggleVideoView } from "../actions/patientsActions";
// import SpeechRecognitionGuide from "./SpeechRecGuide";
// import { CardHeader } from "reactstrap";

import DoctorDashboard from "../../doctor/PatientDiagnosis"
import EncounterPreview from "../../doctor/PreviewForm"

function NewVisit() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { patientId } = match.params;
  const patientDetails = useSelector(
    (state) => state.individualDoc.selectedPatient
  );
  const isMobile = useSelector((state) => state.app.isMobile);
  // const videoIsOpen = (state) => state.individualDoc.videoIsOpen;
  // const [showVid, toggleVid] = useState(false);

  const _toggleVideoView = () => dispatch(toggleVideoView());

  useEffect(
    () => {
      // console.log('heereeee', patientId)
      dispatch(getPatient(patientId));
    },
    [dispatch, patientId]
  );

  return (
    <div className="row m-0 p-0">
      {/* <CardHeader tag="h6">{JSON.stringify(patientDetails)}</CardHeader> */}
    {/* <div className="col-md-2 mx-0">
      <SpeechRecognitionGuide />
    </div> */}
      <div className={"col-md-8 col-lg-8"}>
          <DoctorDashboard patient={patientDetails} />
      </div>
      {!isMobile && (
        <div className={"col-md-4 col-lg-4 m-0"}>
            <EncounterPreview height="85vh" toggleVid={_toggleVideoView} />
        </div>
      )}
    </div>
  );
}

export default NewVisit;
// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(
// );
