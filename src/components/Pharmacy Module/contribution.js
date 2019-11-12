import React, { Component } from "react";

export default class Contribution extends Component {
  state = {
    EmployerCode: "",
    Date_of_Contribution: "",
    AmountContribute: "",
    Contribute: []
  };
  
  eventChange = e => { 
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  


  addContribution = (e) => {  //this function collect input 
    e.preventDefault(); //wen refreshing it will b default
      this.setState(prevState => ({
        Contribute: prevState.Contribute.concat({ // concat will join the items
          EmployerCode: this.state.EmployerCode,
          Date_of_Contribution: this.state.Date_of_Contribution,
          AmountContribute: this.state.AmountContribute
         
      }),
      EmployerCode: "",
      Date_of_Contribution: "",
      AmountContribute: "",
    }));
    console.log(this.state.EmployerCode,
        this.state.Date_of_Contribution,
        this.state.AmountContribute)
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
            value={this.state.EmployerCode}
            onChange={this.eventChange}
            name="EmployerCode"
            type="number"
            min="1"
          />
          <br />

          <label>Date Of Contribution</label>
          
          <input
            className="form-control"           
            value={this.state.Date_of_Contribution}
            type="date"
            onChange={this.eventChange}
            name="date_of_Contribution"
            
          />
          <br />
          <label>Amount To Contribute</label>
          

          <input
            className="form-control"
            value={this.state.Supplier}
            type="number"
            onChange={this.eventChange}
            name="AmountContribute"
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
