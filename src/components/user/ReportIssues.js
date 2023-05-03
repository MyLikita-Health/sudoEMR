import React, { useState } from "react";
import { Card } from "reactstrap";
import { MdSend } from "react-icons/md";
import BackButton from "../comp/components/BackButton";
import { FiCheckCircle } from "react-icons/fi";
import { _warningNotify } from "../utils/helpers";
import { _postApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { useSelector } from "react-redux";

function ReportIssues() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, toggleLoading] = useState(false);
  const userId = useSelector((state) => state.auth.user.id);

  const handleSubmit = () => {
    if (message === "") {
      _warningNotify("Please enter your message");
    } else {
      toggleLoading(true);
      _postApi(
        `${apiURL()}/users/reportissues`,
        { userId, message },
        () => {
          toggleLoading(false);
          setSent(true);
        },
        (err) => {
          console.log(err);
          _warningNotify("An error occured, please try again later");
        }
      );
    }
  };

  return (
    <>
      {sent ? (
        <InviteSuccess />
      ) : (
        <div className="row m-0">
          <Card className="p-4 mt-5 offset-md-3 col-md-6">
            <BackButton text="Go Back" />
            <h3 className="text-center m-2">Report an issue</h3>
            <h6 className="text-center m-2">Tell us what we can improve.</h6>
            <div className="d-flex flex-row justify-content-center">
              <img
                src={require("../../images/undraw_questions_75e0.svg")}
                alt="send_issue"
                style={{ height: 200, width: 200 }}
                className="img-fluid"
              />
            </div>
            {/* <label htmlFor="info">Email/Phone Number</label> */}
            <div className="d-flex flex-row mt-3">
              <textarea
                className="form-control"
                name="info"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your suggestions here"
              />
            </div>
            <center>
              <button
                className="btn btn-success btn-lg mt-4"
                onClick={() => handleSubmit()}
                disabled={loading || message === ""}
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    <MdSend size={20} className="mr-1" /> Send
                  </>
                )}
              </button>
            </center>
          </Card>
        </div>
      )}
    </>
  );
}

function InviteSuccess() {
  return (
    <div className="row m-0">
      <Card
        body
        className="d-flex flex-column align-items-center offset-md-4 col-md-4 mt-5"
      >
        <FiCheckCircle size={100} className="text-success m-2" />
        <h1 className="mb-2">Issue sent</h1>
        <h5 className="mb-5">Thank you.</h5>
        <BackButton text="Go Back" />
      </Card>
    </div>
  );
}

export default ReportIssues;
