import axios from 'axios';
import {API_KEY, API_URL} from '@env';

export const ApiInit = () => {
  return axios.create({
    baseURL: API_URL,
    headers: {Authorization: 'Apikey ' + API_KEY},
  });
};
