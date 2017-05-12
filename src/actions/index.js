import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY = 'f6c5ee78468bf308b8b6bb625962e7ad';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
    
    
    