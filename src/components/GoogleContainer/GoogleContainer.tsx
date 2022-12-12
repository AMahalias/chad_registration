import React from 'react';
import './googleContainer.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const GoogleContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="google_background">
        <div className="google_header">
          <div className="google_icon" />
          Sign in with Google
        </div>
        {children}
      </div>

      <div className="google_inform">
        <div className="google_inform-lang">
          {`English (United States)`}
        </div>
        <div className="google_inform-buttons">
          <div className="google_inform-button">Help</div>
          <div className="google_inform-button">Privacy</div>
          <div className="google_inform-button">Terms</div>
        </div>
      </div>
    </>
  );
};
