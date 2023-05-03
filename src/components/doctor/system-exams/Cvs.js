import React from 'react';
import { Collapse, FormGroup, CardHeader } from 'reactstrap';
import { GrDown, GrUp } from 'react-icons/gr';
import { connect} from 'react-redux'
import {saveCVS} from '../../../redux/actions/doctor'
import SpeechInput from '../../comp/speech-to-text/SpeechInput'; 

class Cvs extends React.Component {
  state ={
    cvsPalpation: '',
    cvsInspection: '',
    cvsPercussion: '',
    cvsAuscultation: '',
    isOpen: true
  }
  componentDidMount(){
    const {systemExam} = this.props
    this.setState({
      cvsPalpation: systemExam.cvsPalpation,
    cvsInspection: systemExam.cvsInspection,
    cvsPercussion: systemExam.cvsPercussion,
    cvsAuscultation: systemExam.cvsAuscultation,
    })
  }

  handleChange = (name,value) => {
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
      cvsPalpation: this.state.cvsPalpation,
      cvsInspection: this.state.cvsInspection,
      cvsPercussion: this.state.cvsPercussion,
      cvsAuscultation: this.state.cvsAuscultation,
    }
    this.props.saveCVS(obj)
  }

  render() {
    return(
    <React.Fragment>
       <div style={{ cursor: 'pointer' }} onClick={this.handleToggle}>
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn p-0 pl-2 pr-2"
        onClick={this.handleToggle}
      >
        <span style={{fontWeight: 'bold'}}>Cardiovascular Examination</span>
        <span>{this.state.isOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
        
      </div>
      <Collapse isOpen={!this.state.isOpen}>
      <FormGroup row>
          <div className="col-md-6">
            <label>Inspection</label>
            <SpeechInput
              type="textarea"
              name="cvsInspection"
              onInputChange={text => this.handleChange('cvsInspection',text)}
              value={this.state.cvsInspection}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Palpation</label>
            <SpeechInput
              type="textarea"
              name="cvsPalpation"
              onInputChange={text => this.handleChange('cvsPalpation',text)}
              value={this.state.cvsPalpation}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Percussion</label>
            <SpeechInput
              type="textarea"
              name="cvsPercussion"
              onInputChange={text => this.handleChange('cvsPercussion',text)}
              value={this.state.cvsPercussion}
              className="form-control"
            />
          </div> <div className="col-md-6">
            <label>Auscultation </label>
            <SpeechInput
              type="textarea"
              name="cvsAuscultation"
              onInputChange={text => this.handleChange('cvsAuscultation',text)}
              value={this.state.cvsAuscultation}
              className="form-control"
            />
          </div>
        </FormGroup>
      </Collapse>

    </React.Fragment>)
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveCVS: cvs => dispatch(saveCVS(cvs))
  }
}
function mapStateToProps(state){
  return {
    systemExam: state.doctor.systemExam
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cvs)