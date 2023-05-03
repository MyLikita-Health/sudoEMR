import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import { Card, Table } from 'reactstrap';

class ConsultReferral extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-1 mt-1">
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              this.props.history.push('/me/doctor/patients/refer');
            }}
          >
            <FaPlus size={20} className="mr-1" />
            New Consult/Referral
          </button>
        </div>
        <Card body>
          <h5>Consult/Referral</h5>
          <Table hover>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Patient Code</th>
                <th>Doctor</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default ConsultReferral;
