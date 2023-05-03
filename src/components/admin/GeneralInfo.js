import React from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, CardBody, Form, FormGroup } from "reactstrap";
import ProfilePicture from "./ProfilePicture";

export default function GeneralInfo() {
  const facility = useSelector((state) => state.facility.info);
  return (
    <Card>
      <CardHeader tag="h5" className="text-center">
        Settings
      </CardHeader>
      <CardBody>
        <div className="d-flex flex-direction-column align-items-center justify-content-center">
          <ProfilePicture />
        </div>
        <h5 className="text-center mt-1">
          {facility.name && facility.name.toUpperCase()}
        </h5>
        <Form>
          {/* <FormGroup row>
               <div className="col-md-6 col-lg-6">
                  <label>Facilities Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    autoFocus
                    // value={firstname}
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Prefix</label>
                  <input
                    className="form-control"
                    type="text"
                    name="prefix"
                    // value={lastname}
                    // onChange={handleChange}
                  />
                </div>
              </FormGroup> */}
          <FormGroup row>
            <div className="col-md-6 col-lg-6">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                // value={username}
                // onChange={handleChange}
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                // value={email}
                // onChange={handleChange}
              />
            </div>
          </FormGroup>

          <FormGroup row>
            <div className="col-md-6 col-lg-6">
              <label>Change the password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                // value={password}
                // onChange={handleChange}
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <label>Role</label>
              <input
                // onChange={handleChange}
                name="role"
                type="text"
                list="role"
                className="form-control"
                // placeholder="Role"
              />
            </div>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}
