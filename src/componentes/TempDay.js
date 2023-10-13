import React from 'react'
import { data } from './Practico1'


export const TempDay = ({weather}) => {

let current_temp = weather.current.temperature_2m;
let min_temp = weather.daily.temperature_2m_min[0];
let max_temp = weather.daily.temperature_2m_max[0];

console.log(weather);
console.log(weather.current.temperature_2m);

  return (
    <section className='section_first'>
        <div className='temperature'>
            <h1>HOY</h1>
            <h1>Cordoba</h1>
            <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg' style={{width:50, heigth:50}} alt='dummy'></img>
            <h2><strong>{current_temp}</strong>°C</h2>
        </div>

        <div className='min_max'>
            <section className='minTemp'>
                <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg' style={{width:50, heigth:50}} alt='icon'></img>
                <h2><strong>{min_temp}</strong>°C</h2>
                <h4>MINIMA</h4>
            </section>
            <section className='maxTemp'>
                <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-warmer.svg' style={{width:50, heigth:50}} alt='icon'></img>
                <h2><strong>{max_temp}</strong>°C</h2>
                <h4>MAXIMA</h4>
            </section>
        </div>
    </section>
  )
}
