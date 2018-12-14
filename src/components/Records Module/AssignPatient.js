import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

/**
 * This component
 */
class AssignPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assigned_to: '',
      id: '',
      date_assigned: '',
      patientrecords: [],
      modal: false,
    };
    this.logChange = this.logChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  componentDidMount() {
    let self = this;

    fetch('http://localhost:4000/patientrecords/patientlist', {
      method: 'GET',
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(function(data) {
        self.setState({ patientrecords: data });
      })
      .catch(err => {
        return err;
      });
  }

  handleSubmit(e) {
    //Edit functionality
    e.preventDefault();

    // var data = {
    //     assigned_to: this.state.assigned_to,
    //     id: this.state.id
    // }
    const data = {};
    for (const field in this.refs) {
      data[field] = this.refs[field].value;
      //data[field]=this.refs[field].value;
    }
    fetch('http://localhost:4000/patientrecords/assign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data === 'success') {
          this.setState({
            msg: 'User has been edited.',
          });
        }
      })
      .catch(function(err) {
        return err;
      });
  }

  logChange(e) {
    this.setState({ [e.target.ref]: e.target.value });
  }
  render() {
    return (
      <div>
        <Button onClick={this.toggle}>
          Asign Doctors to Patients
          {this.props.buttonLabel}
        </Button>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Assign Patient to Doctor
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-2" />
              <form
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
                className="col-md-8">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    ref="date_assigned"
                    onChange={this.logChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Select a Doctor</label>
                  <select className="form-control" ref="assigned_to">
                    <option>Dr. Saada</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Enter Patient No.</label>
                  <input
                    type="text"
                    ref="id"
                    onChange={this.logChange}
                    className="form-control"
                  />
                </div>

                <input type="submit" value="Assign Doctor" className="btn" />
              </form>
              <div className="col-md-2" />

              <table className="table table-hover col-md-push-2 assignPatTable col-md-10">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Patient No</th>
                    <th>Patient Name </th>
                    <th>Age</th>
                    <th>Doctor Assigned</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.patientrecords.map(patientrecords => (
                    <tr key={patientrecords.id}>
                      <td>{patientrecords.date_assigned}</td>
                      <td>{patientrecords.id} </td>
                      <td>
                        {patientrecords.firstname} {patientrecords.surname}
                      </td>
                      <td>{patientrecords.age}</td>
                      <td>{patientrecords.assigned_to}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={this.toggle}
                          style={{ marginBottom: '1rem' }}>
                          Edit{' '}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ModalBody>

          <ModalFooter />
        </Modal>
      </div>
    );
  }
}

export default AssignPatient;
