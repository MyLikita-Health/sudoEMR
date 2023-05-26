import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaFileMedical, FaCalendar } from "react-icons/fa";
import { iconClass } from "../appointments/NewAppointment2";
import { useHistory } from "react-router";

import { getPatientVisits } from "../actions/visitsActions";
import { Card, CardText } from "reactstrap";
import moment from "moment";
import { FiChevronRight } from "react-icons/fi";
import Loading from "../../comp/components/Loading";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import TextWithNewLine from "../../comp/components/TextWithNewline";

const DiagnosisList = ({ patient }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const getVisits = useCallback(() => {
    setLoading(true);
    dispatch(getPatientVisits(patient.patientHospitalId, setLoading(false)));
  }, [dispatch, patient.patientHospitalId]);

  useEffect(() => {
    getVisits();
  }, [getVisits]);

  const patientVisits = useSelector(
    (state) => state.individualDoc.patientVisits
  );

  return (
    <>
      {/* {JSON.stringify(patient)} */}
      <div className="d-flex justify-content-end mb-1 mt-1">
        <button
          className={`btn btn-outline-dark ${iconClass}`}
          onClick={() =>
            history.push(
              `/me/doctors/visits/new-summary/${patient.patientHospitalId}`
            )
          }
        >
          <FaFileMedical size={20} className="mr-1" />
          Record New Visit
        </button>
      </div>
      <div className="mt-2">
        {loading && <Loading />}
        {patientVisits.map((item, index) => (
          <Card
            key={index}
            body
            className="p-2 mt-2"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
            onClick={() => {
              history.push(`/me/doctors/visits/view/${item._id}`);
            }}
          >
            <span>
              <CardText className={iconClass}>
                <FaCalendar size={20} className="mr-2" />
                {moment(item.createdAt).calendar()}
              </CardText>
              <CardText>
                Complaints:{" "}
                <TextWithNewLine text={item.presenting_complaints} />
              </CardText>
            </span>
            <span>
              <FiChevronRight />
            </span>
          </Card>
        ))}
      </div>

      {!patientVisits.length && (
        <p className="alert alert-primary offset-sm-3 col-sm-6 offset-md-3 col-md-6 mt-3">
          No past visits found for this patient, click Record New Visit to get
          started
        </p>
      )}
    </>
  );
};

export default DiagnosisList;
