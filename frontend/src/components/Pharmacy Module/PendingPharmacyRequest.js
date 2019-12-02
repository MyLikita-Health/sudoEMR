import React, { Component } from 'react';
import { Card, CardBody, Input, Table } from 'reactstrap';
import FreeScrollBar from 'react-free-scrollbar';
import Notifications from 'react-notify-toast';
import Loading from '../loading';
import { _fetchData, _customNotify } from '../helpers';

class PendingPharmacyRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      pendingPatientRequests: [],
      currentDrug: {},
      searchTerm: '',
      error: '',
    };
  }

  fetchData() {
    let route = 'prescriptionrequests/pendingRequests';
    let success_callback = data =>
      this.setState({ pendingPatientRequests: data });
    let error_callback = err => this.setState({ error: err });
    _fetchData({ route, success_callback, error_callback });
  }

  componentDidMount() {
    this.fetchData();
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  onPrescriptionClick = patient => {
    const currentDrug = Object.assign({}, this.state.currentDrug, patient);
    this.props.getDetails(currentDrug);
    this.setState({ currentDrug });
  };

  dispenseDrugs = drugs => {
    _customNotify('Drug(s) dispensed successfully!');
    this.toggle();
    console.log(drugs);
  };

  onSearchTermChange = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const { pendingPatientRequests, error } = this.state;

    const rows = [];

    pendingPatientRequests.forEach((patient, i) => {
      if (patient.id.toString().indexOf(this.state.searchTerm) === -1) return;

      rows.push(
        <tr
          key={i}
          onClick={() => this.onPrescriptionClick(patient)}
          style={{ cursor: 'pointer' }}>
          <td>{patient.id}</td>
          <td>
            {patient.surname} {patient.firstname}
          </td>
          <td>{patient.gender}</td>
        </tr>
      );
    });
    return (
      <div className=" ">
        <Notifications options={{ zIndex: 200, top: '50px' }} />
        <Card className="border-secondary">
          <h6 className="text-center">Pending Pharmacy Request</h6>
          <CardBody>
            <div className="row">
              <Input
                placeholder="Search request by patient's id"
                value={this.state.searchTerm}
                onChange={e => this.onSearchTermChange(e.target.value)}
              />
            </div>
            <div style={{ width: '100%', height: '45vh' }}>
              <FreeScrollBar>
                {!pendingPatientRequests.length ? (
                  !error.length ? (
                    <Loading />
                  ) : (
                    <p className="text-center danger">
                      <em>No record found</em>
                    </p>
                  )
                ) : (
                  <Table bordered striped hover responsive>
                    <thead>
                      <tr>
                        <th>Patient ID</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                  </Table>
                )}
                {error.length ? (
                  <p className="alert alert-danger text-center">{error}</p>
                ) : null}
              </FreeScrollBar>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PendingPharmacyRequest;
