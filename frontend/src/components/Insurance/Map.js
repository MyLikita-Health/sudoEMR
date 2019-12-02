// import React, {Component} from 'react'
// import {withGoogleMap,GoogleMap, withScriptjs, InfoWindow, Marker} from 'react-google-maps'
// import { FaCentercode } from 'react-icons/fa'

// class Map extends Component{
//   class={
//     state={
//       city:'',
//       mapPosition:{
//         lat:this.state.lat,
//         lng:this.state.lng
//       },
//       markerPosition:{
//         lat:this.state.lat,
//         lng:this.state.lng
//       }
//     }
//   }
//   /**
//   * Get the current address from the default map position and set those values in the state
//   */
//  componentDidMount() {
//   Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
//    response => {
//     const address = response.results[0].formatted_address,
//      addressArray =  response.results[0].address_components,
//      city = this.getCity( addressArray ),
//      area = this.getArea( addressArray ),
//      state = this.getState( addressArray );
  
//     console.log( 'city', city, area, state );
  
//     this.setState( {
//      address: ( address ) ? address : '',
//      area: ( area ) ? area : '',
//      city: ( city ) ? city : '',
//      state: ( state ) ? state : '',
//     } )
//    },
//    error => {
//     console.error(error);
//    }
//   );
//  };
// }
// export default Map;