import React from 'react';
import { iconClass } from '../../doc_dash/appointments/NewAppointment2';
import { FaTimes } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';

function ButtonGroup({
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  submit = (f) => f,
  submitting = false,
  exit = (f) => f,
  size='md'
}) {
  return (
    <div className="d-flex flex-direction-row justify-content-center">
      <div className="btn-group btn-group mt-2 mb-2">
        <button
          className={`btn btn-${size} btn-outline-primary mr-1 ${iconClass}`}
          onClick={submit}
        >
          {submitting ? (
            'Loading...'
          ) : (
            <span className={iconClass}>
              <BsCheck size={20} className="mr-1" /> {submitLabel}
            </span>
          )}
        </button>
        <button
          className={`btn btn-${size} btn-outline-danger ${iconClass}`}
          onClick={() => exit()}
        >
          <span className={iconClass}>
            <FaTimes size={20} className="mr-1" /> {cancelLabel}
          </span>
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
