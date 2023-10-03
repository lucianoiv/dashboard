import React from 'react'
//import { DataApi } from './DataApi.json'
import { TempDay } from './TempDay'
import { HourTemp } from './HourTemp'
import { Highlights } from './Highlights'

export const MainWeather = () => {


    

  return (
    <div>
        <div className='wrapper'>
            
            <TempDay/>
            
            <section className='section_second'>
                <HourTemp/>
                <Highlights/>
            </section>
        </div>
    </div>
  )
}
