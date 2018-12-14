import React from 'react';
import { Card } from 'reactstrap';
import {
  _customNotify,
  _updateData,
  _warningNotify,
  _convertArrOfObjToArr,
} from '../helpers';
import Notifications from 'react-notify-toast';
import ProcessingSection from './ProcessingSection';

export class RequestProcessingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: {},
      currentReq: {},
      resultModalOpen: false,
      previewModalOpen: false,
      
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveLabResults = formData => {
    _customNotify('Results Saved!');
    this.props.toggleRoute();
  };

  toggleResultModal = req => {
    this.setState(prevState => ({
      resultModalOpen: !prevState.resultModalOpen,
      currentReq: req,
    }));
  };

  togglePreviewModal = () => {
    this.setState(prevState => ({
      previewModalOpen: !prevState.previewModalOpen,
    }));
  };

  cancel = () => this.props.toggleRoute();

  

  render() {
    const { req, toggleRoute, mode } = this.props;
    const {
      userDetails,
      resultModalOpen,
      previewModalOpen,
      currentReq,
    } = this.state;
    // const {
    //   toggleResultModal,
    //   togglePreviewModal,
    //   saveLabResults,
    //   onStatusChange,
    //   onStatusUnchanged,
    //   // onBlurCaptured,
    // } = this;
    return (
      <>
        <Notifications options={{ zIndex: 200, top: '50px' }} />
        <PatientInfo req={req} />
        
        <br />
        <ProcessingSection
          req={req}
          // resultModalOpen={resultModalOpen}
          // previewModalOpen={previewModalOpen}
          // toggleResultModal={toggleResultModal}
          // togglePreviewModal={togglePreviewModal}
          // saveLabResults={saveLabResults}
          // onStatusChange={onStatusChange}
          // onStatusUnchanged={onStatusUnchanged}
          // onBlurCaptured={onBlurCaptured}
          mode={mode}
          cancel={this.cancel}

          // currentReq={requestForThisPatient}
        />
        <br />
        
        {/* <button
          className="offset-md-2 offset-lg-2 btn btn-outline-success"
          onClick={this.saveChanges}>
          Save Changes
        </button> */}
      </>
    );
  }
}

const PatientInfo = ({ req }) => {
  // const flexStyle = { display: 'flex', flexDirection: 'horizontal' };

  return (
    <Card>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <label style={{ marginRight: '.5em' }}>Names: </label>
          <span>
            {req.surname} {req.firstname}
          </span>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <label style={{ marginRight: '.5em' }}>Gender: </label>
          <span>{req.gender}</span>
        </div>
        {/* </div>
        <div> */}
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <label style={{ marginRight: '.5em' }}>Phone: </label>
          <span>{req.phoneNo}</span>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <label style={{ marginRight: '.5em' }}>ID: </label>
          <span>{req.id}</span>
        </div>
      </div>
    </Card>
  );
};
