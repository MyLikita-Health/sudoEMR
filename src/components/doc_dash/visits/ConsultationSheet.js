import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  useRouteMatch } from 'react-router'
import { getPatient, getPatientList } from '../actions/patientsActions'
import ShortConsultationView from './ShortConsultationView'
// import { useQuery } from '../../../hooks'

function ConsultationSheet() {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const { patientId } = match.params
  // const patientDetails = useSelector(
  //   (state) => state.individualDoc.selectedPatient,
  // )
  // const isMobile = useSelector((state) => state.app.isMobile)
  // const videoIsOpen = (state) => state.individualDoc.videoIsOpen;
  // const [showVid, toggleVid] = useState(false);

  // const _toggleVideoView = () => dispatch(toggleVideoView())

  useEffect(() => {
    // console.log('heereeee', patientId)
    dispatch(getPatient(patientId))
    dispatch(getPatientList())
  }, [dispatch, patientId])
  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const query = useQuery()
  // const pageType = query.get('page_type')
  // const consultationType = query.get('consultation_type')
  // const assignmentId = query.get('assignment_id')
  // const section = query.get('section')
  // const history = useHistory()

  return (
    <div >
      {/* <CardHeader tag="h6">{JSON.stringify(patientDetails)}</CardHeader> */}
      

      <div >
        <ShortConsultationView />
        {/* <Switch> */}
        {/* <Route
            path="/me/doctor/visits/new-summary/:patientId"
            component={ShortConsultationView}
          />
          <Route
            path="/me/doctor/visits/view-visit/:patientId/:visitId"
            component={VisitPreview}
          /> */}
        {/* </Switch> */}
      </div>
      {/* {!isMobile && (
        <div className={'col-md-4 col-lg-4 m-0'}>
          <EncounterPreview height="85vh" toggleVid={_toggleVideoView} />
        </div>
      )} */}
    </div>
  )
}

export default ConsultationSheet
