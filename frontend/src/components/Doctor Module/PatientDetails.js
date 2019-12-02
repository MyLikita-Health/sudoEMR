import React from 'react';
import { Button, Form, FormGroup, Col, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { _deleteData } from '../helpers'

export default class PatientDetails extends React.Component {
  constructor(){
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      
      collapse: false,
     
     

    }
    this.handleDelete=this.handleDelete.bind(this)
    
      }

     
     

      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }

      handleDelete(event) {
        event.preventDefault()
         const data = {}
         for (const field in this.refs){
            data[field]=this.refs[field].value;
            data[field]=this.refs[field].value;
        }

        let route = 'patientrecords/delete'

        callback = () => this.setState({msg: "Thanks for registering"});  
        
        _deleteData({ route, data, callback })
      }

      logChange(e) {
          this.setState({[e.target.ref]: e.target.value});  
      }


  render() {

    return (
      
      <div>
      <Form onSubmit={this.handleDelete.bind(this)} method="POST">
         <FormGroup row>
         <Col sm={5}><br/>
       
         <div>
           <figure className="Figimage"> Upload Passport Here dangana
           <Input type="file" ref="Imagefile" className="ImgFile" />
           </figure>
           </div> 

           </Col>
          <Col sm={7}><br/>
           
            {/* <FormText color="muted">
            Upload Passport Here...
            </FormText> */}
          </Col>
        </FormGroup>

        <FormGroup row><br/>
          
          <Col sm={6}><br/>
          <Label>SurName</Label>
            <Input type="text" ref="surname" className="Form-control" value={this.state.surnamee} placeholder="SurName" />
          </Col>

          <Col sm={6}><br/>
          <Label>FirstName</Label>
            <Input type="text" ref="firstname" className="Form-control" value={this.state.firstname} placeholder="FirstName" />
          </Col><br />

           <Col sm={2}><br/>
        <legend className="col-form-label sm-1">Gender</legend>
          <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1"  />{' '}
                Male
               </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Female
              </Label>
            </FormGroup>
         </Col>
         <Col sm={5}><br/>
         <Label>Age</Label>
          <Input type="number" name="Age" id="exampleNumber" placeholder="Age" />
         </Col>

         <Col sm={5}><br/>
         <Label>Marital Status</Label>
         <Input type="text" name="Fname" id="MaritalStatus" placeholder="Marital Status" />
         </Col>

         <Col sm={5}><br/>
         <Label>Date Of Birth</Label>
          <Input type="date" name="date" id="DOB" placeholder="Date Of Birth" />
          </Col>

          <Col sm={3}><br/>
         <Label>Tribe</Label>
          <Input type="text" name="date" id="Tribe" placeholder="Tribe" />
          </Col>

          <Col sm={4}><br/>
         <Label>Religion</Label>
          <Input type="text" name="Religion" id="Religion" placeholder="Religion" />
          </Col>

          <Col sm={5}><br/>
         <Label>Phone Number</Label>
          <Input type="text" name="PhoneNo" id="PhoneNo" placeholder="Phone Number" />
          </Col>
          <Col sm={2}><br/></Col>
          <Col sm={5}><br/>
         <Label>Email Address</Label>
          <Input type="text" name="PhoneNo" id="Email" placeholder="Email Address" />
          </Col>

          <Col sm={4}><br/>
         <Label>Nationality</Label>
          <Input type="text" name="Nationality" id="Nationality" placeholder="Nationality" />
          </Col>

          <Col sm={4}><br/>
          <Label>State</Label>
          <Input type="text" class="State" name="text" id="State" placeholder="State" />
          </Col> 
         
          <Col sm={4}><br/>
          <Label>LGA</Label>
          <Input type="text" class="lga" name="text" id="LGA" placeholder="LGA" />
          </Col> 

         < Col sm={5}><br/>
          <Label>Occupation</Label>
          <Input type="text" class="Occupation" name="text" id="Occupation" placeholder="Occupation" />
          </Col> 
          < Col sm={1}><br/></Col> 

          <Col sm={6}><br/>
          <Label>Address</Label>
          <Input type="textarea" class="textarea" name="text" id="Address" />
          </Col>
          <Col sm={12}><br/>
          <legend>Next Of Kin Information</legend>             
              </Col>
          <Col sm={6}><br/>
          <Label>Name</Label>
            <Input type="text" ref="Kname" className="Form-control" placeholder="Kin Name" />
          </Col>

          <Col sm={6}><br/>
          <Label>RelationShip</Label>
            <Input type="text" ref="RelationShip" className="Form-control" placeholder="RelationShip" />
          </Col>
          
          <Col sm={5}><br/>
         <Label>Phone Number</Label>
          <Input type="text" name="PhoneNo" id="PhoneNo" placeholder="Phone Number" />
          </Col>
          <Col sm={2}><br/></Col>
          <Col sm={5}><br/>
         <Label>Email Address</Label>
          <Input type="text" name="PhoneNo" id="Email" placeholder="Email Address" />
          </Col>

          < Col sm={5}><br/>
          <Label>Occupation</Label>
          <Input type="text" class="Occupation" name="text" id="Occupation" placeholder="Occupation" />
          </Col> 
          < Col sm={1}><br/></Col> 

          <Col sm={6}><br/>
          <Label>Address</Label>
          <Input type="textarea" class="textarea" name="text" id="Address" />
          </Col>
        </FormGroup>
        
        <div className="row">
          <div className="col-md-4">
            <Button color="danger" >submit</Button>
          </div>
          <div className=" col-md-4">
            <Button color="success">Edit</Button>
          </div>
          <div className="col-md-4">
            <Button color="primary">Print</Button>
          </div>
        </div>

        <div className="row">
        <Col sm={4}>  </Col>
       
            <Col sm={4}>  </Col>
          </div>
      
      </Form>
      
      </div>



    );
  }
}

