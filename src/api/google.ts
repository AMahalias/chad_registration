import { Google } from '../types/Google';
import { client } from '../utils/fetch';

export const getGoogle = () => {
  return client.get<Google>(`/google`);
};
