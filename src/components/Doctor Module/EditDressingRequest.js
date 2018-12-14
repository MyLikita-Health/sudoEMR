import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

class EditDressingRequest extends Component {
    constructor(props) {
    super(props);
 
    const storedData = JSON.parse(localStorage.getItem('dressing_request')) || [];

    this.state = {
      partToDress: storedData.partToDress || "",
      dresswith: storedData.dresswith || "",  
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { partToDress, dresswith } = this.state;
    const formData = { partToDress, dresswith };
    if(partToDress==="" && dresswith==="") return;
    return localStorage.setItem('dressing_request', JSON.stringify(formData));
  }
  
  onInputChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Form>
        <h3 className="text-center"><strong>Dressing Request</strong></h3>
        <hr />
        <FormGroup row><br/>
          <label className="col-md-2">Part to Dress</label> 
          <textarea 
            name="partToDress" 
            value={this.state.partToDress} 
            onChange={this.onInputChange} 
            className="form-control col-md-4"></textarea>  
          <label className="col-md-2">Dress With</label> 
          <textarea 
            name="dresswith" 
            value={this.state.dresswith} 
            onChange={this.onInputChange} 
            className="form-control col-md-4"></textarea>
        </FormGroup>
        <br />
        <hr />
        <div className="row">
          <Link to="/patient_clarking/management_plan" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
          <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7">
              <Link to='/patient_clarking/observation_request' style={{width:'9vw'}}>Next <FaArrowRight /></Link>
          </button>
        </div>  
      </Form>
           
    );
  }
}

export default EditDressingRequest ; 
