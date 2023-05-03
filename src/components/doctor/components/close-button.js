import React from 'react';
import { IoMdClose } from 'react-icons/io'
import './close-button.css'

const CloseButton = ({ size }) => (
    <div 
        className="close-button" 
        style={
            size==="sm" ? 
            {height:30,width:30,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'} 
            : 
            {padding: 10}
        }
    >
        <IoMdClose size={size === "sm" ? 20 : 30}  />
    </div>
)

export default CloseButton;