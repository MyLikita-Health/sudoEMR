import React from "react";
import CustomButton from "../../../comp/components/Button";
import CustomTable from "../../../comp/components/CustomTable";
import CollapsibleCard from "../../../CollapsibleCard.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPatientList } from "../../actions/patientsActions";
import { useHistory, useLocation } from "react-router";
import SearchBar from "../../../record/SearchBar";
import { useState } from "react";
import { useQuery } from "../../../../hooks";
// import { getInPatients } from '../../../../redux/actions/records'

function PatientList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();
  const section = query.get("section");
  const isNursingModule = location.pathname.includes("nurse");

  const fields = [
    {
      title: "Name",
      custom: true,
      component: (item) => (
        <span>
          {item.name} ({item.id})
        </span>
      ),
    },
    {
      title: "Action",
      custom: true,
      component: (item) => (
        <>
          <CustomButton
            size="sm"
            color="info"
            className="mr-1 mb-1"
            onClick={() => {
              // getVisits(item)
              if (isNursingModule) {
                history.push(
                  `/me/nurse/nursing-requests/${item.id}?page_type=preview&section=disabled&patientType=${section}`
                );
              } else {
                history.push(
                  `/me/doctors/visit-preview/${item.id}?page_type=preview&visit_id=&section=disabled&patientType=${section}`
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
                  `/me/doctors/visits/new-summary/${item.id}?section=disabled`,
                )
              }
            >
              Start Review
            </CustomButton>
          )} */}
        </>
      ),
    },
  ];
  const list = useSelector((state) => state.individualDoc.patients);
  //   const inPatientsList = useSelector((state) => state.records.inPatientsList)

  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    // dispatch(getInPatients())
    dispatch(getPatientList());

    const refreshList = setInterval(() => {
      dispatch(getPatientList());
    }, 20000);

    return () => {
      clearInterval(refreshList);
    };
  }, [dispatch]);

  //   let combinedList = [
  //     ...inPatientsList.map((i) => ({
  //       ...i,
  //       type: 'in-patient',
  //       name: i.patient_name,
  //       id: i.patient_id,
  //     })),
  //     ...list,
  //   ]

  const rows = [];
  list.forEach((p) => {
    if (
      p.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 &&
      p.id.indexOf(filterText) === -1
    )
      return;
    else rows.push(p);
  });

  return (
    <CollapsibleCard
      headerText="Out-Patients"
      defaultOpen
      body="p-1"
      // style={{ height: '80vh', overflow: 'scroll' }}
    >
      <SearchBar
        container="m-1"
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <div style={{ maxHeight: "76vh", overflow: "scroll" }}>
        <CustomTable
          size="sm"
          fields={fields}
          data={rows}
          rowClassName={(i) =>
            i.type === "in-patient" ? "bg-info text-white" : ""
          }
        />
      </div>
    </CollapsibleCard>
  );
}

export default PatientList;
