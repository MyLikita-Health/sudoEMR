import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function FooterButtons({next, prev}) {
  return (
    <>
      <button
        className="btn  btn-outline-primary col-md-3"
        onClick={prev}
      >
        <FaArrowLeft /> Prev
      </button>
      <button
        onClick={next}
        className="btn  btn-outline-primary offset-md-6 col-md-3"
      >
        Next
        <FaArrowRight />
      </button>
    </>
  );
}

export default FooterButtons;
