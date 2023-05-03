import React from "react";
import { Link } from "react-router-dom";
// import { login } from "../../../redux/actions/result-viewer";

import { Spinner } from "evergreen-ui";
import "./login.css";
import Loading from "../../loading";
import PublicWrapper from "../../../routes/PublicWrapper";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardFooter,
  CardBody,
  Row,
} from "reactstrap";
import "./login.css";
import useForm from "./useForm";
import validator from "./validator";

const Login = ({ pageLoading }) => {
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    loading,
    hasError,
  } = useForm(validator);
  if (pageLoading) {
    return (
      <div style={{ marginTop: "40vh" }}>
        <Loading />
      </div>
    );
  }
  return (
    <PublicWrapper>
      <Row className="m-3">
        <img
          alt="bg"
          src={require("../../../images/callWitDoc.png")}
          className="img-fluid h-100 w-100"
          style={{ position: "absolute", zIndex: -1 }}
        />
        <Form className="login-form" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-center text-white">Check your lab result</h3>
            <CardBody className="bg-white p-3">
              {/* {JSON.stringify(hasError)} */}
              <FormGroup>
                <Label>Lab No. or Phone No.</Label>
                <Input
                  name="lab_no"
                  value={values.lab_no}
                  placeholder="Lab No. or Phone number"
                  onChange={handleChange}
                />
                {errors.lab_no && (
                  <span className="text-danger">{errors.lab_no}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Token</Label>
                <Input
                  name="token"
                  type="text"
                  value={values.token}
                  placeholder="Token"
                  onChange={handleChange}
                />
                {errors.token && (
                  <span className="text-danger">{errors.token}</span>
                )}
              </FormGroup>

              <Button className="btn-dark btn-block" disabled={hasError}>
                <>
                  {loading ? (
                    <center>
                      <Spinner size={30} className="text-white" />
                    </center>
                  ) : (
                    "Check Result"
                  )}
                </>
              </Button>
            </CardBody>
            <CardFooter className="m-0 bg-primary shadow">
              <div className="text-center text-white">
                <Link to="/forgottoken" className="text-light">
                  Didn't recieve token?
                </Link>
              </div>
            </CardFooter>
          </div>
        </Form>
      </Row>
    </PublicWrapper>
  );
};

export default Login;
