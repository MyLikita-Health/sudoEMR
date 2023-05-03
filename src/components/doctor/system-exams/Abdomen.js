import React from 'react';
import { Collapse, FormGroup, CardHeader } from 'reactstrap';
import { GrDown, GrUp } from 'react-icons/gr';
import {saveABDOMEN} from '../../../redux/actions/doctor'
import { connect} from 'react-redux'
import SpeechInput from '../../comp/speech-to-text/SpeechInput'; 

class Abdomen extends React.Component {
  state = {
    abdomenPalpation:'',
    abdomenInspection:'',
    abdomenPercussion:'',
    abdomenAuscultation:'',
    isOpen: true
  }
  componentDidMount(){
    const {systemExam} = this.props
    this.setState({
      abdomenPalpation: systemExam.abdomenPalpation ,
      abdomenInspection: systemExam.abdomenInspection ,
      abdomenPercussion: systemExam.abdomenPercussion ,
      abdomenAuscultation: systemExam.abdomenAuscultation ,
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
      abdomenPalpation: this.state.abdomenPalpation,
      abdomenInspection: this.state.abdomenInspection,
      abdomenPercussion: this.state.abdomenPercussion,
      abdomenAuscultation: this.state.abdomenAuscultation,
    }
    this.props.saveABDOMEN(obj)
  }

  render() {
    return (
      <React.Fragment>
      <div style={{ cursor: 'pointer' }} onClick={this.handleToggle}>
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn p-0 pl-2 pr-2"
        onClick={this.handleToggle}
      >
         <span style={{fontWeight: 'bold'}}>Abdominal Examination</span>
        <span>{this.state.isOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
       
      </div>
      <Collapse isOpen={!this.state.isOpen}>
      <FormGroup row>
          <div className="col-md-6">
            <label>Inspection</label>
            <SpeechInput
              type="textarea"
              name="abdomenInspection"
              onInputChange={text => this.handleChange('abdomenInspection', text)}
              value={this.state.abdomenInspection}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Palpation</label>
            <SpeechInput
              type="textarea"
              name="abdomenPalpation"
              onInputChange={text => this.handleChange('abdomenPalpation', text)}
              value={this.state.abdomenPalpation}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Percussion</label>
            <SpeechInput
              type="textarea"
              name="abdomenPercussion"
              onInputChange={text => this.handleChange('abdomenPercussion', text)}
              value={this.state.abdomenPercussion}
              className="form-control"
            />
          </div> <div className="col-md-6">
            <label>Auscultation </label>
            <SpeechInput
              type="textarea"
              name="abdomenAuscultation"
              onInputChange={text => this.handleChange('abdomenAuscultation' , text)}
              value={this.state.abdomenAuscultation}
              className="form-control"
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
    saveABDOMEN: abdomen => dispatch(saveABDOMEN(abdomen))
  }
}
function mapStateToProps(state){
  return {
    systemExam: state.doctor.systemExam
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Abdomen)