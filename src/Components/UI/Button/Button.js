import React from 'react';
import './Button.scss';

const Button = props => {
  const cls = [
    'button',
    [props.className]
  ]

  return (
    <div>
      <button
      className={cls.join(' ')}
      type={props.type}
      >{props.text}</button>
    </div>
  )
}
export default Button;