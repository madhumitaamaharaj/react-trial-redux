import React from 'react';
import { useDispatch } from 'react-redux';

function Button(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'BUTTON_CLICKED', payload: { buttonName: props.name } });
  };

  return <button onClick={handleClick}>{props.name}</button>;
}

export default Button;
