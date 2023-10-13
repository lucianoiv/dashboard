import React from 'react'
import { data } from './Practico1'

export const Highlights = ({weather}) => {

    const wind_speed = weather.current.windspeed_10m;
    const precipitation = weather.hourly.precipitation_probability[0];
    const sunrise_time = weather.daily.sunrise[0].slice(11,16);
    const sunset_time = weather.daily.sunset[0].slice(11,16);
    const uv_index = weather.daily.uv_index_max[0];
    const visibility = (weather.hourly.visibility[0] / 1000);

    let isday;
    let text_isday;
    

    if (weather.current.is_day !== 0){
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
            <p>VISIBILIDAD <strong>{visibility}</strong> Km</p>
        </div>
        <div className='highlights'>
        <img src={isday} style={{width:50, heigth:50}} alt='icon'></img>
            <p>{text_isday}</p>
        </div>
    </>
  )
}
