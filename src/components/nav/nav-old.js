import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'
// import logo from './images/nol.png';
// import logo from '../../images/logo-p.jpg';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { compose } from 'redux'
import UserAvatar from '../user/Avatar'
// import Notifications from '../notifications/Notifications';
import NavModules from './nav-modules'
import NavUserInfo from './userInfo'
// import CustomButton from "../comp/components/Button";
// import { facilityDetails } from "../comp/pdf-templates/deposit-receipt";

class NavbarNow extends PureComponent {
  state = {
    isOpen: false,
    user: null,
    netStat: 'offline',
    dropdownOpen: false,
    isProfileOpen: false,
    // isMobile: false,
  }

  componentDidMount() {
    document.title = this.props.facilityInfo.facility_name
    this.getUser()

    // if (this.props.history.action === 'PUSH') {
    //   console.log('wait a bit before checking auth stat')
    //   setTimeout(
    //     checkAuthStatus(
    //       () => console.log('yeah'),
    //       () => this.gotoLogin(),
    //     ),
    //     2000,
    //   )
    // } else {
    //   checkAuthStatus(
    //     () => console.log('logged in'),
    //     () => this.gotoLogin(),
    //   )
    // }
    if (navigator.onLine) {
      this.setState({ netStat: 'online' })
    }
    window.addEventListener('online', this.onNetOn)
    window.addEventListener('offline', this.onNetOff)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onNetOn)
    window.removeEventListener('offline', this.onNetOff)
  }

  onNetOn = () => this.setState({ netStat: 'online' })

  onNetOff = () => this.setState({ netStat: 'offline' })

  getUser() {
    let savedUser = localStorage.getItem('user') || ''
    this.setState({ user: savedUser })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  toggleDropdown = () =>
    this.setState((prev) => ({
      dropdownOpen: !prev.dropdownOpen,
    }))

  gotoLogin = () => {
    this.props.history.push('/auth')
  }

  // gotoReport = () => {
  //   this.props.history.push("/me/lab/patients/reports");
  // };
  gotoHome = () => {
    this.props.history.push('/')
  }

  logout = () => {
    this.props.logout(() => this.gotoLogin())
  }

  render() {
    const {
      props: { user, isMobile, facilityInfo },
    } = this

    const hasMoreAccess = user.accessTo && user.accessTo.length > 1
    const isDiagnostics = facilityInfo.type === 'diagnosticCenter'

    return (
      <Navbar
        dark
        expand="md"
        style={{
          minHeight: '40px',
          padding: 0,
          margin: 0,
          // paddingRight: 5,
          backgroundColor: '#0069D9',
        }}
      >
        <NavbarBrand onClick={this.gotoHome}>
          <img
            src={require('../../images/logo.png')}
            // src={require('../../images/pscprime_logo.png')}
            // src={require("../../images/logo.png")}
            // src={facilityInfo.logo}
            // src={facilityInfo.logo}
            alt="logo"
            height="30"
            // width="auto"
            style={{
              margin: '0 5px',
            }}
          />

          {/* <h4 className="logoText">HMS</h4> */}
        </NavbarBrand>

        {/* <h1>OPTIMUM DIAGNOSTICS AND CLINICAL SERVICES LIMITED</h1> */}
        {/* {user.accessTo && user.accessTo <= 1 ? (
        ) : null} */}

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {isMobile ? (
            <div
              style={{
                margin: '0 10px',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {/* <Notifications /> */}
              <UserAvatar logout={this.logout} />
            </div>
          ) : null}
          <NavbarToggler onClick={this.toggle} />
        </div>

        <Collapse
          isOpen={this.state.isOpen}
          navbar
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {hasMoreAccess ? (
              <NavModules user={user} toggle={this.toggle} />
            ) : (
              // : user.accessTo ? (
              //   hasAccess(user, ["Doctors"]) && user.accessTo.length === 1 ? (
              //     <SideNav toggle={this.toggle} />
              //   ) : null
              // )
              <h2 className="text-white text-center">
                {facilityInfo.facility_name !== 'MyLikita'
                  ? facilityInfo.facility_name.toUpperCase()
                  : null}
              </h2>
            )}

            {/* {isMobile ?  
             // <NavDoc />
              {/* : null} */}
          </div>

          {
            !isMobile ? (
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* {canUseThis(user, ["Registrations"]) && (
                <div>

                  <CustomButton
                    color="info"
                    // style={{marginLeft: "65em"}}
                    className="mr-2"
                    onClick={() => {
                      this.props.history.push("/me/lab/patients/work-list");
                    }}
                  >
                    Work List
                  </CustomButton>

                  <CustomButton
                    color="info"
                    // style={{marginLeft: "65em"}}
                    // className="float-right"
                    onClick={() => {
                      this.props.history.push("/me/lab/patients/reports");
                    }}
                  >
                    Reports
                  </CustomButton>
                </div>
              )} */}
                {
                  isDiagnostics ? <NavUserInfo logout={this.logout} /> : null
                  // <button
                  //   className="btn btn-danger mr-1"
                  //   onClick={() => {
                  //     this.props.history.push("/me/report_issues");
                  //     this.toggle();
                  //   }}
                  // >
                  //   <GoIssueOpened size={20} className="mr-1" /> Report Issues
                  // </button>
                }

                {/* <Notifications /> */}
                <UserAvatar logout={this.logout} />
              </div>
            ) : null
            // <button
            //   className="btn btn-danger"
            //   onClick={() => {
            //     this.props.history.push("/me/report_issues");
            //     this.toggle();
            //   }}
            // >
            //   <GoIssueOpened size={20} className="mr-1" /> Report Issues
            // </button>
          }
        </Collapse>

        {/* <div onClick={this.gotoHome}>
          <img
            src={require('../../images/logo.png')}
            // src={require("../../images/pscprime_logo.png")}
            // src={require("../../images/logo.png")}
            // src={facilityInfo.logo}
            // src={facilityInfo.logo}
            alt="logo"
            height="30"
            // width="auto"
            style={{
              margin: '0 5px',
            }}
          />
        </div> */}
      </Navbar>
    )
  }
}

function mapStateToProps({ auth, facility, app }) {
  return {
    user: auth.user,
    facilityInfo: facility.info,
    isMobile: app.isMobile,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: (cb) => dispatch(logout(cb)),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(NavbarNow)
