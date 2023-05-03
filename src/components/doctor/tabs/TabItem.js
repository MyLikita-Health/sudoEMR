import React from "react";
import { useHistory, useLocation } from "react-router";

function TabItem({ title = "", values = {}, done = false, path = "" }) {
  const history = useHistory();
  const location = useLocation();
  return (
    <button
      type="button"
      title={title}
      onClick={() => history.push(path)}
      className={`multisteps-form__progress-btn ${done ? "" : "done"} ${
        location.pathname === path ? "js-active" : ""
      }`}
    >
      {title}
    </button>
  );
}

export default TabItem;
