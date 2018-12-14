import React, {Component} from 'react';
import { Form, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import 'bootstrap/dist/css/bootstrap.css';



export default class PreviousMedicalHistory extends Component {
  constructor(props) {
    super(props);

    let storedData = JSON.parse(localStorage.getItem('previous_medical_history')) || [];

    this.state = {
        pbnh: storedData.pbnh || "",
        nutrition: storedData.nutrition || "",
        immunization: storedData.immunization || "",
        development: storedData.development || "", 
        hypertensive: storedData.hypertensive || "",
        diabetic: storedData.diabetic || "",
        asthmatic: storedData.asthmatic || "",
        formRecords: []
    }
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    const { pbnh, nutrition, immunization, development, 
        hypertensive, diabetic, asthmatic } = this.state;
    const formData = { pbnh, nutrition, immunization, development, 
        hypertensive, diabetic, asthmatic };
    if(pbnh==="" && nutrition==="" && immunization==="" && development==="" && 
        hypertensive==="" && diabetic==="" && asthmatic==="") return;
    return localStorage.setItem('previous_medical_history', JSON.stringify(formData));
  }

  onInputChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value });
  }
 
    render(){

        return(
            <Form>
                <h3 className="text-center"><strong>Previous Medical History</strong></h3>
                <hr />
                <FormGroup row>
                    <label className="col-md-2">Pregnancy, Birth Neonatal History:</label>
                    <textarea 
                        type="text" 
                        name="pbnh" 
                        value={this.state.pbnh} 
                        onChange={this.onInputChange} 
                        className="form-control col-md-4" ></textarea>
                    <label className="col-md-2">Immunization History:</label>
                    <textarea 
                        type="text" 
                        name="immunization" 
                        value={this.state.immunization} 
                        onChange={this.onInputChange} 
                        className="form-control col-md-4" ></textarea>
                </FormGroup>
                <FormGroup row>
                    <label className="col-md-2">Nutrition History:</label>
                    <textarea 
                        type="text" 
                        name="nutrition" 
                        value={this.state.nutrition} 
                        onChange={this.onInputChange} 
                        className="form-control col-md-4" ></textarea>
                    <label className="col-md-2">Developmental History:</label>
                    <textarea 
                        type="text" 
                        name="development" 
                        value={this.state.development} 
                        onChange={this.onInputChange} 
                        className="form-control col-md-4" ></textarea>
                </FormGroup>
                <FormGroup row>
                    <label className="col-md-3"><strong>Known Hypertensive?</strong></label>
                    <input type="radio" name="hypertensive" checked={this.state.hypertensive==='yes'} onChange={this.onInputChange} value="yes" />Yes
                    <input type="radio" name="hypertensive" checked={this.state.hypertensive==='no'} onChange={this.onInputChange} value="no" />No
                    <label className="col-md-3 offset-md-2"><strong>Known Diabetic?</strong></label>
                    <input type="radio" name="diabetic" checked={this.state.diabetic==='yes'} onChange={this.onInputChange} value="yes" />Yes
                    <input type="radio" name="diabetic" checked={this.state.diabetic==='no'} onChange={this.onInputChange} value="no" />No
                </FormGroup>
                <FormGroup row>
                    <label className="col-md-3"><strong>Known Asthmatic?</strong></label>
                    <input type="radio" name="asthmatic" checked={this.state.asthmatic==='yes'} onChange={this.onInputChange} value="yes" />Yes
                    <input type="radio" name="asthmatic" checked={this.state.asthmatic==='no'} onChange={this.onInputChange} value="no" />No
                </FormGroup>
                <hr />
                <div className="row">
                    <Link to="/patient_clarking/history" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
                    <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7"><Link to='/patient_clarking/system_examination' style={{width:'9vw'}}>Next <FaArrowRight /></Link></button>
                </div>
                   
            </Form>   



        )
    }
}
