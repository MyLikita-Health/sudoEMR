import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

class UpToDateStockBalance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="upToDateStockBal">
        <Card>
          <CardHeader>Sales Report</CardHeader>
          <CardBody>
            <div style={{ marginTop: '20px' }}>
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Balance</th>
                    <th>Cost Price</th>
                    <th>Selling Price</th>
                    <th>Amount</th>
                    <th>Unit of Issue</th>
                    <th>Expiry Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">"CREPE BANDAGE 4"""</a>
                    </td>
                    <td>96</td>
                    <td>142.86</td>
                    <td>200</td>
                    <td>13,714.29</td>
                    <td>1</td>
                    <td>31-OCT-20</td>
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

export default UpToDateStockBalance;
