import React from 'react';
import { Collapse, FormGroup, CardHeader } from 'reactstrap';
import { GrDown, GrUp } from 'react-icons/gr';

export default ({
  eye_opening,
  BVR,
  BMR,
  onInputChange,
}) => {
  const [evmIsOpen, toggleEvm] = React.useState(true);
  return (
    <React.Fragment>
      <div style={{ cursor: 'pointer' }} onClick={() => toggleEvm(!evmIsOpen)}>
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn p-0 pl-2 pr-2"
        onClick={() => toggleEvm(!evmIsOpen)}
      >
       <span style={{fontWeight: 'bold'}}>EVM</span>
        <span>{evmIsOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
       
      </div>
      <Collapse isOpen={!evmIsOpen}>
        <FormGroup>
          <div>
            <label>GCS:</label>
            <span>
              {`${parseInt(eye_opening) + parseInt(BVR) + parseInt(BMR)}/15`}{' '}
            </span>
          </div>
        </FormGroup>
        <FormGroup row>
          <div className="col-md-4">
            <label>Eye Opening:</label>
            <input
              className="form-control"
              onChange={onInputChange}
              value={eye_opening}
              name="eye_opening"
            />
          </div>
          <div className="col-md-4">
            <label>Best Verbal Response:</label>
            <input
              className="form-control"
              onChange={onInputChange}
              value={BVR}
              name="BVR"
            />
          </div>

          <div className="col-md-4">
            <label>Best Motor Response:</label>
            <input
              className="form-control"
              onChange={onInputChange}
              value={BMR}
              name="BMR"
            />
          </div>
        </FormGroup>
        
      </Collapse>
    </React.Fragment>
  );
};
