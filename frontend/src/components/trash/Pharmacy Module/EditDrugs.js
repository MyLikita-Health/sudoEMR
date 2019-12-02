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

class EditDrugs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <h3> Edit Drugs</h3>
          </CardHeader>
          <CardBody>
            <div className="row">
              <InputGroup className="col-md-7">
                <Input />
                <InputGroupAddon addonType="append">
                  <Button color="primary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
              <select className="col-md-1">
                <option value="actions">Actions</option>
              </select>
              <div className="col-md-2" />
              <Button className="btn btn-primary col-md-1">Create</Button>
            </div>

            <div style={{ marginTop: '20px' }}>
              <Table>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Price</th>
                    <th>Balance</th>
                    <th>Unit of issue</th>
                    <th>Expiry Date</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BP APPARATUS</td>
                    <td>3000</td>
                    <td>30</td>
                    <td>2</td>
                    <td>31-OCT-20</td>
                    <td>-</td>
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

export default EditDrugs;
