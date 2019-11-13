import React, { Component } from "react";
import { Table, Form,Button,Input,Col,Row,FormGroup} from 'reactstrap';
import Map from './Map'


class HospitalRegistration extends Component {
  state={
    facilityNo : ' ',
    facilityName: '',
    facilityAdress: '',
    contactPerson : '',
    email : '',
    phoneNumber : '',
   
    Hr : []

  };


  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  };



validate=()=>{
 let errorfacilityNo = '';
 let  errorfacilityName = '';
 let errorfacilityAdress = '';
 let errorcontactPerson = '';
 let erroremail = '';
 let errorphoneNumber = '';


if(!this.state.errorfacilityNo)
{
  errorfacilityNo="required!!!"
}
 if(!this.state.errorfacilityName){
   errorfacilityName="required!!!"
 }
if(!this.state.errorfacilityAdress){
  errorfacilityAdress="required!!!"
}
if(!this.state.errorcontactPerson){
  errorcontactPerson="required!!!"
}


 if(!this.state.email.includes('@') ){
  erroremail="required!!!"

 }
 if(!this.state.errorphoneNumber){
  errorphoneNumber="required!!!"
}


 if(errorfacilityNo ||
   errorfacilityName||
   errorfacilityAdress ||
   errorcontactPerson||
   erroremail || 
   errorphoneNumber
  ){
   this.setState({errorfacilityNo,
    errorfacilityName,
    errorfacilityAdress,
    errorcontactPerson,
    erroremail,
    errorphoneNumber
    });
   return false;
 }return true;
}


  handleSubmit = () => {
    // e.preventDefault()
    const isValid= this.validate();
    if(isValid){
    this.setState(prevState => ({
     Hr: prevState.Hr.concat({
      facilityNo: this.state.facilityNo,
      facilityName: this.state.facilityName,
      facilityAdress: this.state.facilityAdress,
      contactPerson: this.state.contactPerson,
      email : this.state.email,
      phoneNumber: this.state.phoneNumber,
      
     }),
    facilityNo : '',
    facilityName : '',
    facilityAdress : '',
    contactPerson : '',
    email : '',
    phoneNumber:""


    })
    
    );
    // this.refs.Hr.focus()
    console.log(this.state.email)
  };}




  handleDelete = remove => {
    let king = this.state.Hr.filter(item => item !== remove);
    this.setState({ Hr : king});
  }






  handleKeypress (e) {
    const characterCode = e.key
    if (characterCode === 'Backspace') return

    const characterNumber = Number(characterCode)
    if (characterNumber >=0 && characterNumber <= 9) {
      if (e.currentTarget.value && e.currentTarget.value.length) {
        return
      } else if (characterNumber === -1) {
        e.preventDefault()
      }
    } else {
      e.preventDefault()
    }
  }
  





 
  
 render(){
    return(
      
    <div>
       <center><h4 className='head'>HOSPITAL REGISTRATION</h4></center>
    <div> <br />

       <Form>
       <Row form>
       <Col md={6}>
       <FormGroup>
       <div style={{color:"red"}}>{this.state.errorfacilityNo}</div>
       
       <Input 
        min='0'
         name='facilityNo'
         value={this.state.facilityNo}
         required=""
        //  ref=""
         placeholder='Facility Number'
         type='number'
         onChange={this.handleChange}
         onKeyDown={this.handleKeypress} 
         />
         </FormGroup>
         </Col>
       
       <Col md={6}>
         <FormGroup>
       <div  style={{color:"red"}}>{this.state.errorfacilityName}</div>
         <Input
         required=''
         name='facilityName'
        //  id='in2'
         
         value={this.state.facilityName}
         placeholder='Facility Name'
         onChange={this.handleChange}
         /><br />
         </FormGroup>
         </Col>
     </Row>
     <Row form> 
     <Col md={6}>
     <FormGroup>
     <div  style={{color:"red"}}>{this.state.errorfacilityAdress}</div>
         <Input 
         required=""
         name='facilityAdress'
        //  id='in3'
         
         value={this.state.facilityAdress}
         type='text'
         placeholder='Facility Adress'
         onChange={this.handleChange}
         /><br />
         </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <div  style={{color:"red"}}>{this.state.errorphoneNumber}</div>
         <Input   
         name='phoneNumber'
         id='in4'
         required=""
         value={this.state.phoneNumber}
         type='number'
         placeholder='Phone Number'
         onKeyDown={this.handleKeypress} min='1' step='1'
         onChange={this.handleChange}
         /><br />
         </FormGroup>
         </Col>
        </Row>
      

        
        <Row form>
        <Col md={6}>
        <FormGroup>
        <div  style={{color:"red"}}>{this.state.erroremail}</div>  
         <Input 
         name='email' 
         id='in6'
         value={this.state.email}
         placeholder='EMAIL'
         type='email'
         required=""
         onChange={this.handleChange}
         /><br />
         </FormGroup>
       </Col>


       <Col md={6}>
       <FormGroup>
       <div  style={{color:"red"}}>{this.state.errorcontactPerson}</div>
         <Input 
         name='contactPerson'
         id='in3'
         required=""
         value={this.state.contactPerson}
         type='text'
         placeholder='Contact Person'
         onChange={this.handleChange}
         /><br />
         </FormGroup>
         </Col>
        </Row>

      
         
         
{/* <div  style={{color:"red"}}>{this.state.errorlocation}</div>
         <Input 
         name='location'
         id='in3'
         required="required"
         value={this.state.location}
         type='text'
         placeholder='Location'
         onChange={this.handleChange}
         />
         <br /> */}


<br/>
         <center><Button className="btn btn-primary "onClick={this.handleSubmit}>Submit</Button></center>
         </Form>
         </div><br />
        
      
       <div>
         <Table scripted bordered responsive >
           <thead>
           <tr>
              <th>No</th>
             <th>Name</th>
             <th>Address</th>
             <th>Contact</th>
             <th>Email</th>
             <th>phone No</th>
             <th>Location</th>
             <th>Delete</th>

           </tr>
           </thead>
           <tbody>
           {this.state.Hr.map((item, index) => (
             <tr key={index}> 
              <td>{item.facilityNo}</td>
             <td>{item.facilityName}</td>
             <td>{item.facilityAdress}</td>  
             <td>{item.contactPerson}</td>
             <td>{item.email}</td>
             <td>{item.phoneNumber}</td>
             <td>{item.location}</td>
             <td><Button className="btn btn-danger"onClick={()=> this.handleDelete(item)}>
               Delete
             </Button></td>

             </tr>

           )
           )}
           </tbody>
         </Table>
       <center><Map/></center>
       </div>
      </div>
      

    );
  }
} 


export default HospitalRegistration;