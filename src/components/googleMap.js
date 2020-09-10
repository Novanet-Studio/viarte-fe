import React from "react"
import GoogleMapReact from "google-map-react"

const Marker = ({ name }) => <div className="marker" title={name}> {name}</div>


const GoogleMap = ({ lat, lng, id }) => (
  <div key={id} style={{ width: "600px", height: "600px" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_KEY }}
      defaultCenter={[lat, lng]}
      defaultZoom={15}
    >
      <Marker 
      lat={lat}
      lng={lng}
      name="Marcador"
      />
    </GoogleMapReact> 
  </div>
)

export default GoogleMap
