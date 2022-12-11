import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorDisconnectedPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/shopify');
    }, 5000);
  })

  return (
    <div className="container error_container">
      <div className="error_logo"></div>
      <p className="error_text">Disconnecting store...</p>
    </div> 
  )
};
