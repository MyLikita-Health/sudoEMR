import React from "react";
import useWindowDimensions from "../../getWindowDimension";
import CustomScrollbar from "../CustomScrollbar";

function VerticalMenu(props) {
  const { height } = useWindowDimensions();
  return (
    <CustomScrollbar height={height}>
      <div className="list-group">
        {props.title ? (
          <span
            className="list-group-item list-group-item-action text-center font-weight-bold"
            style={{ backgroundColor: "#ccc" }}
          >
            {props.title}
          </span>
        ) : null}
        {props.children}
      </div>
    </CustomScrollbar>
  );
}

export default VerticalMenu;
