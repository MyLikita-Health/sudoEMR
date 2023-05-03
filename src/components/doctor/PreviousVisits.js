import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, Table } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
// import SearchBar from '../record/SearchBar';
// import EncounterPreview from './PreviewForm';
import CloseButton from './components/close-button';
import Loading from '../loading';
import moment from 'moment';
import { setTab, setPatientToSee } from '../../redux/actions/doctor';

function Row({ diagnosis }) {
  return (
    <tr style={{ cursor: 'pointer' }} key={diagnosis.id} onClick={() => {}}>
      <td>{moment(diagnosis.date).format('DD-MM-YYYY')}</td>
      <td>{diagnosis.seen_by}</td>
    </tr>
  );
}

class PreviousVisits extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prevVisits: [],
      filterText: '',
    };
  }

  render() {
    const {
      pastVisits,
      toggle,
      loading,
      history,
      setTab,
      setPatient,
    } = this.props;
    return (
      <Card>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          onClick={() => {
            history.push('/me/doctor/');
            setTab('');
            setPatient({});
            toggle();
          }}
        >
          <CloseButton size="sm" />
        </div>
        <CardTitle tag="h6" className="text-center">
          Previous Visit Details
        </CardTitle>
        {/* <SearchBar 
          placeholder="search by date..."
          value={this.state.value}
          onChange={e => this.setState({ filterText: e.target.value })}
        /> */}
        <div style={{ height: '80vh' }}>
          <Scrollbars>
            <div>
              {loading && <Loading />}
              {!loading && pastVisits.length === 0 ? (
                <p style={{ textAlign: 'center', paddingTop: '2em' }}>
                  <em>This patient does not have any previous visit record</em>
                </p>
              ) : (
                <Table responsive bordered hover>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Doctor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastVisits.map((diagnosis) => (
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
                </Table>
              )}
            </div>
          </Scrollbars>
          {/* <EncounterPreview /> */}
        </div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    patient_id: state.doctor.patient.id,
    loading: state.doctor.getPastVisitsLoading,
    pastVisits: state.doctor.pastVisits,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTab: (tab) => dispatch(setTab(tab)),
    setPatient: (patient) => dispatch(setPatientToSee(patient)),
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PreviousVisits);
