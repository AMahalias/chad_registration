import { Shopify } from '../types/Shopify';
import { client } from '../utils/fetch';

export const getShopify = (name: string) => {
  return client.get<Shopify>(`/shopify?name=${name}`);
};
