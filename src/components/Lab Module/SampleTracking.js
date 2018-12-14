import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

export default class SampleTracking extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      test: {},
    };
  }

  onSearchTermChange = e => this.setState({ searchTerm: e.target.value });

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <Card>
          <CardHeader>Check the Status of a Test</CardHeader>
          <CardBody>
            <div>
              <input
                className="form-control col-xs-8 col-sm-8 col-md-8 col-lg-10"
                value={searchTerm}
                onChange={this.onSearchTermChange}
                placeholder="Search for a Test by the patient's ID"
              />
              <button
                className="btn btn-outline-success col-xs-3 col-sm-3 col-md-2 col-lg-2"
                onClick={() => this.search(searchTerm)}>
                Search
              </button>
            </div>
            <Table bordered hover striped responsive>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Lab Id</th>
                  <th>CollectedBy</th>
                  <th>Date Collected</th>
                  <th>RecievedBy</th>
                  <th>Date Recieved</th>
                  <th>Status</th>
                  <th>Patient Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="#">1</a>
                  </td>
                  <td>lab5657</td>
                  <td>Lawan</td>
                  <td>29/09/2019</td>
                  <td>Bello</td>
                  <td>29/09/2019</td>
                  <td>mdd</td>
                  <td>84943</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}
