import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './loadingPage.scss';

export const LoadingPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => (
      navigate('connect-shopify')
    ), 5000)
  });

  return (
    <div className="loadingPage">Connecting to Shopify...</div>
  );
};
