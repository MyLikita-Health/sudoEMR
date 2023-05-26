//importing neccessary modules
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import { getAssignedToday, getWaitingList, removePatientAssignment } from "./actions/bed-allocation";
import { useEffect } from "react";
import ListTabs from "./doctors/Tabs";

/**
 * This component renders the table consisting of the
 * assigned for a particular date
 */
const PatientAssignedToday = (props) => {
  //  const [list, setList ] = useState([])
  //  const [loading, toggle] = useState(false)
  // const [error, setError] = useState('');
  const dispatch = useDispatch();

  const loading = useSelector(
    (state) => state.diagnosis.gettingPatientAssignedToday
  );
  const list = useSelector((state) => state.diagnosis.patientAssignedToday);
  const waitingList = useSelector((state) => state.diagnosis.waitingList);

  const getPatientsAssignedToday = useCallback(() => {
    // setError('getting assigned today')
    dispatch(getAssignedToday());
    dispatch(getWaitingList());
  }, []);

  useEffect(() => {
    getPatientsAssignedToday()
    
    let refresh = setInterval(() => {
      getPatientsAssignedToday()
    }, 20000);

    return () => {
      clearInterval(refresh)
    }
  }, []);

  /**
   * create fetch method to fetch list of doctors with the corresponding total
   * number of patients from the database
   */



  /**
   * when component has been mounted, the list of patients assigned for
   * for a paticular doctor is fetched from the database
   */
  // componentDidMount() {
  //   this.fetchData();
  //   // this.props.getPatientAssignedToday()
  // }

  const undoPatientAssignment = (item) => {
    // console.log(item, 'sdfsdf')
    dispatch(removePatientAssignment(item))
  }

  return (
    <Card className="p-2 pt-0">
      <Scrollbars style={{ height: "75vh" }}>
        <ListTabs 
          loading={loading} 
          list={list} 
          waitingList={waitingList} 
          undoPatientAssignment={undoPatientAssignment} 
        />
      </Scrollbars>
    </Card>
  );
};

export default PatientAssignedToday;
