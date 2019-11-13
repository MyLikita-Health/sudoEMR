import React, { Component } from "react";

export default class Nominal extends Component {
  state = {
    Employer_Code: "",
    Employer_Number: "",
    FIrst_Name: "",
    Last_Name: "",
    Dob : "",
    Grade_Level : "",
    step : "",
    First_App_Date : "",
    Facility_Code : "",
    Role: []
  };
  
  HandleChange = e => { 
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  


  submit = (e) => {  //this function collect input 
    e.preventDefault(); //wen refreshing it will b default
      this.setState(prevState => ({
        Diesel: prevState.Role.concat({ // concat will join the items
         Employer_Code: this.state.Employer_Code,
         Employer_Number: this.state.Employer_Number,
         First_Name: this.state.FIrst_Name,
         Last_Name: this.state.Last_Name,
         Dob: this.state.Dob,
         Grade_Level: this.state.Grade_Level,
         Step: this.state.step,
         FIrst_App_Date: this.state.First_App_Date,
         Facility_Code: this.state.Facility_Code,
         
         
         
      }),
      Employer_Code: "",
      Employer_Number: "",
      First_Name: "",
      Last_Name: "",
      Dob: "",
      Grade_Level: "",
      Step: "",
      First_App_Date: "",
      Facility_Code: ""
    }));
    console.log(this.state.Employer_Code,
        this.state.Employer_Number ,
        this.state.First_Name,
        this.state.Last_Name,
        this.state.Dob,
        this.state.Grade_Level,
        this.state.Step,
        this.state.First_App_Date,
        this.state.Facility_Code
        )
  };
  
  
   
  
  render() {
    
    return (
      <div id="Role">
        
        <h1 className="head">Nominal Role</h1>
        <div>
          <form>
          <label>Employer Code</label>
          <select className="form-control">
            <option value="">12345</option>
            <option value="">56780</option>
            <option value="">90123</option>
          </select>
          <br />

          <label>Employer_Number</label>
          
          <input
            className="form-control"           
            value={this.state.Employer_Number}
            type="number"
            onChange={this.HandleChange}
            name="Employer_Number"
            
          />
          <br />
          <label>First_Name</label>
          

          <input
            className="form-control"
            value={this.state.First_Name}
            type="text"
            onChange={this.HandleChange}
            name="First_Name"
          />
          
          <br />
          <label>Last_Name</label>
          

          <input
            className="form-control"
            name="Last_Name"
            value={this.state.Last_Name}
            type="text"
            onChange={this.HandleChange}
           
          />
          
          <br />
          <label>Date of birth</label>
          

          <input
            className="form-control"
            name="Dob"
            value={this.state.Dob}
            type="Date"
            onChange={this.HandleChange}
          />
          <br />
          <label>Grade level:</label>
          

          <input
            className="form-control"
            name="Grade_Level"
            value={this.state.Grade_Level}
            type="text"
            onChange={this.HandleChange}
           
          />
          
          <br />
          <label>Step</label>
          

          <input
            className="form-control"
            name="Step"
            value={this.state.Step}
            type="text"
            onChange={this.HandleChange}
           
          />
          
          <br />
          <label>First Appointment Date:</label>
          

          <input
            className="form-control"
            name="First_App_Date"
            value={this.state.First_App_Date}
            type="Date"
            onChange={this.HandleChange}
           
          />
          
          <br />
          <label>Facility Code:</label>
          

          <input
            className="form-control"
            name="Facility_Code"
            value={this.state.Facility_Code}
            type="number"
            onChange={this.HandleChange}
           
          />
          
          <br />

        <button onClick={this.submit} className="btn btn-primary">CREATE</button>
        </form>
        <br /> <br />
      </div>
      </div>
    );
  }
}
