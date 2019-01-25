import React, {Component} from 'react';
import { Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

class EditManagementplan extends Component {
  constructor(props) {
    super(props);
    let cached = localStorage.getItem('management_plan')
    this.state = {
        addedcare: cached ||"",
    };
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    const { addedcare } = this.state;
    if(addedcare==="") return;
    return localStorage.setItem("management_plan", addedcare)
  }
  
  onAddedCareChange=(e)=>{
      this.setState({ addedcare: e.target.value })
  }

    render(){

        return(
            <Form>
                <h3 className="text-center"><strong>Management Plan</strong></h3>
                <hr />
                <div className="row">
                    <label className="col-md-4">Added Care: </label>
                    <textarea 
                        type="text" 
                        name="addedcare" 
                        className="form-control col-md-6" 
                        value={this.state.addedcare} 
                        onChange={this.onAddedCareChange}></textarea>
                </div>
                <br />
                <hr />
                <div className="row">
                    <Link to="/patient_clarking/athropometry" className="btn btn-outline-success" style={{width:'9vw'}}><FaArrowLeft /> Prev</Link>
                    <button onClick={this.handleSubmit} className="btn btn-outline-success offset-md-7">
                        <Link to='/patient_clarking/dressing_request' style={{width:'9vw'}}>Next <FaArrowRight /></Link>
                    </button>
                </div>  
            </Form>                   
        )
    }
}

export default EditManagementplan;
