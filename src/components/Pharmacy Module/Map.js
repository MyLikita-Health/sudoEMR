import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '25%'
};

 class MapContainer extends Component {
state={
  lat:'-1.2884',
  lng:'36.8233',
}
componentDidMount(){
  navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
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
  apiKey: 'AIzaSyAGU-rOOhYdaYRw7aKpMwWEfN2hd9h-6Nk'
})(MapContainer);