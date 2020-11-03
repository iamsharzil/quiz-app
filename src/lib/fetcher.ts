import { apiClient } from '../config/apiClient';

export const fetcher = async (url: string, method: 'GET' | 'POST') => {
  const res = await apiClient({ url, method });
  const data = await res.data;

  return data;
};
