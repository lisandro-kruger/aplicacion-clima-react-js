### Proyecto de Aplicación del Clima
Este proyecto es una aplicación del clima que utiliza la API de OpenWeatherMap para obtener datos del clima en tiempo real.

### Estructura del Proyecto
El proyecto consta de varios archivos que se encargan de diferentes aspectos de la aplicación:

### fetchClima.js
Este archivo contiene la función fetchClima, que se encarga de hacer una solicitud a la API de OpenWeatherMap y devolver los datos del clima para una ciudad específica.

const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "0ae2df9282af9d7014a81edb8b104f1c";

export const fetchClima = async (ciudad) => {
  try {
    const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ocurrió el siguiente problema: ", error);
  }
};

### useClima.js
Este archivo contiene el hook personalizado useClima, que se encarga de manejar el estado de la aplicación y la lógica para hacer solicitudes a la API de OpenWeatherMap.

import { useState } from "react";
import { fetchClima } from "./fetchClima";

export const useClima = () => {
  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) {
      fetchClima(ciudad).then((data) => setDataClima(data));
    }
  };

  return { ciudad, dataClima, handleCambioCiudad, handleSubmit };
};

### ClimaApp.js
Este archivo contiene el componente principal ClimaApp, que se encarga de renderizar la interfaz de usuario y manejar la interacción del usuario con la aplicación.

import { useClima } from "./Hook/useClima";

export const ClimaApp = () => {
  const difKelvin = 273.15;

  const { ciudad, dataClima, handleCambioCiudad, handleSubmit } = useClima ()

  return (
    <div className="container">
      <h1>Aplicación del Clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="me-2"
          type="text"
          value={ciudad}
          onChange={handleCambioCiudad}
        />
        <button type="submit">Buscar</button>
      </form>
      {dataClima && (
        <div>
          <h2>{dataClima.name}</h2>
          <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}ºC</p>
          <p>Condición meteorológica: {dataClima.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
          />
        </div>
      )}
    </div>
  );
};

### index.js
Este archivo es el punto de entrada de la aplicación. Se encarga de renderizar el componente ClimaApp en el DOM.

import React from "react";
import ReactDOM from "react-dom/client";
import {ClimaApp}  from "./ClimaApp";
import './Estilos/estilos.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClimaApp/>
  </React.StrictMode>
);

### Estilos
Los estilos de la aplicación se encuentran en el archivo estilos.css en la carpeta Estilos.
