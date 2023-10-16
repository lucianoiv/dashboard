import React from 'react'
import { TempDay } from './TempDay'
import { HourTemp } from './HourTemp'
import { Highlights } from './Highlights'
import { useEffect, useState } from 'react';

export const MainWeather = (props) => {

  const [weatherData, setweather] = useState(null);

  const ciudad = props.elegir;
  console.log(ciudad);

  useEffect(()=>{
    fetch(ciudad)
    .then( resp => resp.json())
    .then( data => {
      setweather(data);})
    .catch( ex => { console.error(ex);})
  })
    
  const weather = weatherData;



  return (
    <div>{weather !== null ?
        <div className='wrapper'>
        
              <TempDay weather={weather} name={props.nombre}/>
            <section className='section_second'>
                <HourTemp weather={weather}/>
                <Highlights weather={weather}/>
            </section>
        </div> : <div className='loading'><img src='https://i.gifer.com/ZKZg.gif' alt='loading'></img></div>}
    </div>
  )
}
