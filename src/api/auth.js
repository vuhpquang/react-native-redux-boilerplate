import ApiConfig from 'config/api-config';
import { apiClient } from './client';

export const loginUser = (phone, password) => {
  return apiClient.post(ApiConfig.LOGIN, { phone, password });
};
