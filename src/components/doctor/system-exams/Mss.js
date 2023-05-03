import React from 'react';
import { Collapse, FormGroup, CardHeader } from 'reactstrap';
import { GrDown, GrUp } from 'react-icons/gr';
import { connect} from 'react-redux'
import {saveMSS} from '../../../redux/actions/doctor'
import SpeechInput from '../../comp/speech-to-text/SpeechInput'; 

class Mss extends React.Component {
  constructor(props) {
    super(props);
    this.rul = React.createRef();
  }
  state = {  
    mssPalpation:'',
    mssInspection:'',
    mssPercussion:'',
    mssAuscultation:'',
    RUL:'',
    LLL: '',
    RLL: '',
    LUL: '',
    mssIsOpen: true,
    values: 0
  }
  componentDidMount(){
    const {systemExam} = this.props
    this.setState({
    mssPalpation:systemExam.mssPalpation,
    mssInspection:systemExam.mssInspection,
    mssPercussion:systemExam.mssPercussion,
    mssAuscultation:systemExam.mssAuscultation,
    RUL:systemExam.RUL,
    LLL:systemExam.LLL,
    RLL:systemExam.RLL,
    LUL:systemExam.LUL,
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
  handleToggleMss = () => {
    this.setState({
      mssIsOpen: !this.state.mssIsOpen
    })
  }
componentWillUnmount(){
  const obj = {
    mssPalpation:this.state.mssPalpation,
    mssInspection:this.state.mssInspection,
    mssPercussion:this.state.mssPercussion,
    mssAuscultation:this.state.mssAuscultation,
    RUL:this.state.RUL,
    LLL:this.state.LLL,
    RLL:this.state.RLL,
    LUL:this.state.LUL,
  }
  this.props.saveMSS(obj)
}

enforceMinMax(el){
  if(el.value !== ""){
    if(parseInt(el.value) < parseInt(el.min)){
      el.value = el.min;
    }
    if(parseInt(el.value) > parseInt(el.max)){
      el.value = el.max;
    }
  }
}
  

  render(){
    const dropdownItems = [];
    for (let i = 1; i <= 5; i++) {
      dropdownItems.push(<option value={i}>{i}</option>);
    }
    return(
      <React.Fragment>
        <div style={{ cursor: 'pointer' }} onClick={this.handleToggleMss}>
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn p-0 pl-2 pr-2"
        onClick={() => this.handleToggleMss}
      >
        <span style={{fontWeight: 'bold'}}>Musculoskeletal Examination</span>
        <span>{this.state.mssIsOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
      </div>
      {/* {JSON.stringify(mss)} */}
      <Collapse isOpen ={!this.state.mssIsOpen}>
        <FormGroup row>
          <div className="col-md-6">
            <label>Inspection</label>
            <SpeechInput
              name="mssInspection"
              type='textarea'
              onInputChange={text => this.handleChange('mssInspection',text)}
              value={this.state.mssInspection}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Palpation</label>
            <SpeechInput
              name="mssPalpation"
              type='textarea'
              onInputChange={text => this.handleChange('mssPalpation',text)}
              value={this.state.mssPalpation}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Percussion</label>
            <SpeechInput
              name="mssPercussion"
              type='textarea'
              onInputChange={text => this.handleChange('mssPercussion',text)}
              value={this.state.mssPercussion}
              className="form-control"
            />
          </div> <div className="col-md-6">
            <label>Auscultation </label>
            <SpeechInput
              name="mssAuscultation"
              type='textarea'
              onInputChange={text => this.handleChange('mssAuscultation',text)}
              value={this.state.mssAuscultation}
              className="form-control"
            />
          </div>
          </FormGroup>
          <FormGroup row>
          <CardHeader className="col-md-12" tag="h5">Power</CardHeader>
            {/* {this.state.RUL > 5 ? alert('error occur')  :  */}
          <div className="col-md-3">
            <label>Right Upper Limb</label>
            <select
              className="form-control"
              onChange={this.handleChanges}
              name="RUL"
              value={this.state.RUL}
              > 
             {dropdownItems} 
            </select>
          </div>
           
             
         
          <div className="col-md-3">
            <label>Left Upper Limb</label>
            <select
              className="form-control"
              onChange={this.handleChanges}
              name="LUL"
              value={this.state.LUL} >
               {dropdownItems} 
            </select>
          </div>
          <div className="col-md-3">
            <label>Right Lower Limb</label>
            <select
              className="form-control"
              onChange={this.handleChanges}
              name="RLL"
              value={this.state.RLL}> 
              {dropdownItems} 
            </select>
          </div>
          <div className="col-md-3">
            <label>Left Lower Limb</label>
            <select
              className="form-control"
              onChange={this.handleChanges}
              name="LLL"
              value={this.state.LLL}>
                 {dropdownItems} 
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
    saveMSS: mss => dispatch(saveMSS(mss))
  }
}

function mapStateToProps(state){
  return {
    systemExam: state.doctor.systemExam
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Mss) 
