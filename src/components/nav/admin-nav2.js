import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav2.css';

export default () => {
  // const drop = e => {
  //   e.preventDefault();
  // };
  return (
    <div id="navigation">
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>{' '}
      {/*<!-- .site-mobile-menu -->*/}
      <header className="site-navbar py-1" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0">
                <a href="index.html" className="text-black h2 mb-0">
                  Care<strong>Central</strong>
                </a>
              </h1>
            </div>

            <div className="col-10 col-xl-10 d-none d-xl-block">
              <nav className="site-navigation text-right" role="navigation">
                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <NavLink exact to="/patientlist" className="nav">
                      Records
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="/patient_clarking" className="nav">
                      Doctors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/patient_clarking" className="nav">
                      Pharmacy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/patient_clarking" className="nav">
                      Laboratory
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/patient_clarking" className="nav">
                      Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/patient_clarking" className="nav">
                      Account
                    </NavLink>
                  </li>
                  <li>
                    {/* <a>
                      <span className="rounded bg-primary py-2 px-3 text-white">
                        <span className="h5 mr-2">+</span> Add a Clinic
                      </span>
                    </a> */}
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-6 col-xl-2 text-right d-block">
              <div
                className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                style={{ position: 'relative', top: '3px' }}>
                {/* <a
                  onClick={drop}
                  href="#"
                  className="site-menu-toggle js-menu-toggle text-black">
                  <span className="icon-menu h3" />
                  tra
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
