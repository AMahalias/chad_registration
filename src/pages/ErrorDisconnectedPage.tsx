import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { WrongStore } from '../components/WrongStore';

type Props = {
  setIsErrorDisconnected: React.Dispatch<React.SetStateAction<boolean>>;
};


export const ErrorDisconnectedPage: FC<Props> = ({ setIsErrorDisconnected }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsErrorDisconnected(true);
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
