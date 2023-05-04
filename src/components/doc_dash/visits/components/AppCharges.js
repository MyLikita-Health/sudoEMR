import React, { useState, useCallback, useEffect, useRef } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
import { _fetchApi2, _postApi } from "../../../../redux/actions/api";
import { apiURL } from "../../../../redux/actions";
// import { CustomTable } from "../../../comp/components";
import DaterangeSelector from "../../../comp/components/DaterangeSelector";
// import CustomPagination from "../../../comp/CustomPagination";
import { useSelector } from "react-redux";
import { formatNumber, today, _customNotify } from "../../../utils/helpers";
import moment from "moment";
// import CustomScrollbar from "../../../comp/components/CustomScrollbar";
import CustomPaginationNew from "../../../comp/CustomPaginationNew";
import Loading from "../../../comp/components/Loading";

export default function AppCharges() {
  const [loading, setLoading] = useState(false);
  const { facilityId, username } = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);
  const [dataByCharges, setDataByCharges] = useState([]);
  const [chargesList, setChargesList] = useState([]);
  const [balance, setBalance] = useState([]);
  const [range, setRange] = useState({
    from: moment(today)
      .subtract("1", "months")
      .format("YYYY-MM-DD"),
    to: today,
    description: "",
    amount: 0,
  });
  const [modal, setModal] = useState(false);
  const [focusAfterClose, ] = useState(true);
  // const handleSelectChange = ({ target: { value } }) => {
  //   setFocusAfterClose(JSON.parse(value));
  // };
  const toggleModal = () => setModal(!modal);
  const { to, from, description } = range;
  // const [searchTerm, setSearchTerm] = useState("");
  const descRef = useRef(null);

  const _chargesList = () => {
    _fetchApi2(
      `${apiURL()}/get-charges-list`,
      (data) => {
        let newData = [{ revenueSource: "All Charges" }, ...data.results];
        setChargesList(newData);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const getData = useCallback(
    (callback, query_type, description) => {
      setLoading(true);
      _fetchApi2(
        `${apiURL()}/get-charges-list-all?facilityId=${facilityId}&date_from=${
          range.from
        }&date_to=${
          range.to
        }&query_type=${query_type}&description=${description}`,

        (data) => {
          callback(data.results);
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          console.log(err);
        }
      );
    },
    [range, facilityId]
  );

  useEffect(() => {
    getData(setBalance, "balance", "");
    getData(setData, "select", "");
    getData(setDataByCharges, "select_charges", description);
    _chargesList();
  }, [getData]);
  let newData =
    description !== "" &&
    description !== undefined &&
    description !== "All Charges"
      ? dataByCharges
      : data;

  let charges = {
    patient_id: 1,
    user_id: username,
    status: "pending",
    query_type: "insert",
    facilityId: facilityId,
    cr: range.amount,
    description: "Charges deposit",
    head: 0,
  };
  const postCharges = () => {
    _postApi(
      `${apiURL()}/post-charges`,
      charges,
      (resp) => {
        console.log(resp);
        _customNotify("Charges deposited successfully");
        toggleModal();
        getData(setData, "select", "");
        getData(setDataByCharges, "select_charges", description);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const fields = [
    {
      title: "S/N",
      value: "sn",
      custom: true,
      component: (item, id) => <div>{id + 1}</div>,
    },
    {
      title: "Patient ID",
      custom: true,
      component: (item) => <div>{item.patient_id}</div>,
    },
    {
      title: "User Name",
      value: "user_id",
    },
    {
      title: "Description",
      value: "description",
    },
    {
      title: "Dr",
      custom: true,
      component: (item, id) => <div>{formatNumber(item.dr)}</div>,
    },
    {
      title: "Cr",
      custom: true,
      component: (item, id) => (
        <div className="text-right">{formatNumber(item.cr)}</div>
      ),
    },
    {
      title: "Date",
      custom: true,
      component: (item, id) => (
        <div className="text-right">
          {moment(item.created_at).format("DD-MM-YYYY")}
        </div>
      ),
    },
  ];

  const handleRangeChange = ({ target: { name, value } }) => {
    setRange((p) => ({
      ...p,
      [name]: value,
    }));
  };
  const getRowStyles = (item) => {
    if (item.cr > 0) {
      return {
        backgroundColor: "#7BB274",
      };
    } else {
      return {};
    }
  };
  const total = newData && newData.reduce((a, b) => a + parseInt(b.dr), 0);
  return (
    <div className="card card-body">
      <Modal isOpen={modal} returnFocusAfterClose={focusAfterClose}>
        <ModalBody>
          <div>
            <center>
              <h4>Make payment </h4>
            </center>
            <FormGroup>
              <Label>Amount</Label>
              <Input
                type="number"
                name="amount"
                value={range.amount}
                onChange={handleRangeChange}
              />
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={postCharges} color="primary">
            Pay Now
          </Button>
          <Button color="danger" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      {/* {JSON.stringify(newData.length)} */}
      {/* {JSON.stringify(data)} */}
      <div className="text-center d-flex justify-content-center">
        <h1
          className="m-4 rounded p-3 text-primary"
          style={{
            backgroundColor: "#cce0fc",
          }}
        >
          Balance:₦
          {formatNumber((balance.length && balance && balance[0].balance) || 0)}
        </h1>
        <div className="pt-5">
          <Button color="warning" onClick={toggleModal}>
            Pay Now
          </Button>
        </div>
      </div>
      <Row>
        <Col md={7}>
          <DaterangeSelector
            from={from}
            to={to}
            handleChange={handleRangeChange}
          />
        </Col>
        <Col>
          <Label>
            <b>Search by Services</b>
          </Label>
          <Typeahead
            id="revenueSource"
            align="justify"
            placeholder="Filter Service List"
            labelKey={(item) => `${item.revenueSource}`}
            options={chargesList}
            onChange={(val) => {
              if (val.length) {
                let selected = val[0];
                setRange((p) => ({
                  ...p,
                  description: selected.revenueSource,
                }));
              }
            }}
            ref={descRef}
          />
        </Col>
      </Row>
      <div className="ml-5">
        {loading && <Loading />}
        <CustomPaginationNew
          items={newData}
          itemsPerPage={10}
          fields={fields}
          rowStyles={getRowStyles}
        />
      </div>
      <div className="text-right">Total: {formatNumber(total)}</div>
    </div>
  );
}
