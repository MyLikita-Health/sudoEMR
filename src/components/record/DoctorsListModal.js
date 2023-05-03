import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBar from "./SearchBar";
// import Notifications, { notify } from 'react-notify-toast';
import { _postData, _customNotify, _warningNotify } from "../utils/helpers";
import { getDoctors } from "../../redux/actions/auth";
import { getPatientAssignedToday } from "../../redux/actions/diagnosis";
import { compose } from "redux";
import BackButton from "../comp/components/BackButton";
import { assignPatient } from "./actions/patientsActions";
import { Card } from "reactstrap";

import DoctorsTable from "./doctors/DoctorList";

/**
 * This component renders the table and the search text field
 * It also fetches the data that is being displayed on the table
 * It is rendered as a modal page
 */
class DoctorsListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      doctorsList: [],
      id: "",
      name: "",
      date: "",
      error: "",
    };
  }

  //the method that fetches the data using fetch API
  // fetchData = () => {
  //   let route = 'users/doctorsList';
  //   let success_callback = data => this.setState({ doctorsList: data })
  //   let error_callback = error => this.setState({ error })
  //   _fetchData({ route, success_callback, error_callback})
  // };

  //when component is mounted, the data is displayed
  componentDidMount() {
    this.props.getDoctors();

    // this.fetchData();
  }

  // this handles the search filter text field change
  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  /**
   * on clicking the assign doctor, this submit the form
   * where we assigned a doctor to a patient
   */
  assignDoctor = (name) => {
    console.log(this.props)
    var data = {
      assigned_to: name,
      id: this.props.patientId,
    };

    let route = "patientrecords/assign";
    let callback = () => {
      /**
       * this part implement the notification that pops up
       * after we have assigned a patient to a doctor.
       * The notification color was set with the variable myColor above.
       */
      this.props.updateUnassignedTable(data);
      _customNotify(
        `Patient with id: ${
          this.props.patientId
        } has been assigned to Dr. ${name}!`
      );
      // this.props.getPatientAssignedToday()
    };

    let error_cb = (error) => {
      return _warningNotify(`Bad response from server`);
    };

    _postData({ route, data, callback, error_cb });

    this.props.closeDoctorsModal();
  };

  render() {
    const patientId = this.props.match.params.id;
    const doctorId = this.props.match.params.id;
    
    return (
      <>
        <BackButton />
        <Card className="p-2 pt-0">
          {/* <Modal
          isOpen={this.props.doctorsModalIsOpen}
          toggle={this.props.closeDoctorsModal}
          size="lg"> */}
          {/* <ModalHeader toggle={this.props.closeDoctorsModal} tag="h6">
            Assign a doctor to {this.props.patientId}
          </ModalHeader>
          <ModalBody> */}
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
            placeholder="Search for a specialist..."
            // width="60rem"
            size={45}
          />
          <br />
          {/* This renders the table displaying the list doctor */}
            <DoctorsTable
              doctorsList={this.props.doctorsList}
              filterText={this.state.filterText}
              assignDoctor={this.assignDoctor}
              assignPatient={this.props.assignPatient}
              patientId={patientId}
              doctorId={doctorId}
            />
         {/*  <button
            onClick={this.props.closeDoctorsModal}
            className="btn btn-secondary btn-sm"
          >
            Next Patient
          </button>
          </ModalBody>
        </Modal> */}
        </Card>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    doctorsList: state.auth.doctors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDoctors: () => dispatch(getDoctors()),
    getPatientAssignedToday: () => dispatch(getPatientAssignedToday()),
    assignPatient: (patientId, doctorId, callback) =>
      dispatch(assignPatient(patientId, doctorId, callback)),
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DoctorsListModal);
