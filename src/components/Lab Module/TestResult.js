import React from 'react';
import PatientForm from '../PatientForm';

let label = {
  marginRight: '1em',
};
const Result = ({ result, appearance, microscopy, culture, antibiotic }) => (
  <div className="row">
    {result && (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <label style={label}>Result: </label>
        <span>{result}</span>
      </div>
    )}
    {appearance && (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <label style={label}>Appearance: </label>
        <span>{appearance}</span>
      </div>
    )}
    {microscopy && (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <label style={label}>Microscopy: </label>
        <span>{microscopy}</span>
      </div>
    )}
    {culture && (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <label style={label}>Culture: </label>
        <span>{culture}</span>
      </div>
    )}
    {antibiotic && (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <label style={label}>Antibiotic: </label>
        <span>{antibiotic}</span>
      </div>
    )}
  </div>
);

export default Result;

// const PrintResult = ({ result, appearance, microscopy, culture, antibiotic }) => {
//   const onPrintClick=()=>{
//     window.frames["print_frame"].document.body.innerHTML = document.getElementById("resultPrint").innerHTML;
//     window.frames["print_frame"].window.focus();
//     window.frames["print_frame"].window.print();
//   }

//   return (
//     <div id="resultPrint">
//       {/* <PatientForm /> */}
//       <Result result={result} appearance={appearance} microscopy={microscopy} culture={culture} antibiotic={antibiotic} />
//     </div>
//   )
// }
