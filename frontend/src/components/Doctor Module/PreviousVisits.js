import React from 'react';
import { Card } from 'reactstrap';
import {MdArrowBack} from 'react-icons/md';
import FreeScrollBar from 'react-free-scrollbar';
import SearchBar from '../Records Module/SearchBar';

class Row extends React.Component {
  handleFetchDetails = () => {
    this.props.toggleCollapse2();
    const transactionId = this.props.diagnosis.transactionId;
    this.props.getFullDiagnosisByTransactionId(transactionId);
  };

  render() {
    const { diagnosis } = this.props;
    return (
      <tr
        style={{ cursor: 'pointer' }}
        key={diagnosis.transactionId}
        onClick={this.handleFetchDetails}>
        <td>{diagnosis.transactionId}</td>
        <td>{diagnosis.date}</td>
        <td>
          <a style={{ marginBottom: '1rem' }}>{diagnosis.seen_by}</a>{' '}
        </td>
        <td>{diagnosis.id}</td>
      </tr>
    );
  }
}

class PreviousVisits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevVisits: [],
      filterText: '',
    };
  }

  back = () => {
    this.props.toggle();
  };

  render() {
    const { fullDiagnosis, currentRecord } = this.props;
    // const newDiag = JSON.parse(localStorage.getItem('fullDiagnosis')) || [];
    return (
      <Card>
        <div onClick={this.back} style={{ cursor: 'pointer', display: 'flex' }}>
          <MdArrowBack size={23} />
        </div>
        <h6 className="text-center"> Previous Visit Details</h6>
        <div className="offset-md-1">
          {/* <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
            placeholder="Search by date..."
            size={35}
            width="75%"
          /> */}
          <input
            className="form-control"
            placeholder="search by date..."
            name="filterText"
            value={this.state.value}
            onChange={e => this.setState({ filterText: e.target.value })}
          />
        </div>
        <div style={{ width: '99%', height: '400px' }}>
          <FreeScrollBar>
            <div>
              {fullDiagnosis.length === 0 ? (
                <p style={{ textAlign: 'center', paddingTop: '2em' }}>
                  <em>
                    This patient does not have any record with this hospital
                  </em>
                </p>
              ) : (
                <table className="table table-hover col-md-2 ">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Doctor</th>
                      <td>PID</td>
                    </tr>
                  </thead>
                  <tbody>
                    {fullDiagnosis.map(diagnosis => (
                      <Row
                        key={diagnosis.transactionId}
                        diagnosis={diagnosis}
                        toggleCollapse2={this.props.toggleCollapse2}
                        getFullDiagnosisByTransactionId={
                          this.props.getFullDiagnosisByTransactionId
                        }
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </FreeScrollBar>
        </div>
      </Card>
    );
  }
}

export default PreviousVisits;
