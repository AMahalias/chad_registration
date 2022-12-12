import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './googleButton.scss';

export const GoogleButton: FC = () => (
  <>
    <div className="button_block">
      <div className="button_icon" />
      <NavLink to={'connect-gmail'} className="button_google">
        Connect Gmail account
      </NavLink>
    </div>

    <NavLink to={'/not-gmail'} className="button_not-google">
      I don't use Gmail
    </NavLink>
  </>
);
