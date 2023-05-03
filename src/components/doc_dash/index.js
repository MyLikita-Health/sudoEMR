import React from 'react'

import DocMain from './main'

function DoctorDashboard() {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);
  // useEffect(() => dispatch(getNotifications()), []);
  return (
    <>
        {/* <DocNav /> */}
      <div className="row p-0 m-0">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <DocMain />
        </div>
      </div>
    </>
  )
}

export default DoctorDashboard
