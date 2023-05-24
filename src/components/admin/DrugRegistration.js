import React, { useCallback, useEffect, useRef, useState } from "react";
import { Printer, Trash } from "react-feather";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import {
  getDrugList,
  getDrugListCount,
  getDrugListSearch,
  getPharmStore,
  getSupplierInfo,
} from "../../../redux/action/pharmacy";
export default function Newtask() {
  const { addToast } = useToasts();
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
  const isOpen = useSelector((state) => state.pharmacy.isOpen);
  const drugListCount = useSelector((state) => state.pharmacy.drugListCount);
  const _loading = useSelector((state) => state.pharmacy.loading);
  const { activeBusiness } = useSelector((state) => state.auth);
  const toggle = () => {
    dispatch({type:"TOGGLE",payload:!isOpen})
  };
  const initialState = {
    drug_name: "",
    generic_name: "",
    formulation: "",
  };
  const [form, setForm] = useState(initialState);
  const _getSupplierInfo = useCallback(() => {
    dispatch(getSupplierInfo());
    dispatch(getPharmStore());
  }, [dispatch]);

  useEffect(() => {
    _getSupplierInfo();
  }, [_getSupplierInfo]);

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
    if (name === "drug_name" && generics.includes(value)) {
      _customNotification(addToast, "Drug name exists", "warning");
    }
    if (name === "generic_name" && drugs.includes(value)) {
      _customNotification(addToast, "Generic name exists", "warning");
    }
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
          <Trash
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
      `/pharmacy/v1/create-drug`,
      {
        ...form,
        facilityId,
      },
      (res) => {
        if (res.success) {
          setLoading(false);
          _customNotification(addToast, "submitted successfully", "success");
          setForm(initialState);
          dispatch(getDrugList());
          dispatch(getDrugListCount(filterText));
          toggle();
        } else {
          _customNotification(
            addToast,
            "drug already exist successfully",
            "warning"
          );
          setLoading(false);
        }
      },
      (err) => {
        console.log(err);
        _customNotification(
          addToast,
          `Error occured ${JSON.stringify(err)}`,
          "warning"
        );
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
      `/pharmacy/v1/delete-drug`,
      drugInfo,
      (res) => {
        if (res.success) {
          setLoadingDelete(false);
          _customNotification(
            addToast,
            "drug information deleted successfully",
            "success"
          );
          dispatch(getDrugList());
          dispatch(getDrugListCount(filterText));
          toggle1({});
        }
      },
      (err) => {
        console.log(err);
        _customNotification(
          addToast,
          `Error occured ${JSON.stringify(err)}`,
          "warning"
        );
        setLoadingDelete(false);
      }
    );
  };
  return (
    <div>
      <CardBody>
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
            {JSON.stringify(drugListCount)}
            <strong>Total:</strong>
            {formatNumber(drugListCount)}
          </Col>
        </Row>
        <Row>
          {/* <Scrollbar height={"100vh"} className="p-2"> */}
          <Row>
            {_loading && <Loading size="sm" />}
            <Col>
              <CustomPagination
                totalRecords={drugListCount}
                pageLimit={20}
                pageNeighbours={7}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
              />
            </Col>
            <Col md={2}>
              <CustomButton
                onClick={() => setViewPDF(!viewPDF)}
                color={viewPDF ? "danger" : "primary"}
                size={"sm"}
              >
                <Printer />
                {viewPDF ? "Close" : "Print"}
              </CustomButton>
            </Col>
            {viewPDF ? (
              <>
                <RegisteredDrugPDF
                  list={drugList}
                  range={range}
                  title={"Registered Drugs"}
                  total={drugListCount}
                  activeBusiness={activeBusiness}
                />
              </>
            ) : (
              <Scrollbar>
                <CustomTable
                  height="70vh"
                  // preheader={drugList.length > 0}
                  fields={tbl}
                  data={drugList}
                />
              </Scrollbar>
            )}
          </Row>
          {/* </Scrollbar> */}
        </Row>
      </CardBody>
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
            <b>{drugInfo?.name}</b>
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

export const DrugRegistrationWrapper = (props) => {
  return (
    <CustomCard
      header="Drug registration"
      headerRight={
        <CustomButton outline onClick={props.toggle}>
          Add new drug
        </CustomButton>
      }
    >
      {props.children}
    </CustomCard>
  );
};


export const DrugRegistrationWrapperReport = (props) => {
  return (
    <CustomCard
      header="Registered drugs report"
    >
      {props.children}
    </CustomCard>
  );
};
