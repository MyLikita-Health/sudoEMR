import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useQuery } from "../../../hooks";
import { apiURL } from "../../../redux/actions";
import { _postApi } from "../../../redux/actions/api";
import { getInPatients } from "../../../redux/actions/records";
import CustomButton from "../../comp/components/Button";
import Loading from "../../comp/components/Loading";
import SelectInput from "../../comp/components/SelectInput";
import { checkEmpty, _customNotify, _warningNotify } from "../../utils/helpers";
import { getAllocationInfo } from "../api";

const initialForm = {
  patient_id: "",
  input_volume: "",
  input_route: "",
  input_type: "",
  output_volume: "",
  output_route: "",
  output_type: "",
};

export default function NewFluidChartForm({ history, toggleVital = (f) => f,_grtFluids=f=>f}) {
  const query = useQuery();
  const dispatch = useDispatch();
  const allocation_id = query.get("allocation_id");
  const inPatientsList = useSelector((state) => state.records.inPatientsList);
  const [form, setForm] = useState(initialForm);
  const [allocationInfo, setAllocationInfo] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setNextAlloId] = useState(null);
  const auth = useSelector((state) => state.auth.user);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const _getAllocationInfo = useCallback(() => {
    setLoading(true);
    getAllocationInfo(
      allocation_id,
      (data) => {
        setLoading(false);
        if (data && data.results) {
          let currAllo = data.results[0];
          setAllocationInfo(currAllo);
          let currIdx = inPatientsList.findIndex(
            (i) => i.allocation_id === currAllo.allocation_id
          );
          if (inPatientsList.length) {
            //   console.log(currAllo, currIdx, inPatientsList);
            // let nextAllo = inPatientsList[curr]
            setNextAlloId(
              currIdx === inPatientsList.length - 1
                ? null
                : inPatientsList[currIdx + 1].allocation_id
            );
          }
        }
      },
      (err) => {
        setLoading(false);
        console.error(err);
      }
    );
  }, [allocation_id, inPatientsList.length]);

  useEffect(() => {
    dispatch(getInPatients());
    if (allocation_id) {
      _getAllocationInfo();
    }
  }, [allocation_id, _getAllocationInfo, dispatch]);

  const resetForm = () => setForm(initialForm);
  const formIsValid = !checkEmpty(form);

  const saveFluid = (callback = (f) => f) => {
    setSubmitting(true);

    let data = {
      query_type: "new",
      input_volume: form.input_volume,
      input_route: form.input_route,
      input_type: form.input_type,
      output_volume: form.output_volume,
      output_route: form.output_route,
      output_type: form.output_type,
      patient_id: allocationInfo.patient_id,
      created_at: moment().format("YYYY-MM-DD hh:mm:ss"),
      created_by: auth.username
    };

    _postApi(
      `${apiURL()}/fluid-chart-setup/new?query_type=insert`,
      data,
      () => {
        setSubmitting(false);
        _customNotify("Fluid Chart saved!");
        resetForm();
        callback();
        _grtFluids()
      },
      (err) => {
        setSubmitting(false);
        console.log(err);
        _warningNotify("An error occured!");
      }
    );
  };

  const submitAndClose = (e) => {
    e.preventDefault();

    saveFluid(() => {
      // history.push(`${NURSING_ROUTE_ROOT}/vital-signs`);
    });
    toggleVital();
  };
  return (
    <div>
      {loading && <Loading />}
      <div className="mb-4">
        <h6>
          Patient: {allocationInfo.patient_name} ({allocationInfo.patient_id})
        </h6>
        <h6>
          Room: {allocationInfo.name} ({allocationInfo.class_type})
        </h6>
        <h6>
          Date Admitted:{" "}
          {moment(allocationInfo.allocated).format("DD-MM-YYYY hh:mm a")}
        </h6>
      </div>
{/* {JSON.stringify(auth)} */}
      <Form onSubmit={submitAndClose}>
        <h4>Input</h4>
        <FormGroup row>
          <div className="col-md-4 col-lg-4">
            <Label htmlForm="input_volume">Volume (mil)</Label>
            <Input
              type="text"
              name="input_volume"
              value={form.input_volume}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 col-lg-4">
            <SelectInput
              name="input_route"
              onChange={handleChange}
              label="Route"
              options={["Tube", "Oral", "IV"]}
              value={form.input_route}
              container="col-md-12"
            />
          </div>
          <div className="col-md-4 col-lg-4">
            <Label htmlForm="input_type">Type (What was given)</Label>
            <Input
              type="text"
              name="input_type"
              value={form.input_type}
              onChange={handleChange}
            />
          </div>
        </FormGroup>
        <h4>Output</h4>
        <FormGroup row>
          <div className="col-md-4 col-lg-4">
            <Label htmlForm="output_volume">Volume (mil)</Label>
            <Input
              type="text"
              name="output_volume"
              value={form.output_volume}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 col-lg-4">
            <SelectInput
              name="output_route"
              onChange={handleChange}
              label="Route"
              options={["Urine", "Tube/Vomit", "Fasces"]}
              value={form.output_route}
              container="col-md-12"
            />
          </div>
          <div className="col-md-4 col-lg-4">
            <Label htmlForm="output_type">Type (What is output)</Label>
            <Input
              type="text"
              name="output_type"
              value={form.output_type}
              onChange={handleChange}
            />
          </div>
        </FormGroup>
      </Form>
      <CustomButton
        disabled={!formIsValid}
        loading={submitting}
        // type="submit"
        color="success"
        className="px-4"
        onClick={submitAndClose}
      >
        Submit
      </CustomButton>
    </div>
  );
}
