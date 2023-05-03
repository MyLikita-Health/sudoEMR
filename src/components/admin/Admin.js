import React, { Component } from 'react'
import { connect } from 'react-redux'
// import FullscreenLoading from '../comp/components/FullscreenLoading'
// import { AccountGuide } from '../Guides';
import { Tabs } from './AdminDashboard'
import AdminDashboard from './AdminDashboard'

class Admin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: false,
      isRoute: true,
      depositRequest: [],
      user: null,
      component: 'ManageStaff',
    }
  }

  toggleRoute = () => {
    this.setState((prevState) => ({ isRoute: !prevState.isRoute }))
  }

  componentDidMount() {
    let user = localStorage.getItem('user') || ''
    this.setState({ user })
  }

  setComponentToRender = (component) => this.setState({ component })

  render() {
    const {
      props: { user, role },
      state: { depositRequest, isRoute, component },
      setComponentToRender,
    } = this
    return (
      <div className="row" style={{ margin: 0 }}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <Tabs
            setComponentToRender={setComponentToRender}
            component={component}
            user={user}
          />
        </div>
        <div className=" col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <div>
            <AdminDashboard
              component={component}
              depositRequest={depositRequest}
              req={this.state.currentReq}
              isRoute={isRoute}
              toggleRoute={this.toggleRoute}
              role={role}
            />
          </div>
          {/*<div> <PatientDeposit /> </div>*/}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  role: auth.user.role,
  user: auth.user.username,
})

export default connect(mapStateToProps)(Admin)
//role: "developer"
