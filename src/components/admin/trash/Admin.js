import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import SideBar from './sidebar/SideBar';
import Content from './content/Content';
// import { BrowserRouter as Router } from "react-router-dom";

export default () => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <>
      <SideBar toggle={toggle} isOpen={isOpen}/>
      <Content toggle={toggle} isOpen={isOpen}/>
    </>
  );
}