import React, { Component } from 'react';
// import './style.css'

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
        <>
          <div id="clouds">
              <div className="cloud x1"></div>
              <div className="cloud x1_5"></div>
              <div className="cloud x2"></div>
              <div className="cloud x3"></div>
              <div className="cloud x4"></div>
              <div className="cloud x5"></div>
          </div>
          <div className='c'>
              <div className='_404'>ERROR</div>
              <hr />
              <div className='_1'>Sorry, An Error Occured</div>
              <button className='btn' onClick={() => window.location.reload()}>Back to Home</button>
          </div>
        </>
       
      )
    }
    return this.props.children;
  }
}
