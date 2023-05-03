import React, { useEffect } from 'react'
// import './index.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadUser, logout } from '../../redux/actions/auth'
import FullscreenLoading from '../comp/components/FullscreenLoading'
import ManagePatients from './ManagePatients'
import ManageDoctor from './ManageDoctor'
import AdminSidebar from './Sidebar'
import TopNav from './TopNav'
import Dashboard from './Dashboard'
import ManageFacilities from './ManageFacilities'
import Settings from './Settings'
import ManageAppointment from './ManageAppointment'
import Feedback from './Feedback'

function Admin() {
  const user = useSelector((state) => state.auth.user)
  const authenticated = useSelector((state) => state.auth.authenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!authenticated) {
      dispatch(
        loadUser(() => {
          console.log('logging out')
          dispatch(logout())
        }),
      )
    } else {
      if (user.userType !== 'admin') {
        console.log('logging out')
        dispatch(logout())
      }
    }
  }, [])

  if (user.userType !== 'admin') return null
  return (
    <div className="wrapper">
      <AdminSidebar />
      <div id="content">
        <TopNav />
        <div className="mt-1 p-3">
          <Switch>
            <Redirect exact from="/admin" to="/admin/dashboard" />
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/patients" component={ManagePatients} />
            <Route path="/admin/doctors" component={ManageDoctor} />
            <Route path="/admin/facilities" component={ManageFacilities} />
            <Route path="/admin/feedback" component={Feedback} />
            <Route path="/admin/appointment" component={ManageAppointment} />
            <Route path="/admin/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Admin
