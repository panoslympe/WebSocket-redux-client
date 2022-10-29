import React from 'react'

const Input = ({id, label, type, placeholder, onchange, ...props}) => {
  return (<>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} name={id} placeholder={placeholder} onChange={onchange} {...props}/>
    </>
  )
}

export default Input