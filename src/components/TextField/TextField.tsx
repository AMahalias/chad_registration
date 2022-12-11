import classNames from 'classnames';
import React, { useState } from 'react';
import { getRandomDigits } from '../../utils/fetch';
import './textField.scss';

type Props = {
  isValidate?: boolean,
  name: string,
  label?: string,
  type?: string,
  placeholder: string,
  value: string,
  onChange?: (newValue: string) => void,
  required?: boolean,
  setIsValidated?: React.Dispatch<React.SetStateAction<boolean>>,
  isTouched?: boolean,
};

export const TextField: React.FC<Props> = ({
  isValidate,
  name,
  label = name,
  type = "text",
  placeholder,
  value,
  onChange = () => {},
  required = false,
  setIsValidated,
  isTouched,
}) => {
  const [id] = useState(() => `${name}-${getRandomDigits()}`);
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const hasError = !isValidate && required && !value.length && isTouched;
  const hoverPlaceholder = () => {
    if (label === 'Password') {
      return placeholder = 'M£g@Ch@d!22';
    }
  };

  console.log(isActive)
  
  return (
    <div className="field">
      <label className="field_label" htmlFor={id}>
        {label}
      </label>

      <div className="control">
        <input
          id={id}
          className={classNames('field_input input' , {value}, {
            'is-danger': hasError && !isActive,
          })}
          type={(!isHidden && label === 'Password') ? 'text' : type}
          placeholder={(isActive) ? '' : placeholder}
          value={value}
          onChange={event => {
            onChange(event.target.value);
            setIsValidated && setIsValidated(true);
          }}
          onClick={() => setIsActive(true)}
          onInput={hoverPlaceholder}
          onBlur={() => setIsActive(false)}
        />
        {label === 'Password' && (
          <div className={classNames('field_icon', { 'open': value.length && isHidden })} onClick={() => setIsHidden(!isHidden)} />
        )}
      </div>

      {hasError && !isActive && isTouched ? (
        <p className="help is-danger">This field cannot be empty</p> 
      ) : ''}
    </div>
  );
};
