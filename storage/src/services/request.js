import axios from 'axios';

let instance = axios.create({
  baseURL: '',
  timeout: 10000,
});

export default instance;