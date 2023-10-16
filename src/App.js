import './App.css';
import './css/weather-icons.css'
import { MainWeather } from './componentes/MainWeather';
import { useState } from 'react';

function App() {

  const cordoba = ['https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,is_day,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo', 'Cordoba'];
  const catamarca = ['https://api.open-meteo.com/v1/forecast?latitude=-28.4696&longitude=-65.7852&current=temperature_2m,is_day,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo', 'Catamarca'];
  const bsas = ['https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,is_day,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo', 'Buenos Aires'];

const [ciudad, setCiudad] = useState(null);
const [elegir, setElegir] = useState(true);
const [name, setName] = useState("")


const elegirCiudad = (eleccion) => {
  setCiudad(eleccion[0]);
  setName(eleccion[1])
  setElegir(false);
}

  return (
    <div className="App">
      {elegir?<div className='ciudad' >
        <img src='https://img.freepik.com/vector-premium/mapa-isometrico-3d-catamarca-es-provincia-argentina_97886-7392.jpg' onClick={()=>elegirCiudad(catamarca)}></img>
        <img src='https://img.freepik.com/vector-premium/mapa-isometrico-3d-cordoba-es-provincia-argentina_97886-7402.jpg' onClick={()=>elegirCiudad(cordoba)}></img>
        <img src='https://img.freepik.com/vector-premium/mapa-isometrico-3d-buenos-aires-es-provincia-argentina_97886-7388.jpg' onClick={()=>elegirCiudad(bsas)}></img>
      </div>:
      <>
      <input type='button' value='CAMBIAR CIUDAD' onClick={()=>setElegir(true)} className='boton_elegir'></input>
      <MainWeather elegir={ciudad} nombre={name}/></>}
    </div>
  );
}

export default App;