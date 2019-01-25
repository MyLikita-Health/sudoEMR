import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            {/* <li className="sidebar-search">
                    <div className="input-group custom-search-form">
                        <input type="text" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </li> */}
            <li>
              <a href="#">
                <i className="fa fa-dashboard fa-fw" /> Dashboard
              </a>
            </li>
            <br />
            <li>
              <a href="#">
                <i className="fa fa-bar-chart-o fa-fw" /> Charts
                {/* <span className="fa arrow"></span> */}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-table fa-fw" /> Tables
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-edit fa-fw" /> Forms
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-wrench fa-fw" /> UI Elements
                {/* <span className="fa arrow"></span> */}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-sitemap fa-fw" /> Multi-Level Dropdown
                {/* <span className="fa arrow"></span> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
