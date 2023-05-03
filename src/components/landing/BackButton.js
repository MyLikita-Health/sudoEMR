import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { withRouter } from 'react-router';

function BackButton({ text = 'Back', history }) {
  return (
    <button className="btn btn-default" onClick={() => history.goBack()}>
      <span className="d-flex flex-direction-row align-items-center text-primary">
        <AiOutlineLeft className="mr-1" size={20} />
        {text}
      </span>
    </button>
  );
}

export default withRouter(BackButton);
