import React from 'react';
import { Collapse, FormGroup, CardHeader } from 'reactstrap';
import { GrDown, GrUp } from 'react-icons/gr';
import {saveRESPIRATORY} from '../../../redux/actions/doctor'
import { connect} from 'react-redux'
import SpeechInput from '../../comp/speech-to-text/SpeechInput'; 

class Respiratory extends React.Component {
  state = {
    respiratoryPalpation: '',
    respiratoryInspection: '',
    respiratoryPercussion: '',
    respiratoryAuscultation: '',
    isOpen : true
  }
  componentDidMount(){
    const {systemExam} = this.props
    this.setState({
      respiratoryPalpation: systemExam.respiratoryPalpation ,
      respiratoryInspection: systemExam.respiratoryInspection ,
      respiratoryPercussion: systemExam.respiratoryPercussion ,
      respiratoryAuscultation: systemExam.respiratoryAuscultation ,
    })
  }

  handleChange = (name, value) => {
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
      respiratoryPalpation: this.state.respiratoryPalpation,
      respiratoryInspection: this.state.respiratoryInspection,
      respiratoryPercussion: this.state.respiratoryPercussion,
      respiratoryAuscultation: this.state.respiratoryAuscultation,
    }
    this.props.saveRESPIRATORY(obj)
  }

  render(){
    return (
      <React.Fragment>
      <div
        style={{ cursor: 'pointer' }}
        onClick={this.handleToggle}
      >
         <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn p-0 pl-2 pr-2"
        onClick={this.handleToggle}
      >
       <span style={{fontWeight: 'bold'}}>Chest / Respiratory Examination</span>
        <span>{this.state.isOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
        
      </div>
      <Collapse isOpen={!this.state.isOpen}>
      <FormGroup row>
          <div className="col-md-6">
            <label>Inspection</label>
            <SpeechInput
              name="respiratoryInspection"
              onInputChange={text => this.handleChange('respiratoryInspection',text)}
              value={this.state.respiratoryInspection}
              className="form-control"
              type = 'textarea'
            />
          </div>
          <div className="col-md-6">
            <label>Palpation</label>
            <SpeechInput
              name="respiratoryPalpation"
              onInputChange={text => this.handleChange('respiratoryPalpation',text)}
              value={this.state.respiratoryPalpation}
              className="form-control"
              type = 'textarea'
            />
          </div>
          <div className="col-md-6">
            <label>Percussion</label>
            <SpeechInput
              name="respiratoryPercussion"
              onInputChange={text => this.handleChange('respiratoryPercussion',text)}
              value={this.state.respiratoryPercussion}
              className="form-control"
              type = 'textarea'
            />
          </div> <div className="col-md-6">
            <label>Auscultation </label>
            <SpeechInput
              name="respiratoryAuscultation"
              onInputChange={text => this.handleChange('respiratoryAuscultation',text)}
              value={this.state.respiratoryAuscultation}
              className="form-control"
              type = 'textarea'
            />
          </div>
        </FormGroup>
      </Collapse>
    </React.Fragment>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveRESPIRATORY: respiratory => dispatch(saveRESPIRATORY(respiratory))
  }
}
function mapStateToProps(state){
  return {
    systemExam: state.doctor.systemExam
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Respiratory)