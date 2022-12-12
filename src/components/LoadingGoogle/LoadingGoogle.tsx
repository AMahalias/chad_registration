import { FC } from 'react';
import './loadingGoogle.scss';

export const LoadingGoogle: FC = () => (
  <div className="loading_background">
    <div className="loading_icon" />
    <div className="loading_text">
      One moment please...
    </div>
  </div>
);
