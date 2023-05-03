import React from 'react';
import { Form, FormGroup } from 'reactstrap';
import SpeechInput from '../comp/speech-to-text/SpeechInput';

function PreviousMedicalHistory({
  pbnh,
  nutrition,
  immunization,
  development,
  onInputChange,
}) {
  return (
    <Form>
      <FormGroup row>
        <div className="col-md-6">
          <label>Pregnancy, Birth Neonatal History</label>
          <SpeechInput
            tag="textarea"
            type="text"
            name="pbnh"
            value={pbnh}
            onInputChange={(text) => onInputChange(text, 'pbnh')}
          />
        </div>

        <div className="col-md-6">
          <label>Immunization History</label>
          <SpeechInput
            tag="textarea"
            type="text"
            name="immunization"
            value={immunization}
            onInputChange={(text) => onInputChange(text, 'immunization')}
          />
        </div>
      </FormGroup>
      <FormGroup row>
        <div className="col-md-6">
          <label>Nutrition History</label>
          <SpeechInput
            tag="textarea"
            type="text"
            name="nutrition"
            value={nutrition}
            onInputChange={(text) => onInputChange(text, 'nutrition')}
          />
        </div>

        <div className="col-md-6">
          <label>Developmental History</label>
          <SpeechInput
            tag="textarea"
            type="text"
            name="development"
            value={development}
            onInputChange={(text) => onInputChange(text, 'development')}
          />
        </div>
      </FormGroup>
    </Form>
  );
}

export default PreviousMedicalHistory;
