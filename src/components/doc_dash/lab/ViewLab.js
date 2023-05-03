import React, { useState } from 'react';
import { Card, Row } from 'reactstrap';
import { useRouteMatch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getLabDetails,
  cancelLabTest,
  completeLabTest,
  updateLabTest,
} from '../actions/labActions';
import Loading from '../../comp/components/Loading';
import moment from 'moment';
import { TextArea } from '../../comp/components/InputGroup';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { iconClass } from '../appointments/NewAppointment2';
import { MdUpdate } from 'react-icons/md';
import { _customNotify, _warningNotify } from '../../utils/helpers';
import BackButton from '../../comp/components/BackButton';

function ViewLab() {
  const [loading, toggleLoading] = useState(false);
  const [test, setTest] = useState({ result: '', notes: '' });
  const match = useRouteMatch();
  const { labId } = match.params;
  const dispatch = useDispatch();
  // const labDetails = useSelector(
  //   (state) => state.individualDoc.selectedLabTest
  // );
  const patientDetails = useSelector(
    (state) => state.individualDoc.selectedPatient
  );

  useEffect(
    () => {
      toggleLoading(true);
      dispatch(
        getLabDetails(labId, (d) => {
          setTest({ ...test, ...d });
          toggleLoading(false);
        })
      );
    },
    [dispatch]
  );

  const onInputChange = (name, value) => setTest({ ...test, [name]: value });

  const handleCancel = () => {
    dispatch(
      cancelLabTest(test._id, () => {
        _customNotify('Lab test cancelled');
      })
    );
    dispatch(
      getLabDetails(labId, (d) => {
        setTest({ ...test, ...d });
      })
    );
  };

  const handleCompleted = () => {
    if (test.result === '') {
      _warningNotify('Please provide results');
    } else {
      dispatch(
        completeLabTest(test._id, test, () => {
          _customNotify('Lab test completed');
        })
      );
      dispatch(
        getLabDetails(labId, (d) => {
          setTest({ ...test, ...d });
        })
      );
    }
  };

  const handleUpdate = () => {
    // dispatch(
    //   getLabDetails(labId, (d) => {
    //     setTest({ ...test, ...d });
    //   })
    // );
    if (test.result === '' || test.notes === '') {
      _warningNotify('Nothing to update');
    } else {
      dispatch(
        updateLabTest(test._id, test, () => {
          _customNotify('Updated Lab');
        })
      );
      dispatch(
        getLabDetails(labId, (d) => {
          setTest({ ...test, ...d });
        })
      );
    }
  };

  return (
    <>
      <BackButton text="Go Back" />
      {/* {JSON.stringify(labDetails)} */}
      <Card body>
        {loading ? <Loading /> : null}
        <Card className="p-2 ">
          <Row>
            <div className="col-md-4 col-lg-2">
              <p className="text-center font-weight-light">Patient</p>
              <h6 className="text-center">
                {patientDetails.surname} {patientDetails.firstname}
              </h6>
            </div>
            <div className="col-md-4 col-lg-3">
              <h6 className="text-center font-weight-light">Test</h6>
              <h6 className="text-center">{test.test}</h6>
            </div>
            <div className="col-md-4 col-lg-2">
              <h6 className="text-center font-weight-light">Sample</h6>
              <h6 className="text-center">{test.sample}</h6>
            </div>
            <div className="col-md-4 col-lg-2">
              <h6 className="text-center font-weight-light">Status</h6>
              <h6
                className={`rounded-pill text-center p-2 text-light font-weight-bold ${
                  test.status === 'requested'
                    ? 'bg-warning'
                    : test.status === 'completed'
                    ? 'bg-success'
                    : test.status === 'cancelled'
                    ? 'bg-danger'
                    : ''
                }`}
              >
                {test.status}
              </h6>
            </div>
            <div className="col-md-4 col-lg-3">
              <h6 className="text-center font-weight-light">Requested On</h6>
              <h6 className="text-center">
                {moment(test.createdAt).format('DD-MM-YYYY, hh:mm a')}
              </h6>
            </div>
          </Row>
          {/* <div>
            <TextArea label="Notes" editable={false} value={test.notes} />
          </div> */}
        </Card>

        <div className="mt-4">
          <div>
            <TextArea
              label="Result"
              value={test.result}
              onChange={(e) => onInputChange('result', e.target.value)}
              editable={test.status === 'requested'}
            />
            <TextArea
              label="Notes"
              value={test.notes}
              onChange={(e) => onInputChange('notes', e.target.value)}
              editable={test.status === 'requested'}
            />
          </div>

          {test.status === 'cancelled' || test.status === 'completed' ? null : (
            <div className="d-flex flex-direction-row justify-content-center">
              <div className="btn-group btn-group mt-2 mb-2">
                <button
                  className="btn btn-outline-primary"
                  onClick={handleUpdate}
                >
                  <span className={iconClass}>
                    <MdUpdate size={20} className="mr-1" />
                    Update
                  </span>
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={handleCompleted}
                >
                  <span className={iconClass}>
                    <FaCheck size={20} className="mr-1" />
                    Complete
                  </span>
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={handleCancel}
                >
                  <span className={iconClass}>
                    <FaTimes size={20} className="mr-1" /> Cancel
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </>
  );
}

export default ViewLab;
