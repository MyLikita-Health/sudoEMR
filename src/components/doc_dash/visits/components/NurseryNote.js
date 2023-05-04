import React, { useState, useCallback, useEffect } from "react";
import {  useParams } from "react-router";
import { Button } from "reactstrap";
import { useQuery } from "../../../../hooks";
import CustomModal from "../../../comp/components/CustomModal";
import CollapsibleCard from "../../../CollapsibleCard.js";
import NurseryNoteForm from "./NurseryNoteForm";
import { apiURL } from "../../../../redux/actions";
import { _postApi } from "../../../../redux/actions/api";
import { useSelector } from "react-redux";
// import moment from "moment";

export default function NurseryNote({ height = "30vh", isOpen, toggle }) {
  const query = useQuery();
  const { patientId } = useParams();
  const _patientId = query.get("patient_id");
  // const allocation_id = query.get("allocation_id");
  // const location = useLocation();
  const [modal, setModal] = useState(false);
  const toggleNursery = () => setModal((p) => !p);
  const [data, setData] = useState([]);
  let patient_id = patientId ? patientId : _patientId;
  const auth = useSelector((state) => state.auth.user);
  const getData = useCallback(() => {
    _postApi(
      `${apiURL()}/nursing-notes-setup/new?query_type=select`,
      { patient_id: patient_id, facilityId: auth.facilityId },
      (data) => {
        setData(data.results);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [patient_id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <CollapsibleCard
        headerText="Nursing Note"
        defaultOpen={true}
        body="p-1"
        style={{ height, overflow: "scroll" }}
        toggle={toggle}
      >
        <div className="d-flex flex-direction-row justify-content-end">
          <Button
            size="sm"
            color="primary"
            className="m-1"
            onClick={toggleNursery}
          >
            Create New
          </Button>
        </div>
        {/* {JSON.stringify(data)} */}
        {data &&
          data.map((i) => (
            <>
              <p className="p-0 m-0">{i.report}</p>
              <small>
                Date:{" "}
                <span className="text-muted">
                  {i.created_at.substr(0, 19).replace("T", " -- Time:")}
                </span>
              </small>
            </>
          ))}
        <CustomModal isOpen={modal} toggle={toggleNursery}>
          <NurseryNoteForm toggleNursery={toggleNursery} getData={getData} />
        </CustomModal>
      </CollapsibleCard>
    </div>
  );
}
