import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CardFooter,
  Col,
} from "reactstrap";
import BackButton from "../comp/components/BackButton";
import { useSelector } from "react-redux";
import allModule from "./moduleData";
// import CheckBoxNormal from "../theater/operation-notes/CheckBoxNormal";
// import CheckBoxItem from "../theater/operation-notes/CheckBoxItem";
import { _updateApi, _fetchApi, _postApi, _fetchApi2 } from "../../redux/actions/api";
import { _customNotify, _warningNotify } from "../utils/helpers";
import { useHistory, useParams } from "react-router";
import { apiURL } from "../../redux/actions";
import PasswordInput from "../auth/registration/component/PasswordInput";
import CustomButton from "../comp/components/Button";
import { MdUpdate } from "react-icons/md";
import SelectInput from "../comp/components/SelectInput";
import CheckBoxNormal from "../CheckBoxNormal";
import CheckBoxItem from "../CheckBoxItem";


export default function StaffReview() {
  // const user = useSelector((state) => state.auth.user);
  const facility = useSelector((state) => state.facility);
  const { id } = useParams();

  const [accessTo, setAccessTo] = useState([]);
  const [functionality, setFunctionality] = useState([]);
  const [status, setStatus] = useState(false);
  const [test, setTest] = useState([]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const [departments,setDepartments] = useState([])

  const _toggle = () => setToggle(!toggle);

  const getDepartments = useCallback(() => {
      _fetchApi2(
        `${apiURL()}/department?query_type=get&facilityId=${facility.info.facility_id}`,
        (data) => {
          if (data.success) {
            setDepartments(data.results);
          }
        },
        (err) => console.log(err)
      );
    }, [facility.info.facility_id]);

  const handleFetch = () => {
    _fetchApi(
      `${apiURL()}/users/getById/${id}`,
      (data) => {
        // console.log(data);
        if (data.results.length) {
          let acc = data.results[0].accessTo.split(",");
          let fuc = data.results[0].functionality.split(",");
          setAccessTo(acc);
          setFunctionality(fuc);
          setTest(data.results[0]);
        }
      },
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    handleFetch();
    getDepartments()
  }, [getDepartments]);

  const handleCheckboxChange = (val) => {
    if (accessTo.includes(val)) {
      let newVal = accessTo.filter((item) => item !== val);
      setAccessTo(newVal);
      setStatus(true);
    } else {
      let newVal = [...accessTo, val];
      setAccessTo(newVal);
      setStatus(true);
    }
  };

  const handleFunctionality = (val) => {
    if (functionality.includes(val)) {
      let newVal = functionality.filter((item) => item !== val);
      setFunctionality(newVal);
      // accessTo.forEach(item => item.isChecked= event.target.checked)
      // setAccessTo(accessTo)
      setStatus(true);
    } else {
      let newVal = [...functionality, val];
      setFunctionality(newVal);
      setStatus(true);
    }
  };
  const handleTableChange = ({ target: { name, value } }) => {
    setTest((prev) => ({ ...prev, [name]: value }));
    setStatus(true);
  };
  // const onInputChange = (e) => setPaymentType(e.target.value);
  const isChecked = (name) => accessTo && accessTo.includes(name);

  const handleUserUpdate = (accessTo, functionality, id, facilityId) => {
    let newAccessTo = accessTo.join(",");
    let newFunctionality = functionality.join(",");
    // console.log(accessTo, functionality, id, facilityId)
    _updateApi(
      `${apiURL()}/users/access/update`,
      {
        accessTo: newAccessTo,
        functionality: newFunctionality,
        id,
        facilityId,
        firstname: test.firstname,
        lastname: test.lastname,
        role: test.role,
        department: test.department,
      },
      (res) => {
        // console.log(newFunctionality)
        _customNotify("User Updated successfully");
        history.push("/me/admin/manage-users");
      },
      (err) => {
        _warningNotify("There was an error when updating user");
      }
    );
    // console.log("HERE IS THE WORLD", test.firstname,test.lastname,test.role,test.department)
  };

  const updatePassword = () => {
    setLoading(true);
    _postApi(
      `${apiURL()}/api/users/resetpassword`,
      { id: id, newPassword: newPassword },
      () => {
        _customNotify("Password Reset Successfully");
        setLoading(false);
      },
      (err) => {
        // console.log(err);
        _warningNotify("Error Occur");
        setLoading(false);
      }
    );
  };

  return (
    <>
      <BackButton />
      <Card>
        <CardHeader>User Information</CardHeader>
        {/* <Button color="danger" className="px-3 float-right" onClick={handleDelete}>Delete User</Button> */}
        <CardBody>
          <Form>
            {/* {JSON.stringify(location.pathname)}   */}
            {/* {JSON.stringify(id)}
            {JSON.stringify(test)} */}

            <FormGroup row>
              <Col sm={6}>
                <Label for="name" className="font-weight-bold">
                  First Name
                </Label>
                <Input
                  type="text"
                  name="firstname"
                  value={`${test.firstname}`}
                  onChange={handleTableChange}
                />
              </Col>
              <Col sm={6}>
                <Label for="name" className="font-weight-bold">
                  Last Name
                </Label>
                <Input
                  type="text"
                  name="lastname"
                  value={`${test.lastname}`}
                  onChange={handleTableChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={6}>
                <Label for="department" className="font-weight-bold">
                  Department
                </Label>
                <SelectInput
                      container="px-0 mx-0"
                      name="department"
                      value={test.department}
                      options={departments.map(i => i.dept_name)}
                      onChange={handleTableChange}
                    />
                {/*<Input
                    {JSON.stringify(departments)}
                                  type="text"
                                  name="department"
                                  value={test.department}
                                  onChange={handleTableChange}
                                />*/}
              </Col>
              <Col sm={6}>
                <Label for="role" className="font-weight-bold">
                  Role
                </Label>
                <Input
                  type="text"
                  name="role"
                  value={test.role}
                  onChange={handleTableChange}
                />
              </Col>
            </FormGroup>
            {/* <FormGroup row>
              <Label for="payment" sm={4}>
                Payment Method
              </Label>
              <Label for="payment" sm={2}>
                <Input
                  type="radio"
                  name="Fixed"
                  value="Fixed"
                  checked={paymentType === 'Fixed'}
                  onChange={onInputChange}
                />
                Fixed
              </Label>
              <Label for="payment" sm={2}>
                <Input
                  type="radio"
                  name="Percentage"
                  value="Percentage"
                  checked={paymentType === 'Percentage'}
                  onChange={onInputChange}
                />
                Percentage
              </Label>
            </FormGroup> */}
            <center>
              <Button onClick={_toggle} outline color="primary">
                Reset password
              </Button>
            </center>

            {toggle && (
              <div>
                <FormGroup row>
                  <Col md={6}>
                    <PasswordInput
                      value={newPassword}
                      required
                      onChange={(e) => setNewPassword(e.target.value)}
                      name="newPassword"
                      label="New Password"
                    />
                  </Col>
                  <Col md={6}>
                    <PasswordInput
                      value={confirmPassword}
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      name="confirmPassword"
                      label="Retype New Password"
                    />
                  </Col>

                  {!newPassword.length ? null : newPassword ===
                    confirmPassword ? (
                    <p className="text-success mt--5">Password is confirmed</p>
                  ) : (
                    <p className="text-danger">Password not march</p>
                  )}
                </FormGroup>
                <div className="d-flex flex-row justify-content-center">
                  <CustomButton
                    color="primary"
                    className="m-2"
                    disable={newPassword !== confirmPassword}
                    loading={loading}
                    onClick={updatePassword}
                  >
                    <MdUpdate size={20} className="mr-1" />
                    Update Password
                  </CustomButton>
                </div>
              </div>
            )}
            <div className="col-md-12 col-lg-12">
              <h6>Access (User's Privilege)</h6>
              <div className="row">
                <div
                  className={isChecked("Laboratory") ? "col-md-6" : "col-md-3"}
                >
                  <div className="row">
                    {facility.info.type === "hospital" ||
                    facility.info.type === "laboratory" ||
                    facility.info.type === "diagnosticCenter" ? (
                      <div className="col-md-12">
                        <CheckBoxNormal
                          label="Laboratory"
                          name="Laboratory"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                          className="font-weight-bold ml-4 m-0 pr-3"
                        />
                      </div>
                    ) : null}
                    {// JSON.stringify(allModule.lab.type)
                    facility.info.type === "hospital" ||
                    facility.info.type === "laboratory" ||
                    facility.info.type === "diagnosticCenter"
                      ? allModule.laboratory.type.map((item) => (
                          <div className="col-md-6">
                            {isChecked("Laboratory") ? (
                              <CheckBoxItem
                                label={item}
                                name={item}
                                handleCheck={handleFunctionality}
                                value={functionality}
                              />
                            ) : null}
                          </div>
                        ))
                      : null}
                  </div>
                </div>
                <div className="col-md-3">
                  <CheckBoxNormal
                    label="Reports"
                    name="Reports"
                    handleCheck={handleCheckboxChange}
                    value={accessTo}
                    className="font-weight-bold ml-4 m-0 pr-3"
                  />
                  {allModule.reports.type.map((item) =>
                    isChecked("Reports") ? (
                      <CheckBoxItem
                        label={item}
                        name={item}
                        handleCheck={handleFunctionality}
                        value={functionality}
                      />
                    ) : null
                  )}
                </div>
                <div className="col-md-3 ">
                  {facility.info.type === "hospital" ||
                  facility.info.type === "pharmacy" ? (
                    <CheckBoxNormal
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label="Pharmacy"
                      name="Pharmacy"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                    />
                  ) : null}
                  {facility.info.type === "hospital" ||
                  facility.info.type === "pharmacy"
                    ? allModule.pharmacy.type.map((item) =>
                        isChecked("Pharmacy") ? (
                          <CheckBoxItem
                            className="font-weight-bold ml-4 m-0 pr-3"
                            label={item}
                            name={item}
                            handleCheck={handleFunctionality}
                            value={functionality}
                          />
                        ) : null
                      )
                    : null}
                </div>

                <div className="col-md-3 col-lg-3">
                  {facility.info.type === "hospital" && (
                    <CheckBoxNormal
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label="Maintenance"
                      name="Maintenance"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                    />
                  )}
                  {facility.info.type === "hospital" ? (
                    <CheckBoxNormal
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label="Records"
                      name="Records"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                    />
                  ) : null}
                  {facility.info.type === "hospital"
                    ? allModule.records.type.map((item) =>
                        isChecked("Records") ? (
                          <CheckBoxItem
                            className="font-weight-bold ml-4 m-0 pr-3"
                            label={item}
                            name={item}
                            handleCheck={handleFunctionality}
                            value={functionality}
                          />
                        ) : null
                      )
                    : null}

                  {facility.info.type === "hospital" ? (
                    <CheckBoxNormal
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label="Nurse"
                      name="Nurse"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                    />
                  ) : null}
                  {facility.info.type === "hospital"
                    ? allModule.nurse.type.map((item) =>
                        isChecked("Nurse") ? (
                          <CheckBoxItem
                            className="font-weight-bold ml-4 m-0 pr-3"
                            label={item}
                            name={item}
                            handleCheck={handleFunctionality}
                            value={functionality}
                          />
                        ) : null
                      )
                    : null}

                  {facility.info.type === "hospital" ||
                  facility.info.type === "pharmacy" ||
                  facility.info.type === "diagnosticCenter" ? (
                    <CheckBoxNormal
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label="Accounts"
                      name="Accounts"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                    />
                  ) : null}
                  {facility.info.type === "hospital" ||
                  facility.info.type === "pharmacy" ||
                  facility.info.type === "diagnosticCenter"
                    ? allModule.account.type.map((item) =>
                        isChecked("Accounts") ? (
                          <CheckBoxItem
                            className="font-weight-bold ml-4 m-0 pr-3"
                            label={item}
                            name={item}
                            handleCheck={handleFunctionality}
                            value={functionality}
                          />
                        ) : null
                      )
                    : null}
                </div>

                <div className="col-md-3 col-lg-3">
                  {facility.info.type === "hospital" && (
                    <CheckBoxNormal
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label="Theater"
                      name="Theater"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                    />
                  )}
                  {facility.info.type === "hospital" &&
                    allModule.theater.type.map((item) =>
                      isChecked("Theater") ? (
                        <CheckBoxItem
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label={item}
                          name={item}
                          handleCheck={handleFunctionality}
                          value={functionality}
                        />
                      ) : null
                    )}
                </div>
                <div className="col-md-3 col-lg-3">
                  {facility.info.type === "hospital" && (
                    <CheckBoxNormal
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label="Doctors"
                      name="Doctors"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                    />
                  )}
                  {facility.info.type === "hospital" &&
                    allModule.doctor.type.map((item) =>
                      isChecked("Doctors") ? (
                        <CheckBoxItem
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label={item}
                          name={item}
                          handleCheck={handleFunctionality}
                          value={functionality}
                        />
                      ) : null
                    )}
                </div>
                <div className="col-md-3">
                  {facility.info.type === "hospital" ||
                  facility.info.type === "pharmacy" ||
                  facility.info.type === "laboratory" ||
                  facility.info.type === "diagnosticCenter" ? (
                    <CheckBoxNormal
                      label="Admin"
                      name="Admin"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                      className="font-weight-bold ml-4 m-0 pl-3"
                    />
                  ) : null}
                  {facility.info.type === "hospital" ||
                  facility.info.type === "pharmacy" ||
                  facility.info.type === "laboratory" ||
                  facility.info.type === "diagnosticCenter"
                    ? allModule.admin.type.map((item) =>
                        isChecked("Admin") ? (
                          <CheckBoxItem
                            label={item}
                            name={item}
                            handleCheck={handleFunctionality}
                            value={functionality}
                          />
                        ) : null
                      )
                    : null}
                </div>

                <div className="col-md-3">
                  {facility.info.type === "hospital" ||
                  facility.info.type === "pharmacy" ||
                  facility.info.type === "laboratory" ||
                  facility.info.type === "diagnosticCenter" ? (
                    <CheckBoxNormal
                      label="Appointments"
                      name="Appointments"
                      handleCheck={handleCheckboxChange}
                      value={accessTo}
                      className="font-weight-bold ml-4 m-0 pl-3"
                    />
                  ) : null}
                  {facility.info.type === "hospital" ||
                  facility.info.type === "pharmacy" ||
                  facility.info.type === "laboratory" ||
                  facility.info.type === "diagnosticCenter"
                    ? allModule.appointments.type.map((item) =>
                        isChecked("Appointments") ? (
                          <CheckBoxItem
                            label={item}
                            name={item}
                            handleCheck={handleFunctionality}
                            value={functionality}
                          />
                        ) : null
                      )
                    : null}
                </div>
              </div>
            </div>
          </Form>
        </CardBody>
        <CardFooter>
          <center>
            {status ? (
              <Button
                color="primary"
                className="pl-4 pr-4"
                onClick={() => handleUserUpdate(accessTo, functionality, id)}
              >
                Update
              </Button>
            ) : null}
          </center>
        </CardFooter>
      </Card>
    </>
  );
}
