import React from "react";
import "./loadingStyles.css";
export default function LoadingComp() {
  return (
    <div className="d-flex flex-direction-column justify-content-center align-items-center bar">
      <div className="circle"></div>
      <span className="newMe">Please wait...</span>
    </div>
  );
}
