import React from 'react';
import { GoogleContainer } from '../components/GoogleContainer';

import { GoogleAccounts } from '../components/GoogleAccounts';

type Props = {
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
  getGoogleToken: () => Promise<void>;
};

export const ConnectedGooglePage: React.FC<Props> = ({ setSelectedUser, getGoogleToken }) => {
  return (
    <div className="gmail_background">
      <GoogleContainer>
        <GoogleAccounts setSelectedUser={setSelectedUser} getGoogleToken={getGoogleToken} />
      </GoogleContainer>
    </div>
  );
};
