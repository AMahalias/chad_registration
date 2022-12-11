import { FC } from 'react';
import './container.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Container:FC<Props> = ({ children }) => (
  <div className="container">
    <div className="container_block">
      { children }
    </div>
  </div>
);
