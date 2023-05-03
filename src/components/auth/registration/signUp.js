import React from "react";
import { Card, CardTitle, Row, Container, Col } from "reactstrap";
import PublicWrapper from "../../../routes/PublicWrapper";
import { useHistory } from "react-router";

function SignUp() {
  const history = useHistory();
  return (
    <PublicWrapper>
      <Container>
        <center>
          <h2 style={{ marginTop: "60px" }}>Sign up as...</h2>
        </center>
        <br />

        <Row className="d-flex flex-direction-row justify-content-center">
          {/* <ButtonCard
            cardImg={require('../../../images/patient.svg')}
            title="Patient"
            onClick={() => history.push('/signup/patient')}
          />
          <ButtonCard
            cardImg={require('../../../images/doctors.svg')}
            title="Doctor"
            onClick={() => history.push('/signup/doctor')}
          /> */}

          <ButtonCard
            cardImg={require("../../../images/hospitals.svg")}
            title="Hospital"
            onClick={() => history.push("/signup/hospital")}
          />
          <ButtonCard
            cardImg={require("../../../images/pharmacy.svg")}
            title="Pharmacy"
            onClick={() =>
              window.open("https://app.pharmabooks.ng", "_blank", "noreferrer")
            }
          />

          {/* <ButtonCard
            cardImg={require('../../../images/lab.svg')}
            title="Laboratory"
            onClick={() => history.push('/signup/laboratory')}
          /> */}
        </Row>
      </Container>
    </PublicWrapper>
  );
}

function ButtonCard({ cardImg = null, title = "", onClick = (f) => f }) {
  return (
    <Col sm="3" style={{ paddingBottom: "40px" }}>
      <Card body className="btn" style={{ height: "95%" }} onClick={onClick}>
        <CardTitle>
          <center>
            <h5>{title}</h5>
          </center>
        </CardTitle>

        <img
          alt="cardImg"
          style={{ height: "auto", width: "100% ", maxWidth: "400px" }}
          className="img-fluid br-3"
          src={cardImg}
        />
      </Card>
    </Col>
  );
}

export default SignUp;
