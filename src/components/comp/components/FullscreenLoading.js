import React from "react";
import { Spinner } from "reactstrap";

function FullscreenLoading() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="d-flex flex-direction-row justify-content-center align-items-center">
        <Spinner className="mr-2" size="sm" />
        <span>Please wait, Loading...</span>
      </div>
    </div>
  );
}

export default FullscreenLoading;
