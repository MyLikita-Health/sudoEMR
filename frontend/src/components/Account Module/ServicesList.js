import React, { Component } from 'react'
import { Button,Card, CardBody, CardHeader, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';

export default class ServicesList extends Component {
  render() {
    return (
      <div>
         <Card>
                    <CardHeader>
                    Services List Table
                    </CardHeader>
                    <CardBody> 
                    <div style={{ marginTop:"20px" }}>
                        <Table responsive bordered>
                            <thead>
                                <tr>
                                    <th >Delete</th>
                                    <th >Trans Date</th>
                                    <th >Patient Id</th>
                                    <th >Patient Name</th>
                                    <th >Account</th>
                                    <th >Services</th>
                                    <th >Unit</th>
                                    <th >Cost</th>
                                    <th >Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>

                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        </CardBody>  
                        </Card>  
      </div>
    )
  }
}
