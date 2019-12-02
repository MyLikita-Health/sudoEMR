import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, FormGroup,
    Card,
    CardHeader,
    CardBody,
  } from 'reactstrap';


export default class PatientDeposit extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         pDeposit: '',
      }
    }
    
  render() {

    return (

      <div className="row patient-deposit">
      
                     <Card className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <CardHeader>Reternership Deposit Form</CardHeader>
                    <CardBody>                 
                            <Form className="">
                                 <FormGroup>
                                    <label className="col-xs-12 col-sm-12 col-md-6 col-lg-3">Date:</label>
                                    <input type="date" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />

                                </FormGroup>

                                <FormGroup row >
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>
                                    <label className="col-xs-12 col-sm-12 col-md-6 col-lg-3">Reciept No:</label>
                                    <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-4" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>
                                </FormGroup>
                                
                                <FormGroup row >
                                    <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Select Account:</label>
                                    <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                    
                                    <label className="col-xs-12 col-sm-12 col-md-6 col-lg-3">Mode Of Payment</label>
                                        <select
                                        className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                        <option value="" />
                                        <option value="pod">Cash</option>
                                        <option value="bank">Pos</option>
                                        <option value="transfer">Bank Transfer</option>
                                        </select>
                                   
                                    </FormGroup>

                                 <FormGroup row>
                                 <label className="col-xs-12 col-sm-12 col-md-6 col-lg-3">Account Name:</label>
                                    <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({subpDeposit:e.target.value})} value={this.state.subpDeposit} />
                                    <label className="col-xs-12 col-sm-12 col-md-6 col-lg-3">Amount Collected:</label>
                                    <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({subpDeposit:e.target.value})} value={this.state.subpDeposit} />
                                  
                                </FormGroup>

                                 <FormGroup row>
                                 <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>
                                 <label className="col-xs-12 col-sm-12 col-md-6 col-lg-2">Balance</label>
                                <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({subpDeposit:e.target.value})} value={this.state.subpDeposit} />
                               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3"></div>
                                </FormGroup>

                                <FormGroup row>
                                <button className="btn btn-default btn-secondary col-xs-12 col-sm-12 col-md-6 col-lg-4">Cancel</button>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>  
                                <button className="btn btn-default btn-secondary col-xs-12 col-sm-12 col-md-6 col-lg-4">Deposit</button> 
                                <div></div>
                            </FormGroup>
                            </Form>
                            
                    </CardBody>
                </Card>
          
        
      </div>
    )
  }
}
