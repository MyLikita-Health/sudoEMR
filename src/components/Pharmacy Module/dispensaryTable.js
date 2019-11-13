import React, { Component } from 'react';
import { Table } from 'reactstrap';

class DispensaryTable extends Component {
  state = {};

  render() {
    return (
      <div>
        <center>
          <h5>Dispensary Table</h5>
        </center>

        <Table>
          <thead>
            <tr>
              <th>PatientID</th>
              <th>Drugs</th>
              <th>Dossage</th>
              <th>Quantity</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}
export default DispensaryTable;
