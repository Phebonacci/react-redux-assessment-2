import axios from 'axios';

const BASE_URL = 'http://newsapi.org/v2';
const API_KEY = '626529ce31144839ae520cdf7984d8cb';

const axiosForNewsApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

export default axiosForNewsApi;
