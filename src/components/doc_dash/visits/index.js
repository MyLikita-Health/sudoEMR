import React, { useCallback, useEffect } from 'react';
import {
  Card,
  Table,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import moment from 'moment';
import { useHistory } from 'react-router';
import { connect, useSelector, useDispatch } from 'react-redux';
// import AutoComplete from '../../comp/components/AutoComplete';
import { getPatientList } from '../actions/patientsActions';
import { getVisitsList } from '../actions/visitsActions';
import Scrollbars from 'react-custom-scrollbars';
import SearchPatientComponent from '../../comp/components/SearchPatient';
import { FaSearch } from 'react-icons/fa';
// import { FiChevronRight } from 'react-icons/fi';

function Visits() {
  const history = useHistory();
  const visitsList = useSelector((state) => state.individualDoc.pastVisits);
  const dispatch = useDispatch();

  const getPastVisits = useCallback(() => {
    dispatch(getVisitsList());
  }, [dispatch]);

  useEffect(() => {
    getPastVisits();
  }, [getPastVisits]);

  return (
    <Card body>
      <div className="mb-3">
        <SearchPatientComponent
          onChange={(patient) => {
            history.push(`/me/doctor/visits/new-summary/${patient.id}`);
          }}
        />
      </div>

      <Scrollbars style={{ height: '75vh' }}>
        {visitsList.length ? (
          <Table hover responsive>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Complaints</th>
                <th>Diagnosis</th>
                <th>Visit Date</th>
                <th>Seen By</th>
              </tr>
            </thead>

            <tbody>
              {visitsList.map((item, index) => (
                <tr
                  key={index}
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    history.push(`/me/doctor/visits/view/${item._id}`)
                  }
                >
                  <td>{item.patient_id}</td>
                  <td>{item.presenting_complaints}</td>
                  <td>{item.provisionalDiagnosis}</td>
                  <td>
                    {moment(item.createdAt).format('DD-MM-YYYY, hh:mm a')}
                  </td>
                  <td>{item.createdBy}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
        {/* {visitsList.map((item, index) => (
        <Card
          body
          key={index}
          className="rounded-lg mt-2"
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(`/me/doctor/visits/view/${item._id}`)}
        >
          <CardText>
            <small className="text-muted float-right">
              {moment(item.createdAt).format('ddd, MMM YYYY, hh:mm a')}
            </small>
          </CardText>
          <div className="d-flex flex-direction-row align-items-center justify-content-between">
            <div>
              <CardText className="font-weight-bold">
                {item.patient_name} BSH{item.patient_id}
              </CardText>
              <CardText>Complaints: {item.presenting_complaints}</CardText>
              <CardText>Diagnosis: {item.provisionalDiagnosis}</CardText>
            </div>
            <span>
              <FiChevronRight size={22} />
            </span>
          </div>
        </Card>
      ))} */}
        {!visitsList.length && (
          <div className="row m-0 p-0 mt-4">
            <p className="alert alert-primary offset-md-4 offset-lg-4 col-md-4 col-lg-4">
              No past visits found, click Record New Visit to get started
            </p>
          </div>
        )}
      </Scrollbars>
    </Card>
  );
}

export const SearchPatient = connect(
  (state) => ({ patients: state.individualDoc.patients }),
  (dispatch) => ({ getPatients: () => dispatch(getPatientList()) })
)(
  ({
    patients = [],
    onChange = (f) => f,
    value = '',
    editable = true,
    getPatients = (f) => f,
    required = false,
  }) => {
    useEffect(() => {
      getPatients();
    }, []);
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText className="bg-primary text-light">
            <FaSearch size={26} />
          </InputGroupText>
        </InputGroupAddon>
        <Typeahead
          id="selectpatient"
          placeholder="Select patient..."
          align="justify"
          // bodyContainer='form-control form-control-lg'
          bsSize="lg"
          options={
            patients.length
              ? patients
              : [{ surname: '', firstname: '', patientId: '' }]
          }
          // onInputChange={onChange}
          onChange={(item) => {
            if (item.length) {
              onChange(item[0]);
            }
          }}
          labelKey={(item) =>
            `${item.surname} ${item.firstname} (${item.patientId})`
          }
          emptyLabel=""
        />
      </InputGroup>
    );
  }
);

export default Visits;
