/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react"
import {Card, CardBody, CardHeader, Form, FormGroup} from 'reactstrap'
import { Switch } from "evergreen-ui";

export default function SMSConfiguration () {
    const [state, setState] = useState(false)
const handeSubmit = (e) => {
    setState(!state)
}
    return (
        <Card>
            <CardHeader tag="h5">
            SMS Configuration
            </CardHeader>
            <CardBody>
            <Switch height={24} checked 
            checked={state}
            onChange={handeSubmit}
            />
            {state ?  
            <Form>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <label>Account Sid:</label>
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
                  <label>Auth Token:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="AuthToken:"
                    // value={lastname}
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label>MobileNo From:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="MobileNoFrom"
                    // value={username}
                    // onChange={handleChange}
                  />
                </div>
                
              </FormGroup>
            </Form> : null}
            </CardBody>
        </Card>
    )
}