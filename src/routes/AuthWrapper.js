import React from 'react'
import { connect } from 'react-redux'
import {
  loadUser,
  // authDB
} from '../redux/actions/auth'
import { getFacilityInfo } from '../redux/actions/facility'
import Footer from '../components/comp/components/Footer'
import Navbar from '../components/nav/nav-old'
// import { getFacilityInfo } from '../redux/actions/facility';

class AuthWrapper extends React.PureComponent {
  componentDidMount() {
    this.props.getFacilityInfo()
    if (!this.props.authenticated) {
      this.props.loadUser(
        this.goToLogin,
        (info) => (document.title = info.facility_name),
      )
    } else {
      // this.props.getFacilityInfo();
    }
  }

  goToLogin = () => {
    // this.props.history.push('/auth')
    console.log('go to login')
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div style={{ height: '5px' }} />
        <main>{this.props.children}</main>
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps({ auth }) {
  return { authenticated: auth.authenticated }
}

function mapDispatchToProps(dispatch) {
  return {
    loadUser: (err, cb) => dispatch(loadUser(err, cb)),
    getFacilityInfo: () => dispatch(getFacilityInfo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthWrapper)
