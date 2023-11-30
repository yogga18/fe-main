import axios, { AxiosInstance } from 'axios';

const jswToken: string = 'ini jwt';

interface ApiInstanceConfig {
  baseURL: string;
  //   timeout: number
  headers: {
    Authorization: string;
    'Content-Type': string;
  };
}

const apiInstanceConfig: ApiInstanceConfig = {
  baseURL: 'https',
  // timeout: 8000,
  headers: {
    Authorization: `Bearer ${jswToken}`,
    'Content-Type': 'application/json',
  },
};

const apiInstance: AxiosInstance = axios.create(apiInstanceConfig);

export default apiInstance;
