import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '98a52cecacfc4b80b79c7102d72c0998',
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  };

  get = (slug: string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + slug)
      .then(res => res.data);
  };
}

export default ApiClient;
