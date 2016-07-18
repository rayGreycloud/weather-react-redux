import axios from "axios";
const API_KEY = 'd51b7c7531536df8b94bf1b025311b4a';
var units = 'units=imperial';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&${units}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
