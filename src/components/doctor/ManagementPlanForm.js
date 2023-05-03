import React from 'react';

const ManagementPlanForm = ({ addedcare }) => {
    return (
       <div> 
           
           <h5>Management Plan</h5>  
           <div className="row">             
                <label className="col-md-2">Added Care:</label>
                <label className="col-md-5" style={{paddingLeft: '1em'}}>{addedcare}</label>
            </div> 
            {/* <hr />
            <button 
                onClick={() => setComponentToRender('NewProblems')} 
                className={`btn ${component==='NewProblems'? 'btn-success' : 'btn-outline-success'} btn-sm col-xs-12 col-sm-6 col-md-3 col-lg-3`}
                >Admit
            </button> */}
       </div>
    );
}

export default ManagementPlanForm;

