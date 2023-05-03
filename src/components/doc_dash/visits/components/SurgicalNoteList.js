import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useSelector } from "react-redux";
import CollapsibleCard from "../../../CollapsibleCard.js";
import { _fetchApi2 } from "../../../../redux/actions/api";
import { apiURL } from "../../../../redux/actions";
import { surgical_note } from "./helper";
import { Table } from "reactstrap";
import moment from "moment";

export default function SurgicalNoteList({
  isOpen,
  _toggle,
  type = "by_req_id",
  height = "40vh",
}) {
  const { patientId } = useParams();
  const location = useLocation();
  let doctorCond = location.pathname.includes("/me/doctor/visits");
  const [data, setData] = useState([]);

  useEffect(() => {
    surgical_note(
      { patient_id: patientId },
      (d) => {
        if (d && d.results) {
          setData(d.results);
        }
      },
      "select_surgical_note"
    );
  }, [patientId]);
  return (
    <div>
      <CollapsibleCard
        defaultOpen={doctorCond ? true : isOpen}
        headerText="Surgical Consents"
        body="p-0"
        style={{ height, overflow: "scroll" }}
        toggle={_toggle}
      >
        {/* {JSON.stringify({ data, patientId })} */}
        <Table bordered striped size="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Relative</th>
              <th>Witness by</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{moment(item.created_at).format("DD/MM/YYYY hh:mm")}</td>
                <td>{item.relative}</td>
                <td>{item.witness_by}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CollapsibleCard>
    </div>
  );
}
