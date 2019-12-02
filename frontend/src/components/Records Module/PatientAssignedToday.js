//importing neccessary modules
import React, { Component } from 'react';
import { Card, Table } from 'reactstrap';
import FreeScrollBar from 'react-free-scrollbar';
import { _fetchData } from '../helpers';
import Loading from '../loading';

/**
 * This component renders the table consisting of the
 * assigned for a particular date
 */
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: '',
    };

    this.fetchData = this.fetchData.bind(this);
  }

  /**
   * create fetch method to fetch list of doctors with the corresponding total
   * number of patients from the database
   */

  fetchData() {
    let route = 'patientrecords/patientAssignedToday';
    let success_callback = data => this.setState({ list: data });
    let error_callback = error => this.setState({ error });
    _fetchData({ route, success_callback, error_callback });
  }

  /**
   * when component has been mounted, the list of patients assigned for
   * for a paticular doctor is fetched from the database
   */
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const today = new Date();
    const { error, list } = this.state;
    return (
      <div>
        <Card className="border-secondary">
          <h6 style={{ textAlign: 'center' }}>
            List of patients assigned today {today.toLocaleDateString()}
          </h6>
          <div
            style={{
              width: '100%',
              height: '50vh',
            }}>
            {/* 
                        rendering the daily list table of doctors with the corresponding total patients assigned to them
                    */}
            <FreeScrollBar>
              {!list.length ? (
                !error.length ? (
                  <Loading />
                ) : (
                  <p>No Record Found</p>
                )
              ) : (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th />
                      <th>Doctors</th>
                      <th className="moveToCenter">Patients</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((doctor, i) => (
                      <tr
                        style={{ cursor: 'pointer' }}
                        key={i}
                        onClick={() => this.props.getNewListByDoctor(doctor.Doctors)}>
                        <td>{i + 1}</td>
                        <td style={{ textAlign: 'left' }}>{doctor.Doctors}</td>
                        <td style={{ textAlign: 'center' }}>
                          {doctor.Patients}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
              {error.length ? (
                <p className="alert alert-danger text-center">{error}</p>
              ) : null}
            </FreeScrollBar>
          </div>
        </Card>
      </div>
    );
  }
}
