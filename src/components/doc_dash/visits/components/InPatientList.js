import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import Badge from "reactstrap/lib/Badge";
import { useQuery } from "../../../../hooks";
import { getInPatients } from "../../../../redux/actions/records";
import CustomButton from "../../../comp/components/Button";
import CustomTable from "../../../comp/components/CustomTable";
import CollapsibleCard from "../../../CollapsibleCard.js";
import SearchBar from "../../../record/SearchBar";
// import { getPatientVisits } from "../../actions/visitsActions";

const previousVisit = "previous-visit";
const inPatients = "in-patients";

function InPatientList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();
  const section = query.get("section");
  const isNursingModule = location.pathname.includes("nurse");
  const list = useSelector((state) => state.records.inPatientsList);
  const patientVisits = useSelector(
    (state) => state.individualDoc.patientVisits
  );
  const [view, setView] = useState(inPatients);
  // const [selectedPatient, setSelectedPatient] = useState({})

  // const getVisits = (p) => {
  //   // setLoading(true)
  //   setView(previousVisit);
  //   // setSelectedPatient(p)
  //   dispatch(getPatientVisits(p.patient_id));
  // };

  const fields = [
    {
      title: "Patient ID",
      custom: true,
      component: (item) => (
        <span>
          {item.patient_name} ({item.patient_id}){/* {JSON.stringify(item)} */}
        </span>
      ),
    },
    {
      title: "Room",
      value: "name",
      // custom: true,
      // component: (item) => (
      //   <span>
      //     {item.patient_name} ({item.patient_id})
      //     {/* {JSON.stringify(item)} */}
      //   </span>
      // ),
    },
    {
      title: "Action",
      custom: true,
      component: (item) => (
        <div className="">
          <CustomButton
            size="sm"
            color="info"
            className="mb-1"
            onClick={() => {
              // getVisits(item)
              if (isNursingModule) {
                // history.push(
                //   `/me/nurse/nursing-requests?patient_id=${
                //     item.patient_id
                //   }&allocation_id=${item.allocation_id}&page_type=preview`,
                // );
                history.push(
                  `/me/nurse/nursing-requests/${item.patient_id}?page_type=preview&patient_id=${item.patient_id}&allocation_id=${item.allocation_id}&page_type=preview&section=disabled&patientType=${section}`
                );
              } else {
                // history.push(
                //   `/me/doctor/visits/new-summary?patient_id=${
                //     item.patient_id
                //   }&allocation_id=${item.allocation_id}&visit_id=`,
                // );
                history.push(
                  // `/me/doctor/visits/new-summary/${item.patient_id}?page_type=preview&visit_id=&patient_id=${item.patient_id}&allocation_id=${item.allocation_id}&page_type=preview&section=disabled`,
                  `/me/doctor/visit-preview/${item.patient_id}?page_type=preview&visit_id=&patient_id=${item.patient_id}&allocation_id=${item.allocation_id}&page_type=preview&section=disabled&patientType=${section}`
                );
              }
            }}
          >
            View Records
          </CustomButton>
          {/* {isNursingModule ? null : (
            <CustomButton
              size="sm"
              color="success"
              onClick={() =>
                history.push(
                  `/me/doctor/visits/new-summary/${item.patient_id}?section=disabled`,
                )
              }
            >
              Start Review
            </CustomButton>
          )} */}
        </div>
      ),
    },
  ];

  // , [dispatch, patient.patientHospitalId])

  useEffect(() => {
    dispatch(getInPatients());

    const refreshList = setInterval(() => {
      dispatch(getInPatients());
    }, 20000);

    return () => {
      clearInterval(refreshList);
    };
  }, [dispatch]);

  let count = list.length;

  return (
    <CollapsibleCard
      headerText={
        <>In-Patients {count ? <Badge color="warning">{count}</Badge> : null}</>
      }
      body="p-1"
      defaultOpen
      // style={{ height: '100vh', overflow: 'scroll' }}
    >
      {/* {JSON.stringify(list)} */}
      {view === previousVisit ? (
        <PreviousVisit
          visits={patientVisits}
          close={() => setView(inPatients)}
        />
      ) : (
        <div
          style={{
            height: isNursingModule ? "75vh" : "80vh",
            overflow: "scroll",
          }}
        >
          <SearchBar
            container="m-1"
            // filterText={filterText}
            // onFilterTextChange={setFilterText}
          />
          <CustomTable size="sm" hover fields={fields} data={list} />
        </div>
      )}
    </CollapsibleCard>
  );
}

const PreviousVisit = ({ visits, close = (f) => f }) => {
  const history = useHistory();
  const query = useQuery();
  const section = query.get("section");
  return (
    <div>
      {/* {JSON.stringify(visits)} */}
      <div className="d-flex flex-direction justify-content-end">
        <CustomButton size="sm" className="m-1" color="danger" onClick={close}>
          Close <FaTimes />
        </CustomButton>
      </div>
      <CustomTable
        size="sm"
        fields={[
          {
            title: "Date",
            custom: true,
            component: (i) => moment(i.createdAt).format("DD/MM/YYYY HH:mm"),
          },
          {
            title: "Action",
            custom: true,
            component: (it) => (
              <CustomButton
                size="sm"
                onClick={(i) =>
                  history.push(
                    `/me/doctor/visits/new-summary/${it.patient_id}?page_type=preview&visit_id=${it._id}&section=${section}`
                  )
                }
              >
                Preview
              </CustomButton>
            ),
          },
        ]}
        data={visits}
      />
    </div>
  );
};

export default InPatientList;
