import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { getCountries, postUser } from './api';
import { connect } from 'react-redux';
import Number from './Components/Number'
import Country from './Components/Country'
import { setCountries, handleChange, validationInput, sendForm } from './redux/store'

class App extends Component {
  async componentDidMount() {
    const { setCountries } = this.props;
    const countries = await getCountries();
    setCountries(countries);
  }
  render() {
    const { handleChange, validationInput, warning, sendForm, isSigned } = this.props;
    return (
      isSigned ? (
        <div className="message">
          <h3>Great</h3>
          <p>your account has been successfully created.</p>
        </div>
      ) : (
          <form className="form" onSubmit={sendForm}>
            <h2>Sigh up</h2>
            <p className="description">Name</p>
            <input
              type="text"
              name="userName"
              onChange={(event) => handleChange(event.target)}
              onBlur={(event) => validationInput(event.target)}
              placeholder="Name"
              required
            />
            <Number />
            <input
              type="email"
              name="userEmail"
              onChange={(event) => handleChange(event.target)}
              onBlur={(event) => validationInput(event.target)}
              placeholder="Email address"
              required
            />
            <Country />
            <p className="description">Password</p>
            <input
              type="password"
              name="userPassword"
              onChange={(event) => handleChange(event.target)}
              onBlur={(event) => validationInput(event.target)}
              placeholder=""
              required
            />
            <p className="description">Password confirmation</p>
            <input
              type="password"
              name="passwordConfirm"
              onChange={(event) => handleChange(event.target)}
              onBlur={(event) => validationInput(event.target)}
              placeholder=""
              required
            />
            <p className="warning">{warning}</p>
            <p className="text"><input type="checkbox" name="subscribe" name="subscribe" />
              <label htmlFor="subscribe">Yes, I'd like to recieve the very occasional email with information on new services and discounts</label></p>
            <input type="submit" value="create an account" className="btn" />
            <p className="text">Already have a 24Slides account? Click here to log in to your existing account and join a company team</p>
          </form>
        )
    )
  }
}

const mapState = (state) => {
  return {
    warning: state.warning,
    signed: state.signed,
  };
};

const mapDispatch = (dispatch) => ({
  setCountries: (countries) => dispatch(setCountries(countries)),
  handleChange: (currentInfo) => dispatch(handleChange(currentInfo)),
  validationInput: (currentInput) => dispatch(validationInput(currentInput)),
  sendForm: (event) => dispatch(sendForm(event)),
});

export default hot(module)(connect(mapState, mapDispatch)(App));