import React from 'react'
import { connect } from 'react-redux'
import { Collapse } from 'reactstrap'
// import { DoctorGuide } from '../Guides';
// import { getInventory } from '../../redux/actions/pharmacy'
import { getPatientAssignedToDoctor } from '../../redux/actions/diagnosis'

import AssignedList from './AssignedList'
import PreviousVisits from './PreviousVisits'
import DoctorDashboard from './DoctorDashboard'
import EncounterPreview from './PreviewForm'

class Doctor extends React.PureComponent {
  state = {
    collapse: false,
    error: '',
    fullDiagnosis: [],
    patientrecords: [],
    currentRecord: {},
  }

  toggle = (currentRecord) => {
    // we fetch the diagnosis passing the patient id
    // this.fetchDiagnosis(currentRecord.id);
    // this.back();
    // this.setState({
    //     currentRecord,
    //     id: currentRecord.id
    // });
  }

  toggleCollapse = () => this.setState((prev) => ({ collapse: !prev.collapse }))

  //closes the collapse
  handleCancel = (e) => {
    e.preventDefault()
    this.setState({ collapse: true })
  }

  componentDidMount() {
    // const { getDrugsList } = this.props
    // getDrugsList()
    // getPatientAssignedToDoc(username);
  }

  render() {
    const {
      toggleCollapse,
      // props: {},
      state: { collapse },
      props: { patient },
    } = this
    return (
      <div className="row" style={{ margin: 0, padding: 0 }}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          {/* <DoctorGuide /> */}
          <Collapse isOpen={!collapse}>
            {/* 
                This component display the list of patients assigned to the current
                doctor 
            */}
            <AssignedList toggle={toggleCollapse} />
          </Collapse>
          <Collapse isOpen={collapse}>
            {/* 
                This component consists of the previous visits record for 
                the patient whose name was clicked upon.
            */}
            <PreviousVisits toggle={toggleCollapse} />
          </Collapse>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <DoctorDashboard />
        </div>
        {patient.id ? (
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <EncounterPreview height="90vh" />
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = ({ auth, doctor }) => ({
  username: auth.user.username,
  patient: doctor.patient,
})

const mapDispatchToProps = (dispatch) => ({
  // getDrugsList: () => dispatch(getInventory()),
  getPatientAssignedToDoc: (data) => dispatch(getPatientAssignedToDoctor(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Doctor)
