import React from 'react'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
// import { DatosTransporte } from './DatosTransporte.js'
import { useEffect, useState } from 'react';

export const Transporte = () => {

  const [transporte, setTransporte] = useState(null)
  const [linea, setLinea] = useState("1467")
  
useEffect(()=>{
              fetch(`https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${linea}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`)
              .then( resp => resp.json())
              .then( data => {
                setTransporte(data)})
              .catch((ex) => {
                  console.error('Error fetching data:', ex);
                 });
                 console.log("render fetch")
             }, []);

function HandleSelect(event){
  setLinea(event.target.value)
}

console.log(linea)
console.log(transporte)


  return (
    <>
      <label htmlFor="linea">LINEA:</label>

        <select id="linea" onChange={HandleSelect}>
          <option value="1467">1467</option>
          <option value="1468">1468</option>
          <option value="839">839</option>
          <option value="1465">1465</option>
          <option value="1703">1703</option>
          <option value="315">315</option>
          <option value="316">316</option>
        </select>
        <p>{linea}</p>
    <div id="map">
          {transporte !== null?
          <MapContainer center={[-34.6131, -58.3772]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {/* <ul>
            {transporte.map(e => <li key={transporte.id}> */}
                {linea == "[]" ? "": <Marker Marker position={[transporte[0].latitude, transporte[0].longitude]}>
                  <Popup>
                    {transporte[0].route_short_name}<br />{transporte[0].trip_headsign}.
                  </Popup>
                </Marker>}
            {/* </li>)
            }
            </ul> */}
          </MapContainer>
          : <div className='loading'><img src='https://i.gifer.com/ZKZg.gif' alt='loading'></img></div>}
      </div>
    </>
    )
  
  
}

























// https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=38e20173b1574a90a9134ffbcc9aea68&client_secret=2d74d93DE8F84cAAaA424007B651A17E