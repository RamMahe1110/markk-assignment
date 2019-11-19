import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Map.css";

const mapStyles = {
  width: "50%",
  height: "200px",
  margin: "auto"
};

class MapContainer extends React.Component {
  state = {};
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBfiCnSkRC6zDcPo4O9TqsQNlouMMAA6a0"
})(MapContainer);
