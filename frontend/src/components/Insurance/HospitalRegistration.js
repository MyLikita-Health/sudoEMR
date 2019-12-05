import React, { Component } from "react";

import { Form,Button,Input,Col,Row,FormGroup} from 'reactstrap';
import Location from './Location'


class HospitalRegistration extends Component {
  state={
    hcfNo : ' ',
    hcfName : '',
    address : '',
    phone : '',
    contactPerson : '',
    email : '',
    lat:'',
    long:'',

    attendance:[]

  };
//   componentDidMount(){
//     fetch('http://localhost:4000/db/all')
//       .then(res => res.json())
//       .then(attendance =>{
//        this.setState({attendance:attendance.users},()=>console.log('customer ',attendance.users))
//       }
//    )
//    .catch(err=>console.log(err))
//  }

  // componentDidMount(){
  //    fetch('http://localhost:4000/db/all')
  //      .then(res => res.json())
  //      .then(attendance =>this.setState({attendance:attendance.users},()=>console.log('customer ',attendance.users))
       
  //   )
  //   .catch(err=>console.log(err))
  // }



  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  };

  getLocation=(long,lat)=>{
    this.setState({
        long:long,
        lat:lat
    })
  };

  
  handleSubmit = (e) => {
    e.preventDefault();
    let object={
        hcfNo:this.state.hcfNo,
        hcfName:this.state.hcfName,
        address:this.state.address,
        phone:this.state.phone,
        contactPerson:this.state.contactPerson,
        email:this.state.email,
        long:this.state.long,
        lat:this.state.lat
    };
    
    fetch('http://localhost:4000/aishadb/new',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(object),
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err)); 
   
    const { hcfNo,hcfName,address,phone,contactPerson,email} = this.state;

    if(hcfNo===''||hcfName===''||address===''||phone===''||contactPerson===''||email===''){
        this.setState({ error: 'Please complete the form' })
    } else {
        this.setState(prevState => ({ 
            
            attendance: prevState.attendance.concat({
                hcfNo,
                hcfName,
                address,
                phone,
                contactPerson,
                email
            }),
            hcfNo:'',
            hcfName:'',
            address:'',
            phone:'',
            contactPerson:'',
            email:''
       })
       , () => console.log(email));
    }
    
  }


// handleDelete = remove => {
//   let fahad = this.state.attendance.filter(item => item !== remove);
//   this.setState({ hcf : fahad});
// }


  
 render(){
  return(

<div>
<center> <h4 >HOSPITAL REGISTRATION</h4></center>
    <div  >
       <Form>
       <Row form>
       <Col md={6}>
       <FormGroup>
       <div style={{color:"red"}}>{this.state.errorhcfNo}</div>
       
       <Input 
        required=""
         min='0'
         name='hcfNo'
         value={this.state.hcfNo}
         required="required"
         ref="hcfNo"
         placeholder="Facility Number"
         
         type='number'
         onChange={this.handleChange}
         onKeyDown={this.handleKeypress} min='1' step='1'
         />
       </FormGroup>
         </Col>
         <Col md={6}>
         <FormGroup>
       <div  style={{color:"red"}}>{this.state.errorhcfName}</div>
         <Input
         name='hcfName'
         id='in2'
         required="required"
         value={this.state.hcfName}
         placeholder='Facility Name'
         onChange={this.handleChange}
         />
         </FormGroup>
     </Col>
         </Row>
         <Row form>
         <Col md={6}>
         <FormGroup>
     <div  style={{color:"red"}}>{this.state.erroraddress}</div>
         <Input 
         name='address'
         id='in3'
         required="required"
         value={this.state.address}
         type='text'
         placeholder='Facility Adress'
         onChange={this.handleChange}
         />
        </FormGroup>
         </Col>
         <Col md={6}>
         <FormGroup>
        <div  style={{color:"red"}}>{this.state.errorphone}</div>
         <Input 
         name='phone'
         id='in4'
         required="required"
         value={this.state.phone}
         type='number'
         placeholder='Phone Number'
         onKeyDown={this.handleKeypress} min='1' step='1'
         onChange={this.handleChange}
         />
         </FormGroup>
          </Col>
          </Row>
          <Row form>
          <Col md={6}>
          <FormGroup>
         <div  style={{color:"red"}}>{this.state.errorcontactPerson}</div>
         <Input 
         name='contactPerson'
         id='in5'
         required="required"
         value={this.state.contactPerson}
         placeholder='Contact Person'
         onChange={this.handleChange}
         />
         </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <div  style={{color:"red"}}>{this.state.erroremail}</div>  
         <Input 
         name='email' 
         id='in6'
         value={this.state.email}
         placeholder='Email'
         type='email'
         required="required"
         onChange={this.handleChange}
         />
         </FormGroup>
         <div>
           <location/>
         </div>

         <Button   onClick={this.handleSubmit}     type="submit">Submit</Button>
       </Col>
        </Row>
        <center>
         </center>
         </Form>
         </div>
        <Location 
          getLocation={this.getLocation}
        />
</div>
  )
  }
} 


export default HospitalRegistration;