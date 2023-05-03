import React from 'react';
import { FaAlignLeft } from 'react-icons/fa';
import {  Button, } from 'reactstrap';
// import { Link } from 'react-router-dom';

export default props => {  
  return (
      <Button color="info" onClick={props.toggle}>
        <FaAlignLeft/>Expand
      </Button>
  );
}