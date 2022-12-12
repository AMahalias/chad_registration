import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './button.scss';

type Props = {
  buttonLink: string;
  buttonOnClick?: () => {} ;
  buttonTitle: string;
  underButtonText?: string;
  underButtonLink: string;
  underButtonTitle: string;
  underButtonOnClick?: () => {};
};

export const Button: FC<Props> = ({ 
  buttonLink, 
  buttonOnClick, 
  buttonTitle,
  underButtonText, 
  underButtonLink,
  underButtonTitle, 
  underButtonOnClick,
}) => {
  return (
    <>
      <NavLink to={buttonLink} className="button" onClick={buttonOnClick}>
        {buttonTitle}
      </NavLink>

      <span className="underButton_text">
        {underButtonText}

        <NavLink to={underButtonLink} className="underButton_link" onClick={underButtonOnClick}>
          {underButtonTitle}
        </NavLink>
      </span>
    </>
  );
};
