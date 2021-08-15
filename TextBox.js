import React from 'react'

const TextBox = ({type, name, value, changed, placeholder, error}) => {
  return (
    <div className="master-form-group">
      <input  
      type={type} 
      name={name} 
      value={value} 
      onChange={changed}              
      placeholder={placeholder} 
      className={"master-input " + (error ? 'master-input-error' : '')} />
      <span className="text-danger">{error}</span>
    </div>
  )
}

export default TextBox