import React, { useState } from 'react';
import { Card } from 'reactstrap';
import { MdSend } from 'react-icons/md';
import { FiCheckCircle } from 'react-icons/fi';
import BackButton from '../../comp/components/BackButton';
import fire from '../../../redux/actions/firebase';
import { _warningNotify } from '../../utils/helpers';
import PublicWrapper from '../../../routes/PublicWrapper';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, toggle] = useState(false);

  const _send = () => {
    toggle(true);
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        toggle(false);
        setSent(true);
      })
      .catch((err) => {
        console.log(err);
        toggle(false);
        _warningNotify('An error occured, please try again later.');
      });
  };

  return (
    <PublicWrapper>
      {sent ? (
        <InviteSuccess />
      ) : (
        <div className="row m-0">
          <Card className="p-4 mt-5 offset-md-3 col-md-6">
            <BackButton text="Go Back" />
            <img
              alt="forgot-password"
              src={require('../../../images/forgot_password.svg')}
              width="300px"
              className="d-flex flex-column align-items-center offset-md-4 col-md-4"
            />
            <h4 className="text-center m-2">Lost your Password?</h4>
            <h6 className="text-center m-2">
              Put your registered email address below, we will send you a
              recovery mail.
            </h6>
            {/* <label htmlFor="info">Email/Phone Number</label> */}
            <div className="d-flex flex-row input-group mt-3">
              <input
                id="email"
                type="text"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Type your email address"
              />
              <div class="input-group-append">
                <button
                  className="btn btn-success btn-lg"
                  disabled={loading || email === ''}
                  onClick={_send}
                >
                  <MdSend size={20} className="mr-1" /> Send
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </PublicWrapper>
  );
}

function InviteSuccess() {
  return (
    <div className="row">
      <Card
        body
        className="d-flex flex-column align-items-center offset-md-4 col-md-4 mt-5"
      >
        <FiCheckCircle size={100} className="text-success" />
        <h1>Mail sent</h1>
        <p>Please check mail to continue with account reset</p>
        {/* <BackButton text="Go Back" /> */}
        <Link to="/auth">Login now</Link>
      </Card>
    </div>
  );
}

export default ForgetPassword;
