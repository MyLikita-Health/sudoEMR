import React, {Component} from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link} from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.css';



class NewProblems extends Component {
    constructor(props) {
        super(props);
        const savedData = JSON.parse(localStorage.getItem('problems')) || [];

        this.state = {
            problem1: savedData.problem1 || "",
            problem2: savedData.problem2 || "",
            problem3: savedData.problem3 || "",
            problem4: savedData.problem4 || "",
            problem5: savedData.problem5 || "",
        };
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const { problem1, problem2, problem3, problem4, problem5 } = this.state;
        const formData = { problem1, problem2, problem3, problem4, problem5 };
        if( problem1==="" && problem2==="" && problem3==="" && problem4==="" && problem5==="") return;
        return localStorage.setItem('problems', JSON.stringify(formData))
    }

    onInputChange=(e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){

        return(
            <Form>
                <h3 className="text-center"><strong>Problems</strong></h3>
                <hr />
                <FormGroup row>
                        <label className="col-md-1">1.</label>
                        <textarea name="problem1" value={this.state.problem1} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                        <label className="col-md-1">2.</label>
                        <textarea name="problem2" value={this.state.problem2} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                </FormGroup>
                <FormGroup row>
                        <label className="col-md-1">3.</label>
                        <textarea name="problem3" value={this.state.problem3} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                        <label className="col-md-1">4.</label>
                        <textarea name="problem4" value={this.state.problem4} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                </FormGroup>
                <FormGroup row>
                        <label className="col-md-1">5.</label>
                        <textarea name="problem5" value={this.state.problem5} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                </FormGroup>
                <br />
                <hr />
                <div className="row">
                    <Link to="/patient_clarking/system_examination" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
                    <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7"><Link to='/patient_clarking/provisional_diagnosis' style={{width:'9vw'}}>Next <FaArrowRight /></Link></button>
                </div>
            </Form>



        )
    }
}




export default NewProblems;