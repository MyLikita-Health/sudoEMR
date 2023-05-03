import React, { useCallback, useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useQuery } from "../../../hooks";
import { apiURL } from "../../../redux/actions";
import { _postApi } from "../../../redux/actions/api";
import CustomModal from "../../comp/components/CustomModal";
import CollapsibleCard from "../../CollapsibleCard.js";
import NewFluidChartForm from "./NewFluidChartForm";

function FluidChart({ isOpen, toggle }) {
  const query = useQuery();
  const patient_id = query.get("patient_id");
  const [modal, setModal] = useState(false);
  const [getFluid, setGetFluid] = useState([]);
  const toggleVital = () => setModal((p) => !p);

  const _grtFluids = useCallback(() => {
    _postApi(
      `${apiURL()}/fluid-chart-setup/new?query_type=select`,
      { patient_id },
      (data) => {
        setGetFluid(data.results);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [patient_id]);

  useEffect(() => {
    _grtFluids();
  }, [_grtFluids]);

  return (
    <CollapsibleCard
      headerText="Fluid Chart"
      defaultOpen={isOpen}
      toggle={toggle}
      style={{ height: "40vh", overflow: "scroll" }}
    >
      <div className="d-flex flex-direction-row justify-content-end">
        <Button size="sm" color="primary" className="m-1" onClick={toggleVital}>
          Create New
        </Button>
      </div>
      {/* {JSON.stringify(getFluid)} */}
      <CustomModal isOpen={modal} toggle={toggleVital}>
        <NewFluidChartForm toggleVital={toggleVital} _grtFluids={_grtFluids} />
      </CustomModal>

      {getFluid &&
        getFluid.length &&
        getFluid.map((n, i) => (
          <div
            key={i}
            className="m-0 p-1"
            style={{ borderBottom: "1px solid gray" }}
          >
            <p className="mb-0 pb-0">Input</p>
            <small>
              <b>Volume (mil):</b> {n.input_volume}
              <b> Route:</b> {n.input_route}
              <b> Type:</b> {n.input_type}
            </small>
            <p className="mb-0 pb-0"> Output</p>
            <small>
              <b> Volume (mil):</b> {n.output_volume}
              <b> Route:</b> {n.output_route}
              <b> Type:</b> {n.output_type}
            </small>
          </div>
        ))}
    </CollapsibleCard>
  );
}

export default FluidChart;
