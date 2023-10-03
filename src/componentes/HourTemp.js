import React from 'react'
import { Chart as ChartJS} from 'chart.js/auto'; //importar auto para que funcione
import { Line } from 'react-chartjs-2';


export const HourTemp = () => {

  const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], //eje horizontal, cada punto o barra
    datasets: [
      {
        label: 'Pronóstico por Hora',
        data: [20,21,21,25,28,29,30,32,33,34,35,35,35,30,28,26,22,20,19,18,17,16,15,18,19], //eje vertical, datos
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        
      },
    ],
  };
  
  return (
    <div className='section_hours'>
        
        <Line data={data} options={{maintainAspectRatio:false}}/>
      
    </div>
  )
}
