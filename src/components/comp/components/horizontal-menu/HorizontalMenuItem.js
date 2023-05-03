import React from "react";
import { Link, useLocation } from "react-router-dom";

function HorizontalMenuItem(props) {
  const location = useLocation();
  const routeText = props.route.split('?')[0]
  const active = props.active || location.pathname.includes(routeText);
  return (
    <li className="nav-item text-white">
      <Link
        to={props.route}
        className={`${active &&
          "active border border-secondary"} nav-link p-1 px-2`}
        style={{ fontSize: active ? 16 : 14, fontWeight: "bold" }}
      >
        {/* {props.route.split('?')[0]} */}
        {props.children}
      </Link>
    </li>
  );
}

export default HorizontalMenuItem;
