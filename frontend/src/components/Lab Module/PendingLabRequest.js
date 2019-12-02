import React, { Component } from 'react';
import { Card, Input } from 'reactstrap';
import FreeScrollBar from 'react-free-scrollbar';
import { RequestTable } from './SampleCollection';
import Loading from '../loading';

class PendingLabRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      searchTerm: '',
      currentReq: {},
    };
  }

  onSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onPatientClick = currentReq => {
    // this.toggle();
    this.props.onPatientClick(currentReq);
  };

  render() {
    const { requestsList, onPatientClick, error } = this.props;
    return (
      <div>
        <Card className="border-secondary">
          <h6 className="text-center">Pending Lab Request</h6>

          <div>
            <Input
              className="offset-md-1 col-md-10"
              value={this.state.searchTerm}
              onChange={this.onSearchTermChange}
              placeholder="Search requests by ID"
            />
          </div>
          <div style={{ width: '100%', height: '50vh' }}>
            <FreeScrollBar>
              {error.length > 0 && (
                <p className="alert-danger text-center">{error}</p>
              )}{' '}
              {requestsList.length > 0 && (
                <RequestTable
                  labrequests={requestsList}
                  onRequestClick={onPatientClick}
                />
              )}
              {!error.length && !requestsList.length && (
                <p className="text-center">No Record found</p>
              )}
              {/*   {!requestsList.length ? (
                !error.length ? (
                  <Loading />
                ) : (
                  <p className="text-center">
                    <em>No Record Found</em>
                  </p>
                )
              ) : (
                <RequestTable
                  labrequests={requestsList}
                  onRequestClick={onPatientClick}
                />
              )}
              {error.length ? (
                <p className="alert alert-danger text-center">{error}</p>
              ) : null} */}
            </FreeScrollBar>
          </div>
        </Card>
      </div>
    );
  }
}

export default PendingLabRequest;
