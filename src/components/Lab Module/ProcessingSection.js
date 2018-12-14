import React, { Component, Suspense, lazy } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import {
  _fetchData,
  _postData,
  _customNotify,
  _updateData,
  _warningNotify,
} from '../helpers';
import Loading from '../loading';
const SampleAnalysis = lazy(() => import('./SampleAnalysis'));
const PathologistComment = lazy(() => import('./PathologistComment'));
const PendingRequestProcess = lazy(() => import('./PendingRequestProcess'));

export default class ProcessingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestForThisPatient: [],
      testIdArr: [],
      testResultsArr: [],
    };
  }

  fetchData(id, mode) {
    let route =
      mode === 'pending'
        ? `lab/pendingReqById?id=${id}`
        : mode === 'collected'
        ? `lab/collectedSamplesById?id=${id}`
        : mode === 'analyzed'
        ? `lab/analyzedSamplesById?id=${id}`
        : null;
    let success_callback = data =>
      this.setState({ requestForThisPatient: data });
    let error_callback = err => this.setState({ requestErr: err });
    _fetchData({ route, success_callback, error_callback });
  }

  componentDidMount() {
    const { mode } = this.props;
    const { id } = this.props.req;
    this.fetchData(id, mode);
  }

  saveId(test_id) {
    const { testIdArr } = this.state;
    let newArr = testIdArr.concat(test_id);
    this.setState({ testIdArr: newArr });
  }

  removeId(test_id) {
    const { testIdArr } = this.state;
    let newArr = testIdArr.filter(id => id !== test_id);
    this.setState({ testIdArr: newArr });
  }

  onStatusChange = test_id =>
    !this.state.testIdArr.includes(test_id) ? this.saveId(test_id) : null;

  onStatusUnchanged = test_id =>
    this.state.testIdArr.includes(test_id) ? this.removeId(test_id) : null;

  saveLabInvestigation = lab_investigation => {
    let {
      appearance,
      microscopy,
      culture,
      antibiotic,
      test_id,
    } = lab_investigation;

    // console.log(lab_investigation)
    // let data = _convertArrOfObjToArr(lab_investigation);
    let route = 'lab/analyzeSample';
    let data = { appearance, microscopy, culture, antibiotic, test_id };
    let callback = () => _customNotify('record submitted');
    _updateData({ route, data, callback });
  };

  saveResults = () => {
    const { testResultsArr } = this.state;
    // console.log(testResultsArr);
    // testResultsArr.forEach(test => this.saveLabInvestigation(test));
    let testIdArr = [];
    testResultsArr.forEach(res => testIdArr.push(res.test_id))
    this.autoUpdate(testIdArr)
  };

  saveCollectedSamples = () => {
    let data = this.state.testIdArr;

    if (data.length === 0) return _warningNotify('no changes made');

    let route = 'lab/submitSamplesCollected';
    let cb = () => _customNotify('Record has been submitted successfully.');
    // _updateData({ route, data, cb });
    // this.props.updateTable(this.props.req.id);
    this.autoUpdate(data)
    console.log(this.state.testIdArr);
  };

  autoUpdate(testIdArr){
    let { requestForThisPatient } = this.state;
    console.log(requestForThisPatient)
    let newList = [];
    requestForThisPatient.forEach(req => !testIdArr.includes(req.test_id) ? newList.push(req) : null);

    // for(let i=0; i<testIdArr.length; i++){
      // requestForThisPatient = requestForThisPatient.filter(req => req.id !== testIdArr[i]);
      // if(testIdArr[i])
    // }
    
    this.setState({ requestForThisPatient: newList })
    // console.log(newList)
  }

  // saveChanges = () => {
  //   const { mode } = this.props;
  //   if (mode === 'pending') {
  //     this.saveCollectedSamples();
  //   } else if (mode === 'collected') this.saveResults();

  //   // let id = this.props.req.id;
  //   // this.props.updateTable(id);
  // };

  onBlurCaptured = (sample, cellName, cellValue) => {
    let id = sample.test_id;
    let { testResultsArr } = this.state;
    // let newArr = [];
    if (testResultsArr.length === 0) {
      testResultsArr = testResultsArr.concat({
        test_id: id,
        [cellName]: cellValue,
      });
    } else {
      let res = [];
      testResultsArr.forEach(test => {
        if (test.test_id === id) res.push(true);
        else res.push(false);
      });

      if (res.includes(true)) {
        testResultsArr.map(a =>
          a.test_id === id ? (a[cellName] = cellValue) : a
        );
      } else {
        testResultsArr = testResultsArr.concat({
          test_id: id,
          [cellName]: cellValue,
        });
      }
    }
    this.setState({ testResultsArr });
  };

  render() {
    const { req, mode, cancel } = this.props
    const {
      // resultModalOpen,
      // previewModalOpen,
      // toggleResultModal,
      // togglePreviewModal,
      // saveLabResults,
      onStatusChange,
      onStatusUnchanged,
      // currentReq,
      saveCollectedSamples,
      saveResults,
      onBlurCaptured,
    } = this;
    const { requestForThisPatient } = this.state;
    

    return (
      <Suspense fallback={<Loading />}>
      <p>{mode}</p>
        {//   requestForThisPatient.length === 0 ? (
        //   <p className="text-center">No record found</p>
        // ) :
        mode === 'pending' ? (
          <PendingRequestProcess
            requests={requestForThisPatient}
            // resultModalOpen={resultModalOpen}
            // previewModalOpen={previewModalOpen}
            // toggleResultModal={toggleResultModal}
            // togglePreviewModal={togglePreviewModal}
            // saveLabResults={saveLabResults}
            onStatusChange={onStatusChange}
            onStatusUnchanged={onStatusUnchanged}
            saveCollectedSamples={saveCollectedSamples}
            cancel={cancel}
            // currentReq={requestForThisPatient}
            req={req}
          />
        ) : mode === 'collected' ? (
          <SampleAnalysis
            saveResults={saveResults}
            currentReq={requestForThisPatient}
            onBlurCaptured={onBlurCaptured}
            cancel={cancel}
          />
        ) : mode === 'analyzed' ? ( 
          <PathologistComment currentReq={requestForThisPatient} cancel={cancel} />
        ) : (
          // ) : mode === 'commented' ? (
          //   <
          // <SampleAnalysis currentReq={requestForThisPatient} />
          <p>Record not found</p>
        )}
      </Suspense>
    );
  }
}

const PatientDetails = ({ userDetails = [], currentReq = {} }) => (
  <div className="form-group">
    <label className="col-md-4" style={{ textAlign: 'left' }}>
      Patient:{' '}
    </label>
    <label className="col-md-6" style={{ textAlign: 'left' }}>
      {userDetails.surname} {userDetails.firstname}
    </label>
    <label className="col-md-4" style={{ textAlign: 'left' }}>
      Test:{' '}
    </label>
    <label className="col-md-6" style={{ textAlign: 'left' }}>
      {currentReq.test}
    </label>
    <label className="col-md-4" style={{ textAlign: 'left' }}>
      Sample:{' '}
    </label>
    <label className="col-md-6" style={{ textAlign: 'left' }}>
      {currentReq.sample}
    </label>
  </div>
);

export class ResultModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
      appearance: '',
      microscopy: '',
      culture: '',
      antibiotic: '',
      warning: '',
    };
  }
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      warning: '',
    });
  };

  saveLabResults = e => {
    e.preventDefault();
    const { result, appearance, microscopy, culture, antibiotic } = this.state;
    if (
      result === '' &&
      appearance === '' &&
      microscopy === '' &&
      culture === '' &&
      antibiotic === ''
    )
      return this.setState({ warning: 'All fields cannot be left blank' });

    const formData = { result, appearance, microscopy, culture, antibiotic };
    this.props.saveLabResults(formData);
    this.clearText();
  };

  clearText = () =>
    this.setState({
      result: '',
      appearance: '',
      microscopy: '',
      culture: '',
      antibiotic: '',
    });

  render() {
    const {
      resultModalOpen,
      toggleResultModal,
      currentReq,
      userDetails,
    } = this.props;
    const {
      result,
      appearance,
      microscopy,
      culture,
      antibiotic,
      warning,
    } = this.state;
    return (
      <Modal isOpen={resultModalOpen} toggle={toggleResultModal}>
        <ModalHeader toggle={toggleResultModal}>Add Result</ModalHeader>
        <ModalBody>
          <form onSubmit={this.saveLabResults}>
            <PatientDetails currentReq={currentReq} userDetails={userDetails} />
            <label className="col-md-3 control-label">Result:</label>
            <input
              name="result"
              className="form-control col-md-9"
              value={result}
              onChange={this.onInputChange}
            />

            <label className="col-md-3 control-label">Appearance:</label>
            <input
              name="appearance"
              className="form-control col-md-9"
              value={appearance}
              onChange={this.onInputChange}
            />

            <label className="col-md-3 control-label">Microscopy:</label>
            <input
              name="microscopy"
              className="form-control col-md-9"
              value={microscopy}
              onChange={this.onInputChange}
            />

            <label className="col-md-3 control-label">Culture:</label>
            <input
              name="culture"
              className="form-control col-md-9"
              value={culture}
              onChange={this.onInputChange}
            />

            <label className="col-md-3 control-label">Antibiotic:</label>
            <input
              name="antibiotic"
              className="form-control col-md-9"
              value={antibiotic}
              onChange={this.onInputChange}
            />

            {warning && (
              <span className="alert alert-danger text-center offset-md-4">
                {warning}
              </span>
            )}
            <hr />
            <input
              type="submit"
              className="btn btn-outline-success offset-md-5"
              value="Save Result"
            />
          </form>
        </ModalBody>
      </Modal>
    );
  }
}

const Result = ({ result, appearance, microscopy, culture, antibiotic }) => {
  const divideStyle = {
    margin: '.7em',
    width: '50%',
  };
  const labelStyle = {
    textAlign: 'left',
    width: '30%',
  };
  const valStyle = {
    textAlign: 'left',
    width: '70%',
  };
  return (
    <div>
      <h2>Lab Test Result</h2>
      <div style={divideStyle}>
        <label style={labelStyle}>Result: </label>
        <label style={valStyle}>{result}</label>
      </div>
      <div style={divideStyle}>
        <label style={labelStyle}>Appearance: </label>
        <label style={valStyle}>{appearance}</label>
      </div>
      <div style={divideStyle}>
        <label style={labelStyle}>Microscopy: </label>
        <label style={valStyle}>{microscopy}</label>
      </div>
      <div style={divideStyle}>
        <label style={labelStyle}>Culture: </label>
        <label style={valStyle}>{culture}</label>
      </div>
      <div style={divideStyle}>
        <label style={labelStyle}>Antibiotic: </label>
        <label style={valStyle}>{antibiotic}</label>
      </div>
    </div>
  );
};

const PrintPreview = ({
  req,
  userDetails,
  previewModalOpen,
  togglePreviewModal,
}) => {
  const onPrintClick = () => {
    window.frames[
      'print_frame'
    ].document.body.innerHTML = document.getElementById('labResult').innerHTML;
    window.frames['print_frame'].window.focus();
    window.frames['print_frame'].window.print();
  };
  return (
    <Modal size="lg" isOpen={previewModalOpen} toggle={togglePreviewModal}>
      <ModalHeader toggle={togglePreviewModal}>Add Result</ModalHeader>
      <ModalBody>
        <div id="labResult">
          {/* <PatientInfo req={req} userDetails={userDetails} /> */}
          <Result
            result="cleared"
            appearance="cleared"
            microscopy="cleared"
            culture="cleared"
            antibiotic="cleared"
          />
        </div>
        <iframe name="print_frame" width="0" height="0" src="about:blank" />
        <button className="btn btn-outline-success" onClick={onPrintClick}>
          Print
        </button>
      </ModalBody>
    </Modal>
  );
};
