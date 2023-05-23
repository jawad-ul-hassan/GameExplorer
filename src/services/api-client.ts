import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '98a52cecacfc4b80b79c7102d72c0998',
  },
});
