import React from 'react';
import Button from './Button';

function ButtonList() {
  const buttons = [];
  for (let i = 1; i <= 30; i++) {
    buttons.push(<Button key={i} name={`Button ${i}`} />);
  }
  return <div>{buttons}</div>;
}

export default ButtonList;
