import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import '../../styles/customStyles.scss';
import { TitleBlock } from '../TitleBlock';
import './signupForm.scss';
import { TextField } from '../TextField';
import { signupText } from '../../texts/textsForMainTitles';

type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const SignupForm: React.FC<Props> = ({ name, setName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsTouched(true);

    if (!email || !name || !password) {
      setIsValidated(false);
      return;
    } else {
      setIsLoading(true);
      setIsValidated(true);
      // createNewUser();
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      setTimeout(() => {
        navigate('/shopify');
      }, 2000);
    }
  };

  console.log(localStorage);

  return (
    <>
      <TitleBlock title={signupText.title} text={signupText.paragraph}/>

      <form className="form" onSubmit={handleSubmit}>
        <TextField
          isValidate={isValidated}
          name="email"
          label="Email"
          type="email"
          placeholder="megachad@trychad.com"
          value={email}
          onChange={(event) => {
            setEmail(event);
          }}
          required
          setIsValidated={setIsValidated}
          isTouched={isTouched}
        />

        <TextField
          isValidate={isValidated}
          name="name"
          label="Your name"
          placeholder="Mega Chad"
          value={name}
          onChange={(event) => {
            setName(event);
          }}
          required
          setIsValidated={setIsValidated}
          isTouched={isTouched}
        />

        <TextField
          isValidate={isValidated}
          name="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => {
            setPassword(event);
          }}
          required
          setIsValidated={setIsValidated}
          isTouched={isTouched}
        />

        <button type="submit" className={classNames('button', 'signupbtn', { 'is-loading': isLoading })}>
          Create account
        </button>

        <p className="login_text">
          Already have an account? 

          <a className='login_text-link' href='/'>Login</a>
        </p>
      </form>
    </>
  );
};
