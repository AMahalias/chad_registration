import { FC } from 'react';
import './errorShopify.scss';

export const ErrorShopify: FC = () => (
  <div className="error">
    Chad couldn&#39;t connect to your Shopify account. Please try again.
    <i className="error_close">x</i>
  </div>
);
