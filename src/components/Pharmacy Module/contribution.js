import React, { Component } from "react";

export default class Contribution extends Component {
  state = {
    employerCode: "",
    dateOfContribution: "",
    amountContribute: "",
    contribute: []
  };
  
  eventChange = e => { 
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  


  addContribution = (e) => {  //this function collect input 
    e.preventDefault(); //wen refreshing it will b default
      this.setState(prevState => ({
        contribute: prevState.contribute.concat({ // concat will join the items
          employerCode: this.state.employerCode,
          dateOfContribution: this.state.dateOfContribution,
          amountContribute: this.state.amountContribute
         
      }),
      employerCode: "",
      dateOfContribution: "",
      amountContribute: "",
    }));
    console.log(this.state.employerCode,
        this.state.dateOfContribution,
        this.state.amountContribute)
  };
  
  
   
  
  render() {
    
    return (
      <div >
        
        <h2 className="head">Contribution</h2>
        <div>
          <form>
          <label>Employer Code</label>
          <input
            className="form-control"           
            value={this.state.employerCode}
            onChange={this.eventChange}
            name="employerCode"
            type="number"
            min="1"
          />
          <br />

          <label>Date Of Contribution</label>
          
          <input
            className="form-control"           
            value={this.state.dateOfContribution}
            type="date"
            onChange={this.eventChange}
            name="dateOfContribution"
            
          />
          <br />
          <label>Amount To Contribute</label>
          

          <input
            className="form-control"
            value={this.state.amountContribute}
            type="number"
            onChange={this.eventChange}
            name="amountContribute"
            min="1000"
          />
                   
          <br />
        <button onClick={this.addContribution} className="btn btn-primary">Add Contribution</button>
        </form>
        <br /> <br />
      </div>
      </div>
    );
  }
}
