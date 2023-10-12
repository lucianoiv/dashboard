import React from 'react'
import { data } from './Practico1'

export const Highlights = () => {

    const wind_speed = data.current_weather.windspeed
    const precipitation = data.hourly.precipitation_probability[0]
    const sunrise_time = data.daily.sunrise[0].slice(11,16);
    const sunset_time = data.daily.sunset[0].slice(11,16);
    const uv_index = data.daily.uv_index_max[0];
    const visibility = data.hourly.visibility[0];

    let isday;
    let text_isday;
    

    if (data.current_weather.is_day){
        isday = 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg'
        text_isday = 'DIA'
    } else {
        isday = 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg'
        text_isday = 'NOCHE'
    }

  return (
    <>
        <div className='highlights'>
        <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index.svg' style={{width:50, heigth:50}} alt='icon'></img>
            <p >INDICE UV <strong>{uv_index}</strong></p>
        </div>
        <div className='highlights'>
        <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg' style={{width:50, heigth:50}} alt='icon'></img>
            <p>VIENTO <strong>{wind_speed}</strong> km/h</p>
        </div>
        <div className='highlights'>
            <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg' style={{width:35}} alt='icon'></img>
            <p>AMANECER <strong>{sunrise_time}</strong></p><br></br>
            <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg' style={{width:35}} alt='icon'></img>
            <p>ANOCHECER <strong>{sunset_time}</strong></p>
        </div>
        <div className='highlights'>
        <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg' style={{width:50, heigth:50}} alt='icon'></img>
            <p>HUMEDAD <strong>{precipitation}</strong>%</p>
        </div>
        <div className='highlights'>
        <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rainbow-clear.svg' style={{width:50, heigth:50}} alt='icon'></img>
            <p>VISIBILIDAD <strong>{visibility}</strong>M</p>
        </div>
        <div className='highlights'>
        <img src={isday} style={{width:50, heigth:50}} alt='icon'></img>
            <p>{text_isday}</p>
        </div>
    </>
  )
}
