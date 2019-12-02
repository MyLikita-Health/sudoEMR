import React, { Component } from "react";
import { Table, Form,Button,Input,Col,Row,FormGroup} from 'reactstrap';
import { toaster } from 'evergreen-ui/commonjs/toaster';





class HospitalRegistration extends Component {
  state={
    hcfNo : ' ',
    hcfName : '',
    address : '',
    phone : '',
    contactPerson : '',
    email : '',
    isOpen: false,
    location: null,
    locationStatusMessage: 'null',
    locationStatus: false,
    locationLoading: false,
    isShow: false,
  
     hcf : []

  };


  // componentDidMount(){
  //   fetch('http://localhost:4000/fhddb/all')
  //   .then(res=>res.json())
  //   .then(hcf=>
  //     this.setState({hcf:hcf.fhddb},()=>console.log('customer ',hcf))

  //   )
  //   .catch(err=>console.log(err))
  // }



  open = () => this.setState({ isOpen: true });
  close = () => this.setState({ isOpen: false });









  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  };



validate=()=>{
 let errorhcfNo = '';
 let  errorhcfName = '';
 let erroraddress = '';
 let errorphone = '';
 let errorcontactPerson = '';
 let erroremail = '';

if(!this.state.errorhcfNo)
{
  errorhcfNo=""
}
 if(!this.state.hcfName){
   errorhcfName="*"
 }
if(!this.state.address){
  erroraddress="*"
}
if(!this.state.phone){
  errorphone="*"
}
if(!this.state.contactPerson){
  errorcontactPerson="*"
}

 if(!this.state.email.includes('@')){
   erroremail =' invalid email';

 }
 if(erroremail || errorcontactPerson ||errorphone ||erroraddress||errorhcfName || errorhcfNo){
   this.setState({erroremail,errorcontactPerson,errorphone,erroraddress,errorhcfName,errorhcfNo});
   return false;
 }return true;
}





  handleSubmit = () => {
    let obj={
      hcfNo:this.state.hcfNo,
      hcfName:this.state.hcfName,
      address:this.state.address,
      phone:this.state.phone,
      contactPerson:this.state.contactPerson,
      email:this.state.contactPerson,


    };
    console.log(obj)
    fetch('http://localhost:4000/fhddb/new',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(obj),
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err));






    const isValid= this.validate();
    if(isValid){
    this.setState(prevState => ({
     hcf: prevState.hcf.concat({
      hcfNo: this.state.hcfNo,
      hcfName: this.state.hcfName,
      address: this.state.address,
      phone: this.state.phone,
      contactPerson : this.state.contactPerson ,
      email: this.state.email,
     }),
    hcfNo : '',
    hcfName : '',
    address : '',
    phone : '',
    contactPerson : '',
    email : '',
    }));
    // this.refs.hcfNo.focus()
  };}










  handleChange = ({ target: { name, value } }) => {
    this.setState({
        error: '',
      [name]: value,
    });
  }



  handleDelete = remove => {
    let lily = this.state.hcf.filter(item => item !== remove);
    this.setState({ hcf : lily});
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
  
  getLocation = () => {
    this.setState({ locationLoading:true})
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log('fn called')
        // console.log('position');
        const coords = pos.coords;
        this.setState({
          location: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
          locationLoading: false, 
          locationStatusMessage: 'Location taken',
          locationStatus: true,
        }, () => toaster.success('Location is captured'));

      }, (error) => {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            this.setState({ locationLoading: false, 
              locationStatusMessage: "User denied the request for Geolocation." }) 
            break;
          case error.POSITION_UNAVAILABLE:
            this.setState({ locationLoading: false, 
              locationStatusMessage: "Location information is unavailable." })
            break;
          case error.TIMEOUT:
            this.setState({ locationLoading: false, 
              locationStatusMessage: "The request to get user location timed out."})
            break;
          case error.UNKNOWN_ERROR:
            this.setState({ locationLoading: false, 
              locationStatusMessage: "An unknown error occurred." })
            break;
        }
      });
    } else {
      this.setState({ locationLoading: false, locationStatusMessage: 'This device does not support location'})
      console.log('not supported')
    }
  };

  



 
  
 render(){
    return(
      
      <div >
     
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

       </Col>
        </Row>
        <center>
         <Button   onClick={this.handleSubmit}     type="submit">Submit</Button>
         </center>
         </Form>
         </div>
        
         {/* <span style={{margin: `1.5rem 0px`, fontFamily: 'monospace', color: locationStatusMessage!=='null' ? 'green' : 'red', fontSize:14 }}>Location Status: {locationStatusMessage}</span> */}

<div style={{ margin: `1.5rem 0` }}>
  <Button onClick={this.getLocation} >Add Location</Button>
</div>
       
       
       
      
       <div>
         <Table responsive>
           <thead>
           <tr>
              <th>Facility Number</th>
             <th>Facility Name</th>
             <th>Facility Adress</th>
             <th>Phone Number</th>
             <th>Contact Person</th>
             <th>Email</th>
             <th>Delete</th>
           </tr>
           </thead>
           <tbody>
           {
             this.state.hcf.map((item,index) => (
             <tr key={index}> 
              <td>{item.hcfNo}</td>
             <td>{item.hcfName}</td>
             <td>{item.address}</td>  
             <td>{item.phone}</td>
             <td>{item.contactPerson}</td>
             <td>{item.email}</td>
             <td><button onClick={()=> this.handleDelete(item)}>
               DELETE
             </button></td>

             </tr>

           )
           )}
           </tbody>
         </Table>
       </div>
      </div>

    );
  }
} 


export default HospitalRegistration;