import moment from "moment";
import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, Table } from "reactstrap";
import CustomModal from "../../comp/components/CustomModal";
import DaterangeSelector from "../../comp/components/DaterangeSelector";
// import CollapsibleCard from "../../CollapsibleCard";
import Loading from "../../loading";
import { today } from "../../utils/helpers";
import { getConsultationRecord } from "./components/helper";
import VisitPreviewItem from "./components/VisitPreviewItem";
import CollapsibleCard from "../../CollapsibleCard.js";

export default function DoctorEncountersHistory() {
  const user = useSelector((i) => i.auth.user.username);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [range, setRange] = useState({ from: today, to: today });
  const handleRangeChange = ({ target: { name, value } }) => {
    setRange((p) => ({ ...p, [name]: value }));
  };
  const { from, to } = range;

  useEffect(() => {
    setLoading(true);
    getConsultationRecord(
      "history",
      (d) => {
        setData(d.results);
        setLoading(false);
      },
      "",
      (err) => console.log(err),
      user,
      from,
      to
    );

    return () => {
      setData([]);
      setSelected({});
      setLoading(false);
      setModal(false);
    };
  }, [user, from, to]);
  return (
    <CollapsibleCard
      headerText="Doctor Encounters History"
      defaultOpen
      body={"p-0 m-0"}
    >
      <CustomModal
        isOpen={modal}
        toggle={toggle}
        header={`Name: ${selected.full_name} (${selected.patient_id})`}
      >
        <VisitPreviewItem
          key={selected.patient_id}
          visitDetails={selected}
          setSelected={setSelected}
          selected={selected}
        />
        <center>
          <Button
            className="px-5"
            color="primary"
            onClick={() =>
              history.push(
                `/me/doctors/visit-preview/${selected.patient_id}?page_type=preview&visit_id=&section=disabled`
              )
            }
          >
            View More
          </Button>
        </center>
      </CustomModal>
      {loading && <Loading />}
      <DaterangeSelector
        from={from}
        to={to}
        handleChange={handleRangeChange}
        gap={false}
        style={{ margin: 0, padding: 0 }}
      />
      <span className="text-right font-weight-bold">
        Count: {data && data.length}
      </span>
      <Scrollbars style={{ height: "40vh" }}>
        <div style={{ height: "40vh" }} className="m-0 p-0">
          <Table bordered striped size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.full_name}</td>
                    <td>
                      {moment(item.created_at).format("DD/MM/YYYY")}{" "}
                      <span className="ml-1">
                        {" "}
                        <Button
                          size="sm"
                          color="primary"
                          onClick={() => {
                            setSelected(item);
                            toggle();
                          }}
                        >
                          <FaEye />
                        </Button>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </Scrollbars>
    </CollapsibleCard>
  );
}
