import "./App.css";
import "./css/weather-icons.css";
import { MainWeather } from "./componentes/MainWeather";
import { useState, useEffect } from "react";

function App() {
  // const cordoba = ['https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&minutely_15=rain&current=temperature_2m,is_day,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo', 'Cordoba', 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-31.4135&longitude=-64.181&hourly=pm10,uv_index&timezone=America%2FSao_Paulo'];

  // const catamarca = ['https://api.open-meteo.com/v1/forecast?latitude=-28.4696&longitude=-65.7852&minutely_15=rain&current=temperature_2m,is_day,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo', 'Catamarca', 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-28.4696&longitude=-65.7852&hourly=pm10,uv_index&timezone=America%2FSao_Paulo'];

  // const bsas = ['https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&minutely_15=rain&current=temperature_2m,is_day,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo', 'Buenos Aires','https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-34.6131&longitude=-58.3772&hourly=pm10,uv_index&timezone=America%2FSao_Paulo'];

  const [ciudad, setCiudad] = useState(null);
  const [calidadAire, setCalidadAire] = useState(null);
  const [elegir, setElegir] = useState(true);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [fetchCiudad, setFetchCiudad] = useState([]);
  const [submit, setSubmit] = useState("");
  // const [idElemento, setId] = useState("")
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [country, setCountry] = useState("");

  // const elegirCiudad = (eleccion) => {
  //   // setCiudad(eleccion[0]);
  //   // setName(eleccion[1]);
  //   // setCalidadAire(eleccion[2]);
  //   // setElegir(false);
  // }

  const setSearch = (text) => {
    if (fetchCiudad !== undefined) {
      setSubmit(text);
      setLatitude(fetchCiudad[0].latitude);
      setLongitude(fetchCiudad[0].longitude);
      setTimeZone(fetchCiudad[0].timezone);
      setName(fetchCiudad[0].name);
      setCountry(fetchCiudad[0].country);
    } else {
      setSubmit("");
    }
  };

  function Elegir(event) {
    setElegir(false);
    setCiudad(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&minutely_15=rain&current=temperature_2m,is_day,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=${timeZone}`
    );

    setCalidadAire(
      `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=pm10,uv_index&timezone=${timeZone}`
    );
  }

  useEffect(() => {
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${text}&count=1&language=es&format=json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFetchCiudad(data.results);
      })

      .catch((ex) => {
        console.error(ex);
      });

    return function CleanUp() {
      setFetchCiudad([]);
      setSubmit("");
      console.log("CleanUp");
      //se ejecuta justo antes del proximo useEffect
    };
  }, [text, elegir]);

  return (
    <div className="App">
      {elegir ? (
        <div className="ciudad">
          <div>
            <input
              type="text"
              placeholder="Elige otra ciudad..."
              onChange={(event) => setText(event.target.value)}
            ></input>
            <br></br>
            <br></br>
            <input
              type="button"
              value="Buscar"
              onClick={() => setSearch(text)}
            ></input>
            {/* <p>previsualizar</p> */}
            {submit === "" ? (
              <>
                <label htmlFor="selectCiudad">CARGANDO...</label>

                <select id="selectCiudad">
                  <option value="{e.id}">CARGANDO...</option>
                </select>
              </>
            ) : (
              <>
                <label htmlFor="selectCiudad">ELEGIR PAIS</label>

                <select id="selectCiudad" onChange={Elegir}>
                  <option value="">Elegir Pais</option>
                  {fetchCiudad.map((e) => (
                    <option value={e.name}>{e.country}</option>
                  ))}
                </select>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <input
            type="button"
            value="CAMBIAR CIUDAD"
            onClick={() => setElegir(true)}
            className="boton_elegir"
          ></input>
          <MainWeather
            elegir={ciudad}
            nombre={name}
            aire={calidadAire}
            latitude={latitude}
            longitude={longitude}
            timezone={timeZone}
            country={country}
          />
        </>
      )}
    </div>
  );
}

export default App;