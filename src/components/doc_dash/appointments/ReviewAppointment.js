import React from 'react';
import { Card, CardTitle, FormGroup, Button } from 'reactstrap';
import { FaUser, FaCalendar, FaCheck, FaTimes, FaEdit } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { GoNote } from 'react-icons/go';
import DatePicker from 'react-datepicker';
import moment from 'moment';

function ReviewAppointment({
  closeReview = (f) => f,
  selected = {},
  _approveAppt = (f) => f,
  _cancelAppt = (f) => f,
  _editAppt = (f) => f,
  _toggleEditDate = (f) => f,
  editDate = false,
  newDate = '',
  setNewDate = (f) => f,
}) {
 
  return (
    <div className="col-md-6">
      <Card className="p-3">
        <CardTitle tag="h6" className="text-center">
          Review Appointment
          <Button close onClick={closeReview} />
        </CardTitle>

        <FormGroup>
          <FaUser className="mr-2" size={20} /> {selected.title}
        </FormGroup>

        {!editDate ? (
          <FormGroup>
            <FaCalendar className="mr-2" size={20} />
            {moment(selected.start).calendar()}
          </FormGroup>
        ) : (
          <FormGroup>
            <span className="d-flex flex-row align-items-center">
              <label htmlFor="newDate" className="mr-2">
                Preferred New Date:
              </label>
              <DatePicker
                placeholderText="Please enter your preferred new date"
                id="newDate"
                className="form-control"
                name="newDate"
                value={newDate}
                onChange={(date) => setNewDate(date)}
                selected={newDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <button className="btn" onClick={_editAppt}>
                <FaCheck className="text-success" />
              </button>
            </span>
          </FormGroup>
        )}

        {selected.location && selected.location !== '' ? (
          <FormGroup>
            <MdPlace className="mr-2" size={20} />
            {selected.location}
          </FormGroup>
        ) : null}

        <FormGroup>
          <GoNote className="mr-2" size={20} />
          {selected.note}
        </FormGroup>

        {!editDate && (
          <div className="d-flex flex-row justify-content-center">
            <Button
              outline
              color="info"
              className="mr-1"
              onClick={_toggleEditDate}
            >
              <FaEdit className="mr-1" />
              Reschedule
            </Button>
            <Button color="primary" className="mr-1" onClick={_approveAppt}>
              <FaCheck className="mr-1" />
              Approve
            </Button>
            <Button color="danger" onClick={_cancelAppt}>
              <FaTimes className="mr-1" />
              Cancel
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default ReviewAppointment;
