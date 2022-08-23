import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: 'http://192.168.0.12:8000/',
  // baseURL: 'http://localhost:8000/',
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://hanamaru-hub.herokuapp.com/'
      : 'http://192.168.0.12:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createAxiosTokenInstance = () => {
  const axiosTokenInstance = axios.create({
    // baseURL: 'http://192.168.0.12:8000/',
    // baseURL: 'http://localhost:8000/',
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://hanamaru-hub.herokuapp.com/'
        : 'http://192.168.0.12:8000',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return axiosTokenInstance;
};
