import React from 'react';
import { Card, CardBody, CardHeader, Table, CardFooter } from 'reactstrap';
// import { _fetchData, _customNotify, _updateData } from '../helpers';
import Notifications from 'react-notify-toast';

const SampleAnalysis = ({
  saveResults = f => f,
  currentReq = [],
  onBlurCaptured = f => f,
  cancel = f => f,
}) => {
  const rows = [];
  currentReq.forEach((sample, i) => {
    rows.push(
      <tr key={i}>
        <td>{sample.test}</td>
        <td>
          <textarea
            className="form-control"
            name="result"
            onBlurCapture={e =>
              onBlurCaptured(sample, e.target.name, e.target.value)
            }
          />
        </td>
        <td>
          <textarea
            className="form-control"
            name="appearance"
            onBlurCapture={e =>
              onBlurCaptured(sample, e.target.name, e.target.value)
            }
          />
        </td>
        <td>
          <textarea
            className="form-control"
            name="microscopy"
            onBlurCapture={e =>
              onBlurCaptured(sample, e.target.name, e.target.value)
            }
          />
        </td>
        <td>
          <textarea
            className="form-control"
            name="culture"
            onBlurCapture={e =>
              onBlurCaptured(sample, e.target.name, e.target.value)
            }
          />
        </td>
        <td>
          <textarea
            className="form-control"
            name="antibiotic"
            onBlurCapture={e =>
              onBlurCaptured(sample, e.target.name, e.target.value)
            }
          />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Card>
        <h4 className="text-center">Samples Collected</h4>
        <CardBody>
          <div>
            <Table bordered striped hover>
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Result</th>
                  <th>Appearance</th>
                  <th>Microscopy</th>
                  <th>Culture</th>
                  <th>Antibiotic</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </div>
        </CardBody>
        <CardFooter>
          <button onClick={saveResults} className="btn btn-outline-secondary">
            Save Changes
          </button>
          <button
            className="offset-md-3 offset-lg-3 btn btn-outline-danger"
            onClick={cancel}>
            Close
          </button>
        </CardFooter>
      </Card>
      <Notifications options={{ zIndex: 200, top: '50px' }} />
    </div>
  );
};

export default SampleAnalysis;
