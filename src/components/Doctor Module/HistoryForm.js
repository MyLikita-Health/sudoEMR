import React from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link} from 'react-router-dom';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';


export default class HistoryForm extends React.Component {
    constructor(props){
        super(props);

        const storedData = JSON.parse(localStorage.getItem('history')) || []
        this.state = {
            others: storedData.others || "",
            pastMedicalHistory: storedData.pastMedicalHistory || "",
            historyOfPresentingComplaints: storedData.historyOfPresentingComplaints || "",
            allergy: storedData.allergy || "",
            social: storedData.social || "",
            otherAllergies: storedData.otherAllergies || "",
            otherSocialHistory: storedData.otherSocialHistory || "",
            obtsGyneaHistory: storedData.obtsGyneaHistory || "",
            drugHistory: storedData.drugHistory || "",
            formRecords: []
        }
    }

    onInputChange=(e)=>{
        this.setState({ [e.target.name]: e.target.value})
    }

    // onCheckboxChange=(e)=> {
    //     this.setState(prevState => ({ [e.target.name]: prevState.[e.target.name] }));
    // }

    handleSubmit=(e)=>{
        e.preventDefault();
        const { others, pastMedicalHistory, historyOfPresentingComplaints, allergy, social, 
            otherAllergies, otherSocialHistory, obtsGyneaHistory, drugHistory } = this.state;
        const formData = { others, pastMedicalHistory, historyOfPresentingComplaints, 
            allergy, social, otherAllergies, otherSocialHistory, obtsGyneaHistory, drugHistory };
        if(others==="" && pastMedicalHistory==="" && historyOfPresentingComplaints==="" && allergy==="" && social==="" && 
            otherAllergies==="" && otherSocialHistory==="" && obtsGyneaHistory==="" && drugHistory==="") return;
        return localStorage.setItem('history', JSON.stringify(formData));
    }

    render(){
        return (
        <div>
            <h3 className="text-center"><strong>History of Presenting Complaints</strong></h3> 
            <Form>
                <FormGroup row>
                    <label className="col-md-2">Others:</label>
                    <textarea name="others" value={this.state.others} onChange={this.onInputChange} className="form-control col-md-4" ></textarea>
                    <label className="col-md-2">Past Medical History:</label>
                    <textarea name="pastMedicalHistory" value={this.state.pastMedicalHistory} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                </FormGroup>

                <FormGroup row>      
                    <label className="col-md-2" >History of Presenting Complaints:</label>
                    <textarea name="historyOfPresentingComplaints" value={this.state.historyOfPresentingComplaints} onChange={this.onInputChange} className="form-control col-md-4"  ></textarea>
                    <label className="col-md-2">Allergy:</label>
                    <div className="col-md-4">
                        <input onChange={this.onInputChange} name="allergy" value="foodstuff" type="checkbox"  />Food Stuff
                        <input onChange={this.onInputChange} name="allergy" value="flower" type="checkbox"  />Flower
                        <input onChange={this.onInputChange} name="allergy" value="dust" type="checkbox"  />Dust/Smoke
                        <input onChange={this.onInputChange} name="allergy" value="drugs" type="checkbox"  />Drugs
                    </div>
                </FormGroup>
                <FormGroup row>      
                    <label className="col-md-2">Social History:</label>
                    <div className="col-md-4">
                        <label><input  name="Married" onChange={this.onInputChange} name= "social" value="married" type="checkbox" />Married  </label>
                        <label><input  name="Somking" onChange={this.onInputChange} name= "social" value="smoking" type="checkbox"  />Smoking  </label>
                        <label><input  name="Alcohol" onChange={this.onInputChange} name= "social" value="alcohol" type="checkbox"  />Alcohol  </label>
                        
                    </div>
                    <label className="col-md-2">Other Allergies:</label>
                    <textarea name="otherAllergies" value={this.state.otherAllergies} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                </FormGroup>
                <FormGroup row>      
                    <label className="col-md-2">Other Social History:</label>
                    <textarea name="otherSocialHistory" value={this.state.otherSocialHistory} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                    <label className="col-md-2">Drug History:</label>
                    <textarea name="drugHistory" value={this.state.drugHistory} onChange={this.onInputChange} className="form-control col-md-4"></textarea>
                </FormGroup>
            
                <FormGroup row>      
                    <label  className="col-md-2">Obts & Gynea History:</label>
                    <textarea className="form-control col-md-4" name="obtsGyneaHistory" value={this.state.obtsGyneaHistory} onChange={this.onInputChange}></textarea>
                    
                </FormGroup>
                </Form>
                <div className="row">
                    <Link to="/patient_clarking/presenting_complaints" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
                    <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7"><Link to='/patient_clarking/previous_medical_history' style={{width:'9vw'}}>Next <FaArrowRight /></Link></button>
                </div>
        </div>
        );
    }
}
