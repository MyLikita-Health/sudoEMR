import React, {Component} from 'react';
import { Button,Card, CardBody, CardHeader, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class  AccountReport extends Component {
    constructor(props) {
        super(props);
       
    }
   

    render() {
        return(
            
            <div>    
            <Card>
                    <CardHeader>
                    Account Report General
                    </CardHeader>
                    <CardBody>          
                
                    <div className="row">
                        <InputGroup className="col-md-6" >
                            <Input />
                            <InputGroupAddon addonType="append">
                            <Button color="primary">Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <select className="col-md-2">
                            <option value="actions">Actions</option>
                        </select>
                        <div className="col-md-2"></div>
                        <Button className="btn btn-primary col-md-2">Create</Button>
                        
                    </div>
                   
                    <div style={{ marginTop:"20px" }}>
                        <Table responsive bordered>
                            <thead>
                                <tr>
                                    <th >Cdate</th>
                                    <th >Source</th>
                                    <th >Description</th>
                                    <th >Amount</th>
                                    <th >Reciept Number</th>
                                    <th >Account</th>
                                    <th >Mode Of Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >10-11-2018</td>
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

        );
    }
}

export default AccountReport;