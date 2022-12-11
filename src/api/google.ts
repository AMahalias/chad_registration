import { client } from '../utils/fetch';

export const getGoogle = () => {
  return client.get(`/google`);
};
