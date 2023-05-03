import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ProblemsForm from './ProblemsForm';
import ObservationRequestForm from './ObservationRequestForm';
import HistoryPreview from './HistoryPreview';
import SystemExaminationForm from './SystemExaminationForm';
import VitalSignForm from './VitalSignForm';
import ProvisionalDiagnosisForm from './ProvisionalDiagnosisForm';
import AthropometryForm from './AthropometryForm';
import ManagementPlanForm from './ManagementPlanForm';
import DressingRequestForm from './DressingRequestForm';
import PreviousMedicalHistoryPreview from './PreviousMedicalHistoryPreview';

class LastDiagnosis extends React.Component {
  render() {
    const { records } = this.props;
    return (
      <div style={{ width: '100%', height: '85vh' }}>
        <Scrollbars>
          <div style={{ paddingLeft: '15px' }}>
            <h5>Full Diagnosis</h5>
            <p>Seen By: {records.seen_by}</p>
            <div>
              Transaction ID: <span>{records.transactionId}</span>
            </div>
            <VitalSignForm records={records} />
            {/* <PComplaintsTable formRecords={records} showHistory={false} /> */}
            <HistoryPreview records={records} />
            <PreviousMedicalHistoryPreview records={records} />
            <SystemExaminationForm records={records} />
            <ProblemsForm records={records} />
            <ProvisionalDiagnosisForm records={records} />
            <AthropometryForm records={records} />
            <ManagementPlanForm addedcare={records.addedcare} />
            <DressingRequestForm records={records} />
            <ObservationRequestForm
              observationrequest={records.observationrequest}
            />
            {/* <DrugsTable drugsList={records} showRemove={false} /> */}
            {/* <LabRequestTable formRecords={records} showRemove={false} /> */}
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default LastDiagnosis;
