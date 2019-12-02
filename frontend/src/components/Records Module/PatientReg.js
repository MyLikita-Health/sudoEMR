import React, {Component} from 'react';
import {Container, Row, Col, Input, Button} from reactstrap;
import 'bootstrap/dist/css/bootstrap.css';
import './Style/App.css';


class PatientReg extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

 render() {
 return(
<ul>
  <li>Name</li>
</ul>
 )

 }


}

export default PatientReg;