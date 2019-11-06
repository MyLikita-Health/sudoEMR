import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Staff extends Component {
  state = {};
  render() {
    return (
      <div>
        <center>
          <h1>STAFF PAYMENT</h1>
        </center>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S/N</th>
              <th>NAME</th>
              <th>AMOUNT EARNED</th>
              <th>BANK DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fahad Ado</td>
              <td>100,000</td>
              <td>GTB</td>
            </tr>
            <tr>
              <td>2</td>
              <td>shamsudeen muhd</td>
              <td>5000</td>
              <td>ACESS BANK</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Amina Ado</td>
              <td>300,000</td>
              <td>FCMB</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Abba umar</td>
              <td>400,000</td>
              <td>DIAMOND BANK</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Staff;
