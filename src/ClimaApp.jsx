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
