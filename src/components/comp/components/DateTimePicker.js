import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default function({
  label = '',
  value = new Date(),
  onChange = (f) => f,
  container = '',
  name = '',
  editable = true,
  required = false,
  className,
}) {
  return (
    <div className={container}>
      <label className="mr-2 font-weight-bold">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <div>
        {editable ? (
          <DatePicker
            className={`form-control ${className}`}
            name={name}
            value={value}
            onChange={onChange}
            editable={editable}
            selected={value}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        ) : (
          <p className="form-control">{moment(value).calendar()}</p>
        )}
      </div>
    </div>
  );
}

// DatePicker;
