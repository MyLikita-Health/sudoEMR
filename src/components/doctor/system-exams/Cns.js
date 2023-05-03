import React from 'react';
import { Collapse, FormGroup, CardHeader } from 'reactstrap';
import { GrDown, GrUp } from 'react-icons/gr';
import {saveCNS} from '../../../redux/actions/doctor'
import { connect} from 'react-redux'
import SpeechInput from '../../comp/speech-to-text/SpeechInput'; 

class Cns extends React.Component{
    state ={
      cnsPalpation : '',
      cnsInspection : '',
      cnsPercussion : '',
      cnsAuscultation : '',
      eye_opening : '',
      BVR : '',
      BMR : '',
      isOpen : true
    }

    componentDidMount(){
      const {systemExam} = this.props
      this.setState({
        cnsPalpation : systemExam.cnsPalpation,
        cnsInspection : systemExam.cnsInspection,
        cnsPercussion : systemExam.cnsPercussion,
        cnsAuscultation : systemExam.cnsAuscultation,
        eye_opening : systemExam.eye_opening,
        BVR : systemExam.BVR,
        BMR : systemExam.BMR,
      })
    }
    handleChange = (name,value) => {
      this.setState({
        [name] : value
      })
    }
  
      
    handleChanges = (e) => {
      const {name, value} = e.target
      this.setState({
        [name] : value
      })
    }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  componentWillUnmount(){
    const obj = {
      cnsPalpation : this.state.cnsPalpation,
      cnsInspection : this.state.cnsInspection,
      cnsPercussion : this.state.cnsPercussion,
      cnsAuscultation : this.state.cnsAuscultation,
      eye_opening : this.state.eye_opening,
      BVR : this.state.BVR,
      BMR : this.state.BMR,
    }
    this.props.saveCNS(obj)
  }

  render() {
    const bestMotor = [];
    for (let i = 1; i <= 6; i++) {
      bestMotor.push(<option value={i}>{i}</option>);
    }
    const bestVerbal = [];
    for (let i = 1; i <= 5; i++) {
      bestVerbal.push(<option value={i}>{i}</option>);
    }
    const eyesOpen = [];
    for (let i = 1; i <= 4; i++) {
      eyesOpen.push(<option value={i}>{i}</option>);
    }
    return (
<React.Fragment>
      <div style={{ cursor: 'pointer' }} onClick={this.handleToggle}>
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn p-0 pl-2 pr-2"
        onClick={this.handleToggle}
      >
          <span style={{fontWeight: 'bold'}}>CNS Examination</span>
         <span>{this.state.isOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
      
      </div>
      <Collapse isOpen={!this.state.isOpen}>
      <FormGroup row>
          <div className="col-md-6">
            <label>Inspection</label>
            <SpeechInput
              type="textarea"
              name="cnsInspection"
              onInputChange={text => this.handleChange('cnsInspection', text)}
              value={this.state.cnsInspection}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Palpation</label>
            <SpeechInput
              type="textarea"
              name="cnsPalpation"
              onInputChange={text => this.handleChange('cnsPalpation', text)}
              value={this.state.cnsPalpation}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Percussion</label>
            <SpeechInput
              type="textarea"
              name="cnsPercussion"
              onInputChange={text => this.handleChange('cnsPercussion', text)}
              value={this.state.cnsPercussion}
              className="form-control"
            />
          </div> <div className="col-md-6">
            <label>Auscultation </label>
            <SpeechInput
              type="textarea"
              name="cnsAuscultation"
              onInputChange={text => this.handleChange('cnsAuscultation', text)}
              value={this.state.cnsAuscultation}
              className="form-control"
            />
          </div>
          <div>
            <label className="ml-3">GCS:</label>
            <span>
              {`${parseInt(this.state.eye_opening) + parseInt(this.state.BVR) + parseInt(this.state.BMR)}/15`}{' '}
            </span>
          </div>
        </FormGroup>
        <FormGroup row>
        <div className="col-md-4">
            <label>Eyes Opening</label>
            <select
              className="form-control"
              onChange={this.handleChanges}
              name="eye_opening"
              value={this.state.eye_opening}>
                 {eyesOpen} 
              </select>
          </div>
          
          <div className="col-md-4">
            <label>Best Verbal Response:</label>
            <select
              className="form-control"
              onChange={this.handleChanges}
              name="BVR"
              value={this.state.BVR}>
                 {bestVerbal} 
              </select>
          </div>
          <div className="col-md-4">
            <label>Best Motor Response:</label>
            <select
              className="form-control"
              onChange={this.handleChanges}
              name="BMR"
              value={this.state.BMR}>
                 {bestMotor} 
              </select>
          </div>
        </FormGroup>
      </Collapse>
    </React.Fragment>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {  
    saveCNS: cns => dispatch(saveCNS(cns))
  }
}
function mapStateToProps(state){
  return {
    systemExam: state.doctor.systemExam
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cns)
