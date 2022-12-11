import React from 'react';
import './titleBlock.scss';

type Props = {
  title: string,
  text?: string,
};

export const TitleBlock: React.FC<Props> = ({ title, text }) => (
  <>
    <h1 className="titleBlock_title">{title}</h1>
    {text && (
      <p className="titleBlock_text">{text}</p>
    )}
  </>
);
