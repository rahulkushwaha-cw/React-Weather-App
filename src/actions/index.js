import axios from 'axios';
const API_KEY ='7d4b24bc7623ef1f1e610cdf565603c1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
