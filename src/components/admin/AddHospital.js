import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  Label,
} from "reactstrap";
import { LoadingSM } from "../loading";
// import { _postApi } from '../../redux/actions/api';
import { apiURL } from "../../redux/actions";
import { _customNotify, _warningNotify } from "../utils/helpers";
import ImageUpload from "../record/image-upload/ImageUpload";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions/auth";
// import CheckBoxItem from "../theater/operation-notes/CheckBoxItem";
import { Switch } from "evergreen-ui";
import allModule from "./moduleData";
import { checkUsername, checkEmail } from "../auth/registration/api";
import Input from "../../components/auth/registration/component/Input";
const hospitalAccess = [
  "Admin",
  "Records",
  "Pharmacy",
  "Reports",
  "Laboratory",
  "Account",
  "Theater",
  "Doctor",
];
const pharmAccess = ["Admin", "Pharmacy", "Reports", "Account"];
const labAccess = ["Admin", "Records", "Reports", "Laboratory"];
const diagnosticCenterAccess = ["Admin", "Reports", "Account", "Laboratory"];

function AddHospital() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [fileFormat, setFileFormat] = useState("");
  const [type, setType] = useState("hospital");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [accessTo, setAccessTo] = useState([]);
  const [hasStore, setHasStore] = useState(true);
  const [functionality, setFunctionality] = useState([]);

  const [checkingUsername, toggleCheckingUsername] = useState(false);
  const [usernameGood, setUsernameGood] = useState(false);
  const [usernameMsg, setUsernameMsg] = useState("");
  const [checkingEmail, toggleCheckingEmail] = useState(false);
  const [emailGood, setEmailGood] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");

  const handeSubmit = (e) => {
    setHasStore(!hasStore);
  };
  const handleUsernameChange = (value) => {
    setUsername(value);
    toggleCheckingUsername(true);
    checkUsername(
      value,
      (msg) => {
        toggleCheckingUsername(false);
        setUsernameGood(true);
        setUsernameMsg(msg);
      },
      (err) => {
        toggleCheckingUsername(false);
        setUsernameGood(false);
        setUsernameMsg(err);
      }
    );
  };
  const handleEmailChange = (value) => {
    setEmail(value);
    toggleCheckingEmail(true);
    checkEmail(
      value,
      (msg) => {
        toggleCheckingEmail(false);
        setEmailGood(true);
        setEmailMsg(msg);
      },
      (err) => {
        toggleCheckingEmail(false);
        setEmailGood(false);
        setEmailMsg(err);
      }
    );
  };
  const resetForm = () => {
    setName("");
    setAddress("");
    setCode("");
    setFileFormat("");
    setType("");
    setFirstname("");
    setLastname("");
    setEmail("");
    setUsername("");
    setPassword("");
    setLoading(false);
  };

  const handleSubmit = () => {
    if (username === "" || password === "" || name === "" || address === "") {
      return _warningNotify("Form is invalid, please complete the form");
    }
    setLoading(true);

    let facilityAccess = "";
    if (type === "hospital") {
      facilityAccess = "Admin,Records,Pharmacy,Reports,Lab,Operation,Theater";
    } else if (type === "pharmacy") {
      facilityAccess = "Admin,Pharmacy,Reports,Account";
    } else if (type === "laboratory") {
      facilityAccess = "Admin,Lab,Account";
    } else {
      facilityAccess = "";
    }

    fetch(`${apiURL()}/hospitals/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        code,
        type,
        address,
        email,
        hasStore: hasStore ? "Yes" : "No",
        admin: username,
      }),
    })
      .then((response) => response.json())
      .then(({ hospital }) => {
        fetch(`${apiURL()}/auth/sign-up`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            facilityId: hospital.id,
            firstname,
            lastname,
            email,
            username,
            password,
            role: "Admin",
            accessTo: facilityAccess,
            functionality: functionality.join(","),
          }),
        })
          .then((response) => response.json())
          .then(() => {
            setLoading(false);
            resetForm();
            _customNotify(`Facility assigned id of ${hospital.id}`);
          })
          .catch(() => _warningNotify("An error occurred"));
      })
      .catch((err) => {
        setLoading(false);
        _warningNotify("An error occured");
      });
  };

  const handleCheck = (val) => {
    if (accessTo.includes(val)) {
      let newVal = accessTo.filter((item) => item !== val);
      let newFunctionalities = functionality.filter(
        (item) => !allModule[val.toLowerCase()].type.includes(item)
      );
      setFunctionality(newFunctionalities);
      setAccessTo(newVal);
    } else {
      let newVal = [...accessTo, val];
      setAccessTo(newVal);
      setFunctionality((prev) => [
        ...prev,
        ...allModule[val.toLowerCase()].type,
      ]);
    }
  };

  return (
    <Card>
      <CardHeader tag="h6">Add a New Facility</CardHeader>
      <CardBody className="row">
        <div className="col-md-6 col-lg-6">
          <div>
            <label>Facility Name</label>
            <input
              className="form-control"
              value={name}
              autoFocus
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          {/* {JSON.stringify(functionality)} */}
          {/* <div>
            <label>Facility Code (3 letters)</label>
            <input
              className="form-control"
              value={code}
              onChange={({ target }) => setCode(target.value)}
            />
          </div> */}
          <div>
            <label>Facility File Format (prefix)</label>
            <input
              className="form-control"
              value={fileFormat}
              onChange={({ target }) => setFileFormat(target.value)}
            />
          </div>
          <div>
            <label>Facility Type</label>
            <select
              className="form-control"
              value={type}
              onChange={({ target }) => setType(target.value)}
            >
              <option value="hospital">Hospital</option>
              <option value="diagnosticCenter">Diagnostic Center</option>
              <option value="laboratory">Laboratory</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
          </div>
          <div>
            <label>Address</label>
            <input
              className="form-control"
              value={address}
              onChange={({ target }) => setAddress(target.value)}
            />
          </div>
          <div className="d-flex mt-3">
            {type === "pharmacy" ? (
              <>
                <Label className="mr-1 font-weight-bold h6">
                  Pharmacy has store?
                </Label>
                <Switch
                  height={20}
                  checked={hasStore}
                  onChange={handeSubmit}
                />
                <div className="ml-2">
                  {!hasStore ? <h5>No</h5> : <h5>Yes</h5>}
                </div>
              </>
            ) : null}
          </div>
          <div>
            <label>Logo</label>
            <ImageUpload />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <h6>Hospital Admin Account</h6>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <label>First Name</label>
              <input
                className="form-control"
                value={firstname}
                onChange={({ target }) => setFirstname(target.value)}
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <label>Last Name</label>
              <input
                className="form-control"
                value={lastname}
                onChange={({ target }) => setLastname(target.value)}
              />
            </div>
          </div>

          <div>
            <Input
              className="col-lg-6"
              label="Email (optional)"
              type="email"
              name="email"
              onChange={(e) => handleEmailChange(e.target.value)}
              value={email}
              placeholder="e.g. johnsmith@demo.com"
              loading={checkingEmail}
              good={emailGood}
              message={emailMsg}
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Input
                className="col-lg-6"
                label="Username"
                name="username"
                onChange={(e) => handleUsernameChange(e.target.value)}
                value={username}
                placeholder="e.g. john"
                required
                loading={checkingUsername}
                good={usernameGood}
                message={usernameMsg}
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <label htmlFor="">Modules to include</label>
            <Row>
              {/* {JSON.stringify(accessTo)} */}
              <Col md={12} className="justify-content-center">
                <div className="row">
                  {type === "hospital"
                    ? hospitalAccess.map((item) => (
                        <div className="col-md-3 col-lg-3">
                          {/* <CheckBoxItem
                            label={item}
                            value={accessTo}
                            name={item}
                            handleCheck={handleCheck}
                          /> */}
                        </div>
                      ))
                    : type === "pharmacy"
                    ? pharmAccess.map((item) => (
                        <div className="col-md-3 col-lg-3">
                          {/* <CheckBoxItem
                            label={item}
                            value={accessTo}
                            name={item}
                            handleCheck={handleCheck}
                          /> */}
                        </div>
                      ))
                    : type === "laboratory"
                    ? labAccess.map((item) => (
                        <div className="col-md-3 col-lg-3">
                          {/* <CheckBoxItem
                            label={item}
                            value={accessTo}
                            name={item}
                            handleCheck={handleCheck}
                          /> */}
                        </div>
                      ))
                    : type === "diagnosticCenter"
                    ? diagnosticCenterAccess.map((item) => (
                        <div className="col-md-3 col-lg-3">
                          {/* <CheckBoxItem
                            label={item}
                            value={accessTo}
                            name={item}
                            handleCheck={handleCheck}
                          /> */}
                        </div>
                      ))
                    : null}
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* {JSON.stringify(allModule)} */}
      </CardBody>
      <CardFooter>
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="btn btn-outline-primary offset-md-5 col-md-2 offset-lg-5 col-lg-2"
        >
          {loading ? <LoadingSM /> : "Create Hospital"}
        </button>
      </CardFooter>
    </Card>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (data, success, err) =>
      dispatch(createUser(data, success, err)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddHospital);
