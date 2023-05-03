import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import "./style.css";

export default class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //you can log the error to an error reporting service
    this.logErrorToMyService(error, info);
  }

  logErrorToMyService(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <section className="page_404">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="col-sm-10 col-sm-offset-1  text-center">
                    <div className="four_zero_four_bg">
                      <h1 className="text-center ">404</h1>
                    </div>

                    <div className="contant_box_404">
                      <h3 className="h2">Oops!</h3>

                      <p>
                        Sorry, an error has occured, We will definitely get to
                        the bottom of this!
                      </p>
                      <button
                        onClick={() => {
                          window.location.reload();
                          this.props.history.goBack();
                        }}
                        className="btn btn-primary px-5"
                      >
                        <FaHome className="mr-1" />
                        Back to Home
                      </button>
                      {/* <a
                        onClick={() => {
                          window.location.reload();
                          this.props.history.goBack();
                        }}
                        className="link_404"
                      >
                        Go to Home
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
    return this.props.children;
  }
}
