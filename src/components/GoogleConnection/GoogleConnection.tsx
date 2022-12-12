import React from 'react';

type Props = {
  selectedUser: string;
  sendUserData: () => Promise<void>;
}

export const GoogleConnection: React.FC<Props> = ({ selectedUser, sendUserData }) => {
  return (
    <div className="connection">
      <div className="connection_title">
        <span>Chad</span> wants to access your Google Account
      </div>

      <div className="connection_user">{selectedUser}</div>

      <div className="connection_container">
        <div className="connection_container-rules rules">
          <div className="rules title">
            This will allow <span>Chad</span> to:
          </div>

          <div className="rules_list">
            <div className="rules_list-item">
              Send email on your behalf
            </div>

            <div className="rules_list-item">
              Read, compose and send emails from your Gmail account
            </div>
          </div>

          <div className="rules title">
            Make sure that you trust Chad
          </div>

          <div className="rules_list">
            You may be sharing sensitive info with this site or app. You can always see or remove access in your Google Account.
            <br />
            Learn how Google helps you share data safely.
            <br />
            See Chad&#39;s privacy policy and Terms of Service.
          </div>
        </div>

        <div className='rules_button'>Close</div>
        <div className='rules_button' onClick={sendUserData}>Allow</div>
      </div>
    </div>
  );
};
