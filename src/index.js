import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import history from "./history";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/utils/error-boundary/MyErrorBoundary";
// import "react-image-gallery/styles/css/image-gallery.css";
// import Maintenance from '.maintenance-page/maintenance'
// import Admin from './components/AdminModule/Admin'

import registerServiceWorker from "./registerServiceWorker";

render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
