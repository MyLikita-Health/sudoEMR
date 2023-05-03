import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useHistory } from "react-router";

function BackButton({ text = "Back", size = "", className = "" }) {
  const history = useHistory();

  return (
    <button
      className={`btn btn-default btn-${size} ${className}`}
      onClick={() => history.goBack()}
    >
      <span className="d-flex flex-direction-row align-items-center text-primary">
        <AiOutlineLeft className="mr-1" size={20} />
        {text}
      </span>
    </button>
  );
}

export default BackButton;
