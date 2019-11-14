import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { callbackify } from 'util';

const mapStyles = {
  width: '95%',
  height: '25%'
};

 class MapContainer extends Component {
state={
  lat:'-1.2884',
  lng:'36.8233',
}
componentDidMount(){
  const callback=(lat,lng)=>{
    this.setState(
      {
        lat,
        lng
      }
    )
  }
  navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    callback(lat,lng)
  })
}
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: this.state.lat,
         lng: this.state.lng
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCO5EH4fewbHSgGKqGKEyygqXxqYVZcm_o'
})(MapContainer);