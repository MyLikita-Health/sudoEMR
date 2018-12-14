import React from 'react';
import { Form, FormGroup, Table } from 'reactstrap';
import { _warningNotify } from '../helpers';
import Notifications from 'react-notify-toast';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import MdSave from 'react-icons/lib/md/save';
import { Link} from 'react-router-dom';

export class PcomplaintsForm extends React.Component {
  constructor(props) {
    super(props);

    let storedData = JSON.parse(localStorage.getItem('presenting_complaints'));

    this.state = {
      history: "",
      complaint: "",
      duration: "",
      period: "",
      formRecords: storedData || [],
    };
  }

  onDurationChange=(e)=> {
    this.setState({ duration: e.target.value });
  }

  onComplaintChange=(e)=>{
    this.setState({ complaint: e.target.value });
  }

  onPeriodChange=(e)=>{
    this.setState({ period: e.target.value });
  }

  handleFormSubmit=(e)=>{
      e.preventDefault();
      const { complaint, duration, period } = this.state;
      if(complaint==="" || duration===""|| period==="") {
        return _warningNotify("Please fill all the fields")
      }

      const formData = { complaint, duration, period };

      this.setState(prevState => ({ 
        formRecords: prevState.formRecords.concat(formData),
        complaint: "",
        duration: "",
        period: "",
      }));
  }

  handleNext=()=>{
      if(this.state.formRecords!==[]) return localStorage.setItem('presenting_complaints', JSON.stringify(this.state.formRecords));
  }

  onHistoryChange=(e)=>{
    this.setState({ history: e.target.value })
  }

  render() {
    const { formRecords, history, complaint } = this.state;
    const dropdownItems = [];
    for(let i=0; i<=15; i++){
        dropdownItems.push(<option value={i} key={i}>{i}</option>)
    }
    
    return (
        <div style={{width: '100%', height: '55vh'}}>
            <Form onSubmit={this.handleFormSubmit}>
                <h3 className="text-center"><strong>Presenting Complaints</strong></h3>
                <FormGroup row>
                    <label className="col-md-4">Presenting Complaint: </label>
                    <input value={complaint} className="form-control col-md-6" type="text" onChange={this.onComplaintChange} />
                </FormGroup>
                <FormGroup row>
                    <label className="col-md-4">Duration: </label>
                    <select className="form-control col-md-1" onChange={this.onDurationChange}>{dropdownItems}</select>
                    <label className="col-md-2">Period: </label>
                    <div className="col-md-4">
                        <input type="radio" name="period" value="days" onChange={this.onPeriodChange}/>Days
                        <input type="radio" name="period" value="weeks" onChange={this.onPeriodChange}/>Weeks
                        <input type="radio" name="period" value="months" onChange={this.onPeriodChange}/>Months
                        <input type="radio" name="period" value="years" onChange={this.onPeriodChange}/>Years
                    </div>
                </FormGroup>
                <button type="submit" className="btn btn-outline-primary offset-md-9"><MdSave />Save Complaint</button> 
                <Notifications />      
            </Form>
            <PComplaintsTable 
                formRecords={formRecords}
                history={history}
                onHistoryChange={this.onHistoryChange}
            />
            <hr />
            <Link to="/patient_clarking/vital_signs" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
            <button onClick={this.handleNext} className="btn btn-outline-success offset-md-6">
                <Link to='/patient_clarking/history' style={{width:'10vw'}}>Next<FaArrowRight /></Link>
            </button>
        </div>
     
    );
  }
}


export const PComplaintsTable=({ formRecords=[], history, showHistory=true, onHistoryChange=f=>f })=>{
    const rows = [];
    const rowStyle = {
        border: '1px solid gray',
        padding: '.4em',
        paddingRight: '3em',
    }
    formRecords.forEach((record, i) => {
        rows.push(
            <tr key={i}>
                <td style={rowStyle}>{i+1}</td>
                <td style={rowStyle}>{record.complaint}</td>
                <td style={rowStyle}>for {record.duration} {record.period}</td>
                { showHistory && <td style={rowStyle}><input type="text" className="form-control" value={history} onChange={onHistoryChange} /></td> }
            </tr>
        )
    });
     
    return (
        <div>
            { !showHistory && <h5>Presenting Complaints</h5>}
            <Table bordered striped hover cellSpacing={0} cellPadding={0}>
                <thead >
                    <tr>
                        <th style={rowStyle}>S/N</th>
                        <th style={rowStyle}>Complaints</th>
                        <th style={rowStyle}>Duration</th>
                        { showHistory && <th style={rowStyle}>History</th> }
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
            { !showHistory && <hr /> }
        </div>
    )
}