import React, {Component} from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link} from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

class CreateVitalSigns extends Component {
    constructor(props) {
        super(props);
        
        const storedData = JSON.parse(localStorage.getItem('vital_signs')) || []

        this.state = {
            tempreture: storedData.tempreture || "",
            pulse: storedData.pulse || "",
            bloodpressure: storedData.bloodpressure || "",
            vital_height: storedData.vital_height || "",
            respiratoryRate: storedData.respiratoryRate || "",
            vital_weight: storedData.vital_weight || "",
            formRecords: []
        };

    }

    componentDidMount(){
        // this.setState({ data: (JSON.parse(localStorage.getItem("vital_signs")))})
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        const  { tempreture, pulse, bloodpressure, vital_height, 
            respiratoryRate, vital_weight} = this.state;
        const formData = { tempreture, pulse, bloodpressure, vital_height, 
            respiratoryRate, vital_weight}
        
        if( tempreture==="" && pulse==="" && bloodpressure==="" && vital_height==="" && respiratoryRate==="" && vital_weight ) return;
        return localStorage.setItem('vital_signs', JSON.stringify(formData));
    }

    onInputChange=(e)=> {
        this.setState({ [e.target.name]: e.target.value })
    }


    render(){
        return(
            <div>
                <Form>
                    <h3 className="text-center"><strong>Vital Signs</strong></h3>
                    <hr />
                    <FormGroup row>
                        <label className='col-md-2'>Temperature (C):</label>
                        <textarea name="tempreture" value={this.state.tempreture} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                        <label className='col-md-2'>Pulse Rate (b/mim):</label>
                        <textarea name="pulse" value={this.state.pulse} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                    </FormGroup>
                    <FormGroup row>
                        <label className='col-md-2'>Blood Pressure (mmHg):</label>
                        <textarea name="bloodpressure" value={this.state.bloodpressure} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                        <label className='col-md-2'>Height (m):</label>
                        <textarea name="vital_height" value={this.state.vital_height} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                    </FormGroup>
                    <FormGroup row>
                        <label className='col-md-2'>Respiratory Rate (c/min):</label>
                        <textarea name="respiratoryRate" value={this.state.respiratoryRate} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                        <label className='col-md-2'>Weight (kg):</label>
                        <textarea name="vital_weight" value={this.state.vital_weight} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                    </FormGroup>
                    <FormGroup row>
                        <label className='col-md-2'>Body Mass(kg/m):</label>
                        <input name="body_mass" disabled value={(parseFloat(this.state.vital_weight)/parseFloat(this.state.vital_height)).toFixed(3)} className="form-control col-md-4" />
                    </FormGroup>
                </Form>
                <br />
                <hr />
                <div className="row">
                    <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-8"><Link to='/patient_clarking/presenting_complaints' style={{width:'9vw'}}>Next <FaArrowRight /></Link></button>
                </div>
            </div>
        )
    }
}

export default CreateVitalSigns;