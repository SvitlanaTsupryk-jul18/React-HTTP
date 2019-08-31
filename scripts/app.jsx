import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { getCountries, postUser } from './api';
import { connect } from 'react-redux';
import Number from './Components/Number'
import Country from './Components/Country'
import { SET_COUNTRIRES, SET_INFO, VAL_INPUT, SEND_FORM } from './redux/store'

class App extends Component {
  async componentDidMount() {
    const { setCountries } = this.props;
    const countries = await getCountries();
    setCountries(countries);
  }
  render() {
    const { handleChange, validationInput, warning } = this.props;
    return (
      <form className="form" onSubmit={postUser}>
        <h2>Sigh up</h2>
        <p className="description">Name</p>
        <input
          type="text"
          name="userName"
          onChange={(event) => handleChange(event.target)}
          onBlur={(event) => validationInput(event.target)}
          placeholder="Name"
        // required 
        />
        <Number />
        <input
          type="email"
          name="userEmail"
          onChange={(event) => handleChange(event.target)}
          onBlur={(event) => validationInput(event.target)}
          placeholder="Email address"
        // required 
        />
        <Country />
        <p className="description">Password</p>
        <input
          type="password"
          name="userPassword"
          onChange={(event) => handleChange(event.target)}
          onBlur={(event) => validationInput(event.target)}
          placeholder=""
        // required 
        />
        <p className="description">Password confirmation</p>
        <input
          type="password"
          name="passwordConfirm"
          onChange={(event) => handleChange(event.target)}
          onBlur={(event) => validationInput(event.target)}
          placeholder=""
        // required 
        />
        <p className="warning">{warning}</p>
        <input type="checkbox" name="subscribe" name="subscribe" />
        <label htmlFor="subscribe">Horns</label>
        <input type="submit" value="Отправить" />
      </form>
    )
  }
}

const mapState = (state) => {
  return {
    warning: state.warning,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setCountries: (countries) => dispatch({ type: SET_COUNTRIRES, countries: countries }),
    sendForm: () => dispatch({ type: SEND_FORM, target: event.target }),
    handleChange: (currentInfo) => dispatch({ type: SET_INFO, currentInfo: currentInfo }),
    validationInput: (currentInput) => dispatch({ type: VAL_INPUT, currentInput: currentInput }),
  };

};
// const mapDispatch = (dispatch) => {
//   return {
//     setCountries: (countries) => {
//       const action = setCountries(countries);
//       dispatch(action);
//     }
//   };
// };


export default hot(module)(connect(mapState, mapDispatch)(App));