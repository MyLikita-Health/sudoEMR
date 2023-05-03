/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Form, FormGroup } from "reactstrap";
import { Switch } from "evergreen-ui";
import Button from "reactstrap/lib/Button";

export default function NetworkSetting() {
  const [state, setState] = useState(false);
  const [ipAd, setIpAd] = useState("");
  const handleChange = (e) => {
    setState(!state);
  };

  useEffect(() => {
    let existingIp = localStorage.getItem("ipAddr");
    if (existingIp) {
      setState(true);
      setIpAd(existingIp);
    }
  }, []);

  const handleSave = () => {
    if (ipAd && ipAd !== "") {
      localStorage.setItem("ipAddr", ipAd);
    }
  };

  return (
    <Card>
      <CardHeader tag="h">Network Configuration</CardHeader>
      <CardBody>
        <Switch height={24} checked checked={state} onChange={handleChange} />
        {state ? (
          <Form>
            <FormGroup row>
              <div className="col-md-12 col-lg-12">
                <label>Ip address</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  // autoFocus
                  value={ipAd}
                  onChange={(e) => setIpAd(e.target.value)}
                />
              </div>
            </FormGroup>
          </Form>
        ) : null}

        <Button onClick={handleSave}>Save</Button>
      </CardBody>
    </Card>
  );
}
