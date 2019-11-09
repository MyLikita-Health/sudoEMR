import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

class Suppliers extends Component {
  state = {};

  render() {
    return (
      <div>
        <center>
          <h5>Suplliers PHYIO-QUIP MEDICAL LTD</h5>
        </center>

        <Table bordered hover striped responsive>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Rate</th>
                  <th>Amount</th>
                  <th>QTY</th>
             
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>29/09/2019</td>
                  <td>Bello</td>
                  <td>29%</td>
                  <td>100</td>
                  <td>84</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>29/04/2019</td>
                  <td>Umar</td>
                  <td>40%</td>
                  <td>900</td>
                  <td>84</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>24/09/2019</td>
                  <td>Sani</td>
                  <td>29%</td>
                  <td>100</td>
                  <td>84</td>
                </tr>
              </tbody>
            </Table>
          
      </div>

    );
  }
}
export default Suppliers;
