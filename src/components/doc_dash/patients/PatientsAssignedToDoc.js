import React, { useState, useEffect, useCallback } from "react";
import { Alert, Badge } from "reactstrap";
import SearchBar from "../../record/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import {
  getAssignedToDoc,
  getWaitingList,
} from "../../record/actions/bed-allocation";
import Loading from "../../comp/components/Loading";
// import moment from 'moment'
// import { FaClock } from 'react-icons/fa'
import { useHistory } from "react-router";
import { SET_PATIENT_FORM_MODE, SET_SELECTED_PATIENT } from "../types";
import { SET_CURRENT_DOCTOR_CONSULTATION_PATIENT } from "../../../redux/actions/types";
// import CollapsibleCard from "../../CollapsibleCard";
// import { useQuery } from '../../../hooks'
import CustomTable from "../../comp/components/CustomTable";
import CustomButton from "../../comp/components/Button";
import { useQuery } from "../../../hooks";
import CollapsibleCard from "../../CollapsibleCard.js";

function PatientsAssignedToDoc() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const section = query.get("section");

  const patientsAssignedToDoc = useSelector(
    (state) => state.diagnosis.patientAssignedToDoc
  );
  const waitingList = useSelector((state) => state.diagnosis.waitingList);
  const user = useSelector((state) => state.auth.user);

  const loading = useSelector(
    (state) => state.diagnosis.gettingPatientAssignedToDoc
  );

  const isGeneralDoctor = user.speciality === "General";

  let listToDisplay = isGeneralDoctor ? waitingList : patientsAssignedToDoc;

  const getList = useCallback(() => {
    if (isGeneralDoctor) {
      dispatch(getWaitingList());
    } else {
      dispatch(getAssignedToDoc());
    }
  }, [isGeneralDoctor]);

  useEffect(() => {
    getList();
    const refresh = setInterval(() => {
      getList();
    }, 20000);

    return () => {
      clearInterval(refresh);
    };
  }, [getList]);

  const fields = [
    {
      title: "SN",
      component: (item, i) => i + 1,
    },
    {
      title: "Patient",
      component: (item) => (
        <span>
          {item.name} ({item.id})
        </span>
      ),
    },
    {
      title: "Action",
      component: (item) => (
        <span className="d-flex flex-direction-row">
          <CustomButton
            size="sm"
            color="info"
            className="mr-1"
            onClick={() => {
              history.push(
                `/me/doctors/visit-preview/${item.id}?page_type=preview&visit_id=&patient_id=${item.id}&allocation_id=${item.allocation_id}&page_type=preview&section=disabled&patientType=${section}`
              );
            }}
          >
            History
          </CustomButton>
          <CustomButton
            size="sm"
            color="success"
            onClick={() => {
              dispatch({
                type: SET_CURRENT_DOCTOR_CONSULTATION_PATIENT,
                payload: item,
              });
              // history.push(`/me/doctors/patients/view/${item.patientId}/diagnoses`)
              history.push(
                `/me/doctors/visits/new-summary/${item.id}?consultation_type=assignment&assignment_id=${item.id}&section=disabled&patientType=${section}`
              );
              dispatch({ type: SET_SELECTED_PATIENT, payload: item });
              dispatch({ type: SET_PATIENT_FORM_MODE, payload: "VIEW" });
            }}
          >
            Start
          </CustomButton>
        </span>
      ),
    },
  ];

  const count = listToDisplay.length;

  return (
    <CollapsibleCard
      defaultOpen
      headerText={
        <>
          {isGeneralDoctor ? "Waiting List" : "Assigned Patients"}
          {count ? (
            <Badge color="warning" className="ml-1">
              {count}
            </Badge>
          ) : null}
        </>
      }
      body="p-1"
      style={{ height: "80vh", overflow: "scroll" }}
    >
      <SearchBar
        placeholder="Search by patient..."
        filterText={searchTerm}
        onFilterTextChange={(searchTerm) => setSearchTerm(searchTerm)}
      />
      {/* {JSON.stringify(user)} */}

      {loading && <Loading />}

      {/* {JSON.stringify(listToDisplay)} */}
      <CustomTable bordered size="sm" data={listToDisplay} fields={fields} />
      {/* {listToDisplay.map((item, index) => (
        <ListItem key={index} item={item} />
      ))} */}

      {!listToDisplay.length && (
        <Alert className="text-center">
          {isGeneralDoctor
            ? "No patient on waiting list at this moment."
            : "No patient is assigned to you yet."}
        </Alert>
      )}
    </CollapsibleCard>
  );
}

// function ListItem({ item }) {
//   const history = useHistory()
//   const dispatch = useDispatch()
//   const query = useQuery()
//   const section = query.get('section')
//   return (
//     <Card
//       className="p-1 border border-secondary mb-1 bg-default"
//       style={{ cursor: 'pointer' }}
//       onClick={() => {
//         dispatch({
//           type: SET_CURRENT_DOCTOR_CONSULTATION_PATIENT,
//           payload: item,
//         })
//         // history.push(`/me/doctors/patients/view/${item.patientId}/diagnoses`)
//         history.push(
//           `/me/doctors/visits/new-summary/${item.id}?consultation_type=assignment&assignment_id=${item.id}&section=disabled`,
//         )
//         dispatch({ type: SET_SELECTED_PATIENT, payload: item })
//         dispatch({ type: SET_PATIENT_FORM_MODE, payload: 'VIEW' })
//       }}
//     >
//       <span>
//         {item.name} ({item.id})
//       </span>
//       <span className="small text-right">
//         <FaClock /> Added {moment(item.time_assigned).fromNow()}
//       </span>
//     </Card>
//   )
// }

export default PatientsAssignedToDoc;
