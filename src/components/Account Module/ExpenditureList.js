import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  InputGroup,
  Table,
  InputGroupAddon,
} from 'reactstrap';

export default class ExpenditureList extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>Services List Table</CardHeader>
          <CardBody>
            <div style={{ marginTop: '20px' }}>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Delete</th>
                    <th>Trans Date</th>
                    <th>Source </th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Destination</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
