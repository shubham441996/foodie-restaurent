import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 51.5118,
      lng: 0.1232
    },
    zoom: 11
  };

  render() {
    const mapOptions = {
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [
            {
              lightness: "-100"
            },
            {
              color: "#ffdac9"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffcab1"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffcab1"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              lightness: 100
            },
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              lightness: 700
            }
          ]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#92e1dd"
            }
          ]
        }
      ]
    };
    const AnyReactComponent = ({ text }) => (
      <div className="image_loactor">
        <img
          src={require("./../../assets/images/location-icon@2x.png")}
          className=""
        />
      </div>
    );
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }} id="map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          defaultOptions={{
            styles: mapOptions.styles
          }}
        >
          <AnyReactComponent lat={51.5118} lng={0.1232} />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
