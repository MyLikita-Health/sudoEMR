import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import sudoEMR from '../../../images/sudoEMR..png'
import { Modal } from 'reactstrap'
import LoginModal from './LoginModal'
import { TextInput } from '../../comp/components'
export default function NewRegistration() {
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    setOpenModal(true)

    return () => {
      setOpenModal(false)
    }
  }, [])

  return (
    <div className="auth_div">
      <LoginModal
        openModal={openModal}
        onClick={() => setOpenModal}
        closeModal={() => setOpenModal(false)}
      />
      <Row>
        <Col md={5} className="auth_left_col">
          <Row className="">
            <Col md={1}></Col>
            <Col md={10} className="text-white eddddd">
              <div>
                <img src={sudoEMR} className="auth_logo" alt="sudoEMR logo" />
                <h2>company slogan should be here...</h2>
                <div className="disc_div">
                  <h5>Disclosure & Consent</h5>
                  <p>
                    Before proceeding, you must confirm that you have read and
                    agree to the terms of the sudoEMR disclosure available at
                    the link below.
                  </p>

                  <a href="">sudoEMR Disclosure</a>
                  <div>
                    <button
                      className="app_primary_button auth_button_2 pl-5 pr-5"
                      onClick={() => setOpenModal(true)}
                    >
                      Login to your account
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Col>
        <Col md={7} className="auth_right_col p-5">
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Row>
                <Col md={6}>
                  <h2 className="auth_heading">Register</h2>
                </Col>
                <Col md={6}>
                  <p className="already_have_account">
                    Already have an account?{' '}
                    <span
                      className="login_text"
                      onClick={() => setOpenModal(true)}
                    >
                      Login
                    </span>
                  </p>
                </Col>
              </Row>
              <h5 className="auth_heading mt-4">Hospital Information</h5>
              <Row>
                <Col md={6}>
                  <label className="input_label mt-2">
                    Hospital Name <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>
                <Col md={6}>
                  <label className="input_label mt-2">
                    Prefix (Hospital File Format){' '}
                    <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>{' '}
                <Col md={6}>
                  <label className="input_label mt-2">
                    Hospital Address <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>
              </Row>

              {/* ////////////////////////////////////////////////////////////////// */}

              <h5 className="auth_heading mt-5">User Information</h5>
              <Row>
                <Col md={6}>
                  <label className="input_label mt-2">
                    First Name <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>
                <Col md={6}>
                  <label className="input_label mt-2">
                    Last Name <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>{' '}
                <Col md={6}>
                  <label className="input_label mt-2">
                    Email <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>
                <Col md={6}>
                  <label className="input_label mt-2">
                    Phone Number <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>
                <Col md={6}>
                  <label className="input_label mt-2">
                    Username <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>{' '}
                <Col md={6}>
                  <label className="input_label mt-2">
                    Password <span className="star">*</span>
                  </label>
                  <div>
                    <TextInput />
                  </div>
                </Col>
              </Row>
              <hr className="mt-5 mb-5" />
              <Row className="d-flex align-items-center">
                <Col md={7}>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      I have read and agree to the terms of{' '}
                      <span className="login_text">sudoEMR</span>
                    </label>
                  </div>
                </Col>
                <Col md={5}>
                  <div>
                    <button className="app_primary_button auth_button_1 pl-5 pr-5">
                      Register
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
