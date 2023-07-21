import axios from 'axios';

export const COUNTRIES_API = axios.create({
    baseURL: `${process.env.REACT_APP_API}`,
    timeout: 15000,
    headers: {
      'Content-type': 'application/json'
    }
});