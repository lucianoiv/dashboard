import React from 'react'
import { TempDay } from './TempDay'
import { HourTemp } from './HourTemp'
import { Highlights } from './Highlights'
import { useEffect, useState } from 'react';
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'

export const MainWeather = (props) => {

  const [weatherData, setweather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const ciudad = props.elegir;
  const airQualityURL = props.aire;
  

  useEffect(()=>{
    fetch(ciudad)
    .then( resp => resp.json())
    .then( data => {
      setweather(data);})
    .catch( ex => { console.error(ex);})
  }, [ciudad])

  useEffect(()=>{
    fetch(airQualityURL)
    .then( resp => resp.json())
    .then( data => {
    setAirQuality(data);})
    .catch( ex => { console.error(ex);})
  }, [airQualityURL]);

    
  const weather = weatherData;
  const calidadAire = airQuality;
console.log(weather)


  return (
    <div>{weather !== null && airQuality !== null?
        <div className='wrapper'>
        
              <TempDay weather={weather} name={props.nombre}/>
            <section className='section_second'>
                <HourTemp weather={weather}/>
                <Highlights weather={weather} aire={calidadAire}/>
            </section>
        </div> : <div className='loading'><img src='https://i.gifer.com/ZKZg.gif' alt='loading'></img></div>}
        
        <div id="map">
        <MapContainer center={[-34.6131, -58.3772]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker Marker position={[-34.6131, -58.3772]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        </MapContainer>
        </div>

    </div>
  )
}
