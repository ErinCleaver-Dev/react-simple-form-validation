import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      fields: {
                firstName : "",
                lastName : "",
                emailAddress : "",
                password: "",
                gender: '',
                address: "",
            },
            errors: {
                firstName : '',
                lastName : "",
                emailAddress : '',
                password: '',
                gender: '',
                address: "",
            }
    };
  }

  
    validate = (name, value) => {
        switch (name) {
            case "firstName":
                if (!value) {
                    return "First name is Required";
                } else if(!value.match(/^[a-zA-Z]+$/g)){
                    return "Please enter valid first name";
                } else {
                    return "";
                }
            case "lastName":
                if (!value) {
                    return "Last name is Required";
                } else if(!value.match(/^[a-zA-Z]+$/g)){
                    return "Please enter valid last name";
                } else {
                    return "";
                }
            case "address":
                if (!value) {
                    return "Address is Required";
                } else if(!value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/)){
                    return "Please enter valid Address";
                } else {
                    return "";
                }
            case "emailAddress":
                if (!value) {
                return "Email is Required";
                } else if (
                !value.match(/^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/i)
                ) {
                return "Enter a valid email address";
                } else {
                return "";
                }
            case "password":
                if (!value) {
                return "Password is Required";
                } else if (value.length < 8 || value.length > 15) {
                return "Please fill at least 8 character";
                } else if (!value.match(/[a-z]/g)) {
                return "Please enter at least lower character.";
                } else if (!value.match(/[A-Z]/g)) {
                return "Please enter at least upper character.";
                } else if (!value.match(/[0-9]/g)) {
                return "Please enter at least one digit.";
                } else {
                return "";
                }
            case "gender": 
            if (!value) {
                    return "gender is Required";
                } else {
                    return "";
                }
            default: {
                return "";
            }
        }
    }

    handleUserInput = e => {
        this.setState({
          errors: {
            ...this.state.errors,
            [e.target.name]: this.validate(e.target.name, e.target.value)
          },
          fields: {
            ...this.state.fields,
            [e.target.name]: e.target.value
          }
        });
      };
    
    handleSubmit = e => {
        const { fields , error } = this.state;
        e.preventDefault();
        let validationErrors = {};
        Object.keys(fields).forEach(name => {
            const error = this.validate(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }            
        });
        if (Object.keys(validationErrors).length > 0) {
            this.setState({ errors: validationErrors });
            return;
        }
        if (fields.firstName && 
            fields.emailAddress && 
            fields.password && 
            fields.address &&
            fields.lastName &&
            fields.gender
            ) {
            const data = {
            firstName: fields.firstName,
            email: fields.emailAddress,
            password: fields.password,
            lastName: fields.lastName,
            address: fields.address,
            gender: fields.gender
            };
            window.alert("subit success", JSON.stringify(data));
            console.log("----data----", data);
        }
    };

  render() {

    const { fields, errors } = this.state;  
    return (
      <div>
        <Hello name={this.state.name} />

 <div className="master-login-section">
                            <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <div className="master-form-group">
                            <input  type="text" name="firstName" value={fields.firstName} onChange={event => this.handleUserInput(event)}              placeholder="First Name" className={"master-input " + (errors.firstName ? 'master-input-error' : '')} />
                                <span className="text-danger">{errors.firstName}</span>
                            </div>

                            <div className="master-form-group">
                            <input  type="text" name="lastName" value={fields.lastName} onChange={event => this.handleUserInput(event)}              placeholder="Last Name" className={"master-input " + (errors.lastName ? 'master-input-error' : '')} />
                                <span className="text-danger">{errors.lastName}</span>
                            </div>
                            <div className="master-form-group">
                                <input type="text" placeholder="Enter email address" name="emailAddress" value={fields.emailAddress} onChange={event => this.handleUserInput(event)} className={"master-input " + (errors.emailAddress ? 'master-input-error' : '')} />
                                <span className="text-danger">{errors.emailAddress}</span>
                            </div>
                            <div className="master-form-group">
                                <input type="text" 
                                placeholder="Address" 
                                name="address" 
                                value={fields.address} 
                                onChange={event => this.handleUserInput(event)} className={"master-input " + (errors.address ? 'master-input-error' : '')} />
                                <span className="text-danger">{errors.address}</span>
                            </div>

                            <div className="master-form-group">
                                <label htmlFor="gender">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={fields.gender}
                                    onChange={this.handleUserInput}
                                    className={"master-input " + (errors.gender ? 'master-input-error' : '')} 
                                >
                                    <option value="">Please select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <span className="text-danger">{errors.gender}</span>
                            </div>


                            <div className="master-form-group">
                                <input type="password" placeholder="Enter password" name="password" value={fields.password} onChange={event => this.handleUserInput(event)} className={"master-input " + (errors.password ? 'master-input-error' : '')} />
                                <span className="text-danger">{errors.password}</span>
                            </div>

                            <div className="master-form-group master-center">
                                <button className="master-submit-btn">Register now</button>
                            </div>
                            </form>
                        </div>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
