import React from 'react'
import { Chart as ChartJS} from 'chart.js/auto'; //importar auto para que funcione
import { Line } from 'react-chartjs-2';


export const HourTemp = ({weather}) => {

const hourly_temp = weather.hourly.temperature_2m; //array de temperatura


  const chart = {
    labels: ["hs 0",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], //eje horizontal, cada punto o barra
    datasets: [
      {
        label: 'Pronóstico por Hora',
        data: hourly_temp, //eje vertical, datos
        borderColor: '#0a8bf5',
        backgroundColor: '#0a8bf5',
        
      },
    ],
  };
  
  return (
    <div className='section_hours'>
        
        <Line data={chart} options={{maintainAspectRatio:false}}/>
      
    </div>
  )
}
