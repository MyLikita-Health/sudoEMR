import React, {Component} from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link} from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';



export default class NewProvisionalDiagnosis extends Component {
    constructor(props) {
        super(props);

        const savedData = JSON.parse(localStorage.getItem('provisional_diagnosis')) || [];
       
        this.state = {
            provisionalDiagnosis1: savedData.provisionalDiagnosis1 || "",
            provisionalDiagnosis2: savedData.provisionalDiagnosis2 || "",
            provisionalDiagnosis3: savedData.provisionalDiagnosis3 || "",
            provisionalDiagnosis4: savedData.provisionalDiagnosis4 || "",
            provisionalDiagnosis5: savedData.provisionalDiagnosis5 || "",
        };
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const { provisionalDiagnosis1, provisionalDiagnosis2, provisionalDiagnosis3, 
            provisionalDiagnosis4, provisionalDiagnosis5 } = this.state;
        const formData = { provisionalDiagnosis1, provisionalDiagnosis2, 
            provisionalDiagnosis3, provisionalDiagnosis4, provisionalDiagnosis5 };
        localStorage.setItem('provisional_diagnosis', JSON.stringify(formData));
        // console.log(formData);
    }

    onInputChange=(e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){

        return(
            <Form>
                <h3 className="text-center"><strong>Provisional Diagnosis</strong></h3>
                <hr />
                <FormGroup row>
                    <label className="col-md-1">1.</label>
                    <textarea name="provisionalDiagnosis1" value={this.state.provisionalDiagnosis1} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                    <label className="col-md-1">2.</label>
                    <textarea name="provisionalDiagnosis2" value={this.state.provisionalDiagnosis2} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                </FormGroup>
                <FormGroup row>
                    <label className="col-md-1">3.</label>
                    <textarea name="provisionalDiagnosis3" value={this.state.provisionalDiagnosis3} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                    <label className="col-md-1">4.</label>
                    <textarea name="provisionalDiagnosis4" value={this.state.provisionalDiagnosis4} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                </FormGroup>
                <FormGroup row>
                    <label className="col-md-1">5.</label>
                    <textarea name="provisionalDiagnosis5" value={this.state.provisionalDiagnosis5} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                </FormGroup>
                <br />
                <hr />
                <div className="row">
                    <Link to="/patient_clarking/problems" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
                    <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7"><Link to='/patient_clarking/athropometry' style={{width:'9vw'}}>Next <FaArrowRight /></Link></button>
                </div>
            </Form>
        )
    }
}
