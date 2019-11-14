import React, { Component } from "react";

export default class Diesel extends Component {
  state = {
    Date: "",
    Quantity: "",
    Supplier: "",
    Cost: "",
    Diesel: []
  };
  
  monitor = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  


  addItem = (e) => {
    e.preventDefault();
      this.setState(prevState => ({
        Diesel: prevState.Diesel.concat({
          Date: this.state.Date,
          Quantity: this.state.Quantity,
          Supplier: this.state.Supplier,
          Cost: this.state.Cost
         
      }),
      Date: "",
      Quantity: "",
      Supplier: "",
      Cost: "",
    }));
    console.log(this.state.Date,
        this.state.Quantity ,
        this.state.Supplier,
        this.state.Cost)
  };
  
  
   
  
  render() {
    
    return (
      <div id="diesel">
        
        <h1 className="head">Diesel</h1>
        <div>
          <form>
          <label>DATE</label>
          

          <input
            className="form-control"           
            value={this.state.Date}
            onChange={this.monitor}
            name="Date"
            type="date"
          />
          <br />

          <label>QUANTITY</label>
          
          <input
            className="form-control"           
            value={this.state.Quantity}
            type="text"
            onChange={this.monitor}
            name="Quantity"
            
          />
          <br />
          <label>Supplier</label>
          

          <input
            className="form-control"
            value={this.state.Supplier}
            type="text"
            onChange={this.monitor}
            name="Supplier"
          />
          
          <br />
          <label>COST</label>
          

          <input
            className="form-control"
            name="Cost"
            value={this.state.Cost}
            type="text"
            onChange={this.monitor}
           
          />
          
          <br />
        <button onClick={this.addItem} className="btn btn-primary">CREATE</button>
        </form>
        <br /> <br />
      </div>
      </div>
    );
  }
}
