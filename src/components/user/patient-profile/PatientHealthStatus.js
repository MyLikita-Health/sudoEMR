import React, { useState, useEffect } from 'react';
import { Card, FormGroup, Button } from 'reactstrap';
import { MdUpdate } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { submitHealthStatus } from '../../patient/actions/profile';

function HealthStatus() {
  const profile = useSelector((state) => state.auth.user);
  const [health, setHealth] = useState({
    blood_group: '',
    genotype: '',
    bio: '',
    physical_disability: '',
    contaminated_disease: '',
    other_info: '',
    uid: '',
  });
  const [loading, toggle] = useState(false);
  const dispatch = useDispatch();

  const onInputChange = (key, value) => {
    setHealth((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => setHealth(profile), [profile]);

  const handleSubmit = () => {
    toggle(true);
    dispatch(submitHealthStatus(health, () => toggle(false)));
  };

  return (
    <Card className="p-2 mb-2">
      {/* {JSON.stringify(health)} */}
      <h6 className="font-weight-bold">Health Status</h6>
      <FormGroup row>
        <div className="col-md-6">
          <span className="mr-2">Bio: </span>
          <input
            onChange={(e) => onInputChange('bio', e.target.value)}
            className="form-control"
            type="textarea"
            value={health.bio}
          />
        </div>

        <div className="col-md-6">
          <span className="mr-2">Blood Group</span>
          <input
            onChange={(e) => onInputChange('blood_group', e.target.value)}
            className="form-control"
            type="text"
            value={health.blood_group}
          />
        </div>
      </FormGroup>

      <FormGroup row>
        <div className="col-md-6">
          <span className="mr-2">Genotype</span>
          <input
            onChange={(e) => onInputChange('genotype', e.target.value)}
            className="form-control"
            type="text"
            value={health.genotype}
          />
        </div>

        <div className="col-md-6">
          <span className="mr-2">Physical Disability</span>
          <input
            onChange={(e) =>
              onInputChange('physical_disability', e.target.value)
            }
            className="form-control"
            type="text"
            value={health.physical_disability}
          />
        </div>
      </FormGroup>
      <FormGroup row>
        <div className="col-md-6">
          <span className="mr-2">Contaminated Disease</span>
          <input
            onChange={(e) =>
              onInputChange('contaminated_disease', e.target.value)
            }
            className="form-control"
            type="text"
            value={health.contaminated_disease}
          />
        </div>
        <div className="col-md-6">
          <span className="mr-2">Other Information</span>
          <input
            onChange={(e) => onInputChange('other_info', e.target.value)}
            className="form-control"
            type="textarea"
            value={health.other_info}
          />
        </div>
      </FormGroup>

      <div className="d-flex flex-row justify-content-center">
        <Button color="primary" className="m-2" onClick={handleSubmit}>
          {loading ? (
            'Loading...'
          ) : (
            <>
              <MdUpdate size={20} className="mr-1" />
              Update Health Status
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}

export default HealthStatus;
