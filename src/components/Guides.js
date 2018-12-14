import React from 'react';
import './guides.css';


/**
 * this component contains the users guide for
 * all the modules
 *
 */
const title = <h6>Starter's Guide</h6>

function DoctorGuide() {
  return (
    <div className="guide">
      {title}
      <ul>
        <li>
          Get started by clicking on the patient's id on the table below
        </li>
        <li>
          You can also use the <strong>search textbox</strong> for convenience
        </li>
        <li>
          Enter the patient's diagnosis by navigating <strong>tabs</strong> shown in multiple
          colors
        </li>
        <li>
          Check the patient's past medical history by selecting the date which
          you want to check
        </li>
        <li>Use the <strong>Preview & Print</strong> button if you need to print the diagnosis</li>
      </ul>
    </div>
  );
}

function RecordGuide() {
  return (
    <div className="guide">
      {title}
      <ul>
        <li>
          You can check the list of patients assigned to a doctor by clicking on
          the doctor's name on the table below
        </li>
        <li>
          You can register a new patient by clicking{' '}
          <strong>Add New Patient</strong> button
        </li>
        <li>
          Use <strong>Assign</strong> button to assign a doctor to a patient
        </li>
        <li>
          You can also edit a patient's record using the <strong>Edit</strong>{' '}
          button
        </li>
      </ul>
    </div>
  );
}

function PharmacyGuide() {
  return (
    <div className="guide">
      {title}
      <ul>
      <li>
          Get started by clicking on the patient's id on the table below
        </li>
        <li>
          You can also use the <strong>search textbox</strong> to search for a patient by id
        </li>
        <li>
          Enter the patient's diagnosis by navigating <strong>tabs</strong> shown in multiple
          colors
        </li>
      </ul>
    </div>
  );
}

function LabGuide() {
  return (
    <div className="guide">
      {title}
      <b> 1.</b> Click on the patient number from the left hand side
      <br />
      <b> 2.</b> This displays patient clerking forms
      <br />
      <b> 3.</b> The list previous visit date by for the select patient are{' '}
      <br />
      displayed by the right handside of the form
      <br />
      <b> 4.</b> Select any date of your choice to view the last clerking
      <br />
    </div>
  );
}

function AccountGuide() {
  return (
    <div className="guide">
      {title}
      <b> 1.</b> Click on the patient number from the left hand side
      <br />
      <b> 2.</b> This displays patient clerking forms
      <br />
      <b> 3.</b> The list previous visit date by for the select patient are{' '}
      <br />
      displayed by the right handside of the form
      <br />
      <b> 4.</b> Select any date of your choice to view the last clerking
      <br />
    </div>
  );
}

export { DoctorGuide, RecordGuide, PharmacyGuide, LabGuide, AccountGuide };
