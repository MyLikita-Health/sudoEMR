import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CardBody, Col, Row } from "reactstrap";

import { CustomButton, CustomForm, CustomTable } from "../comp/components";
import CustomModal from "../comp/components/CustomModal";
import CustomPagination from "../comp/CustomPagination";
import Loading from "../comp/components/Loading";
import { _customNotify, _warningNotify, formatNumber } from "../utils/helpers";
import SearchBar from "../record/SearchBar";
import { _deleteApi, _postApi } from "../../redux/actions/api";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import {
  getDrugList,
  getDrugListCount,
  getDrugListSearch,
} from "../../redux/actions/pharmacy";
import CustomCard from "../comp/components/CustomCard";
import { apiURL } from "../../redux/actions";
import Scrollbars from "react-custom-scrollbars";
export default function DrugRegistrations() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [drugInfo, setDrugInfo] = useState({});
  const { facilityId } = useSelector((state) => state.auth.user);
  const _ref = useRef();
  const [range, setRange] = useState({ from: 0, to: 100 });
  const [filterText, setFilterText] = useState("");
  const [viewPDF, setViewPDF] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const drugList = useSelector((state) => state.pharmacy.drugList);
  const [isOpen, setIsOpen] = useState(false);
  const drugListCount = useSelector((state) => state.pharmacy.quantityAlert);
  const _loading = useSelector((state) => state.pharmacy.loading);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const initialState = {
    drug_name: "",
    generic_name: "",
    formulation: "",
  };
  const [form, setForm] = useState(initialState);

  let generics = drugList.map((obj) => obj.generic_name);
  generics = generics.filter((v, i) => generics.indexOf(v) === i);

  let drugs = drugList.map((obj) => obj.name);
  drugs = generics.filter((v, i) => generics.indexOf(v) === i);

  const fields = [
    {
      label: "Drug name",
      name: "drug_name",
      value: form.drug_name,
      type: "text",
      _ref: _ref,
    },
    {
      label: "Generic Name",
      name: "generic_name",
      value: form.generic_name,
      type: "text",
    },

    {
      label: "Formulation",
      name: "formulation",
      value: form.formulation,
      type: "text",
    },
  ];

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const tbl = [
    {
      title: "S/N",
      custom: true,
      component: (item, index) => index + 1,
      className: "text-center",
    },
    {
      title: "Drug Name",
      value: "name",
    },
    {
      title: "Generic Name",
      value: "generic_name",
    },
    {
      title: "Formulation",
      value: "formulation",
    },
    {
      title: "Action",
      custom: true,
      component: (itm, idx) => (
        <Col className="text-center">
          <BsTrash
            style={{ cursor: "pointer", color: "red" }}
            className="primary"
            onClick={() => toggle1(itm)}
          />
        </Col>
      ),
    },
  ];
  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      if (viewPDF) {
        setViewPDF(false);
      }
      setRange((p) => ({ from: (page - 1) * 100, to: 100 }));
      setCurrentPage(page);
    },
    [viewPDF]
  );
  const handleSubmit = () => {
    setLoading(true);
    _postApi(
      `${apiURL()}/api/pharmacy/v1/create-drug`,
      {
        ...form,
        facilityId,
      },
      (res) => {
        if (res.success) {
          setLoading(false);
          _customNotify("submitted successfully");
          setForm(initialState);
          dispatch(getDrugList());
          dispatch(getDrugListCount(filterText));
          toggle();
        } else {
          _warningNotify("drug already exist successfully");
          setLoading(false);
        }
      },
      (err) => {
        console.log(err);
        _warningNotify(`Error occured ${JSON.stringify(err)}`);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    if (filterText.length > 0) {
      dispatch(
        getDrugListSearch(filterText, range.from, range.to, "drug_list")
      );
      dispatch(getDrugListCount(filterText));
    } else if (filterText.length === 0) {
      dispatch(
        getDrugListSearch(filterText, range.from, range.to, "drug_list")
      );
      dispatch(getDrugListCount(filterText));
    }
  }, [dispatch, filterText, filterText.length, range.from, range.to]);

  const toggle1 = (itm) => {
    setIsOpen1(!isOpen1);
    setDrugInfo(itm);
  };
  const deleteDrug = () => {
    setLoadingDelete(true);
    _deleteApi(
      `${apiURL()}/api/pharmacy/v1/delete-drug`,
      drugInfo,
      (res) => {
        // if (res.success) {
          setLoadingDelete(false);
          toggle1({});
          _customNotify("drug information deleted successfully");
          dispatch(getDrugList());
          dispatch(getDrugListCount(filterText));
         
        // }
      },
      (err) => {
        console.log(err);
        _warningNotify(`Error occured ${JSON.stringify(err)}`);
        setLoadingDelete(false);
      }
    );
  };
  return (
    <div>
      <CustomCard
        header="Drug registration"
        headerRight={
          <CustomButton outline onClick={toggle}>
            Add new drug
          </CustomButton>
        }
      >
        <Row>
          <Col md={10}>
            <SearchBar
              filterText={filterText}
              onFilterTextChange={(v) => {
                setFilterText(v);
              }}
              placeholder="Search by Drug name, Generic name, Formulation"
            />
          </Col>
          <Col md={2}>
            <strong>Total:</strong>
            {formatNumber(drugListCount)}
          </Col>
        </Row>
        <Row>
          {/* <Scrollbar height={"100vh"} className="p-2"> */}
          <Row>
            <Col>
              <CustomPagination
                totalRecords={drugListCount}
                pageLimit={20}
                pageNeighbours={7}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
              />
            </Col>
          </Row>
        </Row>
        <Row>
          <center> {_loading && <Loading size="sm" />}</center>
          <Scrollbars className="p-2" style={{ height: "75vh",padding:2 }}>
            {" "}
            <CustomTable fields={tbl} data={drugList} />
          </Scrollbars>
        </Row>
      </CustomCard>
      <CustomModal
        isOpen={isOpen1}
        header="Drug Information"
        toggle={toggle1}
        footer={
          <>
            <CustomButton outline onClick={toggle1}>
              Cancel
            </CustomButton>
            <CustomButton
              className="mb-2"
              loading={loadingDelete}
              onClick={deleteDrug}
            >
              Delete
            </CustomButton>
          </>
        }
      >
        <h5>
          Are you sure you want to delete{" "}
          <i>
            <b>{drugInfo.name}</b>
          </i>{" "}
          from this system?

        </h5>
      </CustomModal>
      <CustomModal
        isOpen={isOpen}
        header="Drug Registration"
        toggle={toggle}
        footer={
          <>
            <CustomButton outline onClick={toggle}>
              Cancel
            </CustomButton>
            <CustomButton
              className="mb-2"
              loading={loading}
              onClick={handleSubmit}
            >
              Add Drug
            </CustomButton>
          </>
        }
      >
        <CustomForm fields={fields} handleChange={handleChange} />
      </CustomModal>
    </div>
  );
}
