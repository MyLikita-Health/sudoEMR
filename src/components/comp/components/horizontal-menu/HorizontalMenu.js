import React from "react";

function HorizontalMenu(props) {
  return (
    <ul
      className="nav nav-tabs border-bottom border-top mt-1 mb-1 p-1 border-primary d-flex justify-content-center"
      style={{ margin: 0 }}
    >
      {props.children}
    </ul>
  );
}

export default HorizontalMenu;
