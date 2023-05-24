import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "react-dropzone-uploader/dist/styles.css";
import "./styles/index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMobileView } from "./redux/actions/app";
// import Login from "./components/auth/login/login";
import ResultViewer from "./components/auth/results-viewer/Credentials";
import ResultIndex from "./components/auth/results-viewer/ResultIndex";
import AuthenticatedContainer from "./routes/AuthenticatedContainer";
import DoctorReg from "./components/auth/registration/doctor-reg";
import ForgetPassword from "./components/auth/login/ForgetPassword";
import PageNotFound from "./components/comp/components/PageNotFound";
import PatientApp from "./components/patient/pages";
import SignUp from "./components/auth/registration/signUp";
import Hospital from "./components/auth/registration/hospital-reg";
import PatientRegistration from "./components/auth/registration/patient-reg";
import Admin from "./components/admin";
import { init } from "./redux/actions/auth";
import { useSelector } from "react-redux";
import LoadingComp from "./components/comp/components/LoadingComp";
import NewRegistration from "./components/auth/login/NewRegistration";
import NewLogin from "./components/auth/login/NewLogin";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { fullPageLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const resize = () => {
    dispatch(toggleMobileView(window.innerWidth <= 760));
  };

  useEffect(() => {
    dispatch(init(history, location));
  }, [init]);

  if (fullPageLoading) {
    return <LoadingComp />;
  }

  return (
    <Switch>
      <Redirect from="/" to="/auth" exact />
      <Route path="/auth" component={NewLogin} />
      <Route path="/result-viewer" component={ResultViewer} />
      <Route
        path="/result-index/:patientId/:labNo"
        component={(props) => <ResultIndex {...props} />}
      />
      <Route exact path="/signup/doctor" component={DoctorReg} />
      <Route exact path="/signup/patient" component={PatientRegistration} />
      <Route
        exact
        path="/signup/patient/:patientId"
        component={PatientRegistration}
      />
      <Route exact path="/signup/doctor/:referralId" component={DoctorReg} />
      <Route path="/signup/hospital">
        <NewRegistration />
      </Route>
      <Route path="/signup/pharmacy">
        <Hospital type="Pharmacy" />
      </Route>
      <Route path="/signup/laboratory">
        <Hospital type="Laboratory" />
      </Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/forgotpassword" component={ForgetPassword} />
      <Route path="/me" component={AuthenticatedContainer} />
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={PatientApp} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
