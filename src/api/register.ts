import { User } from '../types/User';
import { client } from '../utils/fetch';

export const createUser = (
  name: string, 
  email: string, 
  password: string, 
  shop_token: string,
  google_token: string,
) => {
  return client.post<User>('/register', {
    name,
    email,
    password,
    shop_token,
    google_token,
  });
};
