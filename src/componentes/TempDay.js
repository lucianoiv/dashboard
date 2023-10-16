import React from 'react'


export const TempDay = (props) => {

let current_temp = props.weather.current.temperature_2m;
let min_temp = props.weather.daily.temperature_2m_min[0];
let max_temp = props.weather.daily.temperature_2m_max[0];
let currentTime = props.weather.current.time.split("T");
let current_date = currentTime[0].split("-");
let date = current_date.reverse();





  return (
    <section className='section_first'>
        <div className='temperature'>
            <h1>{date.join("-")} {currentTime[1]}</h1><br></br>
            <h1>{props.name}</h1><br></br>
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
