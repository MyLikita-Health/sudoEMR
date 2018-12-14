import React, { Component } from 'react'
import { Form, FormGroup,
    Card,
    CardHeader,
    CardBody,
  } from 'reactstrap';
import ServicesList from './ServicesList';
  

  export default class Services extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        pDeposit: ''
      }
    }
    
    render() {
      return (
        <div>
            <Card className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <CardHeader>Service Form</CardHeader>
                      <CardBody>                 
                              <Form className="">
                                   <FormGroup row>
                                      <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Between This Date:</label>
                                      <input type="date" className="form-control col-xs-12 col-sm-12 col-md-3 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                     
                                      <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Patient Number:</label>
                                      <input type="text" className="form-control col-xs-12 col-sm-12 col-md-3 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
  
                                  </FormGroup>
  
                                  <FormGroup row >
                                      <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Account:</label>
                                      <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                      
                                      <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Amount</label>
                                       <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                      </FormGroup>
  
                                      <FormGroup row >
                                      <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Name:</label>
                                      <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                      
                                      <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Select Account Chart</label>
                                       <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                      </FormGroup>
  
                                      <FormGroup row >
                                      <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Quantiy/Days:</label>
                                      <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                      
                                      
                                      </FormGroup>
  
  
                                  <FormGroup row>
                                  <button className="btn btn-default btn-secondary col-xs-12 col-sm-12 col-md-6 col-lg-4">Add</button> 
                                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>
                                  <button className="btn btn-default btn-secondary col-xs-12 col-sm-12 col-md-6 col-lg-4">Save Costing</button>
                                  <div></div>
                              </FormGroup>
                              </Form>
                              <ServicesList />
                      </CardBody>
                  </Card>
            
        </div>
      )
    }
  }
  
