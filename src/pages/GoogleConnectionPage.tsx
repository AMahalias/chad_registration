import React from 'react';
import { GoogleConnection } from '../components/GoogleConnection';
import { GoogleContainer } from '../components/GoogleContainer';

type Props = {
  selectedUser: string;
};

export const GoogleConnectionPage: React.FC<Props> = ({ selectedUser }) => {
  return (
    <GoogleContainer>
      <GoogleConnection selectedUser={selectedUser} />
    </GoogleContainer>
  );
};
