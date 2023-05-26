import React from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useSelector } from "react-redux";
import CollapsibleCard from "../../../CollapsibleCard.js";
import { useCallback } from "react";
import { _fetchApi2 } from "../../../../redux/actions/api";
import { apiURL } from "../../../../redux/actions";
import { useState } from "react";
// import { splitTestsByView } from "../../../lab/NewLaboratory/analysis/helpers";
// import LabView from "../../../lab/NewLaboratory/analysis/LabView";

function LabHistory({
  isOpen,
  _toggle,
  type = "by_req_id",
  reqId,
  queryDate,
  height = "40vh",
}) {
  const [patientLabs, setPatientLabs] = useState([]);
  const { patientId } = useParams();
  const facilityId = useSelector((state) => state.auth.user.facilityId);
  const location = useLocation();
  let doctorCond = location.pathname.includes("/me/doctors/visits");
  //   const [tabledLabs, setTabledLabs] = useState([])
  //   const [tabledLabsList, setTabledLabsList] = useState([])
  //   const [inputLabs, setInputLabs] = useState([])

  //   const [byDate, setByDate] = useState({})

  const getPatientLabHistory = useCallback(() => {
    //   setLoading(true);
    _fetchApi2(
      `${apiURL()}/lab/lab-results/uncompleted/${patientId}/${facilityId}?query_type=${type}&request_id=${reqId}&query_date=${queryDate}`,
      (data) => {
        if (data.success) {
          let groupedByDate = {};
          let groupedFinal = {};
          data.results.forEach((test) => {
            if (Object.keys(groupedByDate).includes(test.requested_date)) {
              groupedByDate[test.requested_date] = [
                ...groupedByDate[test.requested_date],
                test,
              ];
            } else {
              groupedByDate[test.requested_date] = [test];
            }
          });

          // Object.keys(groupedByDate).forEach((date) => {
          //   groupedFinal[date] = splitTestsByView(groupedByDate[date]);
          // });
          // console.log(groupedFinal,'=========-==========0')

          //   let _data = splitTestsByView(data.results)
          // callback(_data, data.results);
          setPatientLabs(groupedFinal);
          //   setListLoading(false)

          //   setTabledLabs(_data._tabledLab)
          //   setTabledLabsList(_data._tabledLabList)
          //   setInputLabs(_data.inputList)
          //   setMicrobiologyLabs(_data.microbiology)
          //   setHOWidalLabs(_data._hoWidalLabs)
          //   setHOWidalLabsList(_data._hoWidalLabsList)
          //   setMacroscopyLabs(_data.macroscopyList)
          //   setTabledWithResultLabs(_data._tabledWithResultLab)
          //   setTabledWithResultLabsList(_data._tabledWithResultLabList)
        }
      },
      (err) => {
        //   error(err);
        console.log(err);
      }
    );
  }, [patientId, facilityId, queryDate]);

  useEffect(() => getPatientLabHistory(), [getPatientLabHistory]);
  return (
    <CollapsibleCard
      defaultOpen={doctorCond ? true : isOpen}
      headerText="Laboratory Results"
      body="p-0"
      style={{ height, overflow: "scroll" }}
      toggle={_toggle}
    >
      {/* {queryDate} */}
      {Object.keys(patientLabs).map((l) => (
        <div
        // className='border border-dark rounded'
        >
          <span className="font-weight-bold">Date: {l}</span>
          {/* <LabView
            inputLabs={patientLabs[l].inputList}
            microbiology={patientLabs[l].microbiology}
            macroscopy={patientLabs[l].macroscopyList}
            tabledLabs={patientLabs[l]._tabledLab}
            tabledLabsList={patientLabs[l]._tabledLabList}
            tabledWithResultLabs={patientLabs[l]._tabledWithResultLab}
            tabledWithResultLabsList={patientLabs[l]._tabledWithResultLabList}
            hoWidalLabs={patientLabs[l]._hoWidalLabs}
            hoWidalLabsList={patientLabs[l]._hoWidalLabs}
            isHistory={false}
            isHospital={false}
            showComments={false}
          /> */}
        </div>
      ))}
    </CollapsibleCard>
  );
}

export default LabHistory;
