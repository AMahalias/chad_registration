import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { WrongStore } from '../components/WrongStore';

export const ErrorDisconnectedPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/shopify');
    }, 5000);
  })

  return (
    <>
      <Sidebar />

      <WrongStore />
    </>
  )
};
