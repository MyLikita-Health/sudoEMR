import React, {Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

class CreateAthropometry extends Component {
  constructor(props) {
    super(props);
    const savedData = JSON.parse(localStorage.getItem('athropometry')) || [];
    this.state = { 
        athropometry_weight: savedData.athropometry_weight || "",
        headcircumference: savedData.headcircumference || "",
        athropometry_height: savedData.athropometry_height || "",
        muac: savedData.muac || "" 
    }
  }


  handleSubmit=(e)=>{
    e.preventDefault();
    const { athropometry_weight, headcircumference, 
        athropometry_height, muac } = this.state
    const formData = { athropometry_weight, headcircumference, 
        athropometry_height, muac }
    if(athropometry_weight==="" && headcircumference==="" && athropometry_height==="" && muac==="" ) return;
    return localStorage.setItem('athropometry', JSON.stringify(formData))
    // console.log(formData)
  }

  onInputChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value })
  }

    render(){
        const { athropometry_weight, headcircumference, 
            athropometry_height, muac } = this.state
        return(
            <Form>
                <h3 className="text-center"><strong>Athropometry</strong></h3>
                <hr />
                <FormGroup row>
                    <label className="col-md-2">Weight:</label>
                    <textarea 
                        name="athropometry_weight" 
                        value={athropometry_weight} 
                        onChange={this.onInputChange} 
                        className="form-control col-md-4"></textarea>
                    <label className="col-md-2">Head Circumference:</label>
                    <textarea 
                        name="headcircumference" 
                        value={headcircumference} 
                        onChange={this.onInputChange} 
                        className="form-control col-md-4"></textarea>
                </FormGroup>
                <FormGroup row>
                    <label className="col-md-2">Height/Length:</label>
                    <textarea 
                        name="athropometry_height" 
                        value={athropometry_height} 
                        onChange={this.onInputChange} 
                        className="form-control col-md-4"></textarea>
                    <label className="col-md-2">MUAC:</label>
                    <textarea 
                        name="muac" 
                        value={muac} 
                        onChange={this.onInputChange} 
                        className="form-control col-md-4"></textarea>
                </FormGroup>
                <br />
                <hr />  
                <div className="row">
                    <Link to="/patient_clarking/provisional_diagnosis" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
                    <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7"><Link to='/patient_clarking/management_plan' style={{width:'9vw'}}>Next <FaArrowRight /></Link></button>
                </div>              
            </Form>   
        )
    }
}

export default CreateAthropometry;