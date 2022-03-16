import axios from 'axios';
import { LINK_MXH } from 'config/appUrl';

const apiClient = axios.create({
  baseURL: LINK_MXH,
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
