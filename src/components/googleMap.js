import React from "react"
import GoogleMapReact from "google-map-react"

const Marker = () => <div className="marker"></div>

const GoogleMap = ({ lat, lng, id }) => (
  <div className="mapa" key={id}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_KEY }}
      defaultCenter={[lat, lng]}
      defaultZoom={15}
    >
      <Marker lat={lat} lng={lng} />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
