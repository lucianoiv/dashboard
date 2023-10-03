import React from 'react'

export const TempDay = () => {
  return (
    <section className='section_first'>
        <div className='temperature'>
            <h1>HOY</h1>
            <h1>Catamarca</h1>
            <img src='https://picsum.photos/50' alt='dummy'></img>
            <h2><strong className='wi wi-day-sunny'>32</strong>°C</h2>
        </div>

        <div className='min_max'>
            <section className='minTemp'>
                <h2><strong>14</strong>°C</h2>
                <h4 className='wi wi-thermometer-exterior'>MINIMA</h4>
            </section>
            <section className='maxTemp'>
                <h2><strong>32</strong>°C</h2>
                <h4 className='wi wi-thermometer'>MAXIMA</h4>
            </section>
        </div>
    </section>
  )
}
