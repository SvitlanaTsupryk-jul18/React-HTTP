import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { getCountries, postUser } from './api';
import { connect } from 'react-redux';
import Number from './Components/Number'
import Country from './Components/Country'


class App extends Component {
  async componentDidMount() {
    const { setCountries } = this.props;
    const countries = await getCountries();
    setCountries(countries);
  }
  render() {
    const { handleChange } = this.props;
    return (
      <form className="form" onSubmit={postUser}>
        <h2>Sigh up</h2>
        <p>Name</p>
        <input
          type="text"
          name="userName"
          onChange={(event) => handleChange(event.target)}
          placeholder="Name" />
        <Number />
        <input
          type="email"
          name="userEmail"
          onChange={(event) => handleChange(event.target)}
          placeholder="Email address" />
        <Country />
        <p>Password</p>
        <input
          type="password"
          name="userPassword"
          onChange={(event) => handleChange(event.target)}
          placeholder="" />
        <p>Password confirmation</p>
        <input
          type="password"
          name="passwordConfirm"
          onChange={(event) => handleChange(event.target)}
          placeholder="" />
        <input type="checkbox" name="subscribe" name="subscribe" />
        <label htmlFor="subscribe">Horns</label>
        <input type="submit" value="Отправить" />
      </form>
    )
  }
}

// const mapState = (state) => {
//   return {
//     countries: state.countries,
//   };
// };
const mapDispatch = (dispatch) => {
  return {
    setCountries: (countries) => dispatch({ type: 'SET_COUNTRIRES', countries: countries }),
    handleChange: (currentInfo) => dispatch({ type: 'SET_INFO', currentInfo: currentInfo }),
  };
};


export default hot(module)(connect(null, mapDispatch)(App));