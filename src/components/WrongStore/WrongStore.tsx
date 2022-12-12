import { FC } from 'react';
import './wrongStore.scss';

export const WrongStore: FC = () => {
  return (
    <div className="error_background">
      <div className="error_container">
        <div className="error_logo"></div>
        <p className="error_text">Disconnecting store...</p>
      </div> 
    </div>
  )
};
