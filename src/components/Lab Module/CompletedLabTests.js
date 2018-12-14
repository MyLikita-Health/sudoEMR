import React from 'react';
import { Table } from 'reactstrap';
import { _fetchData } from '../helpers';
// import Loading from '../Loading'

export default class CompletedLabTests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completedLabTests: [],
      error: '',
      filterText: '',
    };
  }

  fetchCompletedTest = () => {
    let route = 'lab/testCompleted';
    let success_callback = data => this.setState({ completedLabTests: data });
    let error_callback = error => this.setState({ error });
    _fetchData({ route, success_callback, error_callback });
  };

  componentDidMount() {
    this.fetchCompletedTest();
  }

  onFilterTextChange = e => this.setState({ filterText: e.target.value });

  render() {
    let rows = [];
    let { filterText, completedLabTests, error } = this.state;
    completedLabTests.forEach((test, i) => {
      if (test.patient_id.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{test.date.slice(0, 10)}</td>
          <td>{test.patient_id}</td>
          <td>{test.test_id}</td>
          <td>{test.test}</td>
          <td>{test.seen_by}</td>
        </tr>
      );
    });
    return (
      <div>
        <h4 className="text-center">Completed Lab Tests</h4>
        <input
          className="form-control"
          value={filterText}
          placeholder="Search for a test by patient's ID"
          onChange={this.onFilterTextChange}
        />
        <br />
        {error.length>0 && (
          <p className="alert-danger text-center">{error}</p>
        )} { completedLabTests.length>0 && (
          <Table bordered hover striped>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Patient ID</th>
                <th>Test ID</th>
                <th>Test</th>
                <th>Requested By</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        )}
        {!error.length && !completedLabTests.length && <p className="text-center">No Record found</p>}
      </div>
    );
  }
}
