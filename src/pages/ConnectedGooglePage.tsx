import React from 'react';
import { GoogleContainer } from '../components/GoogleContainer';
import { users } from '../texts/textForLists';
import { NavLink } from 'react-router-dom';

type Props = {
  getGoogleToken: () => Promise<void>;
};

export const ConnectedGooglePage: React.FC<Props> = ({ getGoogleToken }) => {
  return (
    <div className="gmail_background">
      <GoogleContainer>
        <div className="google_content">
          <div className="google_title">Choose an account</div>

          <div className="google_subtitle">
            to continue to 
            <span className='google_subtitle-link'>Chad</span>
          </div>

          <div className="google_accounts accounts">
            {users.map(({ name, email, id, color }) => (
              <NavLink to={'connection-gmail'} onClick={getGoogleToken}>
                <div className="accounts_avatar" key={id} />
                <div className="accounts_data">
                  <div className="accounts_name">{name}</div>
                  <div className="accounts_email">{email}</div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </GoogleContainer>
    </div>
  );
};
