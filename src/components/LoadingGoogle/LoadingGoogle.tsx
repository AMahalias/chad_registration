import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <svg className="loading_spinner" viewBox="0 0 50 50">
        <circle className="loading_path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
      <div className="loading_text">
        One moment please...
      </div>
    </div>
  );
};
