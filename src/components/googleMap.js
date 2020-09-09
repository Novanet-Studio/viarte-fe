import React from "react"
import GoogleMapReact from "google-map-react"

const isClient = typeof window !== "undefined"

const GoogleMap = ({ lat, lng, text }) => {
  return (
    <div style={{ width: "600px", height: "600px" }}>
      {isClient && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GATSBY_GOOGLE_MAPS_KEY,
          }}
          defaultCenter={[lat, lng]}
          defaultZoom={30}
        >
          <div lat={lat} lng={lng}>
            {text}
          </div>
        </GoogleMapReact>
      )}
    </div>
  )
}

export default GoogleMap