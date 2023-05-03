import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
// import CheckBoxItem from "../theater/operation-notes/CheckBoxItem";
import { LoadingSM } from "../loading";
import { createUser, getRoles } from "../../redux/actions/auth";
import { _customNotify, _warningNotify } from "../utils/helpers";
import allModule from "./moduleData";
// import CheckBoxNormal from "../theater/operation-notes/CheckBoxNormal";
import { _fetchApi,_fetchApi2 } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import SelectInput from "../comp/components/SelectInput";
import { checkUsername } from "../auth/registration/api";
import Input from "../auth/registration/component/Input";
import CheckBoxNormal from "../CheckBoxNormal";
import CheckBoxItem from "../CheckBoxItem";

class NewUser extends PureComponent {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role: "",
    speciality: "",
    accessTo: [],
    functionalities: [],
    department: "",
    error: "",
    labDepartments: [],
    checkingUsername: false,
    usernameGood: false,
    usernameMsg: "",
  };

  handleUsernameChange = (value) => {
    this.setState({
      username: value,
      checkingUsername: true,
    });
    checkUsername(
      value,
      (msg) => {
        this.setState({
          checkingUsername: false,
          usernameGood: true,
          usernameMsg: msg,
        });
      },
      (err) => {
        this.setState({
          checkingUsername: false,
          usernameGood: false,
          usernameMsg: err,
        });
      }
    );
  };

  getLabDepartments = () => {
    _fetchApi2(
      `${apiURL()}/department?query_type=get&facilityId=${this.props.user.facilityId}`,
      (data) => {
        if (data.success) {
          this.setState({ labDepartments: data.results });
        }
      },
      (err) => console.log(err)
    );
  };
  componentDidMount() {
    this.props.getRoles();
    this.getLabDepartments()
  }

  handleChange = ({ target }) => {
    this.setState({
      error: "",
      [target.name]: target.value,
    });
  };

  resetForm = () => {
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      role: "",
      speciality: "",
      accessTo: [],
      functionalities: [],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      role,
      speciality,
      accessTo,
      functionalities,
      department,
    } = this.state;
    const { facilityId } = this.props.user;
    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      password === "" ||
      accessTo.length === 0 ||
      functionalities.length === 0
    ) {
      this.setState({ error: "Please complete the form" });
    } else {
      const data = {
        firstname,
        lastname,
        username,
        email,
        password,
        role,
        speciality,
        accessTo: accessTo.join(","),
        functionality: functionalities.join(","),
        department: department,
        facilityId,
      };
      let callback = () => {
        _customNotify("User successfully created!");
        this.resetForm();
      };
      let error = (err) => {
        _warningNotify(err);
        this.resetForm();
      };
      this.props.createUser(data, callback, error);
      // console.log(data);
    }
  };

  handleCheckboxChange = (val) => {
    const { accessTo } = this.state;
    if (accessTo.includes(val)) {
      let newVal = accessTo.filter((item) => item !== val);
      this.setState({ accessTo: newVal });
    } else {
      let newVal = [...accessTo, val];
      this.setState({ accessTo: newVal });
    }
  };

  handleFunctionalities = (val) => {
    const { functionalities } = this.state;
    if (functionalities.includes(val)) {
      let newVal = functionalities.filter((item) => item !== val);
      this.setState({ functionalities: newVal });
    } else {
      let newVal = [...functionalities, val];
      this.setState({ functionalities: newVal });
    }
  };

  isChecked = (name) => this.state.accessTo.includes(name);

  render() {
    const {
      handleChange,
      handleSubmit,
      handleCheckboxChange,
      handleFunctionalities,
      isChecked,
      state: {
        firstname,
        lastname,
        username,
        email,
        password,
        role,
        speciality,
        accessTo,
        error,
        functionalities,
        department,
      },
      props: { creatingUser, facility },
    } = this;

    return (
      <Form onSubmit={handleSubmit}>
        <Card>
          {/* {JSON.stringify(facility)} */}
          <CardHeader tag="h5" className="text-center">
            Create User Account
          </CardHeader>
          <CardBody>
            {/* {JSON.stringify(accessTo)} */}

            <Form>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    autoFocus
                    value={firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                  />
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <Input
                    className="col-lg-6"
                    label="Username"
                    name="username"
                    onChange={(e) => this.handleUsernameChange(e.target.value)}
                    value={username}
                    placeholder="e.g. abba"
                    required
                    loading={this.state.checkingUsername}
                    good={this.state.usernameGood}
                    message={this.state.usernameMsg}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </FormGroup>

              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Role</label>
                  <input
                    onChange={handleChange}
                    name="role"
                    type="text"
                    list="role"
                    autoComplete="disabled"
                    value={role}
                    className="form-control"
                    // placeholder="Role"
                  />
                  <datalist id="role">
                    {this.props.roles.map((role, i) => (
                      <option value={role} />
                    ))}
                  </datalist>
                  {role.toLowerCase() === "doctor" ? (
                    <>
                      <label>Speciality</label>
                      <input
                        className="form-control"
                        name="speciality"
                        value={speciality}
                        onChange={handleChange}
                      />
                    </>
                  ) : null}
                </div>
                {facility.type === "diagnosticCenter" && (
                  <div className="col-md-6 col-lg-6 mt-2">
                    <Label >Department</Label>
                    {/* <Input type="select" className="form-control">
                    <option>Microbiology</option>
                    <option>Radiology</option>
                    <option>Chemical Pathology</option>
                    <option>Hamotology</option>
                  </Input> */}
                    {/*{JSON.stringify(this.state.labDepartments)}*/}
                    <SelectInput
                      container="px-0 mx-0"
                      name="department"
                      value={department}
                      options={this.state.labDepartments.map(i => i.dept_name)}
                      onChange={(e) =>
                        this.setState({ department: e.target.value })
                      }
                    />
                  </div>
                )}
              </FormGroup>
              <FormGroup row>
                <div className="col-md-12 col-lg-12">
                  <h6>Access (User's Privilege)</h6>
                  <div className="row">
                    <div
                      className={
                        isChecked("Laboratory") ? "col-md-6" : "col-md-3"
                      }
                    >
                      <div className="row">
                        {facility.type === "hospital" ||
                        facility.type === "diagnosticCenter" ? (
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
                        facility.type === "hospital" ||
                        facility.type === "diagnosticCenter"
                          ? allModule.laboratory.type.map((item) => (
                              <div className="col-md-6">
                                {isChecked("Laboratory") ? (
                                  <CheckBoxItem
                                    label={item}
                                    name={item}
                                    handleCheck={handleFunctionalities}
                                    value={functionalities}
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
                            handleCheck={handleFunctionalities}
                            value={functionalities}
                          />
                        ) : null
                      )}
                    </div>

                    <div className="col-md-3">
                      <CheckBoxNormal
                        label="Inventory"
                        name="Inventory"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                        className="font-weight-bold ml-4 m-0 pr-3"
                      />
                      {allModule.inventory.type.map((item) =>
                        isChecked("Inventory") ? (
                          <CheckBoxItem
                            label={item}
                            name={item}
                            handleCheck={handleFunctionalities}
                            value={functionalities}
                          />
                        ) : null
                      )}
                    </div>
                    <div className="col-md-3">
                      <CheckBoxNormal
                        label="Nurse"
                        name="Nurse"
                        handleCheck={handleCheckboxChange}
                        value={accessTo}
                        className="font-weight-bold ml-4 m-0 pr-3"
                      />
                      {allModule.nurse.type.map((item) =>
                        isChecked("Nurse") ? (
                          <CheckBoxItem
                            label={item}
                            name={item}
                            handleCheck={handleFunctionalities}
                            value={functionalities}
                          />
                        ) : null
                      )}
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-lg-3">
                      {facility.type === "hospital" && (
                        <CheckBoxNormal
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label="Maintenance"
                          name="Maintenance"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                        />
                      )}
                      {facility.type === "hospital" ? (
                        <CheckBoxNormal
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label="Records"
                          name="Records"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                        />
                      ) : null}
                      {facility.type === "hospital"
                        ? allModule.records.type.map((item) =>
                            isChecked("Records") ? (
                              <CheckBoxItem
                                className="font-weight-bold ml-4 m-0 pr-3"
                                label={item}
                                name={item}
                                handleCheck={handleFunctionalities}
                                value={functionalities}
                              />
                            ) : null
                          )
                        : null}

                      {facility.type === "hospital" ||
                      facility.type === "pharmacy" ||
                      facility.type === "diagnosticCenter" ? (
                        <CheckBoxNormal
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label="Accounts"
                          name="Accounts"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                        />
                      ) : null}
                      {facility.type === "hospital" ||
                      facility.type === "pharmacy" ||
                      facility.type === "diagnosticCenter"
                        ? allModule.account.type.map((item) =>
                            isChecked("Accounts") ? (
                              <CheckBoxItem
                                className="font-weight-bold ml-4 m-0 pr-3"
                                label={item}
                                name={item}
                                handleCheck={handleFunctionalities}
                                value={functionalities}
                              />
                            ) : null
                          )
                        : null}
                    </div>

                    <div className="col-md-3 col-lg-3">
                      {facility.type === "hospital" && (
                        <CheckBoxNormal
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label="Theater"
                          name="Theater"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                        />
                      )}
                      {facility.type === "hospital" &&
                        allModule.theater.type.map((item) =>
                          isChecked("Theater") ? (
                            <CheckBoxItem
                              className="font-weight-bold ml-4 m-0 pr-3"
                              label={item}
                              name={item}
                              handleCheck={handleFunctionalities}
                              value={functionalities}
                            />
                          ) : null
                        )}
                      {facility.type === "hospital" && (
                        <CheckBoxNormal
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label="Doctors"
                          name="Doctors"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                        />
                      )}
                      {facility.type === "hospital" &&
                        allModule.doctor.type.map((item) =>
                          isChecked("Doctors") ? (
                            <CheckBoxItem
                              className="font-weight-bold ml-4 m-0 pr-3"
                              label={item}
                              name={item}
                              handleCheck={handleFunctionalities}
                              value={functionalities}
                            />
                          ) : null
                        )}

                   
                        <CheckBoxNormal
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label="Appointments"
                          name="Appointments"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                        />
                  
                      {facility.type === "hospital" &&
                        allModule.doctor.type.map((item) =>
                          isChecked("Appointments") ? (
                            <CheckBoxItem
                              className="font-weight-bold ml-4 m-0 pr-3"
                              label={item}
                              name={item}
                              handleCheck={handleFunctionalities}
                              value={functionalities}
                            />
                          ) : null
                        )}
                    </div>
                    <div className="col-md-3 ">
                      {facility.type === "hospital" ||
                      facility.type === "pharmacy" ? (
                        <CheckBoxNormal
                          className="font-weight-bold ml-4 m-0 pr-3"
                          label="Pharmacy"
                          name="Pharmacy"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                        />
                      ) : null}
                      {facility.type === "hospital" ||
                      facility.type === "pharmacy"
                        ? allModule.pharmacy.type.map((item) =>
                            isChecked("Pharmacy") ? (
                              <CheckBoxItem
                                className="font-weight-bold ml-4 m-0 pr-3"
                                label={item}
                                name={item}
                                handleCheck={handleFunctionalities}
                                value={functionalities}
                              />
                            ) : null
                          )
                        : null}
                    </div>
                    <div className="col-md-3">
                      {facility.type === "hospital" ||
                      facility.type === "pharmacy" ||
                      facility.type === "diagnosticCenter" ? (
                        <CheckBoxNormal
                          label="Admin"
                          name="Admin"
                          handleCheck={handleCheckboxChange}
                          value={accessTo}
                          className="font-weight-bold ml-4 m-0 pr-3"
                        />
                      ) : null}
                      {facility.type === "hospital" ||
                      facility.type === "pharmacy" ||
                      facility.type === "diagnosticCenter"
                        ? allModule.admin.type.map((item) =>
                            isChecked("Admin") ? (
                              <CheckBoxItem
                                label={item}
                                name={item}
                                handleCheck={handleFunctionalities}
                                value={functionalities}
                              />
                            ) : null
                          )
                        : null}
                    </div>
                  </div>
                </div>
              </FormGroup>
            </Form>
            {error !== "" ? (
              <center>
                <p style={{ color: "red" }}>{error}</p>
              </center>
            ) : null}
          </CardBody>

          <CardFooter>
            <Button
              color="primary"
              outline
              className="offset-md-5 col-md-2 offset-lg-5 col-lg-2"
            >
              {creatingUser ? <LoadingSM /> : "Create User"}
            </Button>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}

export function ModuleComponent({
  facility = {},
  functionalities,
  accessTo = [],
  handleCheckboxChange,
  handleFunctionalities,
}) {
  const isChecked = (name) => accessTo.includes(name);
  return (
    <FormGroup row>
      <div className="col-md-12 col-lg-12">
        <h6>Access (User's Privilege)</h6>
        <div className="row">
          <div className={isChecked("Laboratory") ? "col-md-6" : "col-md-3"}>
            <div className="row">
              {facility.type === "hospital" ||
              facility.type === "diagnosticCenter" ? (
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
              facility.type === "hospital" ||
              facility.type === "diagnosticCenter"
                ? allModule.laboratory.type.map((item) => (
                    <div className="col-md-6">
                      {isChecked("Laboratory") ? (
                        <CheckBoxItem
                          label={item}
                          name={item}
                          handleCheck={handleFunctionalities}
                          value={functionalities}
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
                  handleCheck={handleFunctionalities}
                  value={functionalities}
                />
              ) : null
            )}
          </div>
          <div className="col-md-3">
            {facility.type === "hospital" ||
            facility.type === "pharmacy" ||
            facility.type === "diagnosticCenter" ? (
              <CheckBoxNormal
                label="Admin"
                name="Admin"
                handleCheck={handleCheckboxChange}
                value={accessTo}
                className="font-weight-bold ml-4 m-0 pl-3"
              />
            ) : null}
            {facility.type === "hospital" ||
            facility.type === "pharmacy" ||
            facility.type === "diagnosticCenter"
              ? allModule.admin.type.map((item) =>
                  isChecked("Admin") ? (
                    <CheckBoxItem
                      label={item}
                      name={item}
                      handleCheck={handleFunctionalities}
                      value={functionalities}
                    />
                  ) : null
                )
              : null}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-lg-3">
            {facility.type === "hospital" && (
              <CheckBoxNormal
                className="font-weight-bold ml-4 m-0 pr-3"
                label="Maintenance"
                name="Maintenance"
                handleCheck={handleCheckboxChange}
                value={accessTo}
              />
            )}
            {facility.type === "hospital" ? (
              <CheckBoxNormal
                className="font-weight-bold ml-4 m-0 pr-3"
                label="Records"
                name="Records"
                handleCheck={handleCheckboxChange}
                value={accessTo}
              />
            ) : null}
            {facility.type === "hospital"
              ? allModule.records.type.map((item) =>
                  isChecked("Records") ? (
                    <CheckBoxItem
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label={item}
                      name={item}
                      handleCheck={handleFunctionalities}
                      value={functionalities}
                    />
                  ) : null
                )
              : null}

            {facility.type === "hospital" ||
            facility.type === "pharmacy" ||
            facility.type === "diagnosticCenter" ? (
              <CheckBoxNormal
                className="font-weight-bold ml-4 m-0 pr-3"
                label="Accounts"
                name="Accounts"
                handleCheck={handleCheckboxChange}
                value={accessTo}
              />
            ) : null}
            {facility.type === "hospital" ||
            facility.type === "pharmacy" ||
            facility.type === "diagnosticCenter"
              ? allModule.account.type.map((item) =>
                  isChecked("Accounts") ? (
                    <CheckBoxItem
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label={item}
                      name={item}
                      handleCheck={handleFunctionalities}
                      value={functionalities}
                    />
                  ) : null
                )
              : null}
          </div>
          <div className="col-md-3 col-lg-3">
            {facility.type === "hospital" && (
              <CheckBoxNormal
                className="font-weight-bold ml-4 m-0 pr-3"
                label="Theater"
                name="Theater"
                handleCheck={handleCheckboxChange}
                value={accessTo}
              />
            )}
            {facility.type === "hospital" &&
              allModule.theater.type.map((item) =>
                isChecked("Theater") ? (
                  <CheckBoxItem
                    className="font-weight-bold ml-4 m-0 pr-3"
                    label={item}
                    name={item}
                    handleCheck={handleFunctionalities}
                    value={functionalities}
                  />
                ) : null
              )}
            {facility.type === "hospital" && (
              <CheckBoxNormal
                className="font-weight-bold ml-4 m-0 pr-3"
                label="Doctors"
                name="Doctors"
                handleCheck={handleCheckboxChange}
                value={accessTo}
              />
            )}
            {facility.type === "hospital" &&
              allModule.doctor.type.map((item) =>
                isChecked("Doctors") ? (
                  <CheckBoxItem
                    className="font-weight-bold ml-4 m-0 pr-3"
                    label={item}
                    name={item}
                    handleCheck={handleFunctionalities}
                    value={functionalities}
                  />
                ) : null
              )}
          </div>
          <div className="col-md-3 ">
            {facility.type === "hospital" || facility.type === "pharmacy" ? (
              <CheckBoxNormal
                className="font-weight-bold ml-4 m-0 pr-3"
                label="Pharmacy"
                name="Pharmacy"
                handleCheck={handleCheckboxChange}
                value={accessTo}
              />
            ) : null}
            {facility.type === "hospital" || facility.type === "pharmacy"
              ? allModule.pharmacy.type.map((item) =>
                  isChecked("Pharmacy") ? (
                    <CheckBoxItem
                      className="font-weight-bold ml-4 m-0 pr-3"
                      label={item}
                      name={item}
                      handleCheck={handleFunctionalities}
                      value={functionalities}
                    />
                  ) : null
                )
              : null}
          </div>
         
        </div>
      </div>
    </FormGroup>
  );
}

function mapStateToProps({ auth, facility }) {
  return {
    user: auth.user,
    creatingUser: auth.creatingUser,
    roles: auth.roles,
    facility: facility.info,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (data, success, err) =>
      dispatch(createUser(data, success, err)),
    getRoles: () => dispatch(getRoles()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUser);
