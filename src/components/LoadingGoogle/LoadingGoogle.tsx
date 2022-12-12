import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner';
import './loadingGoogle.scss';

export const LoadingGoogle: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('done');
    }, 5000)
  }, [navigate]);

  return (
    <div className="loading_background">
      <TailSpin
        height="80"
        width="80"
        color="#4285F4"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
      <div className="loading_text">
        One moment please...
      </div>
    </div>
  );
};
