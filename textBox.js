const Input = ({type, name, value, changed, placeholder, className, error}) => {
  <div className="master-form-group">
    <input  type={type} 
    name={name} 
    value={value} 
    onChange={changed}              
    placeholder={placeholder} 
    className={className} />
    <span className="text-danger">{error}</span>
  </div>
}

export default Input