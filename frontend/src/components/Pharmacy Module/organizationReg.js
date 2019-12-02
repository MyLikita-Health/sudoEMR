import React, { Component } from "react";

export default class Organization extends Component {
  state = {
    OrganizationCode: "",
    OrganizationName: "",
    EmployerCode: "",
    Hmo: "",
    organization: []
  };
  
  handleChange = e => { // handle change
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  


  addOrganizaion = (e) => {  //this function collect input 
    e.preventDefault(); //wen refreshing it will b default
      this.setState(prevState => ({
        organization: prevState.organization.concat({ // concat will join the items
          OrganizaionCode: this.state.OrganizationCode,
          OrganizationCode: this.state.OrganizaionCode,
          EmployerCode: this.state.employerCode,
          Hmo: this.state.hmo
         
      }),
      OrganizationCode: "",
      OrganizationName: "",
      EmployerCode: "",
      Hmo: "",
    }));
    console.log(this.state.OrganizationCode,
        this.state.OrganizationName,
        this.state.EmployerCode,
        this.state.Hmo)
  };
  
  
   
  
  render() {
    
    return (
      <div >
        
        <h3>Organizaion Registration</h3>
        <div>
          <form>
          <label>Organizaion Code</label>
          

          <input
            className="form-control"           
            value={this.state.OrganizationCode}
            onChange={this.handleChange}
            name="OrganizationCode"
            type="number"
            min="1"
          />
          <br />

          <label>Organizaion Name</label>
          
          <input
            className="form-control"           
            value={this.state.OrganizationName}
            type="text"
            onChange={this.handleChange}
            name="OrganizationName"
            
          />
          
          <label>Employer Code</label>
          

          <input
            className="form-control"
            value={this.state.EmployerCode}
            type="number"
            min="0"
            onChange={this.handleChange}
            name="EmployerCode"
          />
          
          <br />
          <label>H M O</label>
          <select 
           className="form-control"
           name="Hmo"
           value={this.state.Hmo}
           type="text"
           onChange={this.handleChange}
          >
            <option>HMO 1</option>
            <option>HMO 2</option>
            <option>HMO 3</option>
            <option>HMO 4</option>
            

          </select>
          <br />
        <button onClick={this.addOrganizaion} className="btn btn-primary">Add Organizaion</button>
        </form>
        <br /> <br />
      </div>
      </div>
    );
  }
}
