import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { Alert, Button, Input } from "reactstrap";
import { apiURL } from "../../redux/actions";
import { _fetchApi2, _postApi } from "../../redux/actions/api";
import CustomButton from "../comp/components/Button";
import CustomModal from "../comp/components/CustomModal";
import CustomTable from "../comp/components/CustomTable";
import Loading from "../comp/components/Loading";
// import CollapsibleCard from "../lab/NewLaboratory/CollapsibleCard";
import NewNursingReport from "./nursing-report/NewNursingReport";
import CollapsibleCard from "../CollapsibleCard.js";
// import { NURSING_ROUTE_ROOT } from "./routes";

function NursingReport({ history }) {
  let now = moment(); //now

  const getDiff = (item) => {
    let before = moment(item.created_at);
    return now.diff(before, "hours"); // in hours
  };

  const fields = [
    {
      title: "Date",
      custom: true,
      component: (item) => moment(item.created_at).format("DD/MM/YYYY hh:mm"),
    },
    {
      title: "Report Created by",
      value: "created_by",
    },
    {
      title: "Report",
      custom: true,
      component: (item) => {
        let _report =
          item.report.length > 20
            ? `${item.report.substr(0, 80)}...`
            : item.report;
        return <span>{_report}</span>;
        // return <span>{item.report}</span>;
      },
    },
    {
      title: "Actions",
      custom: true,
      component: (item) => (
        <div className="text-center d-flex">
          {getDiff(item) > 12 ? null : (
            <Button
              className="mr-2"
              color="success"
              outline
              onClick={() => {
                setModalIsOpen(true);
                setSelected(item);
                setEdit(true);
              }}
            >
              <FaEdit />
            </Button>
          )}
          <Button
            color="primary"
            onClick={() => {
              setModalIsOpen(true);
              setSelected(item);
            }}
          >
            <FaEye />
          </Button>
        </div>
      ),
    },
  ];

  //   const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [list, setList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState({});
  // const list = useSelector((state) => state.records.inPatientsList);
  const facilityId = useSelector((state) => state.auth.user.facilityId);

  const [showForm, setShowForm] = useState(false);

  const getNursingReport = () => {
    setLoading(true);
    _fetchApi2(
      `${apiURL()}/nursing-reports?query_type=all&facilityId=${facilityId}`,
      (data) => {
        setLoading(false);
        if (data.results) {
          setList(data.results);
        }
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
  };

  useEffect(() => {
    //   setLoading(true);
    //   dispatch(getInPatients(() => setLoading(false)));
    getNursingReport();
  }, []);

  const handleSubmit = (report) => {
    setSubmitting(true);
    const created_at = moment()
      .utc()
      .format("YYYY-MM-DD hh:mm:ss");
    let obj = { report, query_type: "new", created_at };
    let updateData = { ...selected, query_type: "update" };
    _postApi(
      `${apiURL()}/nursing-reports/new`,
      edit ? updateData : obj,
      () => {
        setSubmitting(false);
        getNursingReport();
        setShowForm(false);
        setEdit(false);
      },
      () => {
        setSubmitting(false);
      }
    );
  };
  const handleChange = ({ target: { name, value } }) => {
    setSelected((p) => ({ ...p, [name]: value }));
  };

  const toggleModal = () => {
    setModalIsOpen((p) => !p);
    setEdit(!edit);
  };
  return (
    <CollapsibleCard
      headerText="Nursing Reports"
      defaultOpen
      style={{ padding: 0, height: "85vh", overflow: "scroll" }}
    >
      {/* <Card>
      <CardHeader className="h5">Nursing Reports</CardHeader>
      <CardBody className=""> */}
      {loading && <Loading />}
      {/* {JSON.stringify(diff)} */}
      {showForm ? (
        <NewNursingReport loading={submitting} handleSubmit={handleSubmit} />
      ) : (
        <Button outline className="m-2" onClick={() => setShowForm(true)}>
          <FaPlus className="mr-1" /> New Nursing Report
        </Button>
      )}
      <CustomModal
        toggle={toggleModal}
        isOpen={modalIsOpen}
        header={`${moment(selected.created_at).format("DD/MM/YYYY HH:mm")} - ${
          selected.created_by
        }`}
        footer={
          <>
            {edit && (
              <CustomButton
                onClick={() => {
                  handleSubmit(selected.report);
                  toggleModal();
                }}
              >
                Update now
              </CustomButton>
            )}
            <CustomButton onClick={toggleModal}>Close</CustomButton>
          </>
        }
      >
        {/* {JSON.stringify(selected)} */}
        {edit ? (
          <Input
            type="textarea"
            value={selected.report}
            name="report"
            style={{ height: "200px" }}
            onChange={handleChange}
          />
        ) : (
          <p>{selected.report}</p>
        )}
      </CustomModal>
      <CustomTable size="sm" bordered hover fields={fields} data={list} />
      {list.length ? null : (
        <Alert className="mx-4 text-center" color="primary">
          Nothing to display at this time, checkback later.
        </Alert>
      )}
      {/* </CardBody>
    </Card> */}
    </CollapsibleCard>
  );
}

export default NursingReport;
