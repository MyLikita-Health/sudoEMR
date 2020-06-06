import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import ModalPage from './ModalPage';
import DoctorsListModal from './DoctorsListModal';
import { RecordGuide } from '../Guides';
import image from './../../images/Record 1.png';
import PatientAssignedToday from './PatientAssignedToday';
import RenderPatientList from './RenderPatientList';
import { _fetchData, _deleteData, _updateData } from '../helpers';
import EditModal from './EditModal';

export default class Patientlist extends Component {
  constructor(props) {
    super(props);
    /**
     * setting the initial state of the component
     */
    this.state = {
      patientrecords: [],
      patientId: '',
      searchText: '',
      searchResult: [],
      editModalIsOpen: false,
      doctorsModalIsOpen: false,
      collapse: true,
      firstname: '',
      surname: '',
      gender: '',
      id: '',
      age: '',
      maritalstatus: '',
      dob: '',
      tribe: '',
      religion: '',
      phoneNo: '',
      email: '',
      nationality: '',
      state: '',
      lga: '',
      occupation: '',
      address: '',
      kinName: '',
      kinRelationship: '',
      kinPhone: '',
      kinEmail: '',
      kinOccupation: '',
      kinAddress: '',
      newListByDoctor: [],
      unassignedPatients: [],
      allpatientrecords: [],
      details: {},
      unassignedError: '',
      allPatientError: '',
    };
  }

  /**
   * method for opening the "edit modal"
   * the method passes the information about the patient
   * along from the parent component
   */
  openEditModal = (patient) => {
    console.log(patient);
    this.setState({
      editModalIsOpen: true,
      details: patient,
      filterText: '',
    });
  };
  //   To Close The Edit Modal
  closeModal = () => {
    this.setState({
      editModalIsOpen: false,
    });
  };
  //   to open the assignTo modal
  openDoctorsModal = (id) => {
    this.setState({
      patientId: id,
      doctorsModalIsOpen: true,
    });
  };

  // closing the assignTo modal
  closeDoctorsModal = () => {
    this.setState({
      doctorsModalIsOpen: false,
    });
    window.location.reload();
  };

  // onClick method for delete button
  deletepatientrecords = (patientrecords) => {
    let data = {
      id: patientrecords.id,
    };
    let route = 'patientrecords/delete';
    let cb = () => this.setState({ msg: 'User has been deleted.' });

    _deleteData({ route, data, cb });
  };

  // fetching the data to display on componentDidMount using the
  // helper function _fetchData()
  fetchData() {
    let route = 'patientrecords/unassignedPatientlist';

    let success_callback = (data) => {
      //  console.log(data)
      this.setState({ patientrecords: data });
    };
    let error_callback = (error) => this.setState({ unassignedError: error });
    _fetchData({ route, success_callback, error_callback });
  }

  fetchAll = () => {
    let route = 'patientrecords/patientlist';

    let success_callback = (data) =>
      this.setState({ allpatientrecords: data.results });
    let error_callback = (error) => this.setState({ allPatientError: error });
    _fetchData({ route, success_callback, error_callback });
  };

  //when component has been mounted
  componentDidMount() {
    //fetch the list of unassigned patients
    this.fetchData();
    //fetch all the patients list
    this.fetchAll();
  }

  //method for setting gender in the edit modal
  setGender = (e) => {
    this.setState({ gender: e.target.value });
  };

  //onChange method for updating the state as soon as the value
  logChange = (e) => {
    this.setState({ [e.target.ref]: e.target.value });
  };

  /**
   * to render the newly added patient in the patientList after
   * the modal has been closed
   */
  receiveState = (data) => {
    this.setState((prevState) => ({
      patientrecords: prevState.patientrecords.concat(data),
    }));
  };

  //this method sets the value of the filter text
  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  getUnassignedPatients = (doctor) => {
    const patientrecords = this.state.allpatientrecords;
    const unassignedPatients = patientrecords.filter(
      (f) => f.assigned_to === `${doctor}`
    );
    this.setState({ unassignedPatients: unassignedPatients });
    // console.log(this.state.unassignedPatients)
  };

  getNewListByDoctor = (doctor) => {
    this.getUnassignedPatients(doctor);
    this.setState({ collapse: false });
  };

  render() {
    return (
      <div className="row" style={{ backgroundColor: '#ffffff' }}>
        {/* first empty column */}
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          {/* component to render user's guide */}
          <RecordGuide />
          {/* component to render the table show patients assigned to doctors
                    on a current day */}
          <PatientAssignedToday getNewListByDoctor={this.getNewListByDoctor} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
          <div className="">
            {/* modal component to add a new patient  */}
            <ModalPage receiveState={this.receiveState.bind(this)} />
          </div>

          <br />

          <Collapse isOpen={this.state.collapse}>
            <div className="render-patient-list">
              {/* this component renders the table of patients displaying some details */}
              <RenderPatientList
                patientlist={this.state.patientrecords}
                error={this.state.unassignedError}
                openDoctorsModal={this.openDoctorsModal}
                openModal={this.openEditModal}
                filterText={this.state.filterText}
                renderEditButton={true}
                /*
                    this part is used to enable in-records delete operations
                    to activate this action, uncomment the code below
                */
                // deletepatientrecords={this.deletepatientrecords}
              />
            </div>
          </Collapse>

          <Collapse isOpen={!this.state.collapse}>
            {/* this component renders the table consisting patietns assigned
                        to a particular patient */}
            <RenderPatientList
              patientlist={this.state.unassignedPatients}
              openDoctorsModal={this.openDoctorsModal}
              openModal={this.openEditModal}
              renderEditButton={false}
              error={this.state.allPatientError}
              /*
                  this part is used to enable in-records delete operations
                  to activate this action, uncomment the code below
              */
              // deletepatientrecords={this.deletepatientrecords}
            />
          </Collapse>

          {/* this component opens when the "Assign Doctor" button clicked
                    it allows user to assign doctor to a patient */}
          <DoctorsListModal
            patientId={this.state.patientId}
            doctorsModalIsOpen={this.state.doctorsModalIsOpen}
            closeDoctorsModal={this.closeDoctorsModal}
          />

          <br />
        </div>

        {/* empty column by right  */}
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          {/* image displayed by the side of the Records Module */}
          <img src={image} alt="module-pic" className="module-pic" />
        </div>

        {/* <MyForm /> */}
        {/* this modal renders the edit modal when you click on "edit" button on a user
                this modal allows you to edit information about a particular patient */}
        <EditModal
          editModalIsOpen={this.state.editModalIsOpen}
          closeEditModal={this.closeModal}
          details={this.state.details}
        />
      </div>
    );
  }
}
