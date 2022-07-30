import { Marker, Popup, useMapEvents } from 'react-leaflet';
import React, { useState } from 'react'; 

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      dblclick() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

export default LocationMarker;