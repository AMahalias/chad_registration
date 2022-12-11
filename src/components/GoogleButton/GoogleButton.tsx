import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const GoogleButton: FC = () => (
  <>
    <NavLink to={'connect-gmail'} className="button_google">
      Connect Gmail account
    </NavLink>

    <NavLink to={'/not-gmail'} className="button_not-google">
      I don't use Gmail
    </NavLink>
  </>
);
