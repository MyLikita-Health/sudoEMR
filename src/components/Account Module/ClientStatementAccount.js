import React, { Component } from 'react'
import { Form, FormGroup,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';


export default class ClientStatementAccount extends Component {
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
                    <CardHeader>Account Balance</CardHeader>
                    <CardBody>                 
                            <Form className="">
                                 <FormGroup row>
                                    <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Between This Date:</label>
                                    <input type="date" className="form-control col-xs-12 col-sm-12 col-md-3 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                   
                                    <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">End This Date:</label>
                                    <input type="date" className="form-control col-xs-12 col-sm-12 col-md-3 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />

                                </FormGroup>

                                <FormGroup row >
                                    <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">Select Account:</label>
                                    <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                    
                                  
                                    </FormGroup>


                                 <FormGroup row>
                                 <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
                                 <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                 <label className="col-xs-12 col-sm-12 col-md-6 col-lg-6">Balance</label>
                                <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-8" onChange={e =>this.setState({pDeposit:e.target.value})} value={this.state.pDeposit} />
                                 </div>
                                 
                               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>
                                </FormGroup>

                                <FormGroup row>
                                <button className="btn btn-default btn-secondary col-xs-12 col-sm-12 col-md-6 col-lg-4">Go</button> 
                                <div></div>
                            </FormGroup>
                            </Form>
                            
                    </CardBody>
                </Card>
          
      </div>
    )
  }
}
