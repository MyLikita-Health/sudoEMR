import moment from "moment";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { FaPrint } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { apiURL } from "../../redux/actions";
import { _fetchApi2 } from "../../redux/actions/api";
import { getUsers } from "../../redux/actions/auth";
import DaterangeSelector from "../comp/components/DaterangeSelector";
import Loading from "../comp/components/Loading";
import PrintWrapper from "../comp/components/print/PrintWrapper";
import SearchBar from "../record/SearchBar";
import { today } from "../utils/helpers";

export default function ConsultationReports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [dataByDoc, setDataByDoc] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [range, setRange] = useState({ from: today, to: today, username: "" });
  const headRef = useRef(null);
  const facilityId = useSelector((state) => state.auth.user.facilityId);
  const users = useSelector((state) => state.auth.users);

  const printPatientList = () => {
    window.frames[
      "print_frame"
    ].document.body.innerHTML = document.getElementById(
      "print-patients-list"
    ).innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
  };
  const handleRangeChange = ({ target: { name, value } }) => {
    setRange((p) => ({ ...p, [name]: value }));
  };
  const getConsultation = useCallback(
    (query_type = "select_all", callback, userId) => {
      setLoading(true);
      let from = moment(range.from).format("YYYY-MM-DD");
      let to = moment(range.to).format("YYYY-MM-DD");
      _fetchApi2(
        `${apiURL()}/all/consultation/new?date_from=${from}&date_to=${to}&userId=${userId}&query_type=${query_type}&facilityId=${facilityId}`,
        (data) => {
          callback(data.results);
          setLoading(false);
        },
        (err) => {
          console.log(err);
          setLoading(false);
        }
      );
    },
    [range, facilityId]
  );

  useEffect(() => {
    getConsultation("select_all", setData, "");
    getConsultation("select_by_doc", setDataByDoc, range.username);
    dispatch(getUsers());
  }, [getConsultation]);

  let newData =
    range.username !== "" && range.username !== undefined ? dataByDoc : data;

  const rows = [];
  if (newData && newData.length) {
    newData.forEach((item, i) => {
      if (
        item.patient_name &&
        item.patient_name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1
      )
        return;

      rows.push(item);
    });
  }
  return (
    <div>
      <Card>
        {/* {JSON.stringify({ dataByDoc })} */}
        <CardHeader className="text-center" tag="h6">
          Patient Encounters
        </CardHeader>
        <CardBody>
          <DaterangeSelector
            from={range.from}
            to={range.to}
            handleChange={handleRangeChange}
          />
          <Row>
            <Col md={8}>
              <SearchBar
                placeholder="Search by patient..."
                filterText={searchTerm}
                onFilterTextChange={(d) => setSearchTerm(d)}
              />
            </Col>
            <Col>
              <Typeahead
                id="username"
                align="justify"
                placeholder="Filter By Doctor Name"
                labelKey={(item) => `${item.firstname} ${item.lastname}`}
                options={users}
                onChange={(val) => {
                  if (val.length) {
                    let selected = val[0];
                    setRange((p) => ({ ...p, username: selected.username }));
                  }
                }}
                ref={headRef}
              />
            </Col>
          </Row>

          <div className="d-flex flex-direction-row justify-content-between mb-1">
            <>
              {loading ? (
                <Loading />
              ) : (
                <span>Total Number of Patients: {newData.length}</span>
              )}
            </>
            <button
              className="btn btn-sm btn-primary px-2"
              onClick={printPatientList}
            >
              <FaPrint className="mr-1" /> Print now
            </button>
          </div>
          <div id="print-patients-list">
            <PrintWrapper title="List of Patients">
              <Table size="sm" bordered hover striped>
                <thead>
                  <tr>
                    <th className="text-center">S/N</th>
                    <th className="text-center">Patient Name</th>
                    <th className="text-center">Doc. Name</th>
                    <th className="text-center">Decision</th>
                    <th className="text-center">Seen At</th>
                    {/* <th className="text-center">Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((item, id) => (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{item.patient_name}</td>
                      <td>{item.userId}</td>
                      <td>{item.decision}</td>
                      <td>
                        {moment(item.created_at).format("YYYY-MM-DD hh:mm")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </PrintWrapper>
          </div>
          <iframe
            title="print-patients-list"
            name="print_frame"
            width="0"
            height="0"
            src="about:blank"
            // style={styles}
          />
        </CardBody>
      </Card>
    </div>
  );
}
