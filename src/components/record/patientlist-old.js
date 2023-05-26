import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalPage from './ModalPage'
import DoctorsListModal from './DoctorsListModal'
import RenderPatientList from './RenderPatientList'
import { _deleteData, _customNotify, url } from '../utils/helpers'
import EditModal from './EditModal'
import PouchDB from 'pouchdb-browser'
import { toaster } from 'evergreen-ui'
import { getPatientAssignedToday } from '../../redux/actions/diagnosis'
import { _fetchApi } from '../../redux/actions/api'
import BedToggle from './bed-allocation/BedToggle'
import PatientAssignedToday from './PatientAssignedToday'

export const recordsDB = PouchDB('recordsDB')

class Patientlist extends Component {
  constructor(props) {
    super(props)
    /**
     * setting the initial state of the component
     */
    this.state = {
      patientrecords: [],
      unassignedPatientlistLoading: false,
      patientId: '',
      searchText: '',
      searchResult: [],
      editModalIsOpen: false,
      doctorsModalIsOpen: false,
      collapse: true,
      newListByDoctor: [],
      unassignedPatients: [],
      allpatientrecords: [],
      details: {},
      unassignedError: '',
      allPatientError: '',
      isMobile: false,
    }
  }

  resize() {
    // let isMobile = (window.innerWidth <= 760);
    // if (isMobile !== this.state.isMobile) {
    //     this.setState({isMobile});
    // }
    this.setState({ isMobile: window.innerWidth <= 760 ? true : false })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this))
    window.removeEventListener('online', this.onNetOn)
  }

  /**
   * method for opening the "edit modal"
   * the method passes the information about the patient
   * along from the parent component
   */
  openEditModal = (patient) => {
    this.setState({
      editModalIsOpen: true,
      details: patient,
      filterText: '',
    })
  }

  //   To Close The Edit Modal
  closeModal = (e) => {
    this.setState({
      editModalIsOpen: false,
    })
  }
  //   to open the assignTo modal
  openDoctorsModal = (patient) => {
    this.setState({
      patientId: patient.id,
      doctorsModalIsOpen: true,
    })
  }

  // closing the assignTo modal
  closeDoctorsModal = () => {
    this.setState({
      doctorsModalIsOpen: false,
    })
  }

  // onClick method for delete button
  deletepatientrecords = (patientrecords) => {
    let data = {
      id: patientrecords.id,
    }
    let route = 'patientrecords/delete'
    let cb = () => _customNotify('User has been deleted.')

    _deleteData({ route, data, cb })
  }

  // fetching the data to display on componentDidMount using the
  // helper function _fetchData()
  fetchData() {
    this.setState({ unassignedPatientlistLoading: true })
    recordsDB
      .get('unassigned')
      .then((records) => {
        this.setState({
          patientrecords: records.unassignedPatients,
          unassignedPatientlistLoading: false,
        })
      })
      .catch((err) => console.log(err))
    _fetchApi(
      `${url}/patientrecords/unassignedPatientlist`,
      ({ results }) => {
        if (results.length) {
          recordsDB
            .get('unassigned')
            .then((doc) =>
              recordsDB
                .put({
                  _id: 'unassigned',
                  _rev: doc._rev,
                  unassignedPatients: results,
                })
                .then(() => {
                  console.log('updated recordsDB')
                })
                .catch((err) => console.log(err)),
            )
            .catch(() => {
              recordsDB
                .put({ _id: 'unassigned', unassignedPatients: results })
                .then(() => {
                  console.log('added to recordsDB')
                })
                .catch((err) => console.log(err))
            })
          this.setState({
            patientrecords: results,
            unassignedPatientlistLoading: false,
          })
        }
      },
      (err) => {
        console.log(err.toString())
        this.setState({ unassignedPatientlistLoading: false })
      },
    )
  }

  // fetchAll = () => {
  //   let route = 'patientrecords/patientlist';

  //   let success_callback = ({results}) =>{
  //     this.setState({ allpatientrecords: results });
  //     if(results.length) {
  //       localStorage.setItem('allpatients', JSON.stringify(results))
  //     }
  //   }
  //   let error_callback = error => _warningNotify(error.toString())
  //   _fetchData({ route, success_callback, error_callback });
  // };

  //when component has been mounted
  componentDidMount() {
    this.props.getPatientAssignedToday()
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()

    recordsDB
      .get('allpatients')
      .then((records) => {
        this.setState({ allpatientrecords: records.allpatients })
      })
      .catch((err) => console.log(err))

    //fetch the list of unassigned patients
    // this.fetchData();

    if (navigator.onLine) {
      this.syncOfflineData()
    } else {
      toaster.warning(`You're offline, Data is being cached offline.`)
    }
    //fetch all the patients list
    // this.fetchAll();

    // recordsDB.changes({
    //   since: 'now',
    //   live: true
    // }).on('change', () => console.log('db changes detected'));

    window.addEventListener('online', this.onNetOn)
    window.addEventListener('offline', this.onNetOff)
  }

  onNetOff = () => {
    toaster.warning(`You're offline, Data is being saved.`)
  }

  syncOfflineData = () => {
    recordsDB
      .get('newrec')
      .then((records) => {
        if (records.newrec) {
          let data = records.newrec
          //perform batch insert of new offline records
          // let route = 'patientrecords/new';
          // let callback = () => {
          //   console.log('Database synchronized');
          //   records._deleted = true;
          //   return recordsDB.put(records);
          // };

          // let error_cb = error => console.log(error.toString());

          console.log(data)

          // _postData({ route, data, callback, error_cb });
        }
      })
      .catch((err) => console.log(err))

    recordsDB.get('recordupdates').then((records) => {
      if (records.recordupdates) {
        let data = records.recordupdates
        //perform batch update of new offline records
        // let editRoute = 'patientrecords/edit';
        // let callback = () => {
        //   console.log('Database is synchronized');
        //   records._deleted = true;
        //   return recordsDB.put(records);
        // };

        // let error_cb = error => console.log(error.toString());

        console.log(data)

        // _postData({ editRoute, data, callback, error_cb });
        //need
        //_updateData({ route, data, callback, err_cb })
      }
    })
  }

  onNetOn = () => {
    // const networkinformation = navigator.connection;
    // console.log(networkinformation)
    // console.log(navigator.onLine)
    console.log('Network ya dawo!')
    toaster.notify(`You're online, Database is synchronized!`)
    this.syncOfflineData()
  }

  //method for setting gender in the edit modal
  setGender = (e) => {
    this.setState({ gender: e.target.value })
  }

  //onChange method for updating the state as soon as the value
  logChange = (e) => {
    this.setState({ [e.target.ref]: e.target.value })
  }

  /**
   * to render the newly added patient in the patientList after
   * the modal has been closed
   */
  receiveState = (data) => {
    this.setState((prevState) => ({
      patientrecords: [data, ...prevState.patientrecords],
    }))
    this.fetchData()
  }

  updateUnassignedTable = (data) => {
    this.setState((prevState) => ({
      patientrecords: prevState.patientrecords.filter(
        (pat_rec) => data.id !== pat_rec.id,
      ),
    }))
    this.props.getPatientAssignedToday()
  }

  updateEdit = (data) => {
    this.setState((prevState) => ({
      patientrecords: [
        data,
        ...prevState.patientrecords.filter((p) => p.id !== data.id),
      ],
    }))
  }

  //this method sets the value of the filter text
  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    })
  }

  getUnassignedPatients = (doctor) => {
    const patientrecords = this.state.allpatientrecords
    const unassignedPatients = patientrecords.filter(
      (f) => f.assigned_to === `${doctor}`,
    )
    this.setState({ unassignedPatients })
    // console.log(this.state.unassignedPatients)
  }

  getNewListByDoctor = (doctor) => {
    this.getUnassignedPatients(doctor)
    this.setState({ collapse: false })
  }

  render() {
    return (
      <div>
        <div className="row" style={{ margin: 0, padding: 0 }}>
          {/* first empty column */}
          <div
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3"
            style={{ margin: 0 }}
          >
            {/* component to render user's guide */}
            {/* <RecordGuide /> */}
            {/* component to render the table show patients assigned to doctors
                    on a current day */}
            {!this.state.isMobile ? (
              <PatientAssignedToday
                getNewListByDoctor={this.getNewListByDoctor}
              />
            ) : null}
          </div>
          <div
            // style={{ border: '1px solid #007bff' }}
            className="col-xs-12 col-sm-12 col-md-9 col-lg-9"
          >
            {/* modal component to add a new patient  */}
            <ModalPage receiveState={this.receiveState.bind(this)} />

            <br />
            <BedToggle />
            {/* <Collapse isOpen={this.state.collapse}> */}
            <div className="render-patient-list">
              this component renders the table of patients displaying some
              details
              <RenderPatientList
                loading={this.state.unassignedPatientlistLoading}
                patientlist={this.state.patientrecords}
                error={this.state.unassignedError}
                openDoctorsModal={this.openDoctorsModal}
                openModal={this.openEditModal}
                filterText={this.state.filterText}
                renderEditButton={true}
                // this part is used to enable in-records delete operations
                // to activate this action uncomment the code below

                deletepatientrecords={this.deletepatientrecords}
              />
            </div>
            {/* </Collapse> */}

            {/* <BedAllocation/> */}

            {/* <Collapse isOpen={!this.state.collapse}> */}
            {/* this component renders the table consisting patietns assigned
                        to a particular doctor */}
            {/* <RenderPatientList
              patientlist={this.state.unassignedPatients}
              openDoctorsModal={this.openDoctorsModal}
              openModal={this.openEditModal}
              renderEditButton={false}
              error={this.state.allPatientError} */}
            {/*
                  this part is used to enable in-records delete operations
            to activate this action, uncomment the code below */}
            {/*/>
             </Collapse> */}

            {/* this component opens when the "Assign Doctor" button clicked
                    it allows user to assign doctor to a patient */}
            <DoctorsListModal
              patientId={this.state.patientId}
              doctorsModalIsOpen={this.state.doctorsModalIsOpen}
              closeDoctorsModal={this.closeDoctorsModal}
              updateUnassignedTable={this.updateUnassignedTable}
            />

            <br />
          </div>

          {/* <MyForm /> */}

          <EditModal
            editModalIsOpen={this.state.editModalIsOpen}
            closeEditModal={this.closeModal}
            details={this.state.details}
            updateEdit={this.updateEdit}
          />

          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            {/* <AddNewBed /> */}
            {this.state.isMobile ? (
              <PatientAssignedToday getNewListByDoctor={[]} />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPatientAssignedToday: () => dispatch(getPatientAssignedToday()),
  }
}

export default connect(null, mapDispatchToProps)(Patientlist)
