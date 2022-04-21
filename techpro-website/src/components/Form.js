import React, { Component } from 'react';
import './Form.css';

const emailRegx = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}'~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formvalid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

export default class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      residence: null,
      dateOfBirth: null,
      phone: null,
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        residence: '',
        dateOfBirth: '',
        phone: '',
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formvalid(this.state)) {
      console.log(
        `==SUBMITTING IN PROCESS
            FIRST NAME: ${this.state.firstName}
            LAST NAME: ${this.state.lastName}
            EMAIL: ${this.state.email}
            PASSWORD: ${this.state.password}

        `
      );
    } else {
      console.error(`FORM INVALID: DISPLAY THE ERROR MESSAGE`);
    }
  };

  hanedleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'firstName':
        formErrors.firstName =
          value.length < 3 > 0 ? 'minimum of 3 characters required' : '';
        break;
      case 'lastName':
        formErrors.lastName =
          value.length < 3 > 0 ? 'minimum of 3 characters required' : '';
        break;
      case 'password':
        formErrors.password =
          value.length < 6 > 0 ? 'minimum of 6 characters required' : '';
        break;
      case 'email':
        formErrors.email =
          emailRegx.test(value) > 0 ? '' : 'invalid email address';
        break;
      case 'residence':
        formErrors.residence = value.length < 5 > 0 ? '' : 'invalid address';
        break;
      case 'phone':
        formErrors.phone =
          value.length < 10 > 0 ? 'minimum of 10 numbers required' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Join TechPro</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? 'error' : ''}
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={this.hanedleChange}
                noValidate
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? 'error' : ''}
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={this.hanedleChange}
                noValidate
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <input
                className={formErrors.dateOfBirth.length > 0 ? 'error' : ''}
                type="date"
                name="firstName"
                placeholder="DD-MM-YYYY"
                onChange={this.hanedleChange}
                noValidate
              />
              {formErrors.dateOfBirth.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="residence">Residence</label>
              <input
                className={formErrors.residence.length > 0 ? 'error' : ''}
                type="text"
                name="residence"
                placeholder="Residence"
                onChange={this.hanedleChange}
                noValidate
              />
              {formErrors.residence.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="firstName">
              <label htmlFor="firstName">Phone Number</label>
              <input
                className={formErrors.phone.length > 0 ? 'error' : ''}
                type="number"
                name="phone"
                placeholder="Phone"
                onChange={this.hanedleChange}
                noValidate
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input
                className={formErrors.email.length > 0 ? 'error' : ''}
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.hanedleChange}
                noValidate
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? 'error' : ''}
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.hanedleChange}
                noValidate
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Join Us</button>
              <small>Got an email? Follow the instructions</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
