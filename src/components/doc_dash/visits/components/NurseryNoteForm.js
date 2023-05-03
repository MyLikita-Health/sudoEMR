import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "../../../../hooks";
import { apiURL } from "../../../../redux/actions";
import { _postApi } from "../../../../redux/actions/api";
import CustomButton from "../../../comp/components/Button";
import { TextArea } from "../../../comp/components/InputGroup";
import Loading from "../../../comp/components/Loading";
import {
  checkEmpty,
  _customNotify,
  _warningNotify,
} from "../../../utils/helpers";
import moment from "moment";
import { useParams } from "react-router";
export default function NurseryReportForm({
  toggleNursery,
  getData = (f) => f,
}) {
  const query = useQuery();
  const { patientId } = useParams();
  const _patientId = query.get("patient_id");
  let patient_id = patientId ? patientId : _patientId;
  const [form, setForm] = useState({ report: "" });
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth.user);

  const saveNursery = (callback = (f) => f) => {
    setSubmitting(true);

    let data = {
      report: form.report,
      patient_id: patient_id,
      created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      created_by: auth.username,
      facilityId: auth.facilityId,
    };

    _postApi(
      `${apiURL()}/nursing-notes-setup/new?query_type=insert`,
      data,
      () => {
        setSubmitting(false);
        _customNotify("Nursery Note saved!");
        callback();
        getData();
        // _grtNurserys()
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

    saveNursery(() => {
      // history.push(`${NURSING_ROUTE_ROOT}/vital-signs`);
    });
    toggleNursery();
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const formIsValid = !checkEmpty(form);
  return (
    <div>
      {loading && <Loading />}
      {/* {JSON.stringify(form)} */}
      <TextArea
        label="Reports"
        name="report"
        value={form.report}
        onChange={handleChange}
      />
      <center>
        <CustomButton
          disabled={!formIsValid}
          loading={submitting}
          // type="submit"
          color="success"
          className="px-4 mt-2"
          onClick={submitAndClose}
        >
          Submit
        </CustomButton>
      </center>
    </div>
  );
}
