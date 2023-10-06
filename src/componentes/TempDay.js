import React from 'react'

export const TempDay = () => {
  return (
    <section className='section_first'>
        <div className='temperature'>
            <h1>HOY</h1>
            <h1>Catamarca</h1>
            <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg' style={{width:50, heigth:50}} alt='dummy'></img>
            <h2><strong>32</strong>°C</h2>
        </div>

        <div className='min_max'>
            <section className='minTemp'>
                <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg' style={{width:50, heigth:50}} alt='icon'></img>
                <h2><strong>14</strong>°C</h2>
                <h4 className='wi wi-thermometer-exterior'>MINIMA</h4>
            </section>
            <section className='maxTemp'>
                <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-warmer.svg' style={{width:50, heigth:50}} alt='icon'></img>
                <h2><strong>32</strong>°C</h2>
                <h4>MAXIMA</h4>
            </section>
        </div>
    </section>
  )
}
