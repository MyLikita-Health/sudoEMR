import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';


class EditObservationRequest extends Component {
    constructor(props) {
    super(props); 
    const cached = localStorage.getItem('observation_request');
    this.state = {
      observation_request: cached || ""
    };
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    const { observation_request } = this.state;
    if(observation_request==="") return;
    return localStorage.setItem('observation_request', this.state.observation_request);
  }

  onObservationRequestChange=(e)=>{
    this.setState({ observation_request: e.target.value })
  }

  render() {
    return (
        <div>
      <Form>
        <h3 className="text-center"><strong>Observation Request</strong></h3>
        <hr />
        <FormGroup row><br/>
          <label className="col-md-4">Observation Request: </label> 
          <textarea 
            type="text" 
            name="observation_request" 
            value={this.state.observation_request}
            onChange={this.onObservationRequestChange} 
            className="form-control col-md-6"> </textarea>
        </FormGroup>
      </Form>
      <br />
      <hr />
      <div className="row">
        <Link to="/patient_clarking/dressing_request" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
        <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7">
            <Link to='/patient_clarking/prescription_request' style={{width:'9vw'}}>Next <FaArrowRight /></Link>
        </button>
      </div>  
  
      </div>
    );
  }
}

export default EditObservationRequest ; 
