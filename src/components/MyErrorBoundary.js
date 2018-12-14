import React, { Component } from 'react';
// import Spinner from 'react-icons/lib/fa/spinner'
// import Refresh from 'react-icons/lib/fa/refresh'
// import Refresh2 from 'react-icons/lib/io/android-refresh'
import Refresh from 'react-icons/lib/io/ios-refresh'
// import Refresh4 from 'react-icons/lib/io/refresh'
// import Refresh5 from 'react-icons/lib/md/refresh'
// import Refresh6 from 'react-icons/lib/ti/refresh'
// import Refresh7 from 'react-icons/lib/ti/refresh-outline'
// import Restore from 'react-icons/lib/md/restore'
// import Reload from 'react-icons/lib/io/ios-reload'

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
        <section>
          <h1 className="text-cneter">Something went wrong.</h1>
          <button className="btn btn-outline-primary" title="Refresh" onClick={
            () => window.location.reload()
          }><Refresh size={200}  /></button>
        </section>
      )
    }

    return this.props.children;
  }
}
