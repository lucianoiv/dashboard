import React from "react";
import { TempDay } from "./TempDay";
import { HourTemp } from "./HourTemp";
import { Highlights } from "./Highlights";
import { useEffect, useState } from "react";
import { Transporte } from "./Transporte";

export const MainWeather = (props) => {
  const [weatherData, setweather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [mode, setMode] = useState("");

  const ciudad = props.elegir;
  const airQualityURL = props.aire;

  useEffect(() => {
    fetch(ciudad)
      .then((resp) => resp.json())
      .then((data) => {
        setweather(data);
        setMode("mode" + data.current.is_day);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, [ciudad]);

  useEffect(() => {
    fetch(airQualityURL)
      .then((resp) => resp.json())
      .then((data) => {
        setAirQuality(data);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, [airQualityURL]);

  const weather = weatherData;
  const calidadAire = airQuality;

  return (
    <div>
      {weather !== null && airQuality !== null ? (
        <div id={mode} className="wrapper">
          <TempDay
            weather={weather}
            name={props.nombre}
            country={props.country}
          />
          <section className="section_second">
            <HourTemp weather={weather} />
            <Highlights weather={weather} aire={calidadAire} />
          </section>
        </div>
      ) : (
        <div className="loading">
          <img src="https://i.gifer.com/ZKZg.gif" alt="loading"></img>
        </div>
      )}

      <Transporte mode={mode} />
    </div>
  );
};