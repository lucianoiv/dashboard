import React from 'react'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import { DatosTransporte } from './DatosTransporte.js'

export const Transporte = () => {


    //const latitude = DatosTransporte.map((e) => e.latitude);
    //const longitude = DatosTransporte.map((e) => e.longitude);
    
//console.log(DatosTransporte.map((e) => e.latitude))
//console.log(DatosTransporte.map((e) => e.longitude))
//let latitude = DatosTransporte[0].latitude;
//let longitude = DatosTransporte[0].longitude;

/*for (let i = 0; i < DatosTransporte.length; i++){
  latitude = DatosTransporte[i].latitude;
  longitude = DatosTransporte[i].longitude;
  console.log(latitude+longitude);
}*/
  return (
    <div id="map">
          <MapContainer center={[-34.6131, -58.3772]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <ul>
            {DatosTransporte.map(e => (<li key={DatosTransporte.id}>
                <Marker Marker position={[e.latitude, e.longitude]}>
                  <Popup>
                    {e.route_short_name}<br />{e.trip_headsign}.
                  </Popup>
                </Marker>
            </li>))
            }
            </ul>
          </MapContainer>
          
      </div>
    )
  
  
}
