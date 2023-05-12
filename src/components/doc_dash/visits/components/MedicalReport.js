import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useQuery } from "../../../../hooks";
import { apiURL } from "../../../../redux/actions";
import { _postApi } from "../../../../redux/actions/api";
import CustomButton from "../../../comp/components/Button";
import PrintWrapper from "../../../comp/components/print/PrintWrapper";
// import BackButton from "../../../landing/BackButton";
import { today, _customNotify } from "../../../utils/helpers";
import BackButton from "../../../BackButton";

export default function MedicalReport() {
  const query = useQuery();
  const patient = query.get("patient_details");
  let patientInfo = JSON.parse(patient);
  const { facilityId, id } = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const _form = {
    date_of_admission: today,
    procedure_date: today,
    date_of_dischange: today,
    special_instruction: "",
    other_information: "",
  };
  const [form, setForm] = useState(_form);

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const printReport = () => {
    window.frames[
      "print_frame"
    ].document.body.innerHTML = document.getElementById(
      "medical-report"
    ).innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
    // window.frames["print_frame"].window.reload(false);
    console.log(...patientInfo);
  };
  const handleSubmit = () => {
    let obj = {
      user_id: id,
      admit_date: form.date_of_admission,
      proceduce_date: form.procedure_date,
      discharge_date: form.date_of_dischange,
      special_instrustion: form.special_instruction,
      other_info: form.other_information,
      facilityId,
    };
    setLoading(true);
    _postApi(
      `${apiURL()}/all/medical-report/new`,
      obj,
      (data) => {
        setLoading(false);
        _customNotify("Data update successfully");
        printReport();
      },
      (err) => {
        // _warningNotify("error");
        // console.log(err);
        setLoading(false);
      }
    );
  };

  return (
    <div>
      {/* {JSON.stringify(patientInfo)} */}
      <BackButton />
      <Container className="mt-3" id="medical-report">
        <Card>
          <CardHeader>Create medical report for {patientInfo.name}</CardHeader>
          <CardBody>
            <PrintWrapper title="Pharmacy Prescription">
              <div style={{ marginRight: "auto", marginTop: "2%" }}>
                <div>
                  Full Name: <b>{patientInfo.name}</b>
                </div>
                <div>
                  Date of birth: <b>{patientInfo.dob}</b>
                </div>
                <div>
                  Gender: <b> {patientInfo.gender}</b>
                </div>
                <div>
                  Phone Number: <b> {patientInfo.phone}</b>
                </div>
                <div>
                  Email: <b> {patientInfo.email}</b>
                </div>
              </div>
              <div>
                <Row style={{ marginTop: "2%" }}>
                  <Col md={4}>
                    <Label>
                      {" "}
                      <b> Date Admission</b>
                    </Label>
                    <Input
                      type="date"
                      name="date_of_admission"
                      value={form.date_of_admission}
                      onChange={handleChange}
                      className="no-print"
                    />
                    <div className="print-only">{form.date_of_admission}</div>
                  </Col>
                  <Col md={4}>
                    <Label>
                      {" "}
                      <b> Procedure Date </b>
                    </Label>
                    <Input
                      type="date"
                      name="procedure_date"
                      value={form.procedure_date}
                      onChange={handleChange}
                      className="no-print"
                    />
                    <div className="print-only">{form.procedure_date}</div>
                  </Col>
                  <Col md={4}>
                    <Label>
                      {" "}
                      <b> Date Of Dischange </b>
                    </Label>
                    <Input
                      type="date"
                      name="date_of_dischange"
                      value={form.date_of_dischange}
                      onChange={handleChange}
                      className="no-print"
                    />
                    <div className="print-only">{form.date_of_dischange}</div>
                  </Col>
                  <Col md={6}>
                    <Label>
                      <b> Special Instruction</b>
                    </Label>
                    <Input
                      type="textarea"
                      name="special_instruction"
                      value={form.special_instruction}
                      onChange={handleChange}
                      className="no-print"
                    />
                    <div className="print-only">{form.special_instruction}</div>
                  </Col>
                  <Col md={6}>
                    <Label>
                      {" "}
                      <b> Medical Note </b>
                    </Label>
                    <Input
                      type="textarea"
                      name="other_information"
                      value={form.other_information}
                      onChange={handleChange}
                      className="no-print"
                    />
                    <div className="print-only">{form.other_information}</div>
                  </Col>
                </Row>
              </div>
              <center>
                <CustomButton
                  loading={loading}
                  onClick={handleSubmit}
                  className="mt-3 no-print"
                >
                  Submit
                </CustomButton>
              </center>
            </PrintWrapper>
          </CardBody>
        </Card>
      </Container>
      <iframe
        title="Medical Report"
        name="print_frame"
        width="0"
        height="0"
        src="about:blank"
        // style={styles}
      />
    </div>
  );
}
