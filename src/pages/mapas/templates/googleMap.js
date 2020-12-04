import React from "react"
import Img from "gatsby-image"
import GoogleMapReact from "google-map-react"

import "./googleMap.scss"

const InfoWindow = ({ title, address, image, show }) => (
  <div className={`infowindow infowindow--${show ? "show" : "hide"}`}>
    <div className="infowindow__body">
      <Img className="infowindow__img" fluid={image} />
      <div className="infowindow__contenido">
        <h4 className="infowindow__titulo">{title}</h4>
        <p className="infowindow__direccion">{address}</p>
      </div>
    </div>
  </div>
)

const Marker = ({ data = {}, showInfoWindow = false }) => (
  <div className="marker">
    {showInfoWindow && (
      <InfoWindow
        title={data.location}
        address={data.direction}
        image={data.imagen.childImageSharp.fluid}
        show={showInfoWindow}
      />
    )}
  </div>
)

const GoogleMap = ({
  lat,
  lng,
  markers = [],
  center = [0, 0],
  defaultZoom,
  showInfoWindow = false,
  ...props
}) => (
  <div {...props}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_KEY }}
      center={center}
      defaultZoom={defaultZoom}
    >
      {!markers.length ? (
        <Marker lat={lat} lng={lng} />
      ) : (
        markers.map((item) => (
          <Marker
            key={item.node.id}
            lat={item.node.lat}
            lng={item.node.lng}
            data={item.node}
            showInfoWindow={item.node.id === showInfoWindow}
          />
        ))
      )}
    </GoogleMapReact>
  </div>
)

export default GoogleMap
