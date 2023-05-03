import React from "react";

function Scrollbar({ children, height = "85vh" }) {
  return (
    <div style={{ min: "20vh", maxHeight: height, overflow: "auto" }}>
      {children}
    </div>
  );
}

export default Scrollbar;
