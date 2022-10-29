import React from 'react';

const Button = ({inner, ...props}) => {
  return (
    <button {...props}>{inner}</button>
  )
}

export default Button