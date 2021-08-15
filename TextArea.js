import React from 'react'

const TextArea = ( {id, label, className, errorTextArea, error , ...restProps}) =>{
  return (
    <div 
      className={`textarea ${className}`.trim()}
    >
      <label label htmlFor={id}>{label}</label>
      <textarea className={errorTextArea} {...restProps} />
      <span className="text-danger">{error}</span>
    </div>
  )

}

export default TextArea;