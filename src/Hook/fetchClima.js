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
