import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { DatosTransporte } from './DatosTransporte.js'
import { useEffect, useState } from "react";

export const Transporte = () => {

  const [transporte, setTransporte] = useState(null);
  const [linea, setLinea] = useState("1467");
  const Lista = DatosTransporte.sort((a, b) => a.route_id - b.route_id);



  useEffect(() => {

    // setTransporte(null)

    fetch(
      `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${linea}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`)
       
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })

      
      .then((data) => {
        // if (!data.ok) {
        //   throw new Error(`Error de servidor: Código ${data.status}`);
        // }
        
        setTransporte(data)
        
        
        ;
      })
      
      
      .catch((ex) => {
        console.error("Error fetching data:", ex);
      });
      
    console.log("render fetch");
    
  }, [linea]);


  // console.log(transporte)

// if (!response.ok) {
//                 throw new Error(`Error de servidor: Código ${response.status}`);
//             }
 

  function HandleSelect(event) {
    setLinea(event.target.value);
  }


  return (
    <>
      <label htmlFor="linea">LINEA:</label>
      <select id="linea" onChange={HandleSelect}>
        {Lista.map(e => <option value={e.route_id}>{e.route_id}</option>)}
      </select>
      <p className="linea">{linea}</p>
      <div id="map">
        
          <MapContainer
            center={[-34.6131, -58.3772]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {transporte === null? "":<ul>
            {transporte.map(e => <li key={e.id}>
              <Marker
                Marker
                position={[e.latitude, e.longitude]}
              >
                <Popup key={e.id}>
                  {e.route_short_name}
                  <br />
                  {e.trip_headsign}.
                </Popup>
              </Marker>
            
            </li>)
            }
            </ul>
            }
            </MapContainer>
        
           
      </div>
    </>
  );
};

// https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=38e20173b1574a90a9134ffbcc9aea68&client_secret=2d74d93DE8F84cAAaA424007B651A17E


// transportData.map((item, index) => {
//   return (<Marker key={item["id"] || index} position={[item["latitude"], item["longitude"]]}>
//       <Popup>
//           <>Ruta: {[item["route_id"]]}</>
//           <br></br>
//           <>{[item["trip_headsign"]]}</>
//           <br></br>
//           <>Línea: {[item["route_short_name"]]}</>