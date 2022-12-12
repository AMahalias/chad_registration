import React from 'react';
import { createUser } from '../api/register';
import { GoogleConnection } from '../components/GoogleConnection';
import { GoogleContainer } from '../components/GoogleContainer';

type Props = {
  selectedUser: string;
};

export const GoogleConnectionPage: React.FC<Props> = ({ selectedUser }) => {
  const dataFromStorage = (value: string) => {
    const saved = localStorage.getItem(value);

    return saved || '';
  }

  const name = dataFromStorage('name');
  const email = dataFromStorage('email');
  const password = dataFromStorage('password');
  const shop_token = dataFromStorage('shop_token');
  const google_token = dataFromStorage('google_token');

  const sendUserData = async() => {
    try {
      await createUser(name, email, password, shop_token, google_token);
    } catch (error) {
      throw new Error('We cannot create this user')
    }
  };

  return (
    <GoogleContainer>
      <GoogleConnection selectedUser={selectedUser} sendUserData={sendUserData} />
    </GoogleContainer>
  );
};
