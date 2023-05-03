import React, { useState } from "react"
import {Card, CardBody, CardHeader, Form, FormGroup} from 'reactstrap'
import { Switch } from "evergreen-ui";

export default function EmailConfiguration () {
    const [state, setState] = useState(false)

const handeSubmit = (e) => {
    setState(!state)
}
    return (
        <Card>
            <CardHeader tag="h5">
            Email Configuration
            </CardHeader>
            <CardBody>
            <Switch height={24} checked 
            // eslint-disable-next-line react/jsx-no-duplicate-props
            checked={state}
            onChange={handeSubmit}
            />
            {state ? <Form>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <label>Host</label>
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
                  <label>Port</label>
                  <input
                    className="form-control"
                    type="text"
                    name="port"
                    // value={lastname}
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Secure:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="secure"
                    // value={username}
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Username:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    // value={username}
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>Password:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="password"
                    // value={password}
                    // onChange={handleChange}
                  />
                </div>
              </FormGroup>
            </Form> : null }
            </CardBody>
        </Card>
    )
}