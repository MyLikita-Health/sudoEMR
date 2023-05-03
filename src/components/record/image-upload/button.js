import React from 'react'
// import { FaTimes } from 'react-icons/fa';

export default props => 
    <div className='buttons fadein'>
    <div className='button'>
        {/* <img
            src=""
            alt="default image"
            height='150px'
            width='150px' alt="default"
        /> */}
        <input type='file' id='single' onChange={props.onChange} /> 
    </div>
</div>