import React from "react";

function CustomScrollbar(props) {
  const { children = [], height = "65vh" } = props;
  return <div style={{ maxHeight: height, overflow: "auto" }}>{children}</div>;
}

export default CustomScrollbar;
