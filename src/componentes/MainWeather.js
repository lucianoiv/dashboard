import React from 'react'
import { TempDay } from './TempDay'
import { HourTemp } from './HourTemp'
import { Highlights } from './Highlights'
import { useEffect, useState } from 'react';

export const MainWeather = () => {

  const [weatherData, setweather] = useState(null);

  useEffect(()=>{
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo')
    .then( resp => resp.json())
    .then( data => {
      //console.log(data); 
      setweather(data);})
    .catch( ex => { console.error(ex);})
  }, [])
    
  const weather = weatherData;

  return (
    <div>{weather !== null ?
        <div className='wrapper'>
              <TempDay weather={weather}/>
            <section className='section_second'>
                <HourTemp weather={weather}/>
                <Highlights weather={weather}/>
            </section>
        </div> : <div className='loading'><img src='https://i.gifer.com/ZKZg.gif'></img></div>}
    </div>
  )
}
