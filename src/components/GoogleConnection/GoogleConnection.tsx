import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUser } from '../../api/register';
import { users } from '../../texts/textForLists';
import './googleConnection.scss';

type Props = {
  selectedUser: string;
}

export const GoogleConnection: React.FC<Props> = ({ selectedUser }) => {
  const name = localStorage.name;
  const email = localStorage.email;
  const password = localStorage.password;
  const shop_token = localStorage.shop_token;
  const google_token = localStorage.google_token;
  
  const foundUser = users.find(user => user.email === selectedUser);

  const sendUserData = async() => {
    try {
      await createUser(name, email, password, shop_token, google_token);
    } catch (error) {
      throw new Error('We cannot create this user')
    }
  };

  return (
    <div className="connection">
      <div className="connection_title">
        <span>Chad</span> wants to access your 
        <br/> 
        Google Account
      </div>

      <div className="connection_user">
        <div className="connection_user-avatar" style={{ backgroundColor: foundUser?.color }} />{selectedUser}
      </div>

      <div className="connection_container">
        <div className="connection_container-rules rules">
          <div className="rules_title">
            This will allow <span>Chad</span> to:
          </div>

          <div className="rules_list">
            <div className="rules_list-item">
              <div className="rules_list-icon--1" />
                Send email on your behalf
              <div className="rules_list-icon--end rules_list-icon--end-1" />
            </div>

            <div className="rules_list-item">
              <div className="rules_list-icon--2" />
                Read, compose and send emails from your Gmail account
              <div className="rules_list-icon--end" />
            </div>
          </div>

          <div className="rules_title">
            Make sure that you trust Chad
          </div>

          <div className="rules_list">
            <p>
              You may be sharing sensitive info with this site or app. 
              You can always see or remove access in your <span>Google Account.</span>
            </p>
           
            <p>
              Learn how Google helps you <span>share data safely</span>.
            </p>
            <p>
              See <span>had&#39;s privacy policy</span> and
              <span> Terms of Service</span>.
            </p>
          </div>
        </div>

        <div className="rules_buttons">
          <div className='rules_button'>Close</div>

          <NavLink to={'loadingGoogle'} className='rules_button' onClick={sendUserData}>Allow</NavLink>
        </div>
      </div>
    </div>
  );
};
