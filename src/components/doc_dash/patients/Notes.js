import React, { useState } from 'react';
import { FaNotesMedical } from 'react-icons/fa';
import { iconClass } from '../appointments/NewAppointment2';
import { Card, CardBody, CardText } from 'reactstrap';
import ButtonGroup from '../../comp/components/ButtonGroup';
import SpeechInput from '../../comp/speech-to-text/SpeechInput';
import { saveNote } from '../actions/patientsActions';
import { connect } from 'react-redux';
import { _customNotify, _warningNotify } from '../../utils/helpers';
import moment from 'moment';

function Notes({ patient, _saveNote }) {
  const [showNoteInput, toggle] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [note, setNote] = useState('');


  const save = () => {
    setLoadingSave(true);
    const { _id } = patient;

    _saveNote(
      _id,
      { note },
      () => {
        setLoadingSave(false);
        _customNotify('Note saved');
        toggle(false);
      },
      () => {
        setLoadingSave(false);
        _warningNotify('An error occured');
      }
    );
  };

  let noNote = !showNoteInput;
  // || !(patient.notes ? patient.notes.length : false);
  if (patient.notes) {
    if (patient.notes.length) {
      noNote = false;
    }
  }

  return (
    <div>
      {/* {JSON.stringify(patient)} */}
      {showNoteInput ? (
        <div>
          {/* <TextArea /> */}
          <div className="">
            <label>Note</label>
            <SpeechInput
              onInputChange={(text) => setNote(text)}
              tag="textarea"
            />
          </div>

          <ButtonGroup
            submitLabel="Save"
            submit={save}
            submitting={loadingSave}
            exit={() => toggle(false)}
          />
        </div>
      ) : (
        <div className="d-flex justify-content-end mb-1 mt-1">
          <button
            className={`btn btn-outline-dark ${iconClass}`}
            onClick={() => toggle(true)}
          >
            <FaNotesMedical size={20} className="mr-1" />
            Add new note
          </button>
        </div>
      )}

      {noNote ? (
        <p className="alert alert-primary offset-sm-3 col-sm-6 offset-md-3 col-md-6 mt-3">
          No notes found for this patient, add a new note to get started
        </p>
      ) : null}

      {patient.notes
        ? patient.notes.map((item, index) => (
            <Card key={index} className="mt-1">
              <CardBody className="m-0 p-2">
                <CardText>
                  <small className="text-muted float-right">
                    {moment(item.createdAt).format('ddd, MMM YYYY, hh:mm a')}
                  </small>
                </CardText>
                <CardText>{item.note}</CardText>
              </CardBody>
            </Card>
          ))
        : null}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  _saveNote: (id, data, cb, err) => dispatch(saveNote(id, data, cb, err)),
});

export default connect(
  null,
  mapDispatchToProps
)(Notes);
