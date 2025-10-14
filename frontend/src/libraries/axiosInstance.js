import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend server URL
//   timeout: 10000, // Optional timeout
  headers: { 'Content-Type': 'application/json' },
});

export default instance;