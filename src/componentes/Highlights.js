import React from 'react';

export const Highlights = (props) => {

    const wind_speed = props.weather.current.windspeed_10m;
    const precipitation = props.weather.hourly.precipitation_probability[0];
    const sunrise_time = props.weather.daily.sunrise[0].slice(11,16);
    const sunset_time = props.weather.daily.sunset[0].slice(11,16);
    const uv_index = props.weather.daily.uv_index_max[0];
    const currentTime = props.weather.current.time.slice(11,13);
    const aire = props.aire.hourly.pm10[currentTime];

    let isday;
    let text_isday;
    let indiceUV;
    let airQualityIndex;

    if (aire <= 20){
        airQualityIndex = 'Buena';        
    } else if (aire <= 40){
        airQualityIndex = 'Regular';
    } else if (aire <= 50){
        airQualityIndex = 'Mala';
    } else if (aire <= 100){
        airQualityIndex = 'Muy Mala'
    } else if (aire > 100){
        airQualityIndex = 'Dañina'
    }
    
    //const visibility = (weather.hourly.visibility[0] / 1000);
    

    if (uv_index <= 2.9){
        indiceUV = 'Bajo'
    } else if (uv_index >= 3 || uv_index <= 5.9){
        indiceUV = 'Moderado'
    } else if (uv_index >= 6 || uv_index <= 7.9){
        indiceUV = 'Alto'
    } else if (uv_index >= 8 || uv_index <= 10.9){
        indiceUV = 'Muy Alto'
    } else if (uv_index >= 11){
        indiceUV = 'Extremo'
    };
    

    if (props.weather.current.is_day !== 0){
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
            <p >Max. UV hoy: <strong>{indiceUV}</strong></p>
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
        <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg' style={{width:50}} alt='icon'></img>
            <p>HUMEDAD <strong>{precipitation}</strong>%</p>
        </div>
        <div className='highlights'>
        <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pollen.svg' style={{width:40}} alt='icon'></img>
            <p>Calidad del aire: <strong>{airQualityIndex}</strong></p>
        </div>
        <div className='highlights'>
        <img src={isday} style={{width:50, heigth:50}} alt='icon'></img>
            <p>{text_isday}</p>
        </div>
    </>
  )
}
