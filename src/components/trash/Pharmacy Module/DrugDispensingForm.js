import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

class DrugDispensingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>Drug Costing Form</CardHeader>
          <CardBody>
            <form>
              <div className="form-group row">
                <label className="control-label col-md-3">Date</label>
                <input
                  type="date"
                  className="form-control col-md-6"
                  ref="date"
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Drug</label>
                <input
                  type="text"
                  className="form-control col-md-6"
                  ref="drug"
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Quantity</label>
                <input
                  type="text"
                  className="form-control col-md-6"
                  ref="quantity"
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Price</label>
                <label />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Balance</label>
                <label />
              </div>
              <button className="btn">Add to List</button>
              <button className="btn">Save</button>
            </form>
          </CardBody>
        </Card>

        <div style={{ margin: '5px' }}>
          <Table size="sm">
            <thead>
              <tr>
                <th>PARENT ID</th>
                <th>Expiry Date</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CHLORXY-G GEL</td>
                <td>23-OCT-17</td>
                <td>22</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default DrugDispensingForm;
