import Axios from 'axios';
import { API_KEY, BACKEND_URL } from './config';

export const apiClient = Axios.create({
  baseURL: `${BACKEND_URL}/api`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'auth-token': API_KEY,
  },
});
