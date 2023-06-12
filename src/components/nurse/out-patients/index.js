import React, { useEffect, useState } from "react";
import { Row, Col, Table, Alert } from "reactstrap";
// import moment from 'moment'
// import CustomTable from '../../comp/components/CustomTable'
import { _fetchApi2, _postApi } from "../../../redux/actions/api";
import { apiURL } from "../../../redux/actions";
import { useSelector } from "react-redux";
import moment from "moment";
import { primaryColor } from "../../utils/constants";
import CollapsibleCard from "../../CollapsibleCard.js";
import CustomButton from "../../comp/components/Button";
import { FaTimes } from "react-icons/fa";

function formatPrescriptionList(list = []) {
  let final = {};
  list.forEach((item) => {
    let exisitingIndex = Object.keys(final).indexOf(item["patient_info"]);

    if (exisitingIndex !== -1) {
      final[item["patient_info"]] = [...final[item["patient_info"]], item];
    } else {
      final[item["patient_info"]] = [item];
    }
  });

  return final;
}

function OutPatient() {
  const facilityId = useSelector((state) => state.auth.user.facilityId);

  const [list, setList] = useState([]);

  const getPrescriptions = () => {
    _fetchApi2(
      `${apiURL()}/prescriptions/patient-prescribed?query_type=out-patient-list&facilityId=${facilityId}`,
      (data) => {
        if (data && data.results) {
          console.log("data");
          console.log(data);
          console.log("data");
          let grouped = formatPrescriptionList(data.results);
          setList(grouped);
        }
      }
    );
  };

  useEffect(() => {
    getPrescriptions();
  }, []);

  const removeItem = (d) => {
    _postApi(
      `${apiURL()}/prescriptions/post-prescribed-drugs?patient_id=${d}&facilityId=${facilityId}&query_type=close outpatient prescription`,
      {},
      () => {
        getPrescriptions();
      }
    );
  };

  return (
    <CollapsibleCard
      headerText="Out-Patients Prescription"
      defaultOpen
      style={{ padding: 0, height: "85vh", overflow: "scroll" }}
    >
      <Row className="m-0">
        {Object.keys(list).map((item, index) => (
          <Col md={4} className="p-1">
            <Table key={index} size="sm" bordered>
              <thead>
                <tr>
                  <th style={{ backgroundColor: primaryColor, color: "#fff" }}>
                    {/* <div className="d-flex flex-direction-row justify-content-between"> */}
                    <div className="row">
                      <div className="col-md-10">
                        <span className="d-block">{item}</span>
                        <span className="d-block">
                          {moment(list[item][0].created_at).format(
                            "DD/MM/YYYY HH:mm"
                          )}
                        </span>
                      </div>

                      <span className="col-md-2">
                        <CustomButton
                          size="sm"
                          className="d-flex flex-direction-row justify-content-center align-items-center bg-warning rounded"
                          onClick={() => removeItem(list[item][0].request_id)}
                        >
                          <FaTimes />
                        </CustomButton>
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {list[item].map((drug, id) => (
                  <tr>
                    <td>
                      {`${id + 1}. ${drug.route} ${drug.drug} ${drug.dosage} ${
                        drug.frequency
                      } for ${drug.duration} ${drug.period}(s) ${
                        drug.additionalInfo ? drug.additionalInfo : ""
                      }`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        ))}
        {/* {JSON.stringify(list)} */}
      </Row>
      {!Object.keys(list).length && (
        <Alert className="text-center m-3">
          Nothing to display right now, check back later
        </Alert>
      )}
    </CollapsibleCard>
  );
}

export default OutPatient;
