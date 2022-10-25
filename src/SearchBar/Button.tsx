import React from 'react';
import './Button.scss';

interface IProps {
  text: string;
}

export default function Button({ text }: IProps) {
  return (
    <a href="#" className="c-btn c-btn--primary">
      {text}
    </a>
  );
}
