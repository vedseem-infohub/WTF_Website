import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust base URL if needed based on your backend configuration
});

export default API;
