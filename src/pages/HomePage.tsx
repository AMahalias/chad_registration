import React from 'react';
import { SignupForm } from '../components/SignupForm';
import { Logo } from '../components/Logo';
import { Container } from '../components/Container';
import { Sidebar } from '../components/Sidebar';

type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const HomePage: React.FC<Props> = ({ name, setName }) => {
  return (
    <>
      <Sidebar />

      <Container>
        <Logo />

        <SignupForm 
          name={name}
          setName={setName} 
        />
      </Container>
    </>
  );
}
