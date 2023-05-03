import React from "react";
import { useHistory } from "react-router";
import "./widget-style.css";
import { useSelector } from "react-redux";

const Widget = ({ fa, link, title, content, id }) => {
  // const {activeBusiness} = useSelector((state) => state.auth);
  const navigate = useHistory();

  return (
    <div className={`col-xl-3 col-lg-3 col-sm-6 col-s-6`}>
      <a
        href={`#${link}`}
        onClick={(e) => {
          e.preventDefault();
          navigate.push(link);
        }}
      >
        <div
          className="card-widget bg-primary"
          // style={{background:activeBusiness.primary_color}}
        >
          <div className="card-statistic-3 p-4">
            <div className="card-icon card-icon-large text-light">
              <i style={{ fontSize: 50 }} className={`fas ${fa}`}></i>
            </div>
            <div className="mb-4">
              <h3 className="card-title mb-0  text-white text-left">{title}</h3>
            </div>
            <div className="row align-items-center mb-2 d-flex">
              <div className="col-12">
                <h5 className="text-white mb-0 text-right">
                  {content}{" "}
                  <i className="text-xl text-white fa fa-chevron-circle-right"></i>
                </h5>
              </div>
              {/* <div className="col-3 col-md-3 offset-8 text-right"
								style={{ opacity: .8 }} >
							</div> */}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Widget;
