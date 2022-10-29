import React from 'react';

const Button = ({inner, ...props}) => {
  return (
    <button {...props}>{props.children}</button>
  )
}

export default Button