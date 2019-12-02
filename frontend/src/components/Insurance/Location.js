import React, {Component} from 'react'
import { toaster } from 'evergreen-ui/commonjs/toaster';


class Location extends Component{
    state={
        isOpen: false,
        location: null,
        locationStatusMessage: '',

        locationStatus: false,
        locationLoading: false,
        isShow: false,
        state:[]
    };
    open = () => this.setState({ isOpen: true });

    close = () => this.setState({ isOpen: false });
    getLocation = (e) => {
      e.preventDefault()
      this.setState({ locationLoading:true})
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          console.log('fn called')
          // console.log('position');
          const coords = pos.coords;
          this.setState({
            location: {
              latitude: coords.latitude,
              longitude: coords.longitude,
            },
            locationLoading: false, 
            locationStatusMessage: 'Location taken',
            locationStatus: true,
          }, () => toaster.success('Location is captured'));
  
        }, (error) => {
          switch(error.code) {
            case error.PERMISSION_DENIED:
              this.setState({ locationLoading: false, 
                locationStatusMessage: "User denied the request for Geolocation." }) 
              break;
            case error.POSITION_UNAVAILABLE:
              this.setState({ locationLoading: false, 
                locationStatusMessage: "Location information is unavailable." })
              break;
            case error.TIMEOUT:
              this.setState({ locationLoading: false, 
                locationStatusMessage: "The request to get user location timed out."})
              break;
            case error.UNKNOWN_ERROR:
              this.setState({ locationLoading: false, 
                locationStatusMessage: "An unknown error occurred." })
              break;
          }
        });
      } else {
        this.setState({ locationLoading: false, locationStatusMessage: 'This device does not support location'})
        console.log('not supported')
      }
    };
      render(){
          return(
              <div>


<div style={{ margin: `1.5rem 0` }}>
  <button onClick={this.getLocation} >Add Location</button>
</div>
              </div>
          )
      }

}
export default Location;+