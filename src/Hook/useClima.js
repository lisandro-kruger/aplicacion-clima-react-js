// useClima.js
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
