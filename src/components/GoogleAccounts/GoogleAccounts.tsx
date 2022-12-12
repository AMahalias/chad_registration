import React from "react";
import './googleAccounts.scss';
import { users } from '../../texts/textForLists';
import { NavLink } from 'react-router-dom';

type Props = {
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
  getGoogleToken: () => Promise<void>;
};

export const GoogleAccounts: React.FC<Props> = ({ setSelectedUser, getGoogleToken }) => {
  const handlerClick = (email: string) => {
    getGoogleToken();
    setSelectedUser(email);
  };

  return(
    <div className="google_content">
      <div className="google_title">Choose an account</div>

      <div className="google_subtitle">
        to continue to 
        <span className='google_subtitle-link'> Chad</span>
      </div>

      <div className="google_accounts accounts">
        {users.map(({ name, email, id, color }) => (
          <NavLink to={'connection-gmail'} onClick={() => handlerClick(email)} key={id} className="accounts_block">
            <div className="accounts_avatar" style={{ backgroundColor: color }} />
            <div className="accounts_data">
              <div className="accounts_name">{name}</div>
              <div className="accounts_email">{email}</div>
            </div>
          </NavLink>
        ))}

        <div className="accounts_another">
          <div className="accounts_another-avatar" />
          
          Use another account
        </div>
      </div>

      <div className="accounts_info">
        To continue, Google will share your name, email address,
        language preference, and profile picture with Chad.
        Before using this app, you can review Chad's
        <span> privacy policy</span> and <span>terms of service</span>.
      </div>
    </div>
  );
}
