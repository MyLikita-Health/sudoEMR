import React from "react";
import BackButton from "../../../comp/components/BackButton";
import { useState } from "react";
import useQuery from "../../../../hooks/useQuery";
import CustomCKEditor from "../../../comp/components/ckeditor/CustomCKEditor";
import { Button, Card, Col, Row } from "reactstrap";
import TextInput from "../../../comp/components/TextInput";
import RadioGroup from "../../../comp/components/RadioGroup";
import moment from "moment";
import { surgical_note } from "./helper";
import CustomButton from "../../../comp/components/CustomButton";
import { useSelector } from "react-redux";
import { _customNotify } from "../../../utils/helpers";
import { useEffect } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useLocation, useHistory } from "react-router-dom";

export default function SurgicalNote() {
  const query = useQuery();
  const patient_id = query.get("patient_id");
  const patient_name = query.get("patient_name");
  const _today = moment().format("YYYY-MM-DD hh:mm:ss");
  const location = useLocation();
  const history = useHistory();
  const adminRoute = location.pathname.includes("/me/admin");
  const user = useSelector((i) => i.auth.user.username);
  const [form, setForm] = useState({
    template: "",
    agreed: "No",
    patient_name,
    patient_id,
    created_by: user,
    created_at: _today,
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const toggleEdit = () => setEditing(!editing);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleFormChange = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
  };
  const handleSubmitSurgical = (
    q,
    text = "Surgical Note Created Successfully"
  ) => {
    setLoading(true);
    surgical_note(
      form,
      () => {
        setLoading(false);
        _customNotify(text);
        history.goBack();
      },
      q
    );
  };

  useEffect(() => {
    surgical_note(
      {},
      (data) => {
        if(data && data.results && data.results.length){
          setForm((p) => ({ ...p, template: data.results[0].template }));
        }
      },
      "select"
    );
  }, [form.template]);

  return (
    <div>
      <BackButton />
      <Row>
        {!adminRoute && (
          <Col md={4}>
            <Card body>
              {/* {JSON.stringify(form.patient_name)} */}
              <h4 className="text-center">SURGICAL CONSENT</h4>
              <p className="text-right">
                Date: {moment().format("DD/MM/YYYY")}
              </p>
              <TextInput
                label="Patient's Name"
                onChange={handleChange}
                value={form.patient_name}
                name="patient_name"
                // disabled={true}
                // placeholder="Enter the invoice number"
              />
              <TextInput
                label="Name (Patient's husband/wife/child/relatives)"
                onChange={handleChange}
                value={form.relative}
                name="relative"
                // placeholder="Enter the invoice number"
              />
              <RadioGroup
                container="mt-2"
                name="agreed"
                label="I fully understood the above document for which (I/we) agreed and click yes"
                options={[
                  { label: "Yes", name: "Yes" },
                  { label: "No", name: "No" },
                ]}
                value={form.agreed}
                onChange={(name, value) =>
                  setForm((p) => ({ ...p, agreed: value }))
                }
              />
              {form.agreed === "Yes" && (
                <TextInput
                  label="Witness by me (Full Name)"
                  onChange={handleChange}
                  value={form.witness_by}
                  name="witness_by"
                  // placeholder="Enter the invoice number"
                />
              )}
              <center>
                <CustomButton
                  className="px-5 mt-2"
                  color="primary"
                  loading={loading}
                  onClick={() => handleSubmitSurgical("insert_surgical_note")}
                >
                  Submit
                </CustomButton>
              </center>
            </Card>
          </Col>
        )}
        <Col md={adminRoute ? 12 : 8}>
          <Card>
            {adminRoute && (
              <div className="text-right">
                <Button
                  color="primary"
                  className="px-4 m-1"
                  onClick={toggleEdit}
                >
                  {" "}
                  <AiFillSafetyCertificate /> {editing ? "View" : "Edit"}
                </Button>
              </div>
            )}
            {!editing ? (
              <div
                className="p-3"
                dangerouslySetInnerHTML={{
                  __html: form.template,
                }}
              ></div>
            ) : (
              <CustomCKEditor
                onChange={(e) => handleFormChange("template", e)}
                data={form.template}
                // mode={editing}
                // initData={<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>}
              />
            )}
            {editing && (
              <center>
                <CustomButton
                  className="px-5 mt-2"
                  color="primary"
                  loading={loading}
                  onClick={() =>
                    handleSubmitSurgical(
                      "insert",
                      "Surgical Note Updated Successfully"
                    )
                  }
                >
                  Update
                </CustomButton>
              </center>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
