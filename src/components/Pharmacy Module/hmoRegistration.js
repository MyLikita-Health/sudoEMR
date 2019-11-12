import React, { Component } from 'react';
import { Card, CardBody, CardHeader,} from 'reactstrap';

class HmoRegistration extends Component {
  

  state={
    hmocode : ' ',
    hmoName : '',
    address : '',
    phone : '',
    contactPerson : '',
    email : '',
  
     hmo : []

  };
  

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  };

  handleSubmit = (e) => {
     e.preventDefault()
    this.setState(prevState => ({
     hmo: prevState.hmo.concat({
      hmocode: this.state.hmocode,
      hmoName: this.state.hmoName,
      address: this.state.address,
      phone: this.state.phone,
      contactPerson : this.state.contactPerson ,
      email: this.state.email,
     }),
    hmocode : '',
    hmoName : '',
    address : '',
    phone : '',
    contactPerson : '',
    email : '',
    
    })
          
    );
    // console.log(this.state.hmocode)
    
  };


  render() {
    return (
      <div>
        <Card>
          <CardHeader align="center"><h1>HMO Registration</h1></CardHeader>
          <CardBody>
            <form>
              <div className="form-group row">
                <label className="control-label col-md-3">HMO Code :</label>
                <input
                  type="number"
                  value={this.state.hmocode}
                  placeholder='hmo code'
                  className="form-control col-md-6"
                  name="hmocode"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">HMO Name :</label>
                <input
                  type="text"
                  placeholder='hmo name'
                  value={this.state.hmoName}
                  className="form-control col-md-6"
                  name="hmoName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Address :</label>
                <input
                  type="text"
                  placeholder='address'
                  className="form-control col-md-6"
                  value={this.state.address}
                  name="address"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Phone :</label>
                <input
                  type="number"
                  placeholder='phone'
                  value={this.state.phone}
                  className="form-control col-md-6"
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Contact Person :</label>
                <input
                  type="text"
                  placeholder='contact p'
                  className="form-control col-md-6"
                  value={this.state.contactPerson}
                  name="contactPerson"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3">Email :</label>
                <input
                  type="email"
                  placeholder='email'
                  value={this.state.email}
                  className="form-control col-md-6"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
            
              
              <button onClick={this.handleSubmit} className="btn">Add form</button>
              
            </form>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default  HmoRegistration;
