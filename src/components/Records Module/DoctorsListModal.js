import React from 'react';
import { Table, Modal, ModalHeader, ModalBody } from 'reactstrap';
import SearchBar from './SearchBar';
import Notifications, { notify } from 'react-notify-toast';
import { _fetchData, _postData } from '../helpers'

/**
 * This renders the row in the table
 */
class TableRow extends React.Component {
  render() {
    const doctor = this.props.doctor;

    return (
      <tr>
        <td>{doctor.name}</td>
        <td>{doctor.speciality}</td>
        <td className="moveToCenter">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault(); 
              this.props.assignDoctor(doctor.name)
            }}
            style={{ marginBottom: '1rem' }}>
            Assign
          </button>
        </td>
      </tr>
    );
  }
}

/**
 * This component renders the table
 */
class DoctorsTable extends React.Component {
  render() {
    const filterText = this.props.filterText;

    const rows = [];

    this.props.doctorsList.forEach(doctor => {
      if (doctor.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      rows.push(
        <TableRow
          doctor={doctor}
          key={doctor.name}
          assignDoctor={this.props.assignDoctor}
        />
      );
    });

    return (
      <form>
        <Table bordered hover striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Speciality</th>
              <th className="moveToCenter">Assign Doctor</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </form>
    );
  }
}

/**
 * This component renders the table and the search text field
 * It also fetches the data that is being displayed on the table
 * It is rendered as a modal page
 */
class DoctorsListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      doctorsList: [],
      id: '',
      name: '',
      date: '',
      error: ''
    };
  }

  //the method that fetches the data using fetch API
  fetchData = () => {
    let route = 'users/doctorsList';
    let success_callback = data => this.setState({ doctorsList: data })
    let error_callback = error => this.setState({ error })
    _fetchData({ route, success_callback, error_callback})
  };

  //when component is mounted, the data is displayed
  componentDidMount() {
    this.fetchData();
  }

  // this handles the search filter text field change
  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    });
  };

  /**
   * on clicking the assign doctor, this submit the form
   * where we assigned a doctor to a patient
   */
  assignDoctor = name => {
    let myColor = { background: '#55ba98', text: '#FFFFFF' };

    var data = {
      assigned_to: name,
      id: this.props.patientId,
    };

    let route = 'patientrecords/assign';
    let callback = () => {
      /**
     * this part implement the notification that pops up
     * after we have assigned a patient to a doctor.
     * The notification color was set with the variable myColor above.
     */
      notify.show(
        `Patient with id: ${
          this.props.patientId
        } has been assigned to Dr. ${name}!`,
        'custom',
        3000,
        myColor
      );
    }

    let error_cb = error => {
      return notify.show(
        `Bad response from server`,
        'custom',
        3000,
        'red'
      );
    }
    _postData({ route, data, callback, error_cb });

    this.props.closeDoctorsModal()
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.doctorsModalIsOpen}
          toggle={this.props.closeDoctorsModal}
          size="lg">
          <ModalHeader toggle={this.props.closeDoctorsModal}>
            Assign a doctor to {this.props.patientId}
          </ModalHeader>
          <ModalBody>
            <Notifications options={{ zIndex: 200, top: '50px' }} />
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFilterTextChange}
              placeholder="Search for a doctor..."
              width="60rem"
              size={45}
            />
            <br />
            {/* This renders the table displaying the list doctor */}
            <DoctorsTable
              doctorsList={this.state.doctorsList}
              filterText={this.state.filterText}
              assignDoctor={this.assignDoctor}
            />
            <button
              onClick={this.props.closeDoctorsModal}
              className="btn btn-secondary">
              Next Patient
            </button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DoctorsListModal;
