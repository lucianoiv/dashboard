import './App.css';
import './css/weather-icons.css'
import { MainWeather } from './componentes/MainWeather';
import { data } from './componentes/Practico1'

//import { SmallTransportDashboard } from './componentes/SmallTransportDashboard';
//import { SmallWeatherDashboard } from './componentes/SmallWeatherDashboard';

function App() {

  console.log("linea 11"+data.latitude)
  console.log("linea 12"+data.longitude)


  return (
    <div className="App">
      <MainWeather/>
    </div>
  );
}

export default App;