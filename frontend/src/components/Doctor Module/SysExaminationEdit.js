import React, {Component} from 'react';
import { Form, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Button, Container } from 'reactstrap';
import { Link} from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.css';

class SysExaminationEdit extends Component {
  constructor(props) {
    super(props);

    const cachedData = JSON.parse(localStorage.getItem('system_examination')) || [];

    this.state = {
        palor: cachedData.palor || "",
        dehydration: cachedData.dehydration || "",
        generalexamination: cachedData.generalexamination || "",
        mss: cachedData.mss || "",
        cvs: cachedData.cvs || "",
        abdomen: cachedData.abdomen || "",
        respiratory: cachedData.respiratory || "",
        otherSysExamination: cachedData.otherSysExamination || "",
        cns: cachedData.cns || "",
        eye_opening: cachedData.eye_opening || 0,
        BVR: cachedData.BVR || 0,
        BMR: cachedData.BMR || 0,
        gcs: cachedData.gcs || 0,
        RUL: cachedData.RUL || 0,
        LUL: cachedData.LUL || 0,
        RLL: cachedData.RLL || 0,
        LLL: cachedData.LLL || 0,
        formRecords:[],
        modal: false
    };
  } 

  handleSubmit=(e)=>{
    e.preventDefault();
    const { palor, dehydration, generalexamination, mss, cvs, abdomen, respiratory, 
        otherSysExamination, cns, eye_opening, BVR, BMR, RUL, LUL, RLL, LLL } = this.state;
    const formData = { palor, dehydration, generalexamination, mss, cvs, abdomen, respiratory, 
        otherSysExamination, cns, eye_opening, BVR, BMR, RUL, LUL, RLL, LLL, gcs: parseInt(eye_opening)+parseInt(BVR)+parseInt(BMR) };
    if(palor==="" && dehydration==="" && generalexamination==="" && mss==="" && cvs==="" && abdomen==="" && respiratory==="" && 
        otherSysExamination==="" && cns==="" && eye_opening===0 && BVR===0 && BMR===0 && RUL===0 && LUL===0 && RLL===0 && LLL===0) return;
    return localStorage.setItem('system_examination', JSON.stringify(formData));
  }

  onInputChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value})
  }

  toggle=()=>{
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  
    render(){
        const { palor, generalexamination, mss, cvs, abdomen, cns, respiratory, otherSysExamination, 
            dehydration, eye_opening, BVR, BMR, RUL, LUL, RLL, LLL, gcs } = this.state;
        return(
            <div>
                <Form>
                    <h3 className="text-center"><strong>System Examination</strong></h3>
                    <hr />
                    <FormGroup row>
                        <label className="col-md-2">Palor:</label>
                        <div className="col-md-4">
                            <input type="radio" className="col-md-1" name="palor" value='none' checked={palor==='none'} onChange={this.onInputChange}/>None
                            <input type="radio" className="col-md-1" name="palor" value='+1' checked={palor==='+1'} onChange={this.onInputChange}/>+1
                            <input type="radio" className="col-md-1" name="palor" value='+2' checked={palor==='+2'} onChange={this.onInputChange}/>+2
                            <input type="radio" className="col-md-1" name="palor" value='+3' checked={palor==='+3'} onChange={this.onInputChange}/>+3
                        </div>
                        <label className="col-md-2">Dehydration:</label>
                        <div className="col-md-4">
                            <input type="radio" className="col-md-1" name="dehydration" value='none' checked={dehydration==='none'} onChange={this.onInputChange}/>None
                            <input type="radio" className="col-md-1" name="dehydration" value='+1' checked={dehydration==='+1'} onChange={this.onInputChange}/>+1
                            <input type="radio" className="col-md-1" name="dehydration" value='+2' checked={dehydration==='+2'} onChange={this.onInputChange}/>+2
                            <input type="radio" className="col-md-1" name="dehydration" value='+3' checked={dehydration==='+3'} onChange={this.onInputChange}/>+3
                        </div>
                    </FormGroup>
                    {/* <FormGroup row>
                        <label className="col-md-2">General Examination:</label>
                        <textarea name="generalexamination" onChange={this.onInputChange} value={generalexamination} className="form-control col-md-4" ></textarea>
                        <label className="col-md-2">MSS:</label>
                        <textarea name="mss" onChange={this.onInputChange} value={mss}  className="form-control col-md-4"></textarea>
                    </FormGroup> */}
                    <FormGroup row>
                        <label className="col-md-2">CVS:</label>
                        <input name="cvs" onChange={this.onInputChange} value={cvs} className="form-control col-md-4" />
                        <label className="col-md-2">Abdomen:</label>
                        <input name="abdomen" onChange={this.onInputChange} value={abdomen}  className="form-control col-md-4" />
                    </FormGroup>
                    <FormGroup row>
                        <label className="col-md-2">Respiratory:</label>
                        <input  className="form-control col-md-4" name="respiratory" onChange={this.onInputChange} value={respiratory} />
                        <label className="col-md-2">Others:</label>
                        <input name="otherSysExamination" onChange={this.onInputChange} value={otherSysExamination}  className="form-control col-md-4" />          
                    </FormGroup>
                    <FormGroup row>
                        <label className="col-md-2">CNS:</label>
                        <input name="cns" onChange={this.onInputChange} value={cns}  className="form-control col-md-4" />
                    </FormGroup>
                </Form>
                <button className="btn btn-primary col-md-2 offset-md-5" onClick={this.toggle}>More</button>
                <SystemExamModal 
                    modal={this.state.modal} 
                    toggle={this.toggle} 
                    eye_opening = {eye_opening} 
                    BVR = {BVR} BMR = {BMR} 
                    RUL = {RUL} LUL = {LUL} 
                    RLL = {RLL} LLL = {LLL}
                    gcs = {gcs}
                    onInputChange={this.onInputChange}
                />
                <div className="row" style={{marginTop: '8em'}}>
                    <Link to="/patient_clarking/previous_medical_history" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
                    <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7"><Link to='/patient_clarking/problems' style={{width:'9vw'}}>Next <FaArrowRight /></Link></button>
                </div> 
            </div>
        )
    }
}

export default SysExaminationEdit;

const SystemExamModal = ({ modal, toggle, eye_opening, BVR, BMR, RUL, LUL, RLL, LLL, gcs, onInputChange }) => {
        return (
            <Modal size="lg" isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Preview Diagnosis</ModalHeader>
                <ModalBody>
                    <Container>
                    <FormGroup row>
                        <label className="col-md-4">Eye Opening:</label>
                        <div className="col-md-8 row">
                            <div className="col-md-2"><input type="radio"  name="eye_opening" value='1' checked={eye_opening==='1'} onChange={onInputChange}/>1</div>
                            <div className="col-md-2"><input type="radio"  name="eye_opening" value='2' checked={eye_opening==='2'} onChange={onInputChange}/>2</div>
                            <div className="col-md-2"><input type="radio"  name="eye_opening" value='3' checked={eye_opening==='3'} onChange={onInputChange}/>3</div>
                            <div className="col-md-2"><input type="radio"  name="eye_opening" value='4' checked={eye_opening==='4'} onChange={onInputChange}/>4</div>
                        </div>
                        </FormGroup>
                    <FormGroup row>
                        <label className="col-md-4">Best Verbal Response:</label>
                        <div className="col-md-8 row">
                            <div className="col-md-2">
                            <input type="radio"  name="BVR" value='1' checked={BVR==='1'} onChange={onInputChange}/>1</div>
                            <div className="col-md-2">
                            <input type="radio"  name="BVR" value='2' checked={BVR==='2'} onChange={onInputChange}/>2</div>
                            <div className="col-md-2">
                            <input type="radio"  name="BVR" value='3' checked={BVR==='3'} onChange={onInputChange}/>3</div>
                            <div className="col-md-2">
                            <input type="radio"  name="BVR" value='4' checked={BVR==='4'} onChange={onInputChange}/>4</div>
                            <div className="col-md-2">
                            <input type="radio"  name="BVR" value='5' checked={BVR==='5'} onChange={onInputChange}/>5</div>

                        </div>
                    </FormGroup>
                    <FormGroup row>
                        <label className="col-md-4">Best Motor Response:</label>
                        <div className="col-md-8 row">
                        <div className="col-md-2"><input type="radio"  name="BMR" value='1' checked={BMR==='1'} onChange={onInputChange}/>1</div>
                        <div className="col-md-2"> <input type="radio"  name="BMR" value='2' checked={BMR==='2'} onChange={onInputChange}/>2</div>
                        <div className="col-md-2">  <input type="radio"  name="BMR" value='3' checked={BMR==='3'} onChange={onInputChange}/>3</div>
                        <div className="col-md-2">  <input type="radio"  name="BMR" value='4' checked={BMR==='4'} onChange={onInputChange}/>4</div>
                        <div className="col-md-2">  <input type="radio"  name="BMR" value='5' checked={BMR==='5'} onChange={onInputChange}/>5</div>
                        <div className="col-md-2">  <input type="radio"  name="BMR" value='6' checked={BMR==='6'} onChange={onInputChange}/>6</div>
                        </div>
                        </FormGroup>
                    <FormGroup row>
                        <label className="col-md-4">GCS:</label>
                        <input 
                            type="text" 
                            className="form-control col-md-4" 
                            name="gcs" 
                            value={`${parseInt(eye_opening)+parseInt(BVR)+parseInt(BMR)}/15`} 
                            disabled
                            onChange={onInputChange} />
                    </FormGroup>
                    <FormGroup row>
                        <label className="col-md-4">Right Upper Limb:</label>
                        <div className="col-md-8 row">
                            <div className="col-md-2"><input type="radio" name="RUL" value='0/5' checked={RUL==='0/5'} onChange={onInputChange}/>0/5</div>
                            <div className="col-md-2"><input type="radio" name="RUL" value='1/5' checked={RUL==='1/5'} onChange={onInputChange}/>1/5</div>
                            <div className="col-md-2"><input type="radio" name="RUL" value='2/5' checked={RUL==='2/5'} onChange={onInputChange}/>2/5</div>
                            <div className="col-md-2"><input type="radio" name="RUL" value='3/5' checked={RUL==='3/5'} onChange={onInputChange}/>3/5</div>
                            <div className="col-md-2"><input type="radio" name="RUL" value='4/5' checked={RUL==='4/5'} onChange={onInputChange}/>4/5</div>
                            <div className="col-md-2"><input type="radio" name="RUL" value='5/5' checked={RUL==='5/5'} onChange={onInputChange}/>5/5</div>
                        </div>
                        </FormGroup>
                    <FormGroup row>
                        <label className="col-md-4">Left Upper Limb:</label>
                        <div className="col-md-8 row">
                            <div className="col-md-2"><input type="radio" name="LUL" value='0/5' checked={LUL==='0/5'} onChange={onInputChange}/>0/5</div>
                            <div className="col-md-2"><input type="radio" name="LUL" value='1/5' checked={LUL==='1/5'} onChange={onInputChange}/>1/5</div>
                            <div className="col-md-2"><input type="radio" name="LUL" value='2/5' checked={LUL==='2/5'} onChange={onInputChange}/>2/5</div>
                            <div className="col-md-2"><input type="radio" name="LUL" value='3/5' checked={LUL==='3/5'} onChange={onInputChange}/>3/5</div>
                           <div className="col-md-2"> <input type="radio" name="LUL" value='4/5' checked={LUL==='4/5'} onChange={onInputChange}/>4/5</div>
                           <div className="col-md-2"> <input type="radio" name="LUL" value='5/5' checked={LUL==='5/5'} onChange={onInputChange}/>5/5</div>
                        </div>
                    </FormGroup>
                    <FormGroup row>
                        <label className="col-md-4">Right Lower Limb:</label>
                        <div className="col-md-8 row">
                            <div className="col-md-2"><input type="radio" name="RLL" value='0/5' checked={RLL==='0/5'} onChange={onInputChange}/>0/5</div>
                            <div className="col-md-2"><input type="radio" name="RLL" value='1/5' checked={RLL==='1/5'} onChange={onInputChange}/>1/5</div>
                            <div className="col-md-2"><input type="radio" name="RLL" value='2/5' checked={RLL==='2/5'} onChange={onInputChange}/>2/5</div>
                            <div className="col-md-2"><input type="radio" name="RLL" value='3/5' checked={RLL==='3/5'} onChange={onInputChange}/>3/5</div>
                            <div className="col-md-2"><input type="radio" name="RLL" value='4/5' checked={RLL==='4/5'} onChange={onInputChange}/>4/5</div>
                            <div className="col-md-2"><input type="radio" name="RLL" value='5/5' checked={RLL==='5/5'} onChange={onInputChange}/>5/5</div>
                        </div>
                        </FormGroup>
                    <FormGroup row>
                        <label className="col-md-4">Left Lower Limb:</label>
                        <div className="col-md-8 row">
                            <div className="col-md-2"><input type="radio" name="LLL" value='0/5' checked={LLL==='0/5'} onChange={onInputChange}/>0/5</div>
                            <div className="col-md-2"><input type="radio" name="LLL" value='1/5' checked={LLL==='1/5'} onChange={onInputChange}/>1/5</div>
                            <div className="col-md-2"><input type="radio" name="LLL" value='2/5' checked={LLL==='2/5'} onChange={onInputChange}/>2/5</div>
                            <div className="col-md-2"><input type="radio" name="LLL" value='3/5' checked={LLL==='3/5'} onChange={onInputChange}/>3/5</div>
                            <div className="col-md-2"><input type="radio" name="LLL" value='4/5' checked={LLL==='4/5'} onChange={onInputChange}/>4/5</div>
                            <div className="col-md-2"><input type="radio" name="LLL" value='5/5' checked={LLL==='5/5'} onChange={onInputChange}/>5/5</div>
                        </div>
                    </FormGroup>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle} >Save</Button> 
                </ModalFooter>
            </Modal>  
        )
}