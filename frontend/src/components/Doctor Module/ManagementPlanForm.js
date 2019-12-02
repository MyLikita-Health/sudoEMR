import React from 'react';

const ManagementPlanForm = ({ addedcare }) => {
    return (
       <div> 
           <h5>Management Plan</h5>  
           <div className="row">             
                <label className="col-md-2">Added Care:</label>
                <label className="col-md-5" style={{paddingLeft: '1em'}}>{addedcare}</label>
            </div> 
            <hr />
       </div>
    );
}

export default ManagementPlanForm;

