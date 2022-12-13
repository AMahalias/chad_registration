import { FC } from 'react';
import './errorDisconnected.scss';

export const ErrorDisconnected: FC = () => (
  <div className="error-disconnect">
    [Smiling raccoon]
    <br />
    has been disconnected.
    <i className="error-disconnect_close">x</i>
  </div>
);
