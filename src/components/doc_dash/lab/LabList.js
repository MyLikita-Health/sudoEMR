import React, { useCallback, useEffect, useState } from "react";
import { iconClass } from "../appointments/NewAppointment2";
import { FaPlus } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";
// import { getPatientLabTests } from "../actions/labActions";
import { Table } from "reactstrap";
import moment from "moment";
// import { FiChevronRight } from 'react-icons/fi';
import Loading from "../../comp/components/Loading";
import { _fetchApi2 } from "../../../redux/actions/api";
import { apiURL } from "../../../redux/actions";
import { DOCTOR_LAB_ROUTE } from ".";

const LabList = () => {
  // const { patient } = props;
  const { patientId } = useParams();
  const [patientLabs, setPatientLabs] = useState([]);

  const history = useHistory();
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const facilityId = useSelector((state) => state.auth.user.facilityId);

  const getAllLabTests = useCallback(() => {
    setLoading(true);
    _fetchApi2(
      `${apiURL()}/lab/completed-lab-tests/${facilityId}?query_type=select&patient_id=${patientId}`,
      (data) => {
        setLoading(false);
        if (data.results) {
          setPatientLabs(data.results);
        }
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    // if (patientId) {
    //   setLoading(true);

    //   dispatch(getPatientLabTests(patientId, () => setLoading(false)));
    // }
  }, [patientId, facilityId]);

  useEffect(() => {
    getAllLabTests();
  }, [getAllLabTests]);

  return (
    <div>
      <div className="d-flex justify-content-end mb-1 mt-1">
        <button
          className={`btn btn-outline-dark ${iconClass}`}
          onClick={() => history.push(`/me/doctors/labs/new/${patientId}`)}
        >
          <FaPlus size={20} className="mr-1" />
          New Lab Request
        </button>
      </div>
      {/* {JSON.stringify(patientLabs)} */}
      <div className="mt-2">
        {loading && <Loading />}
        {patientLabs.length ? (
          <Table hover>
            <thead>
              <tr>
                <th>Lab Code</th>
                <th>Sample</th>
                <th>Requested On</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patientLabs.map((item, index) => (
                <tr
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (item.completed === item.tests) {
                      history.push(
                        `${DOCTOR_LAB_ROUTE}/view/${item.patient_id}/${item.booking_no}`
                      );
                    } else {
                      history.push(
                        `${DOCTOR_LAB_ROUTE}/uncompleted/${item.patient_id}/${item.booking_no}`
                      );
                    }
                  }}
                >
                  <td>{item.booking_no}</td>
                  <td>{item.specimen}</td>
                  <td>{moment(item.created_at).calendar()}</td>
                  <td>
                    {item.completed}/{item.tests}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
        {/* {patientLabTests.map((item, index) => (
            <Card
              key={index}
              body
              className="p-2 mt-2"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => {
                // history.push(`/me/doctors/visits/view/${item._id}`);
              }}
            >
              <span>
                <CardText className={iconClass}>
                  {/* <FaCalendar size={20} className="mr-2" /> 
                  <span>Requested</span>
                  {moment(item.createdAt).calendar()}
                </CardText>
                <CardText>Test: {item.test}</CardText>
                <CardText>Sample: {item.sample}</CardText>
                <div>
                  <span>Status</span>
                  <span className={item.status==='requested'?'btn btn-success':''}>{item.status}</span>
                </div>
              </span>
              <span>
                <FiChevronRight />
              </span>
            </Card>
          ))} */}
      </div>

      {!patientLabs.length && (
        <p className="alert alert-primary offset-sm-3 col-sm-6 offset-md-3 col-md-6 mt-3">
          No lab test found for this patient, click Record New Visit to get
          started
        </p>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   patientLabTests: state.individualDoc.patientLabTests,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getLabTests: (id, cb) => dispatch(getPatientLabTests(id, cb)),
// });

export default LabList;
// compose(
//   withRouter,
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )
// )();
