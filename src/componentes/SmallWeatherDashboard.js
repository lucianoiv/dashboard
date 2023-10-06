import React from 'react'

export const SmallWeatherDashboard = () => {
  return (
    <div >
      <header className="weather_api">
        <h1 className='text'>
          HOY
        </h1>
        <h2 className='ciudad'>Catamarca</h2>
        <section className='main_temp'>
          <img src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg' alt='imagen'></img>
          <h2 className='data'><strong>32</strong>°C</h2>
        </section>
        
        <p>Soleado</p>
        
        <section className='small_'>
            <div>
              <p className='text'>LUNES</p>
              <img src='https://picsum.photos/50' alt='imagen'></img>
              <p className='data'>30°C</p>
            </div>
            <div>
              <p className='text'>MARTES</p>
              <img src='https://picsum.photos/50' alt='imagen'></img>
              <p className='data'>30°C</p>
            </div>
            <div>
              <p className='text'>MIERCOLES</p>
              <img src='https://picsum.photos/50' alt='imagen'></img>
              <p className='data'>30°C</p>
            </div>
        </section>
      </header>
    </div>
  )
}
