import React from "react";

export default function ColorDetails() {
  return (
    <div className="row p-0 m-0">
      <div
        className="border border-white border-1 col-md-3 text-center py-1"
        style={{
          backgroundColor: "#7FFF00",
        }}
      >
        Reported
      </div>
      <div
        className="border border-white border-1 col-md-3 text-center py-1"
        style={{
          backgroundColor: "#39ff72",
        }}
      >
        Analyzed
      </div>

      <div
        className="border border-white border-1 col-md-3 text-center py-1"
        style={{
          backgroundColor: "#9ebf6f",
        }}
      >
        Sample Collected
      </div>
      <div
        className="border border-white border-1 col-md-3 text-center py-1"
        style={{
          backgroundColor: "#ffffb3",
        }}
      >
        Pending
      </div>
    </div>
  );
}

export function ColorDetailsForPendingLab() {
  return (
    <div className="row p-0 m-0">
      <div className="border border-white border-1 col-md-6 text-center text-white py-1" style={{backgroundColor:'#50565e'}}>
        Pending
      </div>
      <div className="border border-white border-1 col-md-6 text-center bg-warning py-1">
        Saved
      </div>
    </div>
  );
}

export function ColorDetailsForHistory() {
  return (
    <div className="row p-0 m-0">
      <div className="border border-white border-1 col-md-6 text-center bg-light py-1">
        Editable
      </div>
      <div className="border border-white border-1 col-md-6 text-center bg-warning py-1">
        Printed
      </div>
    </div>
  );
}

// {/* <div className="d-flex">
//         <div className="bg-success text-white m-1 p-1">Verified & Printed</div>
//         <div className="bg-secondary m-1 p-1">Incomplete & Not Printed</div>
//         <div className="bg-primary m-1 p-1">Sample Collected & Not Printed</div>
//       </div>
//       <div className="d-flex">
//         <div className="bg-warning m-1 p-1">Reserved & Not Printed</div>
//         <div className="bg-danger m-1 p-1">Incomplete & Printed</div>
//         <div
//           className="m-1 p-1"
//           style={{
//             backgroundColor: "#7FFF00",
//           }}
//         >
//           Complete & Not Printed
//         </div>
//       </div> */}
